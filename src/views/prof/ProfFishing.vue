<template>
  <div class="prof-fishing general-conainer">
    <div class="inner general-inner">
      <div class="flex-align-center mt-18">攻略1：<el-button link type="primary" @click="utils.openUrl('https://bbs.nga.cn/read.php?tid=4316891')">[御前比武大会] cata各生活技能冲点攻略 烹饪大坑填完</el-button>—— vivid_lai</div>
      <div class="flex-align-center mt-9">攻略2：<el-button link type="primary" @click="utils.openUrl('https://bbs.nga.cn/read.php?tid=5085813')">[CTM4.3}烹饪与钓鱼小指南(给那些因地图变更不清楚鱼点的朋友)</el-button>—— 香消与玉陨</div>
      <div class="flex-align-center mt-9">攻略3：<el-button link type="primary" @click="utils.openUrl('https://bbs.nga.cn/read.php?tid=5165307')">[商业技能] 纯搬运《烹饪+钓鱼配合冲点1-525心得》</el-button>—— 佛曰不可曰</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import utils from '@/utils'

</script>

<style lang="scss" scoped>
.prof-fishing{
  .inner {
  }
}
</style>