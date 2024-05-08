<template>
  <div class="prof-leatherworking general-conainer" ref="containerRef">
    <div class="inner general-inner">
      <Anchor class="general-anchor" :anchor-params="anchorParams"></Anchor>
      <div class="title-1" id="intro">简介</div>
      <div class="title-1" id="benifit">收益</div>
      <div class="title-1" id="leveling">技能提升</div>
      <div>根据不同的实际情况，冲级所用材料和成本与攻略可能会有一定出入，可自行调整</div>
      <div class="flex-align-center">原帖地址：<WebLink title="[作业贴][4.3.3版本] 制皮1-525攻略" url="https://bbs.nga.cn/read.php?tid=4977051" author="bjhhh" /></div>
      <div class="title-2" id="leveling-shortcut">捷径配方</div>
      <div class="mt-9 flex-align-center">
        <DatabaseNav type="item" id="4294" name="图样：山地腰带" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">中皮*8 智慧药剂*1 细线*2</div>
        <ProfSkillLevelStep :steps="[120, 145, 157, 170]" class="mr-18"></ProfSkillLevelStep>
        来源：20-25左右世界掉落，多蹲蹲拍卖行
      </div>
      <div class="mt-9 flex-align-center">
        <DatabaseNav type="item" id="7449" name="图样：暗色皮护腿" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">重皮*10 黑色染料*1 细线*2</div>
        <ProfSkillLevelStep :steps="[165, 185, 195, 205]" class="mr-18"></ProfSkillLevelStep>
        来源：30-40左右世界掉落，多蹲蹲拍卖行
      </div>
      <div class="mt-9 flex-align-center">
        <DatabaseNav type="item" id="4096" name="图样：迅猛龙皮背心" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">重皮*4 迅猛龙的外皮*6 细线*2</div>
        <ProfSkillLevelStep :steps="[165, 185, 195, 205]" class="mr-18"></ProfSkillLevelStep>
        来源：<span class="clr-r mr-9">部落限定</span>来源：阿拉希高地落锤镇"吞克"出售
      </div>
      <div class="mt-9 flex-align-center">
        <DatabaseNav type="item" id="13288" name="图样：迅猛龙皮腰带" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">重皮*4 迅猛龙的外皮*4 细线*2</div>
        <ProfSkillLevelStep :steps="[165, 185, 195, 205]" class="mr-18"></ProfSkillLevelStep>
        来源：<span class="clr-r mr-9">联盟限定</span>来源：阿拉希高避难谷地"安多德·法德兰"出售
      </div>
      <div class="mt-9 flex-align-center">
        <DatabaseNav type="item" id="10531" name="图样：巫毒面具" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">厚皮*8 粗丝线*1</div>
        <ProfSkillLevelStep :steps="[220, 240, 250, 260]" class="mr-18"></ProfSkillLevelStep>
        来源：40-50左右世界掉落，多蹲蹲拍卖行
      </div>
      <div class="mt-9 flex-align-center">
        <DatabaseNav type="item" id="19063" name="图样：奇美拉长靴" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">硬甲皮*4 生命精华*1 符文线*1</div>
        <ProfSkillLevelStep :steps="[275, 295, 305, 315]" class="mr-18"></ProfSkillLevelStep>
        来源：55左右旧世界掉落，多蹲蹲拍卖行
      </div>
      <div class="mt-9 flex-align-center">
        <DatabaseNav type="item" id="19073" name="图样：奇美拉护腿" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">硬甲皮*8 生命精华*1 符文线*1</div>
        <ProfSkillLevelStep :steps="[280, 300, 310, 320]" class="mr-18"></ProfSkillLevelStep>
        来源：55左右旧世界掉落，多蹲蹲拍卖行
      </div>
      <div class="title-2" id="leveling-stage-1">轻皮</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage1" />
      <div class="title-2" id="leveling-stage-2">中皮</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage2" />
      <div class="title-2" id="leveling-stage-3">重皮</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage3" />
      <div class="title-2" id="leveling-stage-4">厚皮</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage4" />
      <div class="title-2" id="leveling-stage-5">硬甲皮</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage5" />
      <div class="title-2" id="leveling-stage-6">结缔皮</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage6" />
      <div class="title-2" id="leveling-stage-7">北地皮</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage7" />
      <div class="title-2" id="leveling-stage-8">蛮皮</div>
      500以后做377韧装冲点
      <ProfSkillLevelItem :data-arr="levelingData.stage8" />

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
        { href: '#leveling-stage-1', title: '轻皮' },
        { href: '#leveling-stage-2', title: '中皮' },
        { href: '#leveling-stage-3', title: '重皮' },
        { href: '#leveling-stage-4', title: '厚皮' },
        { href: '#leveling-stage-5', title: '硬甲皮' },
        { href: '#leveling-stage-6', title: '结缔皮' },
        { href: '#leveling-stage-7', title: '北地皮' },
        { href: '#leveling-stage-8', title: '蛮皮' },
      ]
    },
    { href: '#branch', title: '分支专精' },
  ]
})

const levelingData = {
  stage1: [
    { range: '1-35', name: '轻皮', id: '2881', cost: '破烂的皮革*3', steps: [1, 20, 30, 40], notice: '轻型护甲片可替' },
    { range: '36-65', name: '熟化轻毛皮', id: '3816', cost: '轻毛皮*1 盐*1', steps: [35, 55, 65, 75], notice: '轻型护甲片 + 手工皮披风 + 雕花皮手套可替' },
    { range: '66-96', name: '雕花皮手套', id: '3756', cost: '轻皮*3 粗线*2', steps: [55, 85, 100, 115], notice: '' },
    { range: '97-110', name: '优质皮带', id: '3763', cost: '轻皮*6 粗线*2', steps: [80, 110, 125, 140], notice: '后续有用' },
  ],
  stage2: [
    { range: '121-127', name: '熟化中毛皮', id: '3817', cost: '中毛皮*1 盐*1', steps: [100, 115, 122, 130], notice: '后续有用。中型护甲片可替' },
    { range: '128-135', name: '黑皮战靴', id: '2167', cost: '中皮*4 细线*2 灰色染料*1', steps: [100, 125, 137, 150], notice: '' },
    { range: '136-145', name: '黑皮腰带', id: '3766', cost: '优质皮带*1 熟化中毛皮*1 细线*2 灰色染料*1', steps: [125, 150, 162, 175], notice: '黑皮披风可替' },
    { range: '146-150', name: '山地护肩', id: '3768', cost: '中皮*4 熟化中毛皮*1 细线*1', steps: [130, 155, 167, 180], notice: '材料多可从135开始替。山地皮手套、轻巧的皮手套、山地腰带可替' },
  ],
  stage3: [
    { range: '151-180', name: '山地披风', id: '3760', cost: '重皮*5 细线*2', steps: [150, 170, 180, 190], notice: '熟化重毛皮可替151-160' },
    { range: '181-185', name: '守护短裤', id: '7147', cost: '重皮*12 细线*2 丝绸卷*2', steps: [160, 180, 190, 200], notice: '暗色皮护腿、迅猛龙皮背心/迅猛龙皮腰带可替180-190' },
    { range: '186-200', name: '暗色护腕', id: '9201', cost: '重皮*16 丝线*2 黑色染料*1', steps: [185, 205, 215, 225], notice: '守护手套、暗色皮甲可替190-200' },
  ],
  stage4: [
    { range: '201-205', name: '厚重护甲片', id: '10487', cost: '厚皮*5 丝线*1', steps: [200, 220, 230, 240], notice: '' },
    { range: '206-235', name: '夜色头带', id: '10507', cost: '厚皮*5 丝线*2', steps: [205, 225, 235, 245], notice: '' },
    { range: '236-250', name: '夜色短裤', id: '10548', cost: '厚皮*14 丝线*4', steps: [230, 250, 260, 270], notice: '捷径：巫毒面具' },
  ],
  stage5: [
    { range: '251-265', name: '毛皮护甲片', id: '19058', cost: '硬甲皮*5', steps: [250, 255, 265, 275], notice: '熟化毛皮可替251-260' },
    { range: '266-285', name: '邪恶皮甲护腕', id: '19052', cost: '硬甲皮*8 黑色染料*1 符文线*1', steps: [265, 285, 295, 305], notice: '奇美拉长靴，奇美拉护腿可替275-300' },
    { range: '286-300', name: '邪恶皮甲头环', id: '19071', cost: '硬甲皮*12 黑色染料*1 符文线*1', steps: [280, 300, 310, 320], notice: '' },
  ],
  stage6: [
    { range: '301-325', name: '结缔皮护甲片', id: '32456', cost: '结缔皮*4', steps: [300, 310, 325, 340], notice: '结缔皮可替301-310' },
    { range: '326-335', name: '重结缔皮', id: '32455', cost: '结缔皮*5', steps: [325, 325, 330, 335], notice: '' },
    { range: '336-350', name: '厚重德莱尼外套', id: '32473', cost: '重结缔皮*3 符文线*3', steps: [330, 340, 350, 360], notice: '缀鳞德拉诺长靴可替' },
  ],
  stage7: [
    { range: '351-380', name: '北地护甲片', id: '50962', cost: '北地皮*4', steps: [350, 375, 380, 385], notice: '北地皮可替350-375' },
    { range: '381-390', name: '极地长靴', id: '50948', cost: '北地皮*8', steps: [370, 385, 395, 405], notice: '' },
    { range: '391-405', name: '厚北地皮', id: '50936', cost: '北地皮*6', steps: [390, 395, 405], notice: '' },
    { range: '405-410', name: '黑暗蛛魔护腿', id: '60627', cost: '厚北地皮*4 水之结晶*5', steps: [395, 410, 420, 430], notice: '' },
    { range: '411-415', name: '毛皮衬垫 - 耐力', id: '57690', cost: '极地毛皮*1', steps: [400, 425, 430, 435], notice: '同类可替' },
    { range: '416-425', name: '无尽口袋', id: '60643', cost: '厚北地皮*8', steps: [415, 420, 422, 425], notice: '阴云护腕可替' },
  ],
  stage8: [
    { range: '426-455', name: '蛮皮护甲片', id: '78379', cost: '蛮皮*5', steps: [450, 452, 455], notice: '蛮皮、暗黑铭牌护腕、重蛮皮可替' },
    { range: '456-465', name: '暗黑铭牌腰带', id: '78416', cost: '蛮皮*7 恒金线*1', steps: [425, 465, 470, 475], notice: '' },
    { range: '460-473', name: '野人斗篷', id: '78380', cost: '蛮皮*7 恒金线*1', steps: [425, 470, 475, 480], notice: '' },
    { range: '471-478', name: '暗黑铭牌之靴', id: '78407', cost: '蛮皮*10 恒金线*1', steps: [425, 475, 480, 485], notice: '' },
    { range: '476-480', name: '海啸束带', id: '78396', cost: '蛮皮*12 恒金线*1', steps: [425, 480, 485, 490], notice: '' },
    { range: '481-485', name: '暮光腿甲', id: '78420', cost: '蛮皮*6 动燃之水*4', steps: [425, 490, 495, 500], notice: '焦毁腿甲、海啸护腿、暗黑铭牌胸甲可替' },
    { range: '486-490', name: '重蛮皮', id: '78436', cost: '蛮皮*5', steps: [425, 485, 487, 490], notice: '' },
    { range: '491-496', name: '暗黑铭牌护腿', id: '78433', cost: '重蛮皮*4 动燃之土*12', steps: [425, 495, 500, 505], notice: '' },
    { range: '497-500', name: '暗黑铭牌之盔', id: '78424', cost: '重蛮皮*5', steps: [425, 505, 507, 510], notice: '' },
  ],
}
</script>

<style lang="scss" scoped>
.prof-leatherworking{
  .inner {
  }
}
</style>