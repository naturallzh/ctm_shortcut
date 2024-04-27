<template>
  <div class="mt-9 flex-align-center item-container" v-for="item of dataArr">
    <span class="wd-100 fw-b clr-o">{{ item.range }}</span>
    <span style="min-width: 130px" class="mr-9">{{ item.name }}</span>
    <div class="prof-skill-cost mr-9">{{ item.cost }}</div>
    <DatabaseNav v-if="item.id" type="spell" :id="item.id" name="DB" class="mr-9"></DatabaseNav>
    <ProfSkillLevelStep v-if="item.steps.length" :steps="item.steps" class="mr-18"></ProfSkillLevelStep>
    <span v-show="item.notice">{{ item.notice }}</span>
  </div>
</template>

<script setup>
import utils from '@/utils/index'
import { ref } from 'vue'
import DatabaseNav from './DatabaseNav.vue'
import ProfSkillLevelStep from './ProfSkillLevelStep.vue'

const props = defineProps(['dataArr'])
</script>

<style lang="scss" scoped>
.item-container {
  background-color: rgba(255, 255, 255, 0);
  transition: background-color 0.2s;
}
.item-container:hover {
  background-color: rgba(255, 128, 0, 0.2);
  transition: background-color 0.2s;
}
</style>
