<template>
  <div class="calc-raid general-conainer" ref="containerRef">
    <div class="inner general-inner">
      <Anchor class="general-anchor" :anchor-params="anchorParams"></Anchor>
      <div class="title-1" id="buffCheck">BUFF检查</div>
      <div class="mt-9">点击天赋分支以选择队伍成员</div>
      <div class="class-container mt-9">
        <div class="class-col" v-for="(item, index) of [[0,1,2],[3,4,5],[6,7,8],[9,10,11],[12,13,14],[15,16,17],[18,19,20],[21,22,23,24],[25,26,27],[28,29,30]]" :style="item.length===4?'postion:relative;margin-top:-47px':''">
          <template v-for="classIdx of item">
            <el-popover :width="260">
              <div v-show="classList[classIdx].passive.length">默认提供: <span v-for="passiveIdx of classList[classIdx].passive" class="mr-9">{{ buffList[passiveIdx].name }}</span></div>
              <div v-show="Object.keys(classList[classIdx].conflict).length">可开启: <span v-for="conflictIdx of Object.keys(classList[classIdx].conflict)" class="mr-9">{{ buffList[conflictIdx].name }}</span></div>
              <template #reference>
                <div class="class-item" :class="`class-border-${index}`" @click="addMem(classList[classIdx], classIdx, index)">
                  {{ classList[classIdx].name }}
                  <span v-if="classList[classIdx].count">({{ classList[classIdx].count }})</span>
                </div>
              </template>
            </el-popover>
          </template>
        </div>
      </div>
      <div class="mb-9">
        结果预览(将鼠标移动到BUFF名上可以查看详情)
      </div>
      <div class="mb-9">
        <el-button type="primary" @click="handleSort">排序</el-button>
        <el-popconfirm title="确认清空？" @confirm="confirmReset">
          <template #reference>
            <el-button type="danger" class="ml-9">清空</el-button>
          </template>
        </el-popconfirm>
        (<el-icon style="color: rgb(24, 180, 24)"><Select /></el-icon>表示需要此BUFF且团队提供, <el-icon style="color: red"><Close /></el-icon>表示需要此BUFF但团队不提供, - 表示不需要此BUFF, <span class="clr-o">*</span> 表示团队无此BUFF但有队员可开启, 红色表示需求该BUFF)
      </div>
      <div class="buff-res-container">
        <div class="buff-list">
          <div class="item-box" style="border-top: 1px solid white;">buff / 人员<span v-show="group.length">({{ group.length }})</span></div>
          <div class="item-box" v-for="(buffItem, buffIdx) of buffList">
            <el-popover
              placement="right"
              title="本效果可由以下职业提供："
              :width="260"
            >
              <span v-for="classItem of classList" style="padding: 0 3px;" v-show="classItem.passive.includes(buffIdx)||classItem.conflict[buffIdx]">{{ classItem.name }}</span>
              <div v-if="buffItem.desc" style="color: red">*注：{{ buffItem.desc }}</div>
              <template #reference>
                <span :style="required(buffIdx)?'color: red':''">{{ buffItem.name }}<span v-show="ableToEnable(buffIdx)" class="clr-o"> *</span></span>
              </template>
            </el-popover>
          </div>
        </div>
        <div class="mem-list">
          <div class="mem-detail" v-for="(mem, idx) of group">
            <div class="item-box" style="border-top: 1px solid white;">
              <span :class="`color-${mem.classI}`">{{ mem.name }}</span>
              <span v-if="mem.role==='t'">(T)</span><span v-if="mem.role==='h'">(奶)</span>
              <el-popconfirm title="是否移除该成员？" width="200px" @confirm="removeMem(idx)">
                <template #reference>
                  <el-icon style="color: red;cursor: pointer;"><Delete /></el-icon>
                </template>
              </el-popconfirm>
            </div>
            <div class="item-box" v-for="(buffItem, buffIdx) of buffListRes">
              <div v-if="!mem.require.includes(buffIdx)">-</div>
              <div v-else-if="buffItem.enabled"><el-icon style="color: rgb(24, 180, 24)"><Select /></el-icon></div>
              <div v-else-if="!buffItem.enabled"><el-icon style="color: red"><Close /></el-icon></div>
              <div v-else>?</div>
              <el-popconfirm v-if="mem.conflict[buffIdx] && !mem.provide.includes(buffIdx)" :title="(mem.conflict[buffIdx]?.length ? `该buff与${(mem.conflict[buffIdx].map(i => {return buffList[i].name})).join('、')}冲突，` : '') + '是否开启?'" width="400px" @confirm="confirmOpen(mem, buffIdx)">
                <template #reference>
                  <el-button type="success" v-show="mem.conflict[buffIdx] && !mem.provide.includes(buffIdx)" link>开启</el-button>
                </template>
              </el-popconfirm>
              <el-button type="danger" link v-show="mem.conflict[buffIdx] && mem.provide.includes(buffIdx)" @click="confirmClose(mem, buffIdx)">关闭</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import utils from '@/utils'
import Anchor from '@/components/Anchor.vue'
import { ElMessage } from 'element-plus'

const containerRef = ref(null)
const anchorParams = ref({
  anchorAttr: {
    container: containerRef
  },
  children: [
    { href: '#buffCheck', title: 'BUFF检查' },
  ]
})

const group = reactive([])
const addMem = (classItem, classIdx, classI) => {
  if (group.length === 10) {
    ElMessage({
      message: '队伍人数已满',
      type: 'error',
    })
    return;
  }
  group.push({
    id: classItem.id,
    name: classItem.name,
    role: classItem.role,
    require: classItem.require,
    passive: classItem.passive,
    provide: [],
    conflict: classItem.conflict,
    desc: classItem.desc,
    classIdx, classI
  })
  classList[classIdx].count++
  processBuff()
}
const removeMem = (idx) => {
  classList[group[idx].classIdx].count--
  group.splice(idx, 1)
  processBuff()
}

const processBuff = () => {
  buffListRes.value = buffList.map((i) => { return {...i, enabled: false} })
  for (const mem of group) {
    for (const passive of mem.passive) {
      buffListRes.value[passive].enabled = true
    }
    for (const provide of mem.provide) {
      buffListRes.value[provide].enabled = true
    }
  }
}
const confirmOpen = (mem, buffIdx) => {
  for (const conflict of mem.conflict[buffIdx]) {
    const idx = mem.provide.indexOf(conflict)
    mem.provide.splice(idx, 1)
  }
  mem.provide.push(buffIdx)
  if (mem.id.includes('pal-') && (buffIdx === 6 || buffIdx === 18)) {
    mem.provide.push(24 - buffIdx)
  }
  processBuff()
}
const confirmClose = (mem, buffIdx) => {
  const idx = mem.provide.indexOf(buffIdx)
  mem.provide.splice(idx, 1)
  if (mem.id.includes('pal-') && (buffIdx === 6 || buffIdx === 18)) {
    const idx2 = mem.provide.indexOf(24 - buffIdx)
    mem.provide.splice(idx2, 1)
  }
  processBuff()
}
const handleSort = () => {
  group.sort((a, b) => {return a.role > b.role ? -1 : 1})
}
const confirmReset = () => {
  group.splice(0, group.length)
  for (const item of classList) {
    item.count = 0
  }
}

const buffList = [
  { name: '嗜血 / 英勇', desc: '兽王猎由熔岩犬提供' }, { name: '5%全属性', desc: '兽王猎由页岩蜘蛛提供' }, { name: '3%全伤害', desc: '' }, { name: '5%暴击', desc: '元素萨德天赋元素之誓按描述只提供法术暴击；猎人由狼提供' },
  { name: '力量敏捷', desc: '猎人由猫提供' }, { name: '4%物理易伤', desc: '猎人由掠夺者提供' }, { name: '攻强', desc: '近战20% 远程10%' }, { name: '12%破甲', desc: '猎人由迅猛龙提供' },
  { name: '10%攻速', desc: '' }, { name: '30%流血伤害', desc: '猎人由鬣狗提供' }, { name: '10%法强', desc: '法师和非元素德萨满只能提供6%' }, { name: '5%法术急速', desc: '' },
  { name: '8%法术易伤', desc: '猎人由风蛇提供' }, { name: '5%法术易爆', desc: '' }, { name: '耐力', desc: '猎人由异种虫提供' }, { name: '护甲', desc: '' },
  { name: '-10%物理受伤', desc: '' }, { name: '团队回蓝', desc: '每10秒回复1%' }, { name: '5秒回蓝', desc: '' },
]
const buffListRes = ref([])
const classList = [
  { id: 'warr-1', name: '武器战', role: 'd1', require: [0,1,2,3,4,5,6,7,8,9,14,15,16], passive: [5, 9], conflict: {4: [14], 14: [4], 7: []}, desc: '', count: 0 },
  { id: 'warr-2', name: '狂暴战', role: 'd1', require: [0,1,2,3,4,5,6,7,8,9,14,15,16], passive: [3], conflict: {4: [14], 14: [4], 7: []}, desc: '', count: 0 },
  { id: 'warr-3', name: '防战', role: 't', require: [0,1,2,3,4,5,6,7,8,9,14,15,16], passive: [7], conflict: {4: [14], 14: [4]}, desc: '', count: 0 },
  { id: 'prie-1', name: '神牧', role: 'h', require: [0,1,2,3,10,11,14,15,16,17,18], passive: [14, 16], conflict: {}, desc: '', count: 0 },
  { id: 'prie-2', name: '戒牧', role: 'h', require: [0,1,2,3,10,11,14,15,16,17,18], passive: [14, 16], conflict: {}, desc: '', count: 0 },
  { id: 'prie-3', name: '暗牧', role: 'd2', require: [0,1,2,3,10,11,12,13,14,15,16,17,18], passive: [11, 14], conflict: {}, desc: '', count: 0 },
  { id: 'prie-1', name: '奥法', role: 'd2', require: [0,1,2,3,10,11,12,13,14,15,16,17,18], passive: [0, 2, 10], conflict: {}, desc: '全局法强为6%', count: 0 },
  { id: 'prie-2', name: '火法', role: 'd2', require: [0,1,2,3,10,11,12,13,14,15,16,17,18], passive: [0, 10, 13], conflict: {}, desc: '全局法强为6%', count: 0 },
  { id: 'prie-3', name: '冰法', role: 'd2', require: [0,1,2,3,10,11,12,13,14,15,16,17,18], passive: [0, 10, 17], conflict: {}, desc: '全局法强为6%', count: 0 },
  { id: 'warl-1', name: '痛苦术', role: 'd2', require: [0,1,2,3,10,11,12,13,14,15,16,17,18], passive: [12, 13, 18], conflict: {}, desc: '', count: 0 },
  { id: 'warl-2', name: '恶魔术', role: 'd2', require: [0,1,2,3,10,11,12,13,14,15,16,17,18], passive: [10, 12, 13], conflict: {}, desc: '', count: 0 },
  { id: 'warl-3', name: '毁灭术', role: 'd2', require: [0,1,2,3,10,11,12,13,14,15,16,17,18], passive: [12, 13, 14, 17], conflict: {}, desc: '', count: 0 },
  { id: 'ro-1', name: '刺杀贼', role: 'd1', require: [0,1,2,3,4,5,6,7,8,9,12,13,14,15,16], passive: [12], conflict: {7: []}, desc: '上破甲对输出影响较大', count: 0 },
  { id: 'ro-2', name: '战斗贼', role: 'd1', require: [0,1,2,3,4,5,6,7,8,9,14,15,16], passive: [5], conflict:  {7: []}, desc: '上破甲对输出影响较大', count: 0 },
  { id: 'ro-3', name: '敏锐贼', role: 'd1', require: [0,1,2,3,4,5,6,7,8,9,14,15,16], passive: [3], conflict:  {7: [], 9: []}, desc: '上破甲对输出影响较大', count: 0 },
  { id: 'pal-1', name: '奶骑', role: 'h', require: [0,1,2,3,10,11,14,15,16,17,18], passive: [], conflict: {1: [6, 18], 6: [1], 18: [1], 15: []}, desc: '', count: 0 },
  { id: 'pal-2', name: '防骑', role: 't', require: [0,1,2,3,4,5,6,7,8,14,15,16,17,18], passive: [], conflict: {1: [6, 18], 6: [1], 18: [1], 15: []}, desc: '', count: 0 },
  { id: 'pal-3', name: '惩戒骑', role: 'd1', require: [0,1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18], passive: [2, 17], conflict: {1: [6, 18], 6: [1], 18: [1], 15: []}, desc: '', count: 0 },
  { id: 'hunt-1', name: '兽王猎', role: 'd1', require: [0,1,2,3,4,5,6,7,8,14,15,16], passive: [2], conflict: {0:[1,3,4,5,7,9,12,14], 1:[0,3,4,5,7,9,12,14],3:[0,1,4,5,7,9,12,14],4:[0,1,3,5,7,9,12,1],5:[0,1,3,4,7,9,12,14],7:[0,1,3,4,5,9,12,14],9:[0,1,3,4,5,7,12,14],12:[0,1,3,4,5,7,9,14],14:[0,1,3,4,5,7,9,12]}, desc: '', count: 0 },
  { id: 'hunt-2', name: '射击猎', role: 'd1', require: [0,1,2,3,4,5,6,7,8,14,15,16], passive: [6], conflict: {3:[4,5,7,9,12,14],4:[3,5,7,9,12,14],5:[3,4,7,9,12,14],7:[3,4,5,9,12,14],9:[3,4,5,7,12,14],12:[3,4,5,7,9,14],14:[3,4,5,7,9,12]}, desc: '', count: 0 },
  { id: 'hunt-3', name: '生存猎', role: 'd1', require: [0,1,2,3,4,5,6,7,8,14,15,16], passive: [8], conflict: {3:[4,5,7,9,12,14],4:[3,5,7,9,12,14],5:[3,4,7,9,12,14],7:[3,4,5,9,12,14],9:[3,4,5,7,12,14],12:[3,4,5,7,9,14],14:[3,4,5,7,9,12]}, desc: '', count: 0 },
  { id: 'dru-1', name: '平衡德', role: 'd2', require: [0,1,2,3,10,11,12,13,14,15,16,17,18], passive: [1, 11, 12], conflict: {}, desc: '', count: 0 },
  { id: 'dru-2', name: '熊德', role: 't', require: [0,1,2,3,4,5,6,7,8,9,14,15,16], passive: [1, 3, 7, 9], conflict: {}, desc: '', count: 0 },
  { id: 'dru-3', name: '猫德', role: 'd1', require: [0,1,2,3,4,5,6,7,8,9,14,15,16], passive: [1, 3, 7, 9], conflict: {}, desc: '', count: 0 },
  { id: 'dru-4', name: '奶德', role: 'h', require: [0,1,2,3,10,11,14,15,16,17,18], passive: [1, 17], conflict: {}, desc: '', count: 0 },
  { id: 'sha-1', name: '元素萨', role: 'd2', require: [0,1,2,3,10,11,12,13,14,15,16,17,18], passive: [0, 10, 18], conflict: {4: [15], 15: [4], 8: [11], 11: [8]}, desc: '', count: 0 },
  { id: 'sha-2', name: '增强萨', role: 'd1', require: [0,1,2,3,4,5,6,7,8,10,12,13,14,15,16,17,18], passive: [0, 6, 10, 18], conflict: {4: [15], 15: [4], 8: [11], 11: [8]}, desc: '', count: 0 },
  { id: 'sha-3', name: '奶萨', role: 'h', require: [0,1,2,3,10,11,14,15,16,17,18], passive: [0, 10, 16, 18], conflict: {4: [15], 15: [4], 8: [11], 11: [8]}, desc: '', count: 0 },
  { id: 'dk-1', name: '血DK', role: 't', require: [0,1,2,3,4,5,6,7,8,14,15,16], passive: [4], conflict: {6: []}, desc: '血DK可能不点加攻强', count: 0 },
  { id: 'dk-2', name: '冰DK', role: 'd1', require: [0,1,2,3,4,5,6,7,8,14,15,16], passive: [4, 5, 8], conflict: {}, desc: '', count: 0 },
  { id: 'dk-3', name: '邪DK', role: 'd1', require: [0,1,2,3,4,5,6,7,8,11,12,13,14,15,16], passive: [4,12], conflict: {}, desc: '', count: 0 },
]

const ableToEnable = (buffIdx) => {
  if (buffListRes.value[buffIdx]?.enabled) { return false }
  for (const mem of group) {
    if (mem.passive.includes(buffIdx) || mem.conflict[buffIdx]) { return true }
  }
  return false
}
const required = (buffIdx) => {
  if (buffListRes.value[buffIdx]?.enabled) { return false }
  for (const mem of group) {
    if (mem.require.includes(buffIdx)) { return true }
  }
  return false
}

</script>

<style lang="scss" scoped>
.calc-raid{
  .inner {
    .class-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .class-col {
        display: flex;
        flex-direction: column;
        .class-item {
          width: 100px;
          margin: 5px 0;
          padding: 5px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: box-shadow 0.3s;
        }
        .class-item:hover {
          box-shadow: 0 0 5px white;
          transition: box-shadow 0.3s;
        }
        .class-border-0 { border: 3px solid rgb(121, 95, 67); }
        .class-border-1 { border: 3px solid rgb(155, 155, 155); }
        .class-border-2 { border: 3px solid rgb(64, 124, 146); }
        .class-border-3 { border: 3px solid rgb(90, 79, 122); }
        .class-border-4 { border: 3px solid rgb(155, 149, 64); }
        .class-border-5 { border: 3px solid rgb(150, 85, 113); }
        .class-border-6 { border: 3px solid rgb(104, 129, 70); }
        .class-border-7 { border: 3px solid rgb(156, 76, 6); }
        .class-border-8 { border: 3px solid rgb(0, 68, 135); }
        .class-border-9 { border: 3px solid rgb(119, 19, 36); }
      }
    }
    .buff-res-container {
      display: flex;
      .buff-list {
        display: flex;
        flex-direction: column;
        .item-box {
          width: 150px;
          box-sizing: border-box;
          border-left: 1px solid white;
          border-right: 1px solid white;
          border-bottom: 1px solid white;
          padding: 9px;
        }
      }
      .mem-list {
        display: flex;
        .mem-detail {
          display: flex;
          flex-direction: column;
          .item-box {
            width: 105px;
            box-sizing: border-box;
            border-left: 1px solid white;
            border-right: 1px solid white;
            border-bottom: 1px solid white;
            padding: 9px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }
      }
    }
    .color-0 { background-color: rgb(121, 95, 67); }
    .color-1 { background-color: rgb(155, 155, 155); }
    .color-2 { background-color: rgb(64, 124, 146); }
    .color-3 { background-color: rgb(90, 79, 122); }
    .color-4 { background-color: rgb(155, 149, 64); }
    .color-5 { background-color: rgb(150, 85, 113); }
    .color-6 { background-color: rgb(104, 129, 70); }
    .color-7 { background-color: rgb(156, 76, 6); }
    .color-8 { background-color: rgb(0, 68, 135); }
    .color-9 { background-color: rgb(119, 19, 36); }
  }
}
</style>