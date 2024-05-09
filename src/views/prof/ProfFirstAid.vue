<template>
  <div class="prof-firstAid general-conainer" ref="containerRef">
    <div class="inner general-inner">
      <Anchor class="general-anchor" :anchor-params="anchorParams"></Anchor>
      <div class="title-1" id="intro">简介</div>
      <div class="mt-9">待补充</div>
      <div class="title-1" id="benifit">收益</div>
      <div class="mt-9">待补充</div>
      <div class="title-1" id="leveling">攻略</div>
      <div class="flex-align-center mt-18">攻略1：<WebLink title="[御前比武大会] cata各生活技能冲点攻略 烹饪大坑填完" url="https://bbs.nga.cn/read.php?tid=4316891" author="vivid_lai" /></div>
      <div class="flex-align-center mt-9">攻略2：<WebLink title="[Cataclysm]急救450-525速冲指导(翻译自kaliope)" url="https://bbs.nga.cn/read.php?tid=3854601" author="momoCyy" /></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import utils from '@/utils'
import Anchor from '@/components/Anchor.vue'
import WebLink from '@/components/WebLink.vue'

const containerRef = ref()
const anchorParams = ref({
  anchorAttr: {
    container: containerRef
  },
  children: [
    { href: '#intro', title: '简介' },
    { href: '#benifit', title: '收益' },
    { href: '#leveling', title: '攻略'},
  ]
})
</script>

<style lang="scss" scoped>
.prof-firstAid{
  .inner {
  }
}
</style>