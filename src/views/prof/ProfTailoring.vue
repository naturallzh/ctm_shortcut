<template>
  <div class="prof-tailoring general-conainer" ref="containerRef">
    <div class="inner general-inner">
      <Anchor class="general-anchor" :anchor-params="anchorParams"></Anchor>
      <div class="title-1" id="intro">简介</div>
      <div class="title-1" id="benifit">收益</div>
      <div class="title-1" id="leveling">技能提升</div>

      <div class="title-2" id="leveling-shortcut">捷径配方</div>
      <div class="mt-9 flex-align-center">
        <DatabaseNav type="item" id="14627" name="图样-淡黄色衬衣" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">丝绸卷*1 黄色染料*1 细线*1</div>
        <ProfSkillLevelStep :steps="[135, 145, 150, 155]" class="mr-18"></ProfSkillLevelStep>
        <span class="clr-r mr-9">联盟限定</span>来源：夜色镇裁缝供应商"丹尼勒·希普斯迪"出售
      </div>
      <div class="mt-9 flex-align-center">
        <DatabaseNav type="item" id="10301" name="图样-白色强盗面罩" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">魔纹布卷*1 漂白液*1 粗丝线*1</div>
        <ProfSkillLevelStep :steps="[215, 220, 225, 230]" class="mr-18"></ProfSkillLevelStep>
        来源：40-50左右世界掉落，多蹲蹲拍卖行
      </div>

      <div class="title-2" id="leveling-main">冲级攻略</div>
      <div>根据不同的实际情况，冲级所用材料和成本与攻略可能会有一定出入，可自行调整</div>
      <div class="flex-align-center">原帖地址：<el-button link type="primary" @click="utils.openUrl('https://ngabbs.com/read.php?tid=4330970&rand=657')">​[御前比武大会]裁缝1-525</el-button>—— 暗之魔妃</div>
      <div class="title-3" id="leveling-stage-1">亚麻布</div>
      <div class="mt-9 flex-align-center" v-for="item of levelingData.stage1">
        <span class="wd-100 mr-9 fw-b clr-o">{{ item.range }}</span>
        <DatabaseNav type="spell" :id="item.id" :name="item.name" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">{{ item.cost }}</div>
        <ProfSkillLevelStep :steps="item.steps" class="mr-18"></ProfSkillLevelStep>
        <span v-show="item.notice">{{ item.notice }}</span>
      </div>
      <div class="title-3" id="leveling-stage-2">毛料</div>
      根据毛料和丝绸的价格决定是否尽快进入丝绸阶段
      <div class="mt-9 flex-align-center" v-for="item of levelingData.stage2">
        <span class="wd-100 mr-9 fw-b clr-o">{{ item.range }}</span>
        <DatabaseNav type="spell" :id="item.id" :name="item.name" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">{{ item.cost }}</div>
        <ProfSkillLevelStep :steps="item.steps" class="mr-18"></ProfSkillLevelStep>
        <span v-show="item.notice">{{ item.notice }}</span>
      </div>
      <div class="title-3" id="leveling-stage-3">丝绸</div>
      根据丝绸和魔纹布的价格决定是否尽快进入魔纹布阶段 (通常魔纹布较贵)
      <div class="mt-9 flex-align-center" v-for="item of levelingData.stage3">
        <span class="wd-100 mr-9 fw-b clr-o">{{ item.range }}</span>
        <DatabaseNav type="spell" :id="item.id" :name="item.name" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">{{ item.cost }}</div>
        <ProfSkillLevelStep :steps="item.steps" class="mr-18"></ProfSkillLevelStep>
        <span v-show="item.notice">{{ item.notice }}</span>
      </div>
      <div class="title-3" id="leveling-stage-4">魔纹布</div>
      <div class="mt-9 flex-align-center" v-for="item of levelingData.stage4">
        <span class="wd-100 mr-9 fw-b clr-o">{{ item.range }}</span>
        <DatabaseNav type="spell" :id="item.id" :name="item.name" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">{{ item.cost }}</div>
        <ProfSkillLevelStep :steps="item.steps" class="mr-18"></ProfSkillLevelStep>
        <span v-show="item.notice">{{ item.notice }}</span>
      </div>
      <div class="title-3" id="leveling-stage-5">符文布</div>
      <div class="mt-9 flex-align-center" v-for="item of levelingData.stage5">
        <span class="wd-100 mr-9 fw-b clr-o">{{ item.range }}</span>
        <DatabaseNav type="spell" :id="item.id" :name="item.name" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">{{ item.cost }}</div>
        <ProfSkillLevelStep :steps="item.steps" class="mr-18"></ProfSkillLevelStep>
        <span v-show="item.notice">{{ item.notice }}</span>
      </div>
      <div class="title-3" id="leveling-stage-6">灵纹布</div>
      提前准备2组左右的结缔皮
      <div class="mt-9 flex-align-center" v-for="item of levelingData.stage6">
        <span class="wd-100 mr-9 fw-b clr-o">{{ item.range }}</span>
        <DatabaseNav type="spell" :id="item.id" :name="item.name" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">{{ item.cost }}</div>
        <ProfSkillLevelStep :steps="item.steps" class="mr-18"></ProfSkillLevelStep>
        <span v-show="item.notice">{{ item.notice }}</span>
      </div>
      <div class="title-3" id="leveling-stage-7">霜纹布</div>
      提前准备2组左右的无限之尘
      <div class="mt-9 flex-align-center" v-for="item of levelingData.stage7">
        <span class="wd-100 mr-9 fw-b clr-o">{{ item.range }}</span>
        <DatabaseNav type="spell" :id="item.id" :name="item.name" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">{{ item.cost }}</div>
        <ProfSkillLevelStep :steps="item.steps" class="mr-18"></ProfSkillLevelStep>
        <span v-show="item.notice">{{ item.notice }}</span>
      </div>
      <div class="title-3" id="leveling-stage-8">烬丝布</div>
      如果只需要裁缝福利可以先练到500，后面的慢慢靠点梦幻布升
      <div class="mt-9 flex-align-center" v-for="item of levelingData.stage8">
        <span class="wd-100 mr-9 fw-b clr-o">{{ item.range }}</span>
        <DatabaseNav type="spell" :id="item.id" :name="item.name" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">{{ item.cost }}</div>
        <ProfSkillLevelStep :steps="item.steps" class="mr-18"></ProfSkillLevelStep>
        <span v-show="item.notice">{{ item.notice }}</span>
      </div>

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
        { href: '#leveling-main', title: '冲级攻略',
          subs: [
            { href: '#leveling-stage-1', title: '亚麻布' },
            { href: '#leveling-stage-2', title: '毛料' },
            { href: '#leveling-stage-3', title: '丝绸' },
            { href: '#leveling-stage-4', title: '魔纹布' },
            { href: '#leveling-stage-5', title: '符文布' },
            { href: '#leveling-stage-6', title: '灵纹布' },
            { href: '#leveling-stage-7', title: '霜纹布' },
            { href: '#leveling-stage-8', title: '烬丝布' },
          ]
        },
      ]
    },
    { href: '#branch', title: '分支专精' },
  ]
})

const levelingData = {
  stage1: [
    { range: '1-30', name: '亚麻布卷', id: '2963', cost: '亚麻布*2', steps: [1, 25, 37, 50], notice: '如果亚麻布便宜可以适当多搓几点' },
    { range: '31-50', name: '亚麻腰带', id: '8776', cost: '亚麻布卷*1 粗线*1', steps: [15, 50, 67, 85], notice: '' },
    { range: '51-65', name: '蓝色亚麻衬衣', id: '2394', cost: '亚麻布卷*2 粗线*1 蓝色染料*1', steps: [40, 65, 82, 100], notice: '' },
    { range: '66-85', name: '强化亚麻斗篷', id: '2397', cost: '亚麻布卷*2 粗线*3', steps: [60, 85, 102, 120], notice: '' },
  ],
  stage2: [
    { range: '86-95', name: '毛布卷', id: '2964', cost: '毛料*3', steps: [75, 90, 97, 105], notice: '' },
    { range: '96-110', name: '绿色毛纺外衣', id: '2399', cost: '毛布卷*1 细线*2 绿色染料*1', steps: [85, 110, 127, 145], notice: '' },
    { range: '111-125', name: '双线毛纺护肩', id: '3848', cost: '毛布卷*1 细线*2', steps: [110, 135, 152, 170], notice: '' },
  ],
  stage3: [
    { range: '126-140', name: '丝绸卷', id: '3839', cost: '丝绸*4', steps: [125, 135, 140, 145], notice: '' },
    { range: '141-145', name: '碧蓝丝质短裤', id: '8758', cost: '丝绸卷*4 细线*1 蓝色染料*2', steps: [140, 160, 175, 190], notice: '捷径：淡黄色衬衣' },
    { range: '146-155', name: '碧蓝丝质头巾', id: '8760', cost: '丝绸卷*2 细线*1 蓝色染料*2', steps: [145, 155, 160, 165], notice: '捷径：淡黄色衬衣' },
    { range: '156-165', name: '黑丝衬衣', id: '3870', cost: '丝绸卷*2 细线*1 灰色染料*2', steps: [155, 165, 170, 175], notice: '' },
    { range: '166-170', name: '白色冒险衬衣', id: '8483', cost: '丝绸卷*3 丝线*1 漂白液*2', steps: [160, 170, 175, 180], notice: '' },
    { range: '171-175', name: '体面的白衬衣', id: '3871', cost: '丝绸卷*3 细线*1 漂白液*2', steps: [170, 180, 185, 190], notice: '' },
    { range: '176-185', name: '红色冒险者衬衣', id: '8489', cost: '丝绸卷*3 丝线*1 红色染料*2', steps: [175, 185, 190, 195], notice: '魔纹布卷可替' },
    { range: '186-195', name: '碧蓝丝质披风', id: '8786', cost: '丝绸卷*3 细线*2 蓝色染料*2', steps: [175, 195, 210, 225], notice: '' },
    { range: '196-200', name: '深红丝质外衣', id: '8791', cost: '丝绸卷*4 细线*2 红色染料*2', steps: [185, 205, 215, 225], notice: '' },
    { range: '201-215', name: '深红丝质马裤', id: '8799', cost: '丝绸卷*4 丝线*2 红色染料*2', steps: [195, 215, 225, 235], notice: '' },
  ],
  stage4: [
    { range: '216-220', name: '橙色魔纹衬衣', id: '12061', cost: '魔纹布卷*1 粗丝线*1 橙色染料*1', steps: [215, 220, 225, 230], notice: '捷径：白色强盗面罩' },
    { range: '221-225', name: '橙色军用衬衣', id: '12064', cost: '魔纹布卷*2 粗丝线*1 橙色染料*2', steps: [220, 225, 230, 235], notice: '捷径：白色强盗面罩' },
    { range: '226-230', name: '魔纹包', id: '12065', cost: '魔纹布卷*4 丝线*2', steps: [225, 240, 255, 270], notice: '捷径：白色强盗面罩' },
    { range: '231-235', name: '紫色魔纹衬衣', id: '12075', cost: '魔纹布卷*2 粗丝线*1 紫色染料*2', steps: [230, 235, 240, 245], notice: '' },
    { range: '236-240', name: '粉色魔纹衬衣', id: '12080', cost: '魔纹布卷*3 粗丝线*1 粉色染料*1', steps: [235, 240, 245, 250], notice: '' },
    { range: '241-245', name: '黑色魔纹头带', id: '12072', cost: '魔纹布卷*3 粗丝线*2', steps: [230, 245, 260, 275], notice: '将军之帽可替，海盗帽造型幻化用' },
    { range: '246-250', name: '礼服短裤', id: '12089', cost: '魔纹布卷*4 粗丝线*3', steps: [245, 250, 255, 260], notice: '裁缝供应商购买图纸，联盟铁炉堡，部落幽暗城' },
  ],
  stage5: [
    { range: '251-255', name: '符文布卷', id: '18401', cost: '符文布*4', steps: [250, 255, 257, 260], notice: '符文布用量较大，可以先搓个25-30组，多在这混几点' },
    { range: '256-275', name: '符文布腰带', id: '18402', cost: '符文布卷*3 符文线*1', steps: [255, 270, 285, 300], notice: '' },
    { range: '276-295', name: '符文布手套', id: '18417', cost: '符文布卷*5 符文线*2', steps: [275, 290, 305, 320], notice: '' },
    { range: '296-300', name: '符文布头带', id: '18444', cost: '符文布卷*6 符文线*2', steps: [295, 310, 325, 340], notice: '' },
  ],
  stage6: [
    { range: '301-315', name: '灵纹布卷', id: '26745', cost: '灵纹布*5', steps: [300, 305, 315, 325], notice: '' },
    { range: '316-325', name: '灵纹布包', id: '26746', cost: '灵纹布卷*4 符文线*1', steps: [315, 320, 330, 340], notice: '有一定市场，酌情多搓点' },
    { range: '326-330', name: '灵纹手套', id: '26770', cost: '灵纹布卷*4 符文线*1 结缔皮*2', steps: [320, 330, 335, 340], notice: '' },
    { range: '331-335', name: '灵纹短裤', id: '26771', cost: '灵纹布卷*6 符文线*1', steps: [325, 335, 340, 345], notice: '' },
    { range: '336-345', name: '灵纹长靴', id: '26772', cost: '灵纹布卷*6 符文线*1 结缔皮*2', steps: [333, 345, 350, 355], notice: '' },
    { range: '346-350', name: '灵纹长袍', id: '26773', cost: '灵纹布卷*8 符文线*2', steps: [340, 350, 355, 360], notice: '' },
  ],
  stage7: [
    { range: '351-370', name: '霜纹布卷', id: '55899', cost: '霜纹布*5', steps: [350, 370, 372, 375], notice: '' },
    { range: '371-385', name: '霜纹腰带', id: '55908', cost: '霜纹布卷*3 恒金线*1', steps: [370, 380, 390, 400], notice: '' },
    { range: '386-395', name: '霜纹护腿', id: '56030', cost: '霜纹布卷*5 恒金线*1', steps: [380, 390, 400, 410], notice: '霜纹罩帽可替' },
    { range: '396-400', name: '暮纹腰带', id: '55914', cost: '霜纹布卷*7 恒金线*1', steps: [395, 400, 405, 410], notice: '' },
    { range: '400-410', name: '暮纹裹腕', id: '55920', cost: '霜纹布卷*8 恒金线*1', steps: [400, 410, 415, 420], notice: '黄色伐木工衬衫可替5点' },
    { range: '411-425', name: '转化月影布', id: '56001', cost: '魔化霜纹布卷*1 永恒生命*2', steps: [415, 425, 430, 435], notice: '转化乌纹布、转化法纹布可替，元素材料拍卖行或冬拥湖刷' },
  ],
  stage8: [
    { range: '426-445', name: '烬丝布卷', id: '74964', cost: '烬丝布*5', steps: [440, 445, 450], notice: '' },
    { range: '446-460', name: '逝亡之丝束带', id: '75248', cost: '烬丝布卷*2 恒金线*2', steps: [455, 460, 465], notice: '逝亡之丝护腕可替' },
    { range: '461-465', name: '逝亡之丝裹腿', id: '75254', cost: '烬丝布卷*3 恒金线*2', steps: [465, 470, 475], notice: '' },
    { range: '466-475', name: '逝亡之丝罩帽', id: '75256', cost: '烬丝布卷*3 恒金线*2', steps: [470, 475, 480], notice: '' },
    { range: '476-480', name: '愈心之靴', id: '75261', cost: '烬丝布卷*4 恒金线*2', steps: [480, 485, 490], notice: '' },
    { range: '481-490', name: '愈心护手', id: '75262', cost: '烬丝布卷*4 恒金线*2', steps: [485, 490, 495], notice: '愈心长裤可替' },
    { range: '491-500', name: '愈心长袍', id: '75267', cost: '烬丝布卷*6 恒金线*2', steps: [500, 502, 505], notice: '' },
    { range: '501-505', name: '恶毒织焰护腕', id: '75290', cost: '烬丝布卷*6 动燃之火*3 动燃空气*3', steps: [505, 510, 515], notice: '500以后都是韧装，酌情制作，记得点梦幻布' },
    { range: '506-510', name: '恶毒烬丝肩垫', id: '75291', cost: '烬丝布卷*6 动燃之水*3 动燃之火*3', steps: [510, 515, 520], notice: '' },
    { range: '511-515', name: '恶毒织焰腰带', id: '75269', cost: '烬丝布卷*6 动燃之火*3 动燃空气*3', steps: [515, 520, 525], notice: '' },
    { range: '516-520', name: '恶毒烬丝手套', id: '75295', cost: '烬丝布卷*10 动燃之水*4 动燃之火*4', steps: [520, 525, 530], notice: '恶毒织焰之靴可替' },
    { range: '521-525', name: '恶毒织焰裹手', id: '75296', cost: '烬丝布卷*10 动燃之火*4 动燃空气*4', steps: [525, 530, 535], notice: '' },
  ],
}
</script>

<style lang="scss" scoped>
.prof-tailoring{
  .inner {
  }
}
</style>