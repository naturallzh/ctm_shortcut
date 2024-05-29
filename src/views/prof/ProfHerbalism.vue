<template>
  <div class="prof-herbalism general-conainer" ref="containerRef">
    <div class="inner general-inner">
      <Anchor class="general-anchor" :anchor-params="anchorParams"></Anchor>
      <div class="title-1" id="intro">简介</div>
      <div class="mt-9 flex-align-center">采集专业，通常与<RouterNav path="prof-inscription" title="铭文" />或<RouterNav path="prof-alchemy" title="炼金术" />配套</div>
      <div>牛头人种族被动: <DatabaseNav type="spell" name="栽培" id="20552"></DatabaseNav> 提高15点技能并提升采集速度</div>
      <div class="title-1" id="benifit">收益</div>
      <div class="mt-9">主动技能: <DatabaseNav type="spell" name="生命之血" id="74497"></DatabaseNav> 少量治疗，急速提高480点，持续20秒，冷却2分钟，约等效常驻80急速 (2颗蓝色急速宝石)</div>
      <div class="title-1" id="leveling">攻略</div>
      <div class="mt-9">采集专业一般不需要特意去练，攻略多侧重产量</div>
      <div class="mt-9">那一天，人们回想起了被牛头德支配的恐怖</div>
      <div class="flex-align-center mt-9">攻略1：<WebLink title="[御前比武大会] 半搬运 采药1-525攻略 附采药路线图" url="https://bbs.nga.cn/read.php?tid=4324953" author="vivid_lai" /></div>
      <div class="flex-align-center mt-9">攻略2：<WebLink title="[综合] 瓦斯琪尔-烁光海床优化采药路线，艾萨拉雾菇必须有[图文]" url="https://bbs.nga.cn/read.php?tid=5202914" author="暗意随伤" /></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import utils from '@/utils'
import Anchor from '@/components/Anchor.vue'
import WebLink from '@/components/WebLink.vue'
import DatabaseNav from '@/components/DatabaseNav.vue'
import RouterNav from '@/components/RouterNav.vue'

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
.prof-herbalism{
  .inner {
  }
}
</style>