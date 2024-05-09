<template>
  <div class="layout-view">
    <div class="bg"></div>
    <div class="container">
      <div class="left">
        <el-scrollbar height="100%">
          <el-menu :default-active="curRoute" background-color="transpant" text-color="#fff" style="border-right: none;">
            <el-menu-item index="home" @click="changeRoute('home')">
              <el-icon><HomeFilled /></el-icon>
              <span>首页</span>
            </el-menu-item>
            <el-sub-menu index="common">
              <template #title>
                <el-icon><Guide /></el-icon>
                <span>常用</span>
              </template>
              <el-menu-item v-for="(item, index) of menuItems.common" :key="item.id" :index="item.id" @click="changeRoute(item.id)">{{ item.name }}</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="class">
              <template #title>
                <el-icon><User /></el-icon>
                <span>职业</span>
              </template>
              <el-menu-item v-for="(item, index) of menuItems.class" :key="item.id" :index="item.id" @click="changeRoute(item.id)">{{ item.name }}</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="prof">
              <template #title>
                <el-icon><Menu /></el-icon>
                <span>专业</span>
              </template>
              <el-menu-item v-for="(item, index) of menuItems.prof" :key="item.id" :index="item.id" @click="changeRoute(item.id)">{{ item.name }}</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="dungeon">
              <template #title>
                <el-icon><Location /></el-icon>
                <span>5人本</span>
              </template>
              <el-menu-item v-for="(item, index) of menuItems.dungeon" :key="item.id" :index="item.id" @click="changeRoute(item.id)">{{ item.name }}</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="raid">
              <template #title>
                <el-icon><MapLocation /></el-icon>
                <span>团队副本</span>
              </template>
              <el-menu-item v-for="(item, index) of menuItems.raid" :key="item.id" :index="item.id" @click="changeRoute(item.id)">{{ item.name }}</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="kit">
              <template #title>
                <el-icon><Cpu /></el-icon>
                <span>小工具</span>
              </template>
              <el-menu-item v-for="(item, index) of menuItems.kit" :key="item.id" :index="item.id" @click="changeRoute(item.id)">{{ item.name }}</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
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
import utils from '@/utils/index'
import { ref } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
const router = useRouter();

const curRoute = location.pathname.slice(1) || 'home'

const changeRoute = (path) => {
  router.push({path})
}

const menuItems = {
  common: [
    { id: 'common-overview', name: '总览' },
    { id: 'common-items', name: '物品' },
    { id: 'common-addons', name: '插件' },
    { id: 'common-macros', name: '宏' },
    { id: 'common-factions', name: '声望' },
    { id: 'common-outfits', name: '套装' },
    { id: 'common-quests', name: '任务' },
    { id: 'common-achievements', name: '成就' },
  ],
  class: [
    { id: 'class-overview', name: '总览' },
    { id: 'class-warrior', name: '战士' },
    { id: 'class-priest', name: '牧师' },
    { id: 'class-mage', name: '法师' },
    { id: 'class-warlock', name: '术士' },
    { id: 'class-rogue', name: '盗贼' },
    { id: 'class-paladin', name: '圣骑士' },
    { id: 'class-hunter', name: '猎人' },
    { id: 'class-druid', name: '德鲁伊' },
    { id: 'class-shaman', name: '萨满' },
    { id: 'class-deathknight', name: '死亡骑士' },
  ],
  prof: [
    { id: 'prof-overview', name: '总览' },
    { id: 'prof-herbalism', name: '草药学' },
    { id: 'prof-alchemy', name: '炼金术' },
    { id: 'prof-inscription', name: '铭文' },
    { id: 'prof-mining', name: '采矿' },
    { id: 'prof-blacksmithing', name: '锻造' },
    { id: 'prof-engineering', name: '工程学' },
    { id: 'prof-jewelcrafting', name: '珠宝加工' },
    { id: 'prof-skining', name: '剥皮' },
    { id: 'prof-leatherworking', name: '制皮' },
    { id: 'prof-tailoring', name: '裁缝' },
    { id: 'prof-encharting', name: '附魔' },
    { id: 'prof-archaeology', name: '考古学' },
    { id: 'prof-cooking', name: '烹饪' },
    { id: 'prof-firstAid', name: '急救' },
    { id: 'prof-fishing', name: '钓鱼' },
  ],
  dungeon: [
    { id: 'dungeon-overview', name: '总览' },
    { id: 'dungeon-throneOfTheTides', name: '潮汐王座' },
    { id: 'dungeon-blackrockCaverns', name: '黑石岩窟' },
    { id: 'dungeon-GrimBatol', name: '格瑞姆巴托' },
    { id: 'dungeon-hallsOfOrigination', name: '起源大厅' },
    { id: 'dungeon-theStonecore', name: '巨石之核' },
    { id: 'dungeon-theVortexPinnacle', name: '旋云之巅' },
    { id: 'dungeon-lostCityOfTheTolvir', name: '托维尔失落之城' },
    { id: 'dungeon-zulAman', name: '祖阿曼' },
    { id: 'dungeon-zulGurub', name: '祖尔格拉布' },
    { id: 'dungeon-wellOfEternity', name: '永恒之井' },
    { id: 'dungeon-hourOfTwilight', name: '暮光审判' },
    { id: 'dungeon-endTime', name: '时光之末' },
  ],
  raid: [
    { id: 'raid-overview', name: '总览' },
    { id: 'raid-baradinHold', name: '巴拉丁监狱' },
    { id: 'raid-throneOfTheFourWinds', name: '风神王座' },
    { id: 'raid-blackwingDescent', name: '黑翼血环' },
    { id: 'raid-theBastionOfTwilight', name: '暮光堡垒' },
    { id: 'raid-firelands', name: '火焰之地' },
    { id: 'raid-dragonSoul', name: '巨龙之魂' },
  ],
  kit: [
    { id: 'kit-gemName', name: '珠宝名称速查' },
    { id: 'kit-raidBuffSim', name: '团队BUFF配置模拟' },
    { id: 'kit-hasteBreakPointCalc', name: '急速断点计算器' },
    { id: 'kit-macroGenerator', name: '宏生成器' },
  ]
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
      width: 230px;
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
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
