<template>
  <el-anchor
    style="background-color: transparent;"
    v-bind="anchorParams.anchorAttr"
    :offset="30">
    <el-anchor-link v-for="(item, index) of anchorParams.children" v-bind="item" :key="index">
      <template #sub-link>
        <SubAnchorLink v-for="(subItem, subIndex) of item.subs" :anchor-link-params="subItem" :key="subIndex"></SubAnchorLink>
      </template>
    </el-anchor-link>
  </el-anchor>
</template>

<script setup>
import utils from '@/utils/index'
import { ref } from 'vue'
import SubAnchorLink from './SubAnchorLink.vue'

const props = defineProps(['anchorParams'])
</script>

<style lang="scss" scoped>
</style>
