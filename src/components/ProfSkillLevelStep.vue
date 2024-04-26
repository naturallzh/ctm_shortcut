<template>
  <span class="fw-b"><span v-for="(step, index) of steps" :class="`color-${index+5-steps.length}`">{{ step }}</span></span>
</template>

<script setup>
import utils from '@/utils/index'
import { ref } from 'vue'

const props = defineProps(['steps'])
</script>

<style lang="scss" scoped>
.color-1 {
  color: rgb(255, 128, 64);
  margin-right: 5px;
}
.color-2 {
  color: rgb(255, 255, 0);
  margin-right: 5px;
}
.color-3 {
  color: rgb(64, 191, 64);
  margin-right: 5px;
}
.color-4 {
  color: rgb(204, 204, 204);
}
</style>
