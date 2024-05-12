<template>
  <div class="prof-skining general-conainer" ref="containerRef">
    <div class="inner general-inner">
      <Anchor class="general-anchor" :anchor-params="anchorParams"></Anchor>
      <div class="title-1" id="intro">简介</div>
      <div class="mt-9">采集专业，通常与制皮配套</div>
      <div class="title-1" id="benifit">收益</div>
      <div class="mt-9">被动技能: <DatabaseNav type="spell" name="解剖大师" id="74495" /> 80暴击 (2颗蓝色暴击宝石)</div>
      <div class="title-1" id="leveling">攻略</div>
      <div class="mt-18">采集专业一般不需要特意去练，攻略多侧重产量</div>
      <div class="flex-align-center mt-9">攻略1：<WebLink title="[御前比武大会] 好吧我又来了0 0搬运扒皮1-525 附剥皮地图" url="https://bbs.nga.cn/read.php?tid=4328683" author="vivid_lai" /></div>
      <div class="flex-align-center mt-9">攻略2：<WebLink title="[商业心得] [苦力的逆袭]终极剥皮测试" url="https://bbs.nga.cn/read.php?tid=4845239" author="暗夜火" /></div>
      <div class="flex-align-center mt-9">攻略3：<WebLink title="地球时代皮革量产计划，随后会更新外域北极跟大灾变。(随时测试更新最优地点)" url="https://bbs.nga.cn/read.php?tid=4649103" author="无影狂风" /></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import utils from '@/utils'
import Anchor from '@/components/Anchor.vue'
import WebLink from '@/components/WebLink.vue'
import DatabaseNav from '@/components/DatabaseNav.vue'

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
.prof-skining{
  .inner {
  }
}
</style>