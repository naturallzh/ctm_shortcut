<template>
  <div class="prof-firstAid general-conainer">
    <div class="inner general-inner">
      <div class="flex-align-center mt-18">攻略1：<el-button link type="primary" @click="utils.openUrl('https://bbs.nga.cn/read.php?tid=4316891')">[御前比武大会] cata各生活技能冲点攻略 烹饪大坑填完</el-button>—— vivid_lai</div>
      <div class="flex-align-center mt-9">攻略2：<el-button link type="primary" @click="utils.openUrl('https://bbs.nga.cn/read.php?tid=3854601')">[Cataclysm]急救450-525速冲指导(翻译自kaliope)</el-button>—— momoCyy</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import utils from '@/utils'

</script>

<style lang="scss" scoped>
.prof-firstAid{
  .inner {
  }
}
</style>