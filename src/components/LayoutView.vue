<template>
  <div class="layout-view">
    <div class="bg"></div>
    <div class="container">
      <div class="left">
        <el-menu :default-active="curRoute" background-color="transpant" text-color="#fff" style="border-right: none;">
          <el-menu-item index="#/home" @click="changeRoute('home')">
            <el-icon><HomeFilled /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="#/common" @click="changeRoute('common')">
            <el-icon><Menu /></el-icon>
            <span>常用链接</span>
          </el-menu-item>
          <el-sub-menu index="class">
            <template #title>
              <el-icon><User /></el-icon>
              <span>职业(无内容)</span>
            </template>
            <el-menu-item index="/class-warrior">战士</el-menu-item>
            <el-menu-item index="1-2">牧师</el-menu-item>
            <el-menu-item index="1-3">法师</el-menu-item>
            <el-menu-item index="1-4">术士</el-menu-item>
            <el-menu-item index="1-5">盗贼</el-menu-item>
            <el-menu-item index="1-6">圣骑士</el-menu-item>
            <el-menu-item index="1-7">猎人</el-menu-item>
            <el-menu-item index="1-8">德鲁伊</el-menu-item>
            <el-menu-item index="1-9">萨满</el-menu-item>
            <el-menu-item index="1-10">死亡骑士</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="calculator">
            <template #title>
              <el-icon><Cpu /></el-icon>
              <span>计算器(无内容)</span>
            </template>
            <el-menu-item index="calc-1">测试1</el-menu-item>
            <el-menu-item index="calc-2">测试2</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
      <div class="right">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
const router = useRouter();

const curRoute = location.hash

const changeRoute = (path) => {
  router.push({path})
}
</script>

<style lang="scss" scoped>
.layout-view {
  width: 100%;
  height: 100%;
  color: white;
  .bg {
    position: fixed;
    z-index: -10;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    filter: brightness(0.25);
  }
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    .left {
      width: 200px;
      height: 100%;
      border-right: 1px solid #666;
    }
    .right {
      flex-grow: 1;
      height: 100%;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
