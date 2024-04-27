<template>
  <div class="prof-blacksmithing general-conainer" ref="containerRef">
    <div class="inner general-inner">
      <Anchor class="general-anchor" :anchor-params="anchorParams"></Anchor>
      <div class="title-1" id="intro">简介</div>
      <div class="title-1" id="benifit">收益</div>
      <div class="title-1" id="leveling">技能提升</div>

      <div class="title-2" id="leveling-shortcut">捷径配方</div>
      <div class="mt-9 flex-align-center">
        <DatabaseNav type="item" id="7989" name="设计图：秘银马刺" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">秘银锭*4 坚固的砂轮*3</div>
        <ProfSkillLevelStep :steps="[235, 255, 265, 275]" class="mr-18"></ProfSkillLevelStep>
        来源：45-55左右世界掉落，多蹲蹲拍卖行
      </div>
      <div class="mt-9 flex-align-center">
        <DatabaseNav type="item" id="23591" name="设计图：精金利斧" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">精金锭*8</div>
        <ProfSkillLevelStep :steps="[330, 340, 350, 360]" class="mr-18"></ProfSkillLevelStep>
        来源：沙塔斯城-贫民窟南端-埃隆·霍尔曼出售，顺便购买精金棒图纸
      </div>
      <div class="mt-9 flex-align-center">
        <DatabaseNav type="item" id="23638" name="设计图：次级护盾结界" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">精金锭*1</div>
        <ProfSkillLevelStep :steps="[340, 340, 345, 350]" class="mr-18"></ProfSkillLevelStep>
        来源：联盟-影月谷蛮锤要塞-玛里·石拳出售；部落-地狱火半岛萨尔玛-罗霍克出售。顺便购买恒金棒图纸
      </div>

      <div class="title-2" id="leveling-main">冲级攻略</div>
      <div>根据不同的实际情况，冲级所用材料和成本与攻略可能会有一定出入，可自行调整</div>
      <div>阶段划分比较粗略，替换配方较多，建议多权衡</div>
      <div class="flex-align-center">原帖地址：<el-button link type="primary" @click="utils.openUrl('https://ngabbs.com/read.php?tid=5022208&_fp=25&rand=279')">[专业技能] [4.3.3]锻造1-525攻略^_^~</el-button>—— 显蕨</div>
      <div class="title-3" id="leveling-stage-1">铜锭</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage1" />
      <div class="title-3" id="leveling-stage-2">铁锭</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage2" />
      <div class="title-3" id="leveling-stage-3">秘银锭</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage3" />
      <div class="title-3" id="leveling-stage-4">瑟银锭</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage4" />
      <div class="title-3" id="leveling-stage-5">魔铁锭 精金锭</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage5" />
      <div class="title-3" id="leveling-stage-6">钴锭 萨隆邪铁锭</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage6" />
      <div class="title-3" id="leveling-stage-7">源质锭</div>
      装备武器制造可用同类配方替
      <ProfSkillLevelItem :data-arr="levelingData.stage7" />
      <div class="mt-9">500后用燃钢武器链/377韧装恶毒燃钢系列冲</div>

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
            { href: '#leveling-stage-1', title: '铜锭' },
            { href: '#leveling-stage-2', title: '铁锭' },
            { href: '#leveling-stage-3', title: '秘银锭' },
            { href: '#leveling-stage-4', title: '瑟银锭' },
            { href: '#leveling-stage-5', title: '魔铁锭 精金锭' },
            { href: '#leveling-stage-6', title: '钴锭 萨隆邪铁锭' },
            { href: '#leveling-stage-7', title: '源质锭' },
          ]
        },
      ]
    },
    { href: '#branch', title: '分支专精' },
  ]
})

const levelingData = {
  stage1: [
    { range: '1-35', name: '劣质磨刀石', id: '2660', cost: '劣质的石头*1', steps: [1, 15, 35, 55], notice: '' },
    { range: '36-65', name: '劣质砂轮', id: '3320', cost: '劣质的石头*2', steps: [25, 45, 65, 85], notice: '' },
    { range: '66-75', name: '粗制磨刀石', id: '2665', cost: '粗糙的石头*1', steps: [65, 65, 72, 80], notice: '' },
    { range: '76-100', name: '粗制砂轮', id: '3326', cost: '粗糙的石头*2', steps: [75, 75, 87, 100], notice: '' },
    { range: '100-110', name: '铜质符文腰带', id: '2666', cost: '铜锭*10 劣质砂轮*2', steps: [70, 110, 130, 150], notice: '银棒可替' },
    { range: '111-125', name: '劣质青铜护肩', id: '3328', cost: '青铜锭*5 粗制砂轮*1', steps: [110, 140, 155, 170], notice: '' },
    { range: '126-150', name: '重砂轮', id: '3337', cost: '沉重的石头*3', steps: [125, 125, 137, 150], notice: '' },
    { range: '151-160', name: '金棒', id: '14379', cost: '金锭*1 粗制砂轮*2', steps: [150, 155, 157, 160], notice: '' },
    { range: '161-165', name: '青铜花纹护腕', id: '2672', cost: '青铜锭*5 粗制砂轮*2', steps: [120, 150, 165, 180], notice: '' },
  ],
  stage2: [
    { range: '166-185', name: '绿铁护腕', id: '3501', cost: '铁锭*6 绿色染料*1', steps: [165, 190, 202, 215], notice: '' },
    { range: '186-200', name: '金鳞护腕', id: '7223', cost: '钢锭*5 重砂轮*2', steps: [185, 210, 222, 235], notice: '' },
    { range: '201-210', name: '坚固的磨刀石', id: '9918', cost: '坚固的石头*1', steps: [200, 200, 205, 210], notice: '' },
  ],
  stage3: [
    { range: '211-235', name: '重型秘银手套', id: '9928', cost: '秘银锭*6 魔纹布*4', steps: [205, 225, 235, 245], notice: '金鳞护腕可替12点' },
    { range: '236-250', name: '秘银罩帽', id: '9961', cost: '秘银锭*10 魔纹布*4', steps: [230, 250, 260, 270], notice: '秘银马刺可替' },
  ],
  stage4: [
    { range: '251-260', name: '致密磨刀石', id: '16641', cost: '厚重的石头*1', steps: [250, 255, 257, 260], notice: '秘银马刺可替' },
    { range: '261-285', name: '瑟银护腕', id: '16644', cost: '瑟银锭*8', steps: [255, 275, 285, 295], notice: '秘银马刺可替' },
    { range: '286-300', name: '瑟银头盔', id: '16653', cost: '瑟银锭*12 红宝石*1', steps: [280, 300, 310, 320], notice: '286-307可用君王板甲套替' },
    { range: '301-307', name: '魔化瑟银飞刀', id: '34982', cost: '魔化瑟银锭*2 瑟银锭*6 硬甲皮*1', steps: [300, 320, 330, 340], notice: '考虑魔铁和精金价格，可冲至340，分解产强不灭' },
  ],
  stage5: [
    { range: '308-325', name: '魔铁板甲腰带', id: '29547', cost: '魔铁锭*4', steps: [305, 315, 325, 335], notice: '' },
    { range: '326-335', name: '次级结界符文', id: '32284', cost: '精金锭*1', steps: [325, 325, 330, 335], notice: '' },
    { range: '336-340', name: '精金利斧', id: '29568', cost: '精金锭*8', steps: [330, 340, 350, 360], notice: '' },
    { range: '341-350', name: '次级护盾结界', id: '29728', cost: '精金锭*1', steps: [340, 340, 345, 350], notice: '' },
    { range: '351-360', name: '精金棒', id: '32656', cost: '精金锭*10', steps: [350, 350, 355, 360], notice: '钴质腰带可替' },
    { range: '361-370', name: '恒金棒', id: '32657', cost: '恒金锭*4', steps: [360, 365, 370, 375], notice: '钴质护腕可替' },
  ],
  stage6: [
    { range: '371-380', name: '钴质腿铠', id: '52567', cost: '钴锭*5', steps: [370, 375, 380, 385], notice: '' },
    { range: '381-385', name: '尖刺钴质战靴', id: '54918', cost: '钴锭*7', steps: [380, 385, 390, 395], notice: '' },
    { range: '386-390', name: '尖刺钴质护肩', id: '54941', cost: '钴锭*7', steps: [385, 390, 395, 400], notice: '' },
    { range: '391-395', name: '锯齿钴质战斧', id: '55204', cost: '钴锭*10', steps: [390, 395, 400, 405], notice: '萨隆邪铁防御者可替' },
    { range: '396-400', name: '淬火萨隆邪铁腰带', id: '54551', cost: '钴锭*6 萨隆邪铁锭*5', steps: [395, 400, 405, 410], notice: '' },
    { range: '401-405', name: '犄角钴质头盔', id: '54949', cost: '钴锭*8', steps: [400, 405, 410, 415], notice: '' },
    { range: '406-410', name: '致命萨隆邪铁飞刀', id: '55206', cost: '萨隆邪铁锭*7 空气结晶*2', steps: [405, 415, 420, 425], notice: '' },
    { range: '411-415', name: '淬火萨隆邪铁护腕', id: '55017', cost: '萨隆邪铁锭*13', steps: [410, 415, 420, 425], notice: '' },
    { range: '416-420', name: '淬火萨隆邪铁护手', id: '55015', cost: '萨隆邪铁锭*14', steps: [415, 420, 425, 430], notice: '永恒腰带扣可替' },
    { range: '421-425', name: '泰坦神铁棒', id: '55732', cost: '萨隆邪铁锭*2 泰坦神铁锭*1', steps: [420, 425, 430, 435], notice: '' },
  ],
  stage7: [
    { range: '426-455', name: '弯折过的黑曜石', id: '76178', cost: '黑曜石块*2', steps: [450, 452, 455], notice: '' },
    { range: '456-460', name: '赤钢臂铠', id: '76262', cost: '弯折过的黑曜石*3', steps: [425, 460, 462, 465], notice: '' },
    { range: '461-470', name: '雷铸腰带', id: '76283', cost: '弯折过的黑曜石*4 动燃之土*1', steps: [425, 470, 472, 475], notice: '' },
    { range: '471-475', name: '黑曜石矛枪', id: '76474', cost: '弯折过的黑曜石*12 动燃之土*10 动燃火焰*4', steps: [425, 480, 482, 485], notice: '一次涨5点' },
    { range: '476-481', name: '源质棒', id: '92375', cost: '源质锭*15', steps: [425, 480, 485, 490], notice: '一次涨2点' },
    { range: '482-483', name: '黑曜石万能钥匙', id: '76438', cost: '弯折过的黑曜石*2', steps: [425, 480, 485, 490], notice: '到483就停，不能多' },
    { range: '484-488', name: '黑曜石行刑者', id: '76437', cost: '弯折过的黑曜石*10 源质锭*10 动燃之土*6', steps: [425, 490, 492, 495], notice: '一次涨5点' },
    { range: '489-491', name: '雷铸腿甲', id: '76287', cost: '弯折过的黑曜石*2 源质锭*8', steps: [425, 490, 492, 495], notice: '一次涨3点' },
    { range: '492-500', name: '雷铸头盔', id: '76288', cost: '源质锭*20 动燃之土*8', steps: [425, 500, 502, 505], notice: '一次涨3点' },
  ],
}
</script>

<style lang="scss" scoped>
.prof-blacksmithing{
  .inner {
  }
}
</style>