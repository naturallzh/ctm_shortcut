<template>
  <div class="common-overview general-conainer">
    <div class="content general-inner">
      常用 - 总览 页面
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import utils from '@/utils'

const gotoUrl = (url) => {
  utils.openUrl(url)
}
</script>

<style lang="scss" scoped>
.common-overview{
  .content {
  }
}
</style>