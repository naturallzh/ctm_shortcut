<template>
  <el-anchor
    ref="AnchorRef"
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
import { useRoute } from 'vue-router'
import { ref, defineExpose, onMounted } from 'vue'
import SubAnchorLink from './SubAnchorLink.vue'
const route = useRoute();

const props = defineProps(['anchorParams'])
const AnchorRef = ref()
const scrollTo = (params) => {
  AnchorRef.value.scrollTo(params)
}

onMounted(() => {
  if (route.hash) {
    setTimeout(() => {
      scrollTo(route.hash)
    }, 0);
  }
})

defineExpose({
  scrollTo
})
</script>

<style lang="scss" scoped>
</style>
