<template>
  <el-drawer v-model="showDrawer" :with-header="false" size="1200">
    <div v-if="showDrawer" style="width: 100%;height: 100%;position: relative;display: flex;flex-direction: column;align-items: center;">
      <div style="width: 100%;height: 100%;" v-loading="isLoading">
        <iframe id="drawerWebView" style="width: 100%;height: 100%;border: none;margin: 0;padding: 0;" :src="url"></iframe>
      </div>
      <div v-show="isLoading && showStopLoading" style="position: absolute;z-index: 10000;top: 25%;" class="fs-25 clr-bl">
        <div class="mb-18">加载时间过长，如果页面已经可用</div>
        <el-button type="primary" @click="handleStopLoading">点击关闭Loading</el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script setup>
import utils from '@/utils/index'
import { ref, nextTick } from 'vue'

const props = defineProps(['url'])

const showDrawer = ref(false)
const isLoading = ref(true)
const showStopLoading = ref(false)
const showStopLoadingTimer = ref()
const open = () => {
  isLoading.value = true
  showDrawer.value = true
  showStopLoading.value = false
  clearTimeout(showStopLoadingTimer.value)
  showStopLoadingTimer.value = setTimeout(() => {
    showStopLoading.value = true
  }, 3000);
  nextTick(() => {
    const el = document.getElementById('drawerWebView')
    if (el.attachEvent) {
      el.attachEvent('onload', () => {
        handleStopLoading()
      })
    } else {
      el.onload = () => {
        handleStopLoading()
      }
    }
  })
}
const handleStopLoading = () => {
  isLoading.value = false
  clearTimeout(showStopLoadingTimer.value)
}

defineExpose({
  open
})
</script>

<style lang="scss" scoped>
</style>
