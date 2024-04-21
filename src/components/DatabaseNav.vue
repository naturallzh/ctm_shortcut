<template>
  <el-dropdown split-button type="primary" @click="handleClick('nfu')">
    {{ name }}
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="handleClick('wowheadCn')">wowhead(中)</el-dropdown-item>
        <el-dropdown-item @click="handleClick('wowheadEn')">wowhead(英)</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import utils from '@/utils/index'
import { ref } from 'vue'

const props = defineProps(['type', 'id', 'name'])
const url = ref({})
const init = () => {
  switch (props.type) {
    case 'item':
      url.value = {
        nfu: `http://db.nfuwow.com/85/?item=${props.id}`,
        wowheadCn: `https://www.wowhead.com/cata/cn/item=${props.id}`,
        wowheadEn: `https://www.wowhead.com/cata/item=${props.id}`,
      }
      break
    case 'spell':
      url.value = {
        nfu: `http://db.nfuwow.com/85/?spell=${props.id}`,
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
    window.open(url.value[target], '_blank')
  }
}
</script>

<style lang="scss" scoped>
</style>
