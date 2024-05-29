<template>
  <el-dropdown split-button size="small" type="primary" @click.stop="handleOpenDrawerView">
    {{ name }}
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="handleClick('nfu')">nfu数据库</el-dropdown-item>
        <el-dropdown-item @click="handleClick('wowheadCn')">wowhead(中)</el-dropdown-item>
        <el-dropdown-item @click="handleClick('wowheadEn')">wowhead(英)</el-dropdown-item>
      </el-dropdown-menu>
    </template>
    <DrawerView :url="url.nfu" ref="drawerViewRef"></DrawerView>
  </el-dropdown>
</template>

<script setup>
import utils from '@/utils/index'
import { ref } from 'vue'
import DrawerView from './DrawerView.vue'

const props = defineProps(['type', 'id', 'name'])
const url = ref({})
const init = () => {
  switch (props.type) {
    case 'item':
      url.value = {
        nfu: `https://db.nfuwow.com/85/?item=${props.id}`,
        wowheadCn: `https://www.wowhead.com/cata/cn/item=${props.id}`,
        wowheadEn: `https://www.wowhead.com/cata/item=${props.id}`,
      }
      break
    case 'item-set':
      url.value = {
        nfu: `https://db.nfuwow.com/85/?itemset=${props.id}`,
        wowheadCn: `https://www.wowhead.com/cata/cn/item-set=${props.id}`,
        wowheadEn: `https://www.wowhead.com/cata/item-set=${props.id}`,
      }
      break
    case 'spell':
      url.value = {
        nfu: `https://db.nfuwow.com/85/?spell=${props.id}`,
        wowheadCn: `https://www.wowhead.com/cata/cn/spell=${props.id}`,
        wowheadEn: `https://www.wowhead.com/cata/spell=${props.id}`,
      }
      break
    default:
      return
  }
}
init()

const handleClick = (target) => {
  if (url.value[target]) {
    utils.openUrl(url.value[target])
  }
}

const drawerViewRef = ref()
const handleOpenDrawerView = () => {
  drawerViewRef.value.open()
}
</script>

<style lang="scss" scoped>
</style>
