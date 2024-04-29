<template>
  <div class="prof-skining general-conainer">
    <div class="inner general-inner">
      <div class="mt-18">采集专业一般不需要特意去练，攻略多侧重产量</div>
      <div class="flex-align-center mt-9">攻略1：<el-button link type="primary" @click="utils.openUrl('https://bbs.nga.cn/read.php?tid=4328683')">[御前比武大会] 好吧我又来了0 0搬运扒皮1-525 附剥皮地图</el-button>—— vivid_lai</div>
      <div class="flex-align-center mt-9">攻略2：<el-button link type="primary" @click="utils.openUrl('https://bbs.nga.cn/read.php?tid=4845239&_fp=2')">[商业心得] [苦力的逆袭]终极剥皮测试</el-button>—— 暗夜火</div>
      <div class="flex-align-center mt-9">攻略3：<el-button link type="primary" @click="utils.openUrl('https://bbs.nga.cn/read.php?tid=4649103')">地球时代皮革量产计划，随后会更新外域北极跟大灾变。(随时测试更新最优地点)</el-button>—— 无影狂风</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import utils from '@/utils'

</script>

<style lang="scss" scoped>
.prof-skining{
  .inner {
  }
}
</style>