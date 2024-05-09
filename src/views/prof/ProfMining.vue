<template>
  <div class="prof-mining general-conainer" ref="containerRef">
    <div class="inner general-inner">
      <Anchor class="general-anchor" :anchor-params="anchorParams"></Anchor>
      <div class="title-1" id="intro">简介</div>
      <div class="mt-9">待补充</div>
      <div class="title-1" id="benifit">收益</div>
      <div class="mt-9">待补充</div>
      <div class="title-1" id="leveling">攻略</div>
      <div class="mt-18">采集专业一般不需要特意去练，攻略多侧重产量</div>
      <div class="flex-align-center mt-9">攻略1：<WebLink title="[御前比武大会] [Cataclysm] 搬运~采矿1-525攻略 附熔炼攻略+采矿路线" url="https://bbs.nga.cn/read.php?tid=4322236" author="vivid_lai" /></div>
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
.prof-mining{
  .inner {
  }
}
</style>