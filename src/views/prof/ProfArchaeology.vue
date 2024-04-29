<template>
  <div class="prof-archaeology general-conainer">
    <div class="inner general-inner">
      <div class="flex-align-center mt-18">攻略1：<el-button link type="primary" @click="utils.openUrl('https://bbs.nga.cn/read.php?tid=3900118')">[事关考古]一些也许可以称作心得的东西</el-button>—— iThat</div>
      <div class="flex-align-center mt-9">攻略2：<el-button link type="primary" @click="utils.openUrl('https://bbs.nga.cn/read.php?tid=4395460')">[国服] [谈不上赚钱的生活技能]考古那些你还不知道的</el-button>—— 暗夜火</div>
      <div class="flex-align-center mt-9">攻略1：<el-button link type="primary" @click="utils.openUrl('https://bbs.nga.cn/read.php?tid=4316891')">[御前比武大会] cata各生活技能冲点攻略 烹饪大坑填完</el-button>—— vivid_lai</div>
      <div class="flex-align-center mt-9">攻略3：<el-button link type="primary" @click="utils.openUrl('https://bbs.nga.cn/read.php?tid=4432789')">[考古分享]LM考古...东部王国0-525 经验分享!{附:路线图}</el-button>—— tiduyangan</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import utils from '@/utils'

</script>

<style lang="scss" scoped>
.prof-archaeology{
  .inner {
  }
}
</style>