<template>
  <div class="prof-herbalism general-conainer">
    <div class="inner general-inner">
      <div class="mt-18">采集专业一般不需要特意去练，攻略多侧重产量</div>
      <div class="mt-9">那一天，人们回想起了被牛头德支配的恐怖</div>
      <div class="flex-align-center mt-9">攻略1：<el-button link type="primary" @click="utils.openUrl('https://bbs.nga.cn/read.php?tid=4324953')">[御前比武大会] 半搬运 采药1-525攻略 附采药路线图</el-button>—— vivid_lai</div>
      <div class="flex-align-center mt-9">攻略2：<el-button link type="primary" @click="utils.openUrl('https://bbs.nga.cn/read.php?tid=5202914')">[综合] 瓦斯琪尔-烁光海床优化采药路线，艾萨拉雾菇必须有[图文]</el-button>—— 暗意随伤</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import utils from '@/utils'

</script>

<style lang="scss" scoped>
.prof-herbalism{
  .inner {
  }
}
</style>