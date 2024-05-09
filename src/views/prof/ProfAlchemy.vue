<template>
  <div class="prof-alchemy general-conainer" ref="containerRef">
    <div class="inner general-inner">
      <Anchor class="general-anchor" :anchor-params="anchorParams"></Anchor>
      <div class="title-1" id="intro">简介</div>
      <div class="mt-9">待补充</div>
      <div class="title-1" id="benifit">收益</div>
      <div class="mt-9">待补充</div>
      <div class="title-1" id="leveling">技能提升</div>
      <div>根据不同的实际情况，冲级所用材料和成本与攻略可能会有一定出入，可自行调整</div>
      <div>同类配方极多，可根据情况替换</div>
      <div class="flex-align-center">原帖地址：<WebLink title="[御前比武大会] 好像很多人写炼金，那么我也来，炼金1-525攻略" url="https://bbs.nga.cn/read.php?tid=4317927" author="willforever" /></div>
      <div class="title-2" id="leveling-shortcut">捷径配方</div>
      <div class="mt-9 flex-align-center">
        <DatabaseNav type="item" id="6057" name="配方：自然防护药水" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">活根草*1 荆棘藻*1 水晶瓶*1</div>
        <ProfSkillLevelStep :steps="[190, 210, 230, 250]" class="mr-18"></ProfSkillLevelStep>
        来源：塔纳利斯、荆棘谷、菲拉斯NPC出售，详见数据库
      </div>
      <div class="mt-9 flex-align-center">
        <DatabaseNav type="item" id="22907" name="配方：超级法力药水" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">梦露花*2 魔草*1 水晶瓶*1</div>
        <ProfSkillLevelStep :steps="[340, 355, 362, 370]" class="mr-18"></ProfSkillLevelStep>
        来源：联盟-赞加沼泽泰雷多尔-海尔伦出售；部落-刀锋山雷神要塞-达加·拉姆巴出售
      </div>
      <div class="title-2" id="leveling-stage-1">经典旧世</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage1" />
      <div class="title-2" id="leveling-stage-3">燃烧的远征</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage2" />
      <div class="title-2" id="leveling-stage-4">巫妖王之怒</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage3" />
      <div class="title-2" id="leveling-stage-5">大地的裂变</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage4" />

      <div class="title-1" id="branch">分支专精</div>
      <div class="mt-9">待补充</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import utils from '@/utils'
import Anchor from '@/components/Anchor.vue'
import DatabaseNav from '@/components/DatabaseNav.vue'
import ProfSkillLevelStep from '@/components/ProfSkillLevelStep.vue'
import ProfSkillLevelItem from '@/components/ProfSkillLevelItem.vue'
import WebLink from '@/components/WebLink.vue'

const containerRef = ref(null)
const anchorParams = ref({
  anchorAttr: {
    container: containerRef
  },
  children: [
    { href: '#intro', title: '简介' },
    { href: '#benifit', title: '收益' },
    { 
      href: '#leveling', title: '技能提升',
      subs: [
        { href: '#leveling-shortcut', title: '捷径配方' },
        { href: '#leveling-stage-1', title: '经典旧世' },
        { href: '#leveling-stage-2', title: '燃烧的远征' },
        { href: '#leveling-stage-3', title: '巫妖王之怒' },
        { href: '#leveling-stage-4', title: '大地的裂变' },
      ]
    },
    { href: '#branch', title: '分支专精' },
  ]
})

const levelingData = {
  stage1: [
    { range: '1-55', name: '初级治疗药水', id: '2330', cost: '宁神花*1 银叶草*1 水晶瓶*1', steps: [1, 55, 75, 95], notice: '根据价格可以多搓几点' },
    { range: '56-105', name: '次级治疗药水', id: '2337', cost: '初级治疗药水*1 石南草*1 水晶瓶*1', steps: [55, 85, 105, 125], notice: '黑口鱼油可替' },
    { range: '106-110', name: '智慧药剂', id: '3171', cost: '魔皇草*1 石南草*2 水晶瓶*1', steps: [90, 120, 140, 160], notice: '速油药水可替' },
    { range: '111-135', name: '治疗药水', id: '3447', cost: '跌打草*1 石南草*1 水晶瓶*1', steps: [110, 135, 155, 175], notice: '神圣防护药水可替至130' },
    { range: '136-145', name: '次级法力药水', id: '3173', cost: '魔皇草*1 荆棘藻*1 水晶瓶*1', steps: [120, 145, 165, 185], notice: '火焰之油可替' },
    { range: '146-155', name: '防御药剂', id: '3177', cost: '野钢花*1 荆棘藻*1 水晶瓶*1', steps: [130, 155, 175, 195], notice: '初级精准药剂可替' },
    { range: '156-175', name: '强效治疗药水', id: '7181', cost: '活根草*1 皇血草*1 水晶瓶*1', steps: [155, 175, 195, 215], notice: '次级隐形可替' },
    { range: '176-195', name: '法力药水', id: '3452', cost: '皇血草*1 荆棘藻*1 水晶瓶*1', steps: [160, 180, 200, 220], notice: '' },
    { range: '196-205', name: '强效防御药剂', id: '11450', cost: '野钢花*1 金棘草*1 水晶瓶*1', steps: [195, 215, 235, 255], notice: '自然防护药水可替' },
    { range: '206-220', name: '猫眼药剂', id: '12609', cost: '金棘草*1 枯叶草*1 水晶瓶*1', steps: [200, 220, 240, 260], notice: '强效法力药水可替' },
    { range: '221-250', name: '优质治疗药水', id: '11457', cost: '太阳草*1 卡德加的胡须*1 水晶瓶*1', steps: [215, 230, 250, 270], notice: '奥法药剂/强效聪颖药剂可替' },
    { range: '251-275', name: '强效敏捷药剂', id: '11467', cost: '太阳草*1 金棘草*1 水晶瓶*1', steps: [240, 255, 275, 295], notice: '石鳞鱼油可替至260' },
    { range: '276-300', name: '特效治疗药水', id: '17556', cost: '黄金参*2 山鼠草*1 水晶瓶*1', steps: [275, 290, 310, 330], notice: '' },
  ],
  stage2: [
    { range: '301-322', name: '法能药剂', id: '33740', cost: '梦叶草*1 魔草*1 水晶瓶*1', steps: [300, 315, 322, 330], notice: '' },
    { range: '323-332', name: '治疗能量药剂', id: '28545', cost: '黄金参*1 梦露花*1 水晶瓶*1', steps: [310, 325, 332, 340], notice: '' },
    { range: '333-342', name: '德莱尼智慧药剂', id: '39638', cost: '魔草*1 泰罗果*1 水晶瓶*1', steps: [320, 335, 342, 350], notice: '' },
    { range: '343-350', name: '超级治疗药水', id: '28551', cost: '魔草*1 虚空花*2 水晶瓶*1', steps: [325, 340, 347, 355], notice: '超级法力药水可替' },
  ],
  stage3: [
    { range: '351-360', name: '复苏治疗药水', id: '53838', cost: '金苜蓿*2 水晶瓶*1', steps: [350, 360, 370, 380], notice: '' },
    { range: '361-375', name: '怒火药剂', id: '53841', cost: '金苜蓿*1 死亡荨麻*2 水晶瓶*1', steps: [355, 365, 375, 385], notice: '' },
    { range: '376-390', name: '亚口鱼油', id: '53812', cost: '小型亚口鱼', steps: [375, 380, 385, 390], notice: '和专家药剂配合冲点' },
    { range: '391-395', name: '极效坚韧药剂', id: '53898', cost: '金苜蓿*4 水晶瓶*1', steps: [390, 395, 400, 405], notice: '' },
    { range: '396-425', name: '不灭药水', id: '53905', cost: '冰棘草*2 水晶瓶*1', steps: [395, 415, 422, 430], notice: '符文治疗药水可替部分' },
  ],
  stage4: [
    { range: '426-450', name: '战斗饮剂', id: '93935', cost: '燃烬草*1 水晶瓶*1', steps: [440, 450, 460], notice: '' },
    { range: '451-460', name: '幽魂药剂', id: '80477', cost: '燃烬草*2 水晶瓶*1', steps: [455, 460, 465], notice: '' },
    { range: '461-470', name: '火山药水', id: '80481', cost: '燃烬草*2 艾萨拉雾菇*1 水晶瓶*1', steps: [465, 470, 475], notice: '' },
    { range: '471-480', name: '深石之油', id: '80486', cost: '白色洞穴鱼*1', steps: [475, 480, 485], notice: '' },
    { range: '480-490', name: '棱光药剂', id: '80492', cost: '燃烬草*1 鞭尾草*1 水晶瓶*1', steps: [485, 490, 495], notice: '' },
    { range: '491-500', name: '狂速药剂', id: '80493', cost: '风暴藤*1 暮光茉莉*1 水晶瓶*1', steps: [495, 500, 505], notice: '' },
    { range: '501-505', name: '增强合剂', id: '80724', cost: '风暴藤*8 燃烬草*8 艾萨拉雾菇*8 鞭尾草*8 暮光茉莉*8 水晶瓶*1', steps: [505, 510, 515], notice: '一次涨5点' },
    { range: '506-509', name: '转化：梦境翡翠', id: '80251', cost: '碧玉*3 风暴藤*3', steps: [510, 515, 520], notice: '' },
    { range: '510-514', name: '生命炼金石', id: '80508', cost: '动燃生命*50 燃烬草*12 艾萨拉雾菇*12 心灵之花*12', steps: [510, 512, 515], notice: '根据职业需求选择' },
    { range: '514-515', name: '转化：暗烬黄玉', id: '80250', cost: '桂榴石*3 燃烬草*3', steps: [515, 520, 525], notice: '' },
    { range: '516-520', name: '转化：海洋青玉', id: '80246', cost: '菲泽蓝晶石*1 艾萨拉雾菇*3', steps: [520, 525, 530], notice: '' },
    { range: '521-525', name: '转化：琥珀晶石', id: '80247', cost: '阿里锡黄晶*1 鞭尾草*3', steps: [525, 530, 535], notice: '根据情况选择地狱炎石' },
  ],
}
</script>

<style lang="scss" scoped>
.prof-alchemy{
  .inner {
  }
}
</style>