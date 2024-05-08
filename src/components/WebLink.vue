<template>
  <span><el-button link type="primary" @click="utils.openUrl(url, target)">{{ title }}</el-button><span v-show="author">—— {{ author }}</span></span>
  <el-button class="ml-9" link type="primary" @click="utils.copyToclipboard(url)" title="复制链接"><el-icon><DocumentCopy /></el-icon></el-button>
  <el-button style="margin-left: 5px;" v-show="drawerView" link type="primary" @click="handleOpenDrawerView" title="侧边栏查看"><el-icon><View /></el-icon></el-button>
  <DrawerView :url="url" ref="drawerViewRef"></DrawerView>
</template>

<script setup>
import utils from '@/utils/index'
import { ref } from 'vue'
import DrawerView from './DrawerView.vue'

const props = defineProps(['url', 'title', 'author', 'target', 'drawerView'])

const drawerViewRef = ref()
const handleOpenDrawerView = () => {
  drawerViewRef.value.open()
}
</script>

<style lang="scss" scoped>
</style>
