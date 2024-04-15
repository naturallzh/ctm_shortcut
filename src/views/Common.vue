<template>
  <div class="common">
    <div class="content">
      <div style="margin-top: 36px;width: 100%;padding: 18px; border: 3px solid white;box-sizing: border-box;">
        <div style="font-size: 30px;margin-bottom: 18px">数据库</div>
        <el-button type="primary" @click="gotoUrl('http://db.nfuwow.com/85/?items')">装备</el-button>
        <el-button type="primary" @click="gotoUrl('https://www.nfuwow.com/talents/85/')">天赋模拟器</el-button>
      </div>
      <div style="margin-top: 36px;width: 100%;padding: 18px; border: 3px solid white;box-sizing: border-box;">
        <div style="font-size: 30px;margin-bottom: 18px">测试1(无内容)</div>
        <el-button>测试1-1</el-button>
        <el-button>测试1-2</el-button>
      </div>
      <div style="margin-top: 36px;width: 100%;padding: 18px; border: 3px solid white;box-sizing: border-box;">
        <div style="font-size: 30px;margin-bottom: 18px">测试2(无内容)</div>
        <el-button>测试2-1</el-button>
        <el-button>测试2-2</el-button>
        <el-button>测试2-3</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const gotoUrl = (url) => {
  window.open(url, '_blank')
}
</script>

<style lang="scss" scoped>
.common{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow-y: auto;
  .content {
    width: 720px;
  }
}
</style>