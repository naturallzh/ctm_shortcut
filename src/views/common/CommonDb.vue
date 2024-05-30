<template>
  <div class="common-db general-conainer">
    <div class="content general-inner">
      <div class="title-1" id="db-search">搜索</div>
      <div class="mt-9">
        <el-input v-model="dbSearchVal" style="width: 400px">
          <template #append>
            <el-dropdown split-button size="small" type="primary" @click="handleOpenDbSearchWindow('nfu')">
              nfu数据库
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="handleOpenDbSearchWindow('wowheadCn')">wowhead(中)</el-dropdown-item>
                  <el-dropdown-item @click="handleOpenDbSearchWindow('wowheadEn')">wowhead(英)</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </template>
        </el-input>
      </div>
      <div class="title-1" id="db-frequent">常用</div>
      <div class="mt-9">
        <template v-for="item of frequentList">
          <el-dropdown split-button type="primary" @click="utils.openUrl(item.nfu)" class="mr-18">
            {{ item.title }}
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="utils.openUrl(item.wowheadCn)">wowhead(中)</el-dropdown-item>
                <el-dropdown-item @click="utils.openUrl(item.wowheadEn)">wowhead(英)</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import utils from '@/utils'
import { ElMessage } from 'element-plus'

const dbSearchVal = ref('')
const getDbSearchUrl = (target) => {
  switch (target) {
    case 'nfu':
      return `https://db.nfuwow.com/85/?search=${dbSearchVal.value}`
    case 'wowheadCn':
      return `https://www.wowhead.com/cata/cn/search?q=${dbSearchVal.value}`
    case 'wowheadEn':
      return `https://www.wowhead.com/cata/search?q=${dbSearchVal.value}`
  }
}
const handleOpenDbSearchWindow = (target) => {
  if (!dbSearchVal.value) {
    ElMessage({
      message: '请输入搜索内容',
      type: 'error',
    })
    return
  }
  utils.openUrl(getDbSearchUrl(target))
}

const frequentList = [
  { title: '天赋模拟器', nfu: 'https://www.nfuwow.com/talents/85/', wowheadCn: 'https://www.wowhead.com/cata/cn/talent-calc', wowheadEn: 'https://www.wowhead.com/cata/talent-calc' },
  { title: '物品', nfu: 'http://db.nfuwow.com/85/?items', wowheadCn: 'https://www.wowhead.com/cata/cn/items', wowheadEn: 'https://www.wowhead.com/cata/items' },
  { title: '套装', nfu: 'https://db.nfuwow.com/85/?itemsets', wowheadCn: 'https://www.wowhead.com/cata/cn/item-sets', wowheadEn: 'https://www.wowhead.com/cata/item-sets' },
  { title: '阵营', nfu: 'https://db.nfuwow.com/85/?factions=1162', wowheadCn: 'https://www.wowhead.com/cata/cn/factions/cataclysm', wowheadEn: 'https://www.wowhead.com/cata/factions/cataclysm' },
]
</script>

<style lang="scss" scoped>
.common-db{
  .content {
  }
}
</style>