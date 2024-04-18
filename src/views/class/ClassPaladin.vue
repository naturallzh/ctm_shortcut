<template>
  <div class="class-paladin general-conainer" ref="containerRef">
    <div class="inner general-inner">
      <Anchor class="general-anchor" :anchor-params="anchorParams"></Anchor>
      <div class="title-1" id="intro">简介</div>
      <div class="title-1" id="leveling">练级</div>

      <div class="title-1" id="protection">防御</div>
      <div class="title-2" id="protection-overview">综述</div>
      <div class="title-2" id="protection-stat">属性</div>
      <div style="width: 100px;height: 2000px;background-color: yellow;"></div>
      <div class="title-2" id="protection-talentGlyphSkill">天赋 雕文 专业</div>
      <div class="title-2" id="protection-battleItems">战前物资</div>
      <div class="title-2" id="protection-keyEquipments">重点装备</div>
      <div class="title-2" id="protection-addonsMacros">插件 宏</div>
      <div class="title-2" id="protection-operation">操作要点</div>

      <div class="title-1" id="holy">神圣</div>
      <div class="title-2" id="holy-overview">综述</div>
      <div class="title-2" id="holy-stat">属性</div>
      <div class="content"></div>
      <div class="title-2" id="holy-talentGlyphSkill">天赋 雕文 专业</div>
      <div class="title-2" id="holy-battleItems">战前物资</div>
      <div class="title-2" id="holy-keyEquipments">重点装备</div>
      <div class="title-2" id="holy-addonsMacros">插件 宏</div>
      <div class="title-2" id="holy-operation">操作要点</div>

      <div class="title-1" id="retribution">惩戒</div>
      <div class="title-2" id="retribution-overview">综述</div>
      <div class="title-2" id="retribution-stat">属性</div>
      <div class="title-2" id="retribution-talentGlyphSkill">天赋 雕文 专业</div>
      <div class="title-2" id="retribution-battleItems">战前物资</div>
      <div class="title-2" id="retribution-keyEquipments">重点装备</div>
      <div class="title-2" id="retribution-addonsMacros">插件 宏</div>
      <div class="title-2" id="retribution-operation">操作要点</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Anchor from '@/components/Anchor.vue'

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
        { href: '#protection-battleItems', title: '战前物资' },
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
        { href: '#holy-battleItems', title: '战前物资' },
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
        { href: '#retribution-battleItems', title: '战前物资' },
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