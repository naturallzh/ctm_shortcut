<template>
  <div class="kit-gem general-conainer" ref="containerRef">
    <div class="inner general-inner">
      <Anchor class="general-anchor" :anchor-params="anchorParams"></Anchor>
      <div class="title-1" id="gem">普通宝石</div>
      <div class="mt-9">选择一种属性后查看匹配结果</div>
      <div class="mt-9">点击宝石前缀或完整名称以复制内容到剪贴板</div>
      <div class="mt-18 gem-radio-group" :class="index" v-for="(colorGroup, index) of nameSearchOptions">
        <div class="gem-item" v-for="item of colorGroup">
          <div><el-radio v-model="nameSearchVal" :value="item.value" style="color: white;" @change="handleSearchChange">{{ item.label }}</el-radio></div>
          <div style="height: 28px;">
            <el-popover placement="right" width="460px">
              <template #reference>
                <el-button v-show="item.res" size="large" style="color: wheat;text-shadow: 0 0 2px skyblue" link type="info" @click="utils.copyToclipboard(item.res?.statName)">{{ item.res?.statName }}</el-button>
              </template>
              <div style="display: flex;">
                <div class="mr-18">{{ item.res?.statStr }}</div>
                <div style="display: flex;flex-direction: column;" v-for="spec of [0, 1, 2]" class="mr-18">
                  <el-button size="large" style="color: black;text-shadow: 0 0 2px skyblue" link type="info" @click="utils.copyToclipboard(item.res?.statName + gemStone[item.res?.color||'Red'][spec])">{{ item.res?.statName + gemStone[item.res?.color||'Red'][spec] }}</el-button>
                  <span>{{ gemStatVal[item.res?.statValType||0][spec] }}</span>
                </div>
              </div>
            </el-popover>
          </div>
        </div>
      </div>

      <div class="title-1" id="metaGem">多彩宝石</div>
      <div class="mt-9">点击条目以复制珠宝名称；后面带颜色的数字表示需要多少颗该颜色的宝石才能触发多彩效果</div>
      <div class="mt-9 fw-b">力量 / 敏捷</div>
      <div class="mt-9" v-for="item of metaGemList[0]"><span style="cursor: pointer;" @click="utils.copyToclipboard(item.name)">{{ item.str }}</span> <span v-for="(req, idx) of item.req" :class="'clr-'+idx" class="underline" v-show="req">{{ req }}</span><DatabaseNav type="spell" :id="item.id" :name="item.name" /></div>
      <div class="mt-9 fw-b">智力</div>
      <div class="mt-9" v-for="item of metaGemList[1]"><span style="cursor: pointer;" @click="utils.copyToclipboard(item.name)">{{ item.str }}</span> <span v-for="(req, idx) of item.req" :class="'clr-'+idx" class="underline" v-show="req">{{ req }}</span><DatabaseNav type="spell" :id="item.id" :name="item.name" /></div>
      <div class="mt-9 fw-b">耐力</div>
      <div class="mt-9" v-for="item of metaGemList[2]"><span style="cursor: pointer;" @click="utils.copyToclipboard(item.name)">{{ item.str }}</span> <span v-for="(req, idx) of item.req" :class="'clr-'+idx" class="underline" v-show="req">{{ req }}</span><DatabaseNav type="spell" :id="item.id" :name="item.name" /></div>
      <div class="mt-9 fw-b">其他副属性</div>
      <div class="mt-9" v-for="item of metaGemList[3]"><span style="cursor: pointer;" @click="utils.copyToclipboard(item.name)">{{ item.str }}</span> <span v-for="(req, idx) of item.req" :class="'clr-'+idx" class="underline" v-show="req">{{ req }}</span><DatabaseNav type="spell" :id="item.id" :name="item.name" /></div>
      
      <div class="title-1" id="cogwheelGem">工程齿轮</div>
      <div class="mt-9">点击条目以复制兑换物名称</div>
      <div class="mt-9" v-for="item of cogwheelGemList"><span style="cursor: pointer;" @click="utils.copyToclipboard(item.cost.name)">{{ item.str }}</span> <DatabaseNav class="mr-9" type="item" :id="item.id" :name="item.name" /><DatabaseNav type="spell" :id="item.cost.id" :name="item.cost.name" />*{{ item.cost.count }}</div>
      <div style="height: 36px;"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import utils from '@/utils'
import Anchor from '@/components/Anchor.vue'
import DatabaseNav from '@/components/DatabaseNav.vue'

const containerRef = ref()
const anchorParams = ref({
  anchorAttr: {
    container: containerRef
  },
  children: [
    { href: '#gem', title: '普通宝石' },
    { href: '#metaGem', title: '多彩宝石' },
    { href: '#cogwheelGem', title: '工程齿轮' },
  ]
})

const nameSearchVal = ref('')
const nameSearchOptions = ref({
  red: [
    { value: 'Str', label: '力量' },
    { value: 'Agi', label: '敏捷' },
    { value: 'Int', label: '智力' },
    { value: 'Parry', label: '精准' },
    { value: 'Pre', label: '招架' }
  ],
  yellow: [
    { value: 'Crit', label: '暴击' },
    { value: 'Haste', label: '急速' },
    { value: 'Mast', label: '精通' },
    { value: 'Dodge', label: '躲闪' },
    { value: 'Res', label: '韧性' },
  ],
  blue: [
    { value: 'Sta', label: '耐力' },
    { value: 'Hit', label: '命中' },
    { value: 'Spi', label: '精神' },
    { value: 'Pene', label: '法穿' },
  ]
})
const gemStatVal = [
  ['30', '40', '50'],  // 0
  ['15/15', '20/20', '25/25'],  // 1
  ['15/23', '20/30', '25/37'],  // 2
  ['15/19', '20/25', '25/32'],  // 3
  ['45', '60', '75'],  // 4
  ['38', '50', '63'],  // 5
]
const gemStatDataList = [
  { color: 'Red', stat: 'StrStr', statStr: '力量', statValType: 0, statName: '朴素' },
  { color: 'Red', stat: 'AgiAgi', statStr: '敏捷', statValType: 0, statName: '精致' },
  { color: 'Red', stat: 'IntInt', statStr: '智力', statValType: 0, statName: '闪耀' },
  { color: 'Red', stat: 'ParryParry', statStr: '精准', statValType: 0, statName: '精准' },
  { color: 'Red', stat: 'PrePre', statStr: '招架', statValType: 0, statName: '闪光' },

  { color: 'Blue', stat: 'StaSta', statStr: '耐力', statValType: 4, statName: '致密' },
  { color: 'Blue', stat: 'HitHit', statStr: '命中', statValType: 0, statName: '刚硬' },
  { color: 'Blue', stat: 'SpiSpi', statStr: '精神', statValType: 0, statName: '火花' },
  { color: 'Blue', stat: 'PenePene', statStr: '法穿', statValType: 5, statName: '风暴' },

  { color: 'Yellow', stat: 'CritCrit', statStr: '暴击', statValType: 0, statName: '圆润' },
  { color: 'Yellow', stat: 'HasteHaste', statStr: '急速', statValType: 0, statName: '迅捷' },
  { color: 'Yellow', stat: 'MastMast', statStr: '精通', statValType: 0, statName: '断裂' },
  { color: 'Yellow', stat: 'DodgeDodge', statStr: '躲闪', statValType: 0, statName: '诡秘' },
  { color: 'Yellow', stat: 'ResRes', statStr: '韧性', statValType: 0, statName: '秘法' },

  { color: 'Purple', stat: 'AgiHit', statStr: '敏捷命中', statValType: 1, statName: '反光' },
  { color: 'Purple', stat: 'ParryHit', statStr: '精准命中', statValType: 1, statName: '精确' },
  { color: 'Purple', stat: 'IntHit', statStr: '智力命中', statValType: 1, statName: '隐秘' },
  { color: 'Purple', stat: 'PreHit', statStr: '招架命中', statValType: 1, statName: '复仇' },
  { color: 'Purple', stat: 'StrHit', statStr: '力量命中', statValType: 1, statName: '蚀刻' },
  { color: 'Purple', stat: 'IntSpi', statStr: '智力精神', statValType: 1, statName: '纯净' },
  { color: 'Purple', stat: 'StrSta', statStr: '力量耐力', statValType: 2, statName: '统御' },
  { color: 'Purple', stat: 'AgiSta', statStr: '敏捷耐力', statValType: 2, statName: '狡诈' },
  { color: 'Purple', stat: 'ParrySta', statStr: '精准耐力', statValType: 2, statName: '守护者' },
  { color: 'Purple', stat: 'IntSta', statStr: '智力耐力', statValType: 2, statName: '永恒' },
  { color: 'Purple', stat: 'PreSta', statStr: '招架耐力', statValType: 2, statName: '防御者' },
  { color: 'Purple', stat: 'IntPene', statStr: '智力法穿', statValType: 3, statName: '神秘' },

  { color: 'Orange', stat: 'AgiCrit', statStr: '敏捷暴击', statValType: 1, statName: '致命' },
  { color: 'Orange', stat: 'ParryCrit', statStr: '精准暴击', statValType: 1, statName: '诡诈' },
  { color: 'Orange', stat: 'IntCrit', statStr: '智力暴击', statValType: 1, statName: '高能' },
  { color: 'Orange', stat: 'StrCrit', statStr: '力量暴击', statValType: 1, statName: '铭文' },
  { color: 'Orange', stat: 'AgiDodge', statStr: '敏捷躲闪', statValType: 1, statName: '抛光' },
  { color: 'Orange', stat: 'ParryDodge', statStr: '精准躲闪', statValType: 1, statName: '坚毅' },
  { color: 'Orange', stat: 'PreDodge', statStr: '招架躲闪', statValType: 1, statName: '坚韧' },
  { color: 'Orange', stat: 'StrDodge', statStr: '力量躲闪', statValType: 1, statName: '勇士的' },
  { color: 'Orange', stat: 'AgiHaste', statStr: '敏捷急速', statValType: 1, statName: '轻巧' },
  { color: 'Orange', stat: 'ParryHaste', statStr: '精准急速', statValType: 1, statName: '邪恶' },
  { color: 'Orange', stat: 'IntHaste', statStr: '智力急速', statValType: 1, statName: '鲁莽' },
  { color: 'Orange', stat: 'StrHaste', statStr: '力量急速', statValType: 1, statName: '凶猛' },
  { color: 'Orange', stat: 'AgiMast', statStr: '敏捷精通', statValType: 1, statName: '精锐' },
  { color: 'Orange', stat: 'ParryMast', statStr: '精准精通', statValType: 1, statName: '狂热' },
  { color: 'Orange', stat: 'IntMast', statStr: '智力精通', statValType: 1, statName: '机敏' },
  { color: 'Orange', stat: 'PreMast', statStr: '招架精通', statValType: 1, statName: '优质' },
  { color: 'Orange', stat: 'StrMast', statStr: '力量精通', statValType: 1, statName: '娴熟' },
  { color: 'Orange', stat: 'AgiRes', statStr: '敏捷韧性', statValType: 1, statName: '透明' },
  { color: 'Orange', stat: 'ParryRes', statStr: '精准韧性', statValType: 1, statName: '纤巧' },
  { color: 'Orange', stat: 'IntRes', statStr: '智力韧性', statValType: 1, statName: '肆意' },
  { color: 'Orange', stat: 'PreRes', statStr: '招架韧性', statValType: 1, statName: '华彩' },
  { color: 'Orange', stat: 'StrRes', statStr: '力量韧性', statValType: 1, statName: '灿烂' },

  { color: 'Green', stat: 'SpiCrit', statStr: '精神暴击', statValType: 1, statName: '迷雾' },
  { color: 'Green', stat: 'CritHit', statStr: '暴击命中', statValType: 1, statName: '穿刺' },
  { color: 'Green', stat: 'HasteHit', statStr: '急速命中', statValType: 1, statName: '闪电' },
  { color: 'Green', stat: 'HitMast', statStr: '命中精通', statValType: 1, statName: '导师的' },
  { color: 'Green', stat: 'SpiMast', statStr: '精神精通', statValType: 1, statName: '禅悟之' },
  { color: 'Green', stat: 'HitRes', statStr: '命中韧性', statValType: 1, statName: '平衡' },
  { color: 'Green', stat: 'SpiRes', statStr: '精神韧性', statValType: 1, statName: '混沌' },
  { color: 'Green', stat: 'HasteSpi', statStr: '急速精神', statValType: 1, statName: '活跃' },
  { color: 'Green', stat: 'CritSta', statStr: '暴击耐力', statValType: 2, statName: '裂纹' },
  { color: 'Green', stat: 'DodgeSta', statStr: '躲闪耐力', statValType: 2, statName: '华丽' },
  { color: 'Green', stat: 'HasteSta', statStr: '急速耐力', statValType: 2, statName: '坚强' },
  { color: 'Green', stat: 'HitDodge', statStr: '命中躲闪', statValType: 1, statName: '轻盈' },
  { color: 'Green', stat: 'StaMast', statStr: '精通耐力', statValType: 2, statName: '强攻' },
  { color: 'Green', stat: 'PeneMast', statStr: '精通法穿', statValType: 3, statName: '灌能' },
  { color: 'Green', stat: 'PeneRes', statStr: '韧性法穿', statValType: 3, statName: '鲜亮' },
  { color: 'Green', stat: 'CritPene', statStr: '暴击法穿', statValType: 3, statName: '辐光' },
  { color: 'Green', stat: 'HastePene', statStr: '急速法穿', statValType: 3, statName: '破碎' },
  { color: 'Green', stat: 'ResSta', statStr: '韧性耐力', statValType: 2, statName: '稳固' },
]
const gemStone = {
  Red: ['红玉髓', '地狱炎石', '皇后榴石'],
  Blue: ['泽菲蓝晶石', '海洋青玉', '深岩青石'],
  Yellow: ['阿里锡黄晶', '琥珀晶石', '光芒石'],
  Purple: ['夜之石', '恶魔之眼', '暗影尖石'],
  Orange: ['桂榴石', '暗烬黄玉', '熔火珊瑚'],
  Green: ['碧玉', '梦境翡翠', '精灵榄石']
}
const getGem = (stat) => {
  if (!nameSearchVal.value) { return false }
  for (const item of gemStatDataList) {
    if ((item.stat === nameSearchVal.value + stat) || (item.stat === stat + nameSearchVal.value)) {
      return item
    }
  }
  return false
}
const handleSearchChange = (val) => {
  for (const color of ['red', 'yellow', 'blue']) {
    for (const item of nameSearchOptions.value[color]) {
      item.res = getGem(item.value)
    }
  }
}

const metaGemList = [
  [{ id: 96256, name: '反冲之影魂钻石', str: '+54 力量 +3% 爆击效果', req: [3,0,0] },
  { id: 96255, name: '灵巧之影魂钻石', str: '+54 敏捷 +3% 爆击效果', req: [3,0,0] },],
  [{ id: 96257, name: '燃烧之影魂钻石', str: '+54 智力 +3% 爆击效果', req: [3,0,0] },
  { id: 73470, name: '灰烬之影魂钻石', str: '+54 智力 最大法力值提高2%', req: [0,2,0] },
  { id: 73466, name: '鼓舞之影魂钻石', str: '+54 智力 威胁降低2%', req: [0,1,1] },
  { id: 73476, name: '遗忘之影魂钻石', str: '+54 智力 沉默时间缩短10%', req: [1,0,1] },],
  [{ id: 73467, name: '永恒之影魂钻石', str: '+81 耐力 +1% 盾牌格挡值', req: [0,0,3] },
  { id: 73468, name: '质朴之影魂钻石', str: '+81 耐力 由物品获得的护甲值提高2%', req: [0,2,0] },
  { id: 73473, name: '强能之影魂钻石', str: '+81 耐力 昏迷时间缩短10%', req: [0,0,2] },
  { id: 73469, name: '光辉之影魂钻石', str: '+81 耐力 受到的法术伤害降低2%', req: [1,1,0] },],
  [{ id: 73465, name: '混乱之影魂钻石', str: '+54 爆击 +3% 爆击效果', req: [3,0,0] },
  { id: 73472, name: '毁灭之影魂钻石', str: '+54 爆击 +1% 法术反射', req: [2,0,0] },
  { id: 73474, name: '神秘之影魂钻石', str: '+54 爆击 诱捕/缠绕时间缩短10%', req: [0,1,1] },
  { id: 73475, name: '冷酷之影魂钻石', str: '+54 爆击 恐惧时间缩短10%', req: [0,1,1] },
  { id: 73464, name: '疾驰之影魂钻石', str: '+54 精通 奔跑速度略微提高', req: [0,2,0] },
  { id: 73471, name: '复苏之影魂钻石', str: '+54 精神 +3% 爆击效果', req: [0,1,1] },]
]

const cogwheelGemList = [
  { id: 59478, name: '光滑的齿轮', str: '+208 爆击', cost: {name: '一捧黑曜石螺栓', id: 84403, count: 4} },
  { id: 59478, name: '迅捷齿轮', str: '+208 急速', cost: {name: '一捧黑曜石螺栓', id: 84403, count: 4} },
  { id: 59478, name: '断裂的齿轮', str: '+208 精通', cost: {name: '地精烤肉野餐', id: 84429, count: 1} },
  { id: 59478, name: '火花齿轮', str: '+208 精神', cost: {name: '正牌初级工程师护目镜', id: 84406, count: 1} },
  { id: 59478, name: '刚硬齿轮', str: '+208 命中', cost: {name: '源质工具箱', id: 84416, count: 1} },
  { id: 59478, name: '精准齿轮', str: '+208 精准', cost: {name: '捕鱼大师的工具箱', id: 84415, count: 1} },
  { id: 59478, name: '精巧的齿轮', str: '+208 躲闪', cost: {name: '电化以太', id: 94748, count: 3} },
  { id: 59478, name: '闪光齿轮', str: '+208 招架', cost: {name: '不稳定的爆盐炸药', id: 84409, count: 1} },
]
</script>

<style lang="scss" scoped>
.kit-gem{
  .inner {
    .gem-radio-group {
      padding: 0 9px;
      display: flex;
      .gem-item {
        display: flex;
        flex-direction: column;
        width: 100px;
      }
    }
    .red { border-left: 3px solid red; }
    .yellow { border-left: 3px solid yellow; }
    .blue { border-left: 3px solid rgb(28, 173, 249); }
    .Red-border {border: 2px solid red;}
    .Yellow-border {border: 2px solid yellow;}
    .Blue-border {border: 2px solid rgb(28, 173, 249);}
    .Orange-border {border: 2px solid orange;}
    .Purple-border {border: 2px solid purple;}
    .Green-border {border: 2px solid rgb(19, 196, 4);}
    .clr-0 {color: red; margin: 0 5px;}
    .clr-1 {color: yellow; margin: 0 5px;}
    .clr-2 {color: rgb(28, 173, 249); margin: 0 5px;}
  }
}
</style>