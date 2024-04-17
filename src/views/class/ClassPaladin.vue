<template>
  <div class="class-paladin general-conainer" ref="containerRef">
    <div class="content general-content">
      <Anchor class="general-anchor" :anchor-params="anchorParams"></Anchor>
      <div class="fs-30 fw-b mt-18" id="overview">
        总览
        <div style="width: 100px;height: 500px;background-color: yellow"></div>
      </div>
      <div class="fs-30 fw-b mt-18" id="overview-intro">简介</div>
      <div class="fs-30 fw-b mt-18" id="overview-leveling">
        练级
        <div style="width: 100px;height: 500px;background-color: yellow"></div>
      </div>
      <div class="fs-30 fw-b mt-18" id="protection">
        防御
        <div style="width: 100px;height: 500px;background-color: yellow"></div>
      </div>
      <div class="fs-30 fw-b mt-18" id="protection-overview">综述</div>
      <div class="fs-30 fw-b mt-18" id="protection-stat">综述</div>
      <div class="fs-30 fw-b mt-18" id="protection-talentGlyphSkill">天赋 雕文 专业</div>
      <div class="fs-30 fw-b mt-18" id="protection-battleItems">战前物资</div>
      <div class="fs-30 fw-b mt-18" id="protection-keyEquipments">重点装备</div>
      <div class="fs-30 fw-b mt-18" id="protection-operation">操作要点</div>
      <div class="fs-30 fw-b mt-18" id="holy">
        神圣
        <div style="width: 100px;height: 500px;background-color: yellow"></div>
      </div>
      <div class="fs-30 fw-b mt-18" id="holy-overview">综述</div>
      <div class="fs-30 fw-b mt-18" id="holy-stat">综述</div>
      <div class="fs-30 fw-b mt-18" id="holy-talentGlyphSkill">天赋 雕文 专业</div>
      <div class="fs-30 fw-b mt-18" id="holy-battleItems">战前物资</div>
      <div class="fs-30 fw-b mt-18" id="holy-keyEquipments">重点装备</div>
      <div class="fs-30 fw-b mt-18" id="holy-operation">操作要点</div>
      <div class="fs-30 fw-b mt-18" id="retribution">
        惩戒
        <div style="width: 100px;height: 500px;background-color: yellow"></div>
      </div>
      <div class="fs-30 fw-b mt-18" id="retribution-overview">综述</div>
      <div class="fs-30 fw-b mt-18" id="retribution-stat">综述</div>
      <div class="fs-30 fw-b mt-18" id="retribution-talentGlyphSkill">天赋 雕文 专业</div>
      <div class="fs-30 fw-b mt-18" id="retribution-battleItems">战前物资</div>
      <div class="fs-30 fw-b mt-18" id="retribution-keyEquipments">重点装备</div>
      <div class="fs-30 fw-b mt-18" id="retribution-operation">操作要点</div>
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
    { 
      href: '#overview', title: '总览',
      subs: [
        { href: '#overview-intro', title: '简介' },
        { href: '#overview-leveling', title: '练级' }
      ]
    },
    { 
      href: '#protection', title: '防御',
      subs: [
        { href: '#protection-overview', title: '综述' },
        { href: '#protection-stat', title: '属性' },
        { href: '#protection-talentGlyphSkill', title: '天赋 雕文 专业' },
        { href: '#protection-battleItems', title: '战前物资' },
        { href: '#protection-keyEquipments', title: '重点装备' },
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
        { href: '#retribution-operation', title: '操作要点' },
      ]
    },
  ]
})
</script>

<style lang="scss" scoped>
.class-paladin{
  .content {
  }
}
</style>