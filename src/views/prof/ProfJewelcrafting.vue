<template>
  <div class="prof-jewelcrafting general-conainer" ref="containerRef">
    <div class="inner general-inner">
      <Anchor class="general-anchor" :anchor-params="anchorParams"></Anchor>
      <div class="title-1" id="intro">简介</div>
      <div class="title-1" id="benifit">收益</div>
      <div class="title-1" id="leveling">技能提升</div>
      <div>根据不同的实际情况，冲级所用材料和成本与攻略可能会有一定出入，可自行调整</div>
      <div>切割宝石和项链/戒指制造存在大量同类配方，可根据情况替换</div>
      <div class="flex-align-center">原帖地址：<WebLink title="[御前比武大会] 珠宝1-525心得" url="https://bbs.nga.cn/read.php?tid=4320179" author="流浪的暮暮" /></div>
      <div class="title-2" id="leveling-shortcut">捷径配方</div>
      <div class="mt-9 flex-align-center">
        <DatabaseNav type="item" id="20854" name="图鉴：月之护符" class="mr-9"></DatabaseNav>
        <div class="prof-skill-cost mr-9">次级月亮石*2 青铜底座*1</div>
        <ProfSkillLevelStep :steps="[235, 255, 265, 275]" class="mr-18"></ProfSkillLevelStep>
        来源：达纳苏斯、埃索达、幽暗城、银月城商人出售
      </div>
      <div class="title-2" id="leveling-stage-1">铜锭</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage1" />
      <div class="title-2" id="leveling-stage-3">秘银锭</div>
      秘银矿石主要出黄水晶、青绿石、红宝石，小概率出巨型绿宝石、大猫眼石、艾泽拉斯钻石
      <ProfSkillLevelItem :data-arr="levelingData.stage2" />
      <div class="title-2" id="leveling-stage-4">瑟银锭</div>
      瑟银矿石主要出巨型绿宝石、大猫眼石、艾泽拉斯钻石，小概率出红宝石
      <ProfSkillLevelItem :data-arr="levelingData.stage3" />
      <div class="title-2" id="leveling-stage-5">燃烧的远征</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage4" />
      <div class="title-2" id="leveling-stage-6">巫妖王之怒</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage5" />
      <div class="title-2" id="leveling-stage-7">大地的裂变</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage6" />
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
        { href: '#leveling-stage-1', title: '铜锭' },
        { href: '#leveling-stage-2', title: '秘银锭' },
        { href: '#leveling-stage-3', title: '瑟银锭' },
        { href: '#leveling-stage-4', title: '燃烧的远征' },
        { href: '#leveling-stage-5', title: '巫妖王之怒' },
        { href: '#leveling-stage-6', title: '大地的裂变' },
      ]
    },
  ]
})

const levelingData = {
  stage1: [
    { range: '1-25', name: '精巧的铜线', id: '25255', cost: '铜锭*2', steps: [20, 35, 50], notice: '' },
    { range: '26-50', name: '虎眼指环', id: '32179', cost: '虎眼石*1 精巧的铜线*1', steps: [20, 50, 65, 80], notice: '孔雀石坠饰可替' },
    { range: '51-85', name: '青铜底座', id: '25278', cost: '青铜锭*2', steps: [50, 70, 80, 90], notice: '' },
    { range: '86-110', name: '银色力量之戒', id: '25317', cost: '银锭*2', steps: [80, 110, 125, 140], notice: '' },
    { range: '111-150', name: '月之护符', id: '25339', cost: '次级月亮石*2 青铜底座*1', steps: [110, 140, 155, 170], notice: '' },
  ],
  stage2: [
    { range: '151-185', name: '秘银丝', id: '25615', cost: '秘银锭*2', steps: [150, 170, 180, 190], notice: '' },
    { range: '186-205', name: '蚀刻真银戒指', id: '25620', cost: '真银锭*1 秘银丝*2', steps: [170, 200, 215, 230], notice: '' },
    { range: '205-220', name: '迅捷治疗之黄水晶戒指', id: '25621', cost: '秘银锭*2 黄水晶*1', steps: [180, 210, 225, 240], notice: '' },
    { range: '221-225', name: '战士之青绿坠饰', id: '26876', cost: '秘银丝*3 青绿石*1', steps: [220, 245, 260, 275], notice: '' },
  ],
  stage3: [
    { range: '226-250', name: '瑟银底座', id: '26880', cost: '瑟银锭*1', steps: [225, 2235, 245, 255], notice: '' },
    { range: '251-270', name: '火焰之红宝石坠饰', id: '26883', cost: '瑟银底座*1 红宝石*1', steps: [235, 260, 275, 290], notice: '' },
    { range: '271-285', name: '朴素的猫眼石戒指', id: '26902', cost: '瑟银底座*1 大猫眼石*1', steps: [260, 280, 290, 300], notice: '' },
    { range: '286-290', name: '钻石专注戒指', id: '36526', cost: '瑟银底座*1 艾泽拉斯钻石*1', steps: [265, 285, 295, 305], notice: '' },
    { range: '291-295', name: '光芒瑟银指环', id: '34960', cost: '瑟银底座*1 艾泽拉斯钻石*2', steps: [280, 290, 300, 310], notice: '寒冬之蓝宝石坠饰可替' },
    { range: '296-300', name: '翡翠狮王戒指', id: '34961', cost: '瑟银底座*1 巨型绿宝石*2', steps: [290, 300, 310, 320], notice: '' },
  ],
  stage4: [
    { range: '301-305', name: '辐光翠榄石', id: '28916', cost: '翠榄石*1', steps: [300, 300, 320, 340], notice: '' },
    { range: '306-315', name: '裂纹翠榄石', id: '28917', cost: '翠榄石*1', steps: [305, 305, 325, 345], notice: '' },
    { range: '316-325', name: '华丽翠榄石', id: '28918', cost: '翠榄石*1', steps: [315, 315, 335, 355], notice: '' },
    { range: '326-335', name: '水银精金', id: '38068', cost: '精金粉*4 源生之土*1', steps: [325, 325, 335, 345], notice: '' },
    { range: '336-350', name: '重型精金戒指', id: '31052', cost: '精金锭*1 水银精金*1', steps: [335, 345, 355, 365], notice: '' },
  ],
  stage5: [
    { range: '351-390', name: '血石指环', id: '56193', cost: '血石*1 土之结晶*2', steps: [350, 380, 400, 420], notice: '烈日石戒/切宝石可替' },
    { range: '391-420', name: '石卫指环', id: '58145', cost: '永恒之土*2', steps: [390, 410, 420, 430], notice: '' },
    { range: '421-425', name: '持久之天焰钻石', id: '55386', cost: '天焰钻石*1', steps: [420, 440, 450, 460], notice: '' },
  ],
  stage6: [
    { range: '426-455', name: '碧玉指环', id: '73494', cost: '碧玉*1 珠宝师的底座*1', steps: [450, 467, 485], notice: '' },
    { range: '456-490', name: '桂榴石指环', id: '73495', cost: '桂榴石*2 珠宝师的底座*1', steps: [485, 495, 505], notice: '' },
    { range: '491-500', name: '夜之石颈环', id: '73497', cost: '夜之石*2 珠宝师的底座*1', steps: [495, 505, 515], notice: '' },
    { range: '501-525', name: '灰烬之影魂钻石', id: '73470', cost: '影魂钻石*1', steps: [490, 515, 520, 525], notice: '前10点可用切奇美拉之眼替' },
  ],
}
</script>

<style lang="scss" scoped>
.prof-jewelcrafting{
  .inner {
  }
}
</style>