<template>
  <div class="prof-engineering general-conainer" ref="containerRef">
    <div class="inner general-inner">
      <Anchor class="general-anchor" :anchor-params="anchorParams"></Anchor>
      <div class="title-1" id="intro">简介</div>
      <div class="title-1" id="benifit">收益</div>
      <div class="title-1" id="leveling">技能提升</div>
      <div>根据不同的实际情况，冲级所用材料和成本与攻略可能会有一定出入，可自行调整</div>
      <div class="flex-align-center">原帖地址：<WebLink title="[御前比武大会] cata工程1-525及部分心得" url="https://bbs.nga.cn/read.php?tid=4335502" author="流星羽翼" /></div>
      <div class="title-2" id="leveling-shortcut">捷径配方</div>
      <div class="mt-9 flex-align-center">
        <DatabaseNav type="item" id="23811" name="结构图：白色烟幕弹" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">元素炸药粉*1 灵纹布*1</div>
        <ProfSkillLevelStep :steps="[235, 255, 265, 275]" class="mr-18"></ProfSkillLevelStep>
        来源：沙塔斯贫民窟旅店门口-星界商人拉斯莱出售
      </div>
      <div class="title-2" id="leveling-stage-1">铜锭 铁锭</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage1" />
      <div class="title-2" id="leveling-stage-3">秘银锭</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage2" />
      <div class="title-2" id="leveling-stage-4">瑟银锭</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage3" />
      <div class="title-2" id="leveling-stage-5">魔铁锭 精金锭</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage4" />
      <div class="title-2" id="leveling-stage-6">钴锭 萨隆邪铁锭</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage5" />
      <div class="title-2" id="leveling-stage-7">源质锭</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage6" />

      <div class="title-1" id="branch">分支专精</div>
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
        { href: '#leveling-stage-1', title: '铜锭 铁锭' },
        { href: '#leveling-stage-2', title: '秘银锭' },
        { href: '#leveling-stage-3', title: '瑟银锭' },
        { href: '#leveling-stage-4', title: '魔铁锭 精金锭' },
        { href: '#leveling-stage-5', title: '钴锭 萨隆邪铁锭' },
        { href: '#leveling-stage-6', title: '源质锭' },
      ]
    },
    { href: '#branch', title: '分支专精' },
  ]
})

const levelingData = {
  stage1: [
    { range: '1-20', name: '劣质火药', id: '3918', cost: '劣质的石头*1', steps: [1, 20, 30, 40], notice: '' },
    { range: '21-30', name: '劣质炸药', id: '3919', cost: '劣质火药*2 亚麻布*1', steps: [1, 30, 45, 60], notice: '' },
    { range: '31-55', name: '一把螺栓', id: '3922', cost: '铜锭*1', steps: [30, 45, 52, 60], notice: '' },
    { range: '56-80', name: '铜管', id: '3924', cost: '铜锭*2 弱效助熔剂*1', steps: [-1], notice: '数据库查不到，存疑' },
    { range: '81-90', name: '粗制火药粉', id: '3929', cost: '粗糙的石头*1', steps: [75, 85, 90, 95], notice: '' },
    { range: '91-100', name: '银触媒', id: '3973', cost: '银锭*1', steps: [90, 110, 125, 140], notice: '' },
    { range: '101-105', name: '活动假人', id: '3932', cost: '青铜锭*2 毛料*2', steps: [85, 115, 130, 145], notice: '' },
    { range: '106-125', name: '青铜管', id: '3938', cost: '青铜锭*2', steps: [105, 115, 135, 155], notice: '' },
    { range: '126-140', name: '烈性火药', id: '3945', cost: '沉重的石头*1', steps: [125, 125, 135, 145], notice: '' },
    { range: '141-150', name: '高速青铜齿轮', id: '3942', cost: '青铜锭*2 毛料*1', steps: [125, 125, 150, 175], notice: '' },
    { range: '151-165', name: '青铜框架', id: '3953', cost: '青铜锭*2 毛料*1 中皮*1', steps: [145, 145, 170, 195], notice: '' },
    { range: '166-175', name: '自爆绵羊', id: '3955', cost: '青铜框架*1 高速青铜齿轮*1 烈性火药*2 毛料*2', steps: [150, 175, 187, 200], notice: '' },
    { range: '176-190', name: '实心炸药', id: '12585', cost: '坚固的石头*2', steps: [175, 175, 185, 195], notice: '' },
    { range: '191-195', name: '铁皮手雷', id: '3962', cost: '铁锭*1 烈性火药*1 丝绸*1', steps: [175, 175, 195, 215], notice: '' },
  ],
  stage2: [
    { range: '196-200', name: '秘银管', id: '12589', cost: '秘银锭*3', steps: [195, 195, 215, 235], notice: '' },
    { range: '201-215', name: '不牢固的扳机', id: '12591', cost: '秘银锭*1 实心炸药*1 魔纹布*1', steps: [200, 200, 220, 240], notice: '' },
    { range: '216-235', name: '秘银外壳', id: '12599', cost: '秘银锭*3', steps: [215, 215, 235, 255], notice: '' },
    { range: '236-250', name: '高爆炸弹', id: '12619', cost: '秘银外壳*2 不牢固的扳机*1 实心炸药*2', steps: [235, 235, 255, 275], notice: '' },
  ],
  stage3: [
    { range: '251-260', name: '致密炸药粉', id: '19788', cost: '厚重的石头*3', steps: [250, 250, 255, 260], notice: '' },
    { range: '261-285', name: '瑟银零件', id: '19791', cost: '瑟银锭*2 符文布*1', steps: [260, 280, 290, 300], notice: '' },
    { range: '286-300', name: '瑟银管', id: '19795', cost: '瑟银锭*6', steps: [275, 295, 305, 315], notice: '' },
  ],
  stage4: [
    { range: '301-310', name: '魔铁螺丝', id: '30305', cost: '魔铁锭*1', steps: [300, 300, 305, 310], notice: '' },
    { range: '311-313', name: '魔铁外壳', id: '30304', cost: '魔铁锭*3', steps: [300, 300, 310, 320], notice: '' },
    { range: '314-320', name: '元素炸药粉', id: '30303', cost: '土之微粒*2 火焰微粒*1', steps: [300, 300, 310, 320], notice: '' },
    { range: '321-325', name: '魔铁炸弹', id: '30310', cost: '魔铁螺丝*2 魔铁外壳*1 元素炸药粉*1', steps: [300, 320, 330, 340], notice: '' },
    { range: '326-335', name: '精金手雷', id: '30311', cost: '精金锭*4 魔铁螺丝*2 元素炸药粉*1', steps: [325, 335, 345, 355], notice: '' },
    { range: '336-350', name: '白色烟幕弹', id: '30341', cost: '灵纹布*1 元素炸药粉*1', steps: [335, 335, 345, 355], notice: '' },
  ],
  stage5: [
    { range: '351-365', name: '钴螺丝', id: '56349', cost: '钴锭*2', steps: [350, 360, 370, 380], notice: '' },
    { range: '366-375', name: '敏锐爆炸触发器', id: '53281', cost: '钴锭*3 水之结晶*1', steps: [350, 366, 375, 385], notice: '' },
    { range: '376-385', name: '超载电容器', id: '56464', cost: '钴锭*4 土之结晶*1', steps: [375, 380, 385, 390], notice: '' },
    { range: '386-390', name: '爆炸诱饵', id: '56463', cost: '敏锐爆炸触发器*3 霜纹布*1', steps: [375, 385, 390, 395], notice: '' },
    { range: '391-400', name: '霜钢管', id: '56471', cost: '钴锭*8 水之结晶*1', steps: [390, 395, 400, 405], notice: '' },
    { range: '401-405', name: '钻石折射瞄准镜', id: '61471', cost: '霜钢管*1 钴螺丝*2', steps: [390, 400, 407, 415], notice: '' },
    { range: '406-415', name: '一箱炸弹', id: '56468', cost: '萨隆邪铁锭*5 敏锐爆炸触发器*1', steps: [405, 410, 415, 420], notice: '' },
    { range: '416-420', name: '法力注射工具包', id: '56477', cost: '萨隆邪铁锭*12 水之结晶*2', steps: [415, 420, 425, 430], notice: '' },
    { range: '421-425', name: '机械雪地护目镜', id: '56465', cost: '萨隆邪铁锭*8 北地皮*2 永恒暗影*1', steps: [420, 425, 432, 440], notice: '' },
  ],
  stage6: [
    { range: '425-450', name: '一把黑曜石螺栓', id: '84403', cost: '黑曜石块*2', steps: [435, 442, 450], notice: '' },
    { range: '461-465', name: '电化以太', id: '94748', cost: '动燃空气*2', steps: [455, 460, 465], notice: '' },
    { range: '466-470', name: '保险器移除工具', id: '84410', cost: '黑曜石块*10 一捧黑曜石螺栓*10', steps: [470, 472, 475], notice: '' },
    { range: '471-480', name: '大火力推膛枪', id: '84411', cost: '黑曜石块*10 一捧黑曜石螺栓*8 电化以太*4', steps: [480, 480, 480], notice: '' },
    { range: '481-490', name: '捕鱼大师的工具箱', id: '84415', cost: '源质锭*20 一捧黑曜石螺栓*4', steps: [490, 492, 495], notice: '' },
    { range: '491-510', name: '调校过的刺喉弩', id: '84420', cost: '硬化源质锭*5 黑曜石块*4 电化以太*2', steps: [510, 512, 515], notice: '' },
    { range: '510-515', name: '不稳定的毛瑟枪', id: '84417', cost: '硬化源质锭*5 电化以太*2 动燃火焰*6', steps: [515, 517, 520], notice: '' },
    { range: '515-517', name: '耐热疾旋型诱饵', id: '84430', cost: '源质锭*4 一捧黑曜石螺栓*1 动燃火焰*1', steps: [500, 520, 540], notice: '' },
    { range: '517-525', name: '侏儒X光瞄准镜', id: '84428', cost: '硬化源质锭*2 梦境翡翠*2', steps: [525, 530, 535], notice: '' },
  ],
}
</script>

<style lang="scss" scoped>
.prof-engineering{
  .inner {
  }
}
</style>