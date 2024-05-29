<template>
  <div class="prof-echarting general-conainer" ref="containerRef">
    <div class="inner general-inner">
      <Anchor class="general-anchor" :anchor-params="anchorParams"></Anchor>
      <div class="title-1" id="intro">简介</div>
      <div class="mt-9">分解装备获取附魔材料，利用附魔材料为装备附魔(添加额外属性)</div>
      <div class="title-1" id="benifit">收益</div>
      <div class="mt-9">戒指附魔:  <DatabaseNav type="spell" :id="74215" name="附魔戒指-力量" class="mr-9" /><DatabaseNav type="spell" :id="74216" name="附魔戒指-敏捷" class="mr-9" /><DatabaseNav type="spell" :id="74217" name="附魔戒指-智力" class="mr-9" /><DatabaseNav type="spell" :id="74218" name="附魔戒指-强效耐力" class="mr-9" />额外收益等效2颗蓝色宝石</div>
      <div class="title-1" id="leveling">技能提升</div>
      <div class="mt-9">根据不同的实际情况，冲级所用材料和成本与攻略可能会有一定出入，可自行调整</div>
      <div>附魔棒额外材料：银棒*1 金棒*1 彩色珍珠*1 真银棒*1 黑珍珠*1 奥金棒*1 魔铁棒*1 精金棒*1 恒金棒*1 泰坦神铁棒*1 源质棒*1</div>
      <div class="flex-align-center">原帖地址：<WebLink title="[御前比武大会] 附魔1-525心得" url="https://bbs.nga.cn/read.php?tid=4321214" author="vivid_lai" /></div>
      <div class="title-2" id="leveling-shortcut">捷径配方</div>
      <div class="mt-9 flex-align-center">
        <DatabaseNav type="item" id="11101" name="公式：附魔护腕 - 次级力量" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">灵魂之尘*2</div>
        <ProfSkillLevelStep :steps="[140, 165, 185, 205]" class="mr-18"></ProfSkillLevelStep>
        来源：联盟-灰谷阿斯特兰纳-达利亚出售；部落-石爪山脉烈日石居-库尔维亚出售
      </div>
      <div class="mt-9 flex-align-center">
        <DatabaseNav type="item" id="16215" name="公式：附魔靴子 - 强效耐力" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">梦境之尘*5</div>
        <ProfSkillLevelStep :steps="[260, 280, 300, 320]" class="mr-18"></ProfSkillLevelStep>
        来源：50+左右旧世界掉落，多蹲蹲拍卖行
      </div>
      <div class="mt-9 flex-align-center">
        <DatabaseNav type="item" id="16217" name="公式：附魔盾牌 - 强效耐力" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">梦境之尘*5</div>
        <ProfSkillLevelStep :steps="[265, 285, 305, 325]" class="mr-18"></ProfSkillLevelStep>
        来源：联盟-达纳苏斯工匠区-迈斯林迪尔出售；部落-幽暗城中间-丹尼尔·巴特莱特出售
      </div>
      <div class="mt-9 flex-align-center">
        <DatabaseNav type="item" id="22563" name="公式：超级巫师之油" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">奥法之尘*3 噩梦藤*1 水晶瓶*1</div>
        <ProfSkillLevelStep :steps="[340, 340, 350, 360]" class="mr-18"></ProfSkillLevelStep>
        来源：沙塔斯贫民窟南端，卢比夫人出售，顺便购买公式：大块棱光碎片
      </div>
      <div class="title-2" id="leveling-stage-1">符文铜棒 符文银棒 符文金棒</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage1" />
      <div class="title-2" id="leveling-stage-4">符文真银棒</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage2" />
      <div class="title-2" id="leveling-stage-5">符文奥金棒 符文魔铁棒 符文精金棒</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage3" />
      <div class="title-2" id="leveling-stage-8">符文恒金棒</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage4" />
      <div class="title-2" id="leveling-stage-8">符文泰坦神铁棒 符文源质棒</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage5" />
      <div style="height: 36px;"></div>
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
        { href: '#leveling-stage-1', title: '铜棒 银棒 金棒' },
        { href: '#leveling-stage-2', title: '真银棒' },
        { href: '#leveling-stage-3', title: '奥金棒 魔铁棒 精金棒' },
        { href: '#leveling-stage-4', title: '恒金棒' },
        { href: '#leveling-stage-5', title: '泰坦神铁棒 源质棒' },
      ]
    }
  ]
})

const levelingData = {
  stage1: [
    { range: '1-2', name: '符文铜棒', id: '7421', cost: '铜棒*1 奇异之尘*1 次级魔法精华*1', steps: [1, 5, 7, 10], notice: '铜棒在附魔材料商买' },
    { range: '3-90', name: '附魔护腕 - 初级生命', id: '7418', cost: '奇异之尘*1', steps: [70, 90, 110], notice: '拆装备可替' },
    { range: '91-129', name: '强效魔法杖', id: '14807', cost: '强效魔法精华*1 普通木柴*1', steps: [70, 110, 130, 150], notice: '附魔护腕 - 初级耐力可替到120' },
    { range: '130-130', name: '符文银棒', id: '7795', cost: '符文铜棒*1 奇异之尘*8 强效魔法精华*3 银棒*1', steps: [100, 130, 150, 170], notice: '' },
    { range: '131-155', name: '附魔护腕 - 次级耐力', id: '13501', cost: '中皮*4 细线*2 灰色染料*1', steps: [130, 155, 175, 195], notice: '' },
    { range: '156-156', name: '符文金棒', id: '13628', cost: '符文银棒*1 彩色珍珠*1 强效星界精华*2 灵魂之尘*2 金棒*1', steps: [150, 175, 195, 215], notice: '' },
    { range: '157-180', name: '附魔护腕 - 次级力量', id: '13536', cost: '灵魂之尘*2', steps: [140, 165, 185, 205], notice: '附魔护腕 - 精神可替' },
    { range: '181-219', name: '附魔护腕 - 力量', id: '13661', cost: '幻象之尘*1', steps: [180, 200, 220, 240], notice: '' },
  ],
  stage2: [
    { range: '220-220', name: '符文真银棒', id: '13702', cost: '符文金棒*1 黑珍珠*1 强效秘法精华*2 幻象之尘*2 真银棒*1', steps: [200, 220, 240, 260], notice: '' },
    { range: '221-245', name: '附魔披风 - 强效防御', id: '13746', cost: '幻象之尘*3', steps: [205, 225, 245, 265], notice: '' },
    { range: '246-255', name: '附魔靴子 - 耐力', id: '13836', cost: '幻象之尘*5', steps: [215, 235, 255, 275], notice: '' },
    { range: '256-260', name: '附魔胸甲 - 超强生命', id: '13858', cost: '幻象之尘*6', steps: [220, 240, 260, 280], notice: '' },
    { range: '261-299', name: '附魔靴子 - 强效耐力', id: '20020', cost: '梦境之尘*5', steps: [260, 280, 300, 320], notice: '' },
  ],
  stage3: [
    { range: '300-300', name: '符文奥金棒', id: '20051', cost: '符文真银棒*1 幻影之尘*10 强效不灭精华*4 大块魔光碎片*2 奥金棒*1', steps: [290, 305, 322, 340], notice: '' },
    { range: '301-301', name: '符文魔铁棒', id: '32664', cost: '符文奥金棒*1 强效不灭精华*4 大块魔光碎片*6 魔铁棒*1', steps: [300, 310, 325, 340], notice: '' },
    { range: '302-315', name: '附魔护腕 - 次级突袭', id: '34002', cost: '奥法之尘*6', steps: [300, 310, 325, 340], notice: '' },
    { range: '316-330', name: '附魔护腕 - 强壮', id: '27899', cost: '奥法之尘*6', steps: [305, 315, 330, 345], notice: '' },
    { range: '331-335', name: '附魔手套 - 突袭', id: '33996', cost: '奥法之尘*8', steps: [310, 320, 335, 350], notice: '' },
    { range: '336-340', name: '附魔胸甲 - 特效精神', id: '19071', cost: '强效位面精华*2', steps: [320, 330, 345, 360], notice: '' },
    { range: '341-350', name: '超级巫师之油', id: '28019', cost: '奥法之尘*3 噩梦藤*1 水晶瓶*1', steps: [340, 340, 350, 360], notice: '' },
    { range: '351-351', name: '符文精金棒', id: '32665', cost: '符文魔铁棒*1 源生之能*1 强效位面精华*8 大块棱光碎片*8 精金棒*1', steps: [350, 370, 375, 380], notice: '' },
    { range: '352-360', name: '附魔披风 - 速度', id: '60609', cost: '无限之尘*6', steps: [350, 360, 370, 380], notice: '' },
    { range: '361-375', name: '附魔护腕 - 突袭', id: '60616', cost: '无限之尘*6', steps: [360, 370, 380, 390], notice: '' },
  ],
  stage4: [
    { range: '376-376', name: '符文恒金棒', id: '32667', cost: '符文魔铁棒*1 强效位面精华*6 奥法之尘*6 恒金棒*1', steps: [350, 375, 380, 385], notice: '' },
    { range: '377-380', name: '附魔护腕 - 突袭', id: '60616', cost: '无限之尘*6', steps: [360, 370, 380, 390], notice: '' },
    { range: '381-390', name: '附魔护腕 - 优异智力', id: '44555', cost: '无限之尘*10', steps: [375, 385, 392, 400], notice: '' },
    { range: '391-400', name: '附魔靴子 - 履冰', id: '60623', cost: '无限之尘*8 水之结晶*1', steps: [385, 395, 405, 415], notice: '' },
    { range: '401-415', name: '附魔披风 - 超强敏捷', id: '44500', cost: '无限之尘*9', steps: [395, 405, 415, 425], notice: '' },
    { range: '416-425', name: '附魔手套 - 精准', id: '44484', cost: '无限之尘*12', steps: [405, 415, 425, 435], notice: '' },
  ],
  stage5: [
    { range: '426-426', name: '符文泰坦神铁棒', id: '60619', cost: '符文恒金棒*1 无限之尘*12 强效宇宙精华*4 梦境裂片*2 泰坦神铁棒*1', steps: [425, 435, 445, 455], notice: '' },
    { range: '427-450', name: '附魔靴子 - 土灵活力', id: '74189', cost: '催眠之尘*2', steps: [440, 450, 460], notice: '' },
    { range: '451-460', name: '附魔披风 - 强效法术穿刺', id: '74192', cost: '催眠之尘*3', steps: [450, 460, 470], notice: '' },
    { range: '461-475', name: '附魔手套 - 急速', id: '74198', cost: '催眠之尘*4 次级天界精华*1', steps: [465, 475, 485], notice: '' },
    { range: '476-490', name: '附魔手套 - 优异力量', id: '74212', cost: '催眠之尘*3 强效天界精华*2', steps: [480, 490, 500], notice: '' },
    { range: '491-500', name: '附魔盾牌 - 精通', id: '74226', cost: '催眠之尘*12', steps: [495, 505, 515], notice: '' },
    { range: '501-520', name: '附魔披风 - 保护', id: '74234', cost: '催眠之尘*8 强效天界精华*3', steps: [510, 520, 530], notice: '附魔副手 - 超强智力可替' },
    { range: '521-525', name: '符文源质棒', id: '92370', cost: '符文泰坦神铁棒*1 催眠之尘*10 强效天界精华*6 天界碎片*6 源质棒*1', steps: [515, 525, 525, 525], notice: '' },
  ],
}
</script>

<style lang="scss" scoped>
.prof-echarting{
  .inner {
  }
}
</style>