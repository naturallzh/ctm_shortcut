<template>
  <div class="prof-archaeology general-conainer" ref="containerRef">
    <div class="inner general-inner">
      <Anchor class="general-anchor" :anchor-params="anchorParams"></Anchor>
      <div class="title-1" id="intro">简介</div>
      <div class="mt-9">待补充</div>
      <div class="title-1" id="leveling">攻略</div>
      <div class="flex-align-center mt-9">攻略1：<WebLink title="[事关考古]一些也许可以称作心得的东西" url="https://bbs.nga.cn/read.php?tid=3900118" author="iThat" /></div>
      <div class="flex-align-center mt-9">攻略2：<WebLink title="[国服] [谈不上赚钱的生活技能]考古那些你还不知道的" url="https://bbs.nga.cn/read.php?tid=4395460" author="暗夜火" /></div>
      <div class="flex-align-center mt-9">攻略3：<WebLink title="[御前比武大会] cata各生活技能冲点攻略 烹饪大坑填完" url="https://bbs.nga.cn/read.php?tid=4316891" author="vivid_lai" /></div>
      <div class="flex-align-center mt-9">攻略4：<WebLink title="[考古分享]LM考古...东部王国0-525 经验分享!{附:路线图}" url="https://bbs.nga.cn/read.php?tid=4432789" author="tiduyangan" /></div>
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
.prof-archaeology{
  .inner {
  }
}
</style>