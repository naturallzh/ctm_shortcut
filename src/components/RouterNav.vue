<template>
  <el-link type="primary" @click="gotoRoute()" style="font-size: 16px;">{{ title }}</el-link>
</template>

<script setup>
import utils from '@/utils/index'
import { ref } from 'vue'

import { useRouter } from 'vue-router'
const router = useRouter();
const props = defineProps(['path', 'hash', 'title'])

const gotoRoute = () => {
  router.push({path: props.path, hash: props.hash || ''})
}
</script>

<style lang="scss" scoped>
</style>
