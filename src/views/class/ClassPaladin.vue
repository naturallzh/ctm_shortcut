<template>
  <div class="class-paladin general-conainer" ref="containerRef">
    <div class="inner general-inner">
      <Anchor class="general-anchor" :anchor-params="anchorParams"></Anchor>
      <div class="title-1" id="intro">简介</div>
      <div class="mt-9">待补充</div>
      <div class="title-1" id="leveling">练级</div>
      <div class="mt-9">待补充</div>

      <div class="title-1" id="protection">防御</div>
      <div class="title-2" id="protection-overview">综述</div>
      <div class="mt-9">待补充</div>
      <div class="title-2" id="protection-stat">属性</div>
      <div class="mt-9">待补充</div>
      <div class="title-2" id="protection-talentGlyphSkill">天赋 雕文 专业</div>
      <div class="mt-9">待补充</div>
      <div class="title-2" id="protection-battleItems">物资</div>
      <div class="mt-9">待补充</div>
      <div class="title-2" id="protection-keyEquipments">重点装备</div>
      <div class="mt-9">待补充</div>
      <div class="title-2" id="protection-addonsMacros">插件 宏</div>
      <div class="mt-9">待补充</div>
      <div class="title-2" id="protection-operation">操作要点</div>
      <div class="mt-9">待补充</div>

      <div class="title-1" id="holy">神圣</div>
      <div class="title-2" id="holy-overview">综述</div>
      <div class="mt-9">待补充</div>
      <div class="title-2" id="holy-stat">属性</div>
      <div class="mt-9">
        <div>智力：1智力=15法力=1法强，648.91智力=1%暴击，同数值的主属性收益碾压其他副属性</div>
        <div>精神：战斗中回蓝 = 80%*(0.001+2*基础恢复量*精神*√智力)+0.05*基础法力mp5，这个基础法力MP5的数值是1171.1</div>
        <div>急速：128.05急速=1%急速。急速阈值分别为773/1452/3490，分别代表2秒神光施法，缺一个团队急速buff的2秒神光，1秒GCD所需急速</div>
        <div>暴击：179.28暴击等级=1暴击，由于有定罪天赋，所以你需要有团队buff下最低20%的暴击来维持定罪的9%加成，但是团队buff跟智力加起来你的裸暴击就有16%左右了。所以仅靠装备的暴击绿字就完全可以达到20%暴击了</div>
        <div>精通：你的治疗效果会另外造成一个吸收盾，这个盾是有上限的，是你的生命值上限的1/3，在存在大量aoe的副本boss战中，会有不俗的表现</div>
        <div>副属性优先级：精神>急速>暴击=精通</div>
      </div>
      <div class="title-2" id="holy-talentGlyphSkill">天赋 雕文 专业</div>
      <div class="mt-9">专业：最佳搭配为工程+锻造。珠宝在出了紫色宝石之后是收益最低的专业</div>
      <div class="title-2" id="holy-battleItems">物资</div>
      <div class="mt-9">宝石：红孔 <DatabaseNav type="item" :id="71881" name="闪耀皇后榴石" class="mr-9" />蓝孔 <DatabaseNav type="item" :id="71868" name="纯净暗影尖石" class="mr-9" />黄孔 <DatabaseNav type="item" :id="71850" name="鲁莽熔火珊瑚"  class="mr-9" />多彩 <DatabaseNav type="item" :id="52296" name="灰烬之影魂钻石" /></div>
      <div class="mt-9">合剂：<DatabaseNav type="item" :id="58086" name="神龙心智合剂" /></div>
      <div class="mt-9">药水：爆发时 <DatabaseNav type="item" :id="58091" name="火山药水" class="mr-9" />否则 <DatabaseNav type="item" :id="57192" name="奇效法力药水" /></div>
      <div class="title-2" id="holy-keyEquipments">重点装备</div>
      <div class="mt-9">待补充</div>
      <div class="title-2" id="holy-addonsMacros">插件 宏</div>
      <div class="mt-9">待补充</div>
      <div class="title-2" id="holy-operation">操作要点</div>
      <div class="mt-9">
        <div>没压力多平砍回蓝，低压用圣光术，高压用神光术，震击卡CD用，圣闪除了救急，不然尽量不用。圣能看团队状况使用wog或者手电筒。</div>
        <div>奶骑有3个爆发技能，神恩术，翅膀，列王守卫。自己看着开。</div>
        <div>圣光普照有范围，范围为10码，不是集合站请尽量不要用。</div>
        <div>由于CTM的属性改版，所以治疗都会更缺蓝了。需要更为精准的控蓝手段。而爆发技能就是你的控蓝技能。翅膀期间=17%的蓝耗降低，神恩=20%，列王守卫=50%。</div>
        <div>实在是空蓝了，1喝大蓝，2开恳求，3把你插了回蓝雕文的圣疗丢出去，4萨满爸爸插个潮汐/牧师妈妈唱个回蓝，5上去敲boss。</div>
      </div>
      
      <div class="title-1" id="retribution">惩戒</div>
      <div class="title-2" id="retribution-overview">综述</div>
      <div class="mt-9">待补充</div>
      <div class="title-2" id="retribution-stat">属性</div>
      <div class="mt-9">待补充</div>
      <div class="title-2" id="retribution-talentGlyphSkill">天赋 雕文 专业</div>
      <div class="mt-9">待补充</div>
      <div class="title-2" id="retribution-battleItems">物资</div>
      <div class="mt-9">待补充</div>
      <div class="title-2" id="retribution-keyEquipments">重点装备</div>
      <div class="mt-9">待补充</div>
      <div class="title-2" id="retribution-addonsMacros">插件 宏</div>
      <div class="mt-9">待补充</div>
      <div class="title-2" id="retribution-operation">操作要点</div>
      <div class="mt-9">待补充</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Anchor from '@/components/Anchor.vue'
import DatabaseNav from '@/components/DatabaseNav.vue'

const containerRef = ref(null)
const anchorParams = ref({
  anchorAttr: {
    container: containerRef
  },
  children: [
    { href: '#intro', title: '简介' },
    { href: '#leveling', title: '练级' },
    { 
      href: '#protection', title: '防御',
      subs: [
        { href: '#protection-overview', title: '综述' },
        { href: '#protection-stat', title: '属性' },
        { href: '#protection-talentGlyphSkill', title: '天赋 雕文 专业' },
        { href: '#protection-battleItems', title: '物资' },
        { href: '#protection-keyEquipments', title: '重点装备' },
        { href: '#protection-addonsMacros', title: '插件 宏' },
        { href: '#protection-operation', title: '操作要点' },
      ]
    },
    { 
      href: '#holy', title: '神圣',
      subs: [
        { href: '#holy-overview', title: '综述' },
        { href: '#holy-stat', title: '属性' },
        { href: '#holy-talentGlyphSkill', title: '天赋 雕文 专业' },
        { href: '#holy-battleItems', title: '物资' },
        { href: '#holy-keyEquipments', title: '重点装备' },
        { href: '#holy-addonsMacros', title: '插件 宏' },
        { href: '#holy-operation', title: '操作要点' },
      ]
    },
    { 
      href: '#retribution', title: '惩戒',
      subs: [
        { href: '#retribution-overview', title: '综述' },
        { href: '#retribution-stat', title: '属性' },
        { href: '#retribution-talentGlyphSkill', title: '天赋 雕文 专业' },
        { href: '#retribution-battleItems', title: '物资' },
        { href: '#retribution-keyEquipments', title: '重点装备' },
        { href: '#retribution-addonsMacros', title: '插件 宏' },
        { href: '#retribution-operation', title: '操作要点' },
      ]
    },
  ]
})
</script>

<style lang="scss" scoped>
.class-paladin{
  .inner {
  }
}
</style>