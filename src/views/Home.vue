<template>
  <div class="home">
    <span class="fs-50 mb-18 fw-b">快乐咸鱼每一天</span>
    <!-- <span class="fs-100 mb-12" style="font-family:Comic Sans MS;">{{ countdownStr }}</span>
    <span class="fs-36 mb-25 fw-b">以 2024-06-27 06:00:00 预估</span> -->
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import utils from '@/utils'

const timer = ref()
const countdownStr = ref('')
const getCountdownStr = () => {
  let delta = Math.ceil((new Date(2024,5,27,6) - new Date()) / 1000)
  if (delta <=0 ) {
    countdownStr.value = '00:00:00'
    return
  }
  const h = utils.addZero(Math.floor(delta / 3600))
  delta -= h * 3600
  const m = utils.addZero(Math.floor(delta / 60))
  delta -= m * 60
  const s = utils.addZero(Math.floor(delta))
  countdownStr.value = `${h}:${m}:${s}`
}
getCountdownStr()

onMounted(() => {
  timer.value = setInterval(()=> {
    getCountdownStr()
  }, 100)
})
onBeforeUnmount(() => {
  clearInterval(timer.value)
})
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 10%;
  box-sizing: border-box;
  flex-direction: column;
  .fs-50 {
    font-size: 50px;
  }
  .fs-100 {
    font-size: 100px;
  }
}
</style>