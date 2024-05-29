<template>
  <div class="prof-cooking general-conainer" ref="containerRef">
    <div class="inner general-inner">
      <Anchor class="general-anchor" :anchor-params="anchorParams"></Anchor>
      <div class="title-1" id="intro">简介</div>
      <div class="mt-9">待补充</div>
      <div class="title-1" id="leveling">攻略</div>
      <div class="flex-align-center mt-9">攻略1：<WebLink title="[御前比武大会] cata各生活技能冲点攻略 烹饪大坑填完" url="https://bbs.nga.cn/read.php?tid=4316891" author="vivid_lai" /></div>
      <div class="flex-align-center mt-9">攻略2：<WebLink title="[CTM4.3}烹饪与钓鱼小指南(给那些因地图变更不清楚鱼点的朋友)" url="https://bbs.nga.cn/read.php?tid=5085813" author="香消与玉陨" /></div>
      <div class="flex-align-center mt-9">攻略3：<WebLink title="[商业技能] 纯搬运《烹饪+钓鱼配合冲点1-525心得》" url="https://bbs.nga.cn/read.php?tid=5165307" author="佛曰不可曰" /></div>
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
    { href: '#leveling', title: '攻略'},
  ]
})
</script>

<style lang="scss" scoped>
.prof-cooking{
  .inner {
  }
}
</style>