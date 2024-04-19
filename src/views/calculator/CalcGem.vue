<template>
  <div class="calc-gem general-conainer" ref="containerRef">
    <div class="inner general-inner">
      <Anchor class="general-anchor" :anchor-params="anchorParams"></Anchor>
      <div class="title-1" id="nameSearch">名称速查</div>
      <div class="title-2">普通宝石</div>
      <div class="mt-9">选择一种颜色或属性后查看匹配结果</div>
      <div class="mt-9" style="padding: 0 9px; border: 2px solid red;display: inline-block">
        <el-radio v-for="(item, index) of nameSearchOptions.red" v-model="nameSearchVal" :value="item.value" style="color: white;">{{ item.label }}</el-radio>
      </div><br>
      <div class="mt-9" style="padding: 0 9px; border: 2px solid yellow;display: inline-block">
        <el-radio v-for="(item, index) of nameSearchOptions.yellow" v-model="nameSearchVal" :value="item.value" style="color: white;">{{ item.label }}</el-radio>
      </div><br>
      <div class="mt-9" style="padding: 0 9px; border: 2px solid rgb(28, 173, 249);display: inline-block">
        <el-radio v-for="(item, index) of nameSearchOptions.blue" v-model="nameSearchVal" :value="item.value" style="color: white;">{{ item.label }}</el-radio>
      </div><br>
      <div v-show="nameSearchRes" class="mt-9">点击宝石名称以复制</div>
      <div v-if="nameSearchRes" class="mt-9" style="display: flex;">
        <div v-for="color of ['Red', 'Yellow', 'Blue', 'Orange', 'Purple', 'Green']" v-show="nameSearchRes[color].length" class="name-search-res-container" :class="color+'-border'">
          <div v-for="gemItem of nameSearchRes[color]" class="gem-line">
            <div class="stat-str">
              <div @click="utils.copyToclipboard(gemItem.statName)" class="copy-str">{{ gemItem.statName }}</div>
              <div>{{ gemItem.statStr }}</div>
            </div>
            <div class="gem-item" v-for="idx of [0, 1, 2]">
              <div @click="utils.copyToclipboard(gemItem.statName+gemStone[color][idx])" class="copy-str">{{ gemStone[color][idx] }}</div><div>{{ gemStatVal[gemItem.statValType][idx] }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import utils from '@/utils'
import Anchor from '@/components/Anchor.vue'

const containerRef = ref(null)
const anchorParams = ref({
  anchorAttr: {
    container: containerRef
  },
  children: [
    { href: '#nameSearch', title: '名称速查' },
  ]
})

const nameSearchVal = ref('')
const nameSearchOptions = {
  red: [
    { value: 'Red', label: '红色' },
    { value: 'Str', label: '力量' },
    { value: 'Agi', label: '敏捷' },
    { value: 'Int', label: '智力' },
    { value: 'Parry', label: '精准' },
    { value: 'Pre', label: '招架' }
  ],
  blue: [
    { value: 'Blue', label: '蓝色' },
    { value: 'Sta', label: '耐力' },
    { value: 'Hit', label: '命中' },
    { value: 'Spi', label: '精神' },
    { value: 'Pene', label: '法穿' },
  ],
  yellow: [
    { value: 'Yellow', label: '黄色' },
    { value: 'Crit', label: '暴击' },
    { value: 'Haste', label: '急速' },
    { value: 'Mast', label: '精通' },
    { value: 'Dodge', label: '躲闪' },
    { value: 'Res', label: '韧性' },
  ]
}
const gemStatVal = [
  ['30', '40', '50'],  // 0
  ['15/15', '20/20', '25/25'],  // 1
  ['15/23', '20/30', '25/37'],  // 2
  ['15/19', '20/25', '25/32'],  // 3
  ['45', '60', '75'],  // 4
  ['38', '50', '63'],  // 5
]
const gemStatDataList = [
  { color: 'Red', stat: 'Str', statStr: '力量', statValType: 0, statName: '朴素' },
  { color: 'Red', stat: 'Agi', statStr: '敏捷', statValType: 0, statName: '精致' },
  { color: 'Red', stat: 'Int', statStr: '智力', statValType: 0, statName: '闪耀' },
  { color: 'Red', stat: 'Parry', statStr: '精准', statValType: 0, statName: '精准' },
  { color: 'Red', stat: 'Pre', statStr: '招架', statValType: 0, statName: '闪光' },

  { color: 'Blue', stat: 'Sta', statStr: '耐力', statValType: 4, statName: '致密' },
  { color: 'Blue', stat: 'Hit', statStr: '命中', statValType: 0, statName: '刚硬' },
  { color: 'Blue', stat: 'Spi', statStr: '精神', statValType: 0, statName: '火花' },
  { color: 'Blue', stat: 'Pene', statStr: '法穿', statValType: 5, statName: '致密' },

  { color: 'Yellow', stat: 'Crit', statStr: '暴击', statValType: 0, statName: '圆润' },
  { color: 'Yellow', stat: 'Haste', statStr: '急速', statValType: 0, statName: '迅捷' },
  { color: 'Yellow', stat: 'Mast', statStr: '精通', statValType: 0, statName: '断裂' },
  { color: 'Yellow', stat: 'Dodge', statStr: '躲闪', statValType: 0, statName: '诡秘' },
  { color: 'Yellow', stat: 'Res', statStr: '韧性', statValType: 0, statName: '秘法' },

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
  { color: 'Green', stat: 'PeneMast', statStr: '法穿精通', statValType: 3, statName: '灌能' },
  { color: 'Green', stat: 'PeneRes', statStr: '法穿韧性', statValType: 3, statName: '鲜亮' },
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
const nameSearchRes = computed(() => {
  if (!nameSearchVal.value) { return false }
  const res = { Red: [], Blue: [], Yellow: [], Purple: [], Orange: [], Green: [] }
  const fitColor = (clr1, clr2) => {
    if (clr1 === 'Red') { return (clr2 === 'Red') || (clr2 === 'Purple') || (clr2 === 'Orange') }
    if (clr1 === 'Blue') { return (clr2 === 'Blue') || (clr2 === 'Purple') || (clr2 === 'Green') }
    if (clr1 === 'Yellow') { return (clr2 === 'Yellow') || (clr2 === 'Green') || (clr2 === 'Orange') }
    return false
  }
  for (const item of gemStatDataList) {
    if (fitColor(nameSearchVal.value, item.color) || item.stat.includes(nameSearchVal.value)) {
      res[item.color].push(item)
    }
  }
  return res
})
</script>

<style lang="scss" scoped>
.calc-gem{
  .inner {
    .name-search-res-container {
      margin-right: 9px;
      padding: 9px;
      display: flex;
      flex-direction: column;
      width: 391px;
      box-sizing: border-box;
      .gem-line {
        margin: 9px 0;
        display: flex;
        .stat-str {
          width: 83px;
          flex-shrink: 0;
        }
        .gem-item {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .copy-str {
            cursor: pointer;
            transition: color, 0.3s;
          }
          .copy-str:hover {
            color: rgb(28, 173, 249);
            transition: color, 0.3s;
          }
      }
    }
    .Red-border {border: 2px solid red;}
    .Yellow-border {border: 2px solid yellow;}
    .Blue-border {border: 2px solid rgb(28, 173, 249);}
    .Orange-border {border: 2px solid orange;}
    .Purple-border {border: 2px solid purple;}
    .Green-border {border: 2px solid rgb(19, 196, 4);}
  }
}
</style>