<template>
  <el-anchor-link v-bind="anchorLinkParams">
    <template #sub-link>
      <SubAnchorLink v-for="(subItem, subIndex) of anchorLinkParams.subs" :anchor-link-params="subItem" :key="subIndex"></SubAnchorLink>
    </template>
  </el-anchor-link>
</template>

<script setup>
import utils from '@/utils/index'
import { ref } from 'vue'

const props = defineProps(['anchorLinkParams'])
</script>

<style lang="scss" scoped>
</style>
