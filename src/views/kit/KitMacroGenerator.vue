<template>
  <div class="kit-macroGenerator general-conainer" ref="containerRef">
    <div class="inner general-inner">
      <Anchor class="general-anchor" :anchor-params="anchorParams"></Anchor>
      <div class="title-1" id="conditionSpell">条件施法 (多技能合一)</div>
      <div class="mt-9">每个条件组中的条件需同时满足，该条件组才会被判定为生效 (不要同时选择"死亡"与"非死亡"，其他同理)</div>
      <div class="mt-9">多个条件组之间只要有一个条件组生效，则技能即被判定触发</div>
      <div class="mt-9">只要技能被判定为触发，宏即终止</div>
      <div class="mt-9">图标显示留空时，自动从施放部分继承对应技能显示(包括冷却、距离等)，但鼠标移动到图标上看不到详情</div>
      <div v-for="(slot, index) of ['showtooltip', 'cast']">
        <div class="title-2">{{ index === 0 ? '图标显示' : '施放技能' }}</div>
        <div v-for="(spellItem, spellIdx) of conditionSpellData[slot]" style="border: 2px solid white; padding: 9px" class="mt-9">
          <div class="flex-align-center"><span class="fs-18 mr-9">技能名称</span><el-input v-model="spellItem.spell" style="width: 200px" class="mr-18" placeholder="必填"></el-input>
            <el-popconfirm title="是否删除该技能？" width="200px" @confirm="handleAddSpell(slot, spellIdx)">
              <template #reference>
                <el-button type="danger" circle><el-icon><Delete /></el-icon></el-button>
              </template>
            </el-popconfirm>
          </div>
          <div v-for="(conditionItem, conditionIdx) of spellItem.condition" class="mt-9">
            组合键
            <el-select v-model="conditionItem.mod" placeholder="无视组合键" style="width: 120px" clearable filterable class="mr-9">
              <el-option v-for="opt in conditionSpellOps.mod" :key="opt.value" :label="opt.label" :value="opt.value"/>
            </el-select>
            玩家状态
            <el-select v-model="conditionItem.status" placeholder="无条件" style="width: 260px" clearable multiple filterable class="mr-9">
              <el-option-group v-for="optGroup in conditionSpellOps.status" :label="optGroup.label" :key="optGroup.label">
                <el-option v-for="opt in optGroup.options" :key="opt.value" :label="opt.label" :value="opt.value"/>
              </el-option-group>
            </el-select>
            作用目标
            <el-select v-model="conditionItem.target" placeholder="默认(当前目标)" style="width: 140px" clearable filterable class="mr-9">
              <el-option v-for="opt in conditionSpellOps.target" :key="opt.value" :label="opt.label" :value="opt.value"/>
            </el-select>
            作用目标状态
            <el-select v-model="conditionItem.targetStatus" placeholder="无条件" style="width: 260px" clearable multiple filterable class="mr-18">
              <el-option-group v-for="optGroup in conditionSpellOps.targetStatus" :label="optGroup.label" :key="optGroup.label">
                <el-option v-for="opt in optGroup.options" :key="opt.value" :label="opt.label" :value="opt.value"/>
              </el-option-group>
            </el-select>
            <el-popconfirm title="是否删除该条件？" width="200px" @confirm="handleAddCondition(slot, spellIdx, conditionIdx)">
              <template #reference>
                <el-button type="danger" circle><el-icon><Delete /></el-icon></el-button>
              </template>
            </el-popconfirm>
          </div>
          <div><el-button class="mt-9" @click="handleAddCondition(slot, spellIdx, -1)">增加一个条件组</el-button></div>
        </div>
        <el-button class="mt-9" @click="handleAddSpell(slot, -1)">增加一个技能</el-button>
      </div>
      <div class="mt-18" style="background-color: rgba(255, 255, 255, 0.2);padding: 9px;white-space: pre-wrap;">{{ conditionSpellStr ? conditionSpellStr : '添加技能并设置条件后，点击按钮以生成宏字符串' }}</div>
      <div class="flex-align-center mt-9">
        <el-button type="primary" @click="generateMacro('conditionSpell')">生成宏字符串</el-button>
        <el-button v-show="conditionSpellStr" @click="utils.copyToclipboard(conditionSpellStr)">复制宏字符串</el-button>
        <span v-show="conditionSpellStr.length > 255" class="clr-r ml-9">当前宏字符串字数为 {{ conditionSpellStr.length }}，已超过最大字数255</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import utils from '@/utils'
import Anchor from '@/components/Anchor.vue'
import { ElMessage } from 'element-plus'

const containerRef = ref()
const anchorParams = ref({
  anchorAttr: {
    container: containerRef
  },
  children: [
    { href: '#conditionSpell', title: '条件施法 (多技能合一)' },
  ]
})

const conditionSpellData = reactive({
  showtooltip: [],
  cast: []
})
const conditionSpellStr = ref('')
const conditionSpellOps = {
  mod: [{value: 'nomod', label: '无组合键时'}, {value: 'mod', label: '任意组合键'}, {value: 'mod:shift', label: 'shift'}, {value: 'mod:ctrl', label: 'ctrl'}, {value: 'mod:alt', label: 'alt'}],
  status: [
    {label: '是否在战斗中', options: [{value: 'combat', label: '在战斗中'}, {value: 'nocombat', label: '不在战斗中'}]},
    {label: '是否引导中', options: [{value: 'channeling', label: '引导中'}, {value: 'nochanneling', label: '不在引导中'}]},
    {label: '是否在小队中', options: [{value: 'party', label: '在小队中'}, {value: 'noparty', label: '不在小队中'}]},
    {label: '是否在团队中', options: [{value: 'raid', label: '在团队中'}, {value: 'noraid', label: '不在团队中'}]},
    {label: '是否带宠物', options: [{value: 'pet', label: '带有宠物'}, {value: 'nopet', label: '不带宠物'}]},
    {label: '是否在坐骑上', options: [{value: 'mounted', label: '在坐骑上'}, {value: 'nomounted', label: '不在坐骑上'}]},
    {label: '能否飞行', options: [{value: 'flyable', label: '能飞行'}, {value: 'noflyable', label: '不能飞行'}]},
    {label: '是否在游泳', options: [{value: 'swimming', label: '在游泳'}, {value: 'noswimming', label: '不在游泳'}]},
  ],
  target: [{value: '@focus', label: '焦点'}, {value: '@player', label: '玩家自身'}, {value: '@mouseover', label: '鼠标指向'}],
  targetStatus: [{label: '是否死亡', options: [{value: 'dead', label: '死亡'}, {value: 'nodead', label: '非死亡'}]}, {label: '是否存在', options: [{value: 'exists', label: '存在'}, {value: 'noexists', label: '不存在'}]}, {label: '是否敌对', options: [{value: 'harm', label: '敌对'}, {value: 'noharm', label: '不敌对'}]}, {label: '是否友善', options: [{value: 'help', label: '友善'}, {value: 'nohelp', label: '不友善'}]}]
}

const handleAddSpell = (slot, index) => {
  if (index === -1) {
    conditionSpellData[slot].push({spell: '', condition: []})
  } else {
    conditionSpellData[slot].splice(index, 1)
  }
}
const handleAddCondition = (slot, spellIdx, conditionIdx) => {
  if (conditionIdx === -1) {
    conditionSpellData[slot][spellIdx].condition.push({mod: '', status: [], target: '', targetStatus: []})
  } else {
    conditionSpellData[slot][spellIdx].condition.splice(conditionIdx, 1)
  }
}

const getConditionStr = (conditionObj) => {
  let tempArr = conditionObj.status
  if (conditionObj.mod) {
    tempArr = [conditionObj.mod].concat(tempArr)
  }
  if (conditionObj.target) {
    tempArr = tempArr.concat([conditionObj.target])
  }
  tempArr = tempArr.concat(conditionObj.targetStatus)
  const res = tempArr.join(',')
  return res.length < 2 ? '[]' : `[${res}]`
}
const generateMacro = (type) => {
  let showtooltipStr = '#showtooltip '
  for (const spellItem of conditionSpellData.showtooltip) {
    if (!spellItem.spell) {
      ElMessage({message: '请填写技能名称', type: 'error'})
      return
    }
    let conditionsStr = ''
    for (const conditionItem of spellItem.condition) {
      conditionsStr += getConditionStr(conditionItem)
    }
    showtooltipStr += ((conditionsStr.length > 2 ? conditionsStr : '') + spellItem.spell + ';')
  }
  showtooltipStr = (showtooltipStr === '#showtooltip ') ? '' : (showtooltipStr + '\n')
  let castStr = '/施放 '
  for (const spellItem of conditionSpellData.cast) {
    if (!spellItem.spell) {
      ElMessage({message: '请填写技能名称', type: 'error'})
      return
    }
    let conditionsStr = ''
    for (const conditionItem of spellItem.condition) {
      conditionsStr += getConditionStr(conditionItem)
    }
    castStr += ((conditionsStr.length > 2 ? conditionsStr : '') + spellItem.spell + ';')
  }
  castStr = (castStr === '/施放 ') ? '' : castStr
  conditionSpellStr.value = showtooltipStr + castStr
}

</script>

<style lang="scss" scoped>
.kit-macroGenerator{
  .inner {
  }
}
</style>