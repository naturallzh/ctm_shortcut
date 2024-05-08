<template>
  <div class="prof-inscription general-conainer" ref="containerRef">
    <div class="inner general-inner">
      <Anchor class="general-anchor" :anchor-params="anchorParams"></Anchor>
      <div class="title-1" id="intro">简介</div>
      <div class="title-1" id="benifit">收益</div>
      <div class="title-1" id="leveling">技能提升</div>
      <div>根据不同的实际情况，冲级所用材料和成本与攻略可能会有一定出入，可自行调整</div>
      <div>同类配方极多，可根据情况替换</div>
      <div class="flex-align-center">原帖地址：<WebLink title="[御前比武大会]4.3 铭文1-525" url="https://bbs.nga.cn/read.php?tid=4983628" author="f77521881" /></div>
      <div class="title-2" id="leveling-stage-1">经典旧世</div>
      <div>乳白墨水：宁神花、银叶草、地根草</div>
      <div>午夜墨水/猎人墨水：魔皇草、石南草、雨燕草、荆棘藻、跌打草</div>
      <div>狮王墨水/晨星墨水：野钢花、墓地苔、皇血草、活根草</div>
      <div>碧火墨水/皇家墨水：枯叶草、金棘草、卡德加的胡须、冬刺草</div>
      <div>星空墨水/火焰墨水：火焰花、紫莲花、阿尔萨斯之泪、太阳草、盲目草、幽灵菇、格罗姆之血</div>
      <div>幻光墨水/苍穹墨水：黄金参、梦叶草、山鼠草、瘟疫花、冰盖草</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage1" />
      <div class="title-2" id="leveling-stage-3">燃烧的远征</div>
      <div>虚灵墨水/黑焰墨水：魔草、梦露花、邪雾草、噩梦藤、泰罗果、虚空花、法力蓟、远古苔</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage2" />
      <div class="title-2" id="leveling-stage-4">巫妖王之怒</div>
      <div>海洋墨水/落雪墨水：蛇信草、死亡荨麻、金苜蓿、冰棘草、巫妖花、塔兰德拉的玫瑰、卷丹</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage3" />
      <div class="title-2" id="leveling-stage-5">大地的裂变</div>
      <div>秋闲墨水/炼狱墨水：燃烬草、艾萨拉雾菇、鞭尾草、暮光茉莉、风暴藤、心灵之花</div>
      <ProfSkillLevelItem :data-arr="levelingData.stage4" />
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
    { href: '#leveling', title: '技能提升', subs: [
      { href: '#leveling-stage-1', title: '经典旧世' },
      { href: '#leveling-stage-2', title: '燃烧的远征' },
      { href: '#leveling-stage-3', title: '巫妖王之怒' },
      { href: '#leveling-stage-4', title: '大地的裂变' },
    ]},
  ]
})

const levelingData = {
  stage1: [
    { range: '1-18', name: '乳白墨水', id: '52738', cost: '雪白颜料*1', steps: [15, 22, 30], notice: '' },
    { range: '19-35', name: '耐力卷轴', id: '45382', cost: '乳白墨水*1 轻羊皮纸*1', steps: [35, 40, 45], notice: '灰之前把乳白墨水全部用完' },
    { range: '36-60', name: '月光墨水', id: '52843', cost: '雪白颜料*2', steps: [35, 45, 60, 75], notice: '' },
    { range: '61-75', name: '附魔羊皮纸', id: '52739', cost: '月光墨水*1 轻羊皮纸*2', steps: [35, 75, 87, 100], notice: '' },
    { range: '76-76', name: '小型雕文研究', id: '61288', cost: '月光墨水*1 轻羊皮纸*2', steps: [75, 125, 137, 150], notice: '' },
    { range: '77-80', name: '午夜墨水', id: '53462', cost: '暗色颜料*2', steps: [75, 75, 77, 80], notice: '' },
    { range: '81-107', name: '雕文', id: '', cost: '午夜墨水*3 轻羊皮纸*1', steps: [], notice: '橙色配方冲点' },
    { range: '108-146', name: '雕文', id: '', cost: '狮王墨水*3 普通的羊皮纸*1', steps: [], notice: '橙色配方冲点' },
    { range: '147-150', name: '雕文', id: '', cost: '狮王墨水*3 普通的羊皮纸*1', steps: [], notice: '黄色配方冲点' },
    { range: '151-195', name: '雕文', id: '', cost: '碧火墨水*3 普通的羊皮纸*1', steps: [], notice: '橙色配方冲点' },
    { range: '196-200', name: '雕文', id: '', cost: '碧火墨水*3 普通的羊皮纸*1', steps: [], notice: '黄色配方冲点，列王之书可替' },
    { range: '201-245', name: '雕文', id: '', cost: '星空墨水*3 普通的羊皮纸*1', steps: [], notice: '橙色配方冲点' },
    { range: '246-250', name: '雕文', id: '', cost: '星空墨水*3 普通的羊皮纸*1', steps: [], notice: '黄色配方冲点，群星之书可替' },
    { range: '251-255', name: '雕文', id: '', cost: '闪光墨水*3 重羊皮纸*1', steps: [], notice: '橙色配方冲点' },
    { range: '256-260', name: '精神卷轴V', id: '50608', cost: '闪光墨水*1 重羊皮纸*2', steps: [255, 260, 265, 270], notice: '黄色雕文可替' },
    { range: '261-290', name: '雕文', id: '', cost: '闪光墨水*3 重羊皮纸*1', steps: [], notice: '橙色配方冲点' },
  ],
  stage2: [
    { range: '291-300', name: '虚灵墨水', id: '57713', cost: '虚空颜料*2', steps: [290, 295, 300, 305], notice: '精神卷轴VI可替' },
    { range: '301-350', name: '雕文', id: '', cost: '虚灵墨水*3 重羊皮纸*1', steps: [], notice: '橙色配方冲点' },
  ],
  stage3: [
    { range: '351-355', name: '耐力卷轴VII', id: '50619', cost: '海洋墨水*1 坚韧羊皮纸*2', steps: [350, 355, 360, 365], notice: '' },
    { range: '356-360', name: '精神卷轴VII', id: '50610', cost: '海洋墨水*1 坚韧羊皮纸*2', steps: [355, 360, 365, 370], notice: '' },
    { range: '361-365', name: '智力卷轴VII', id: '50603', cost: '海洋墨水*1 坚韧羊皮纸*2', steps: [360, 365, 370, 375], notice: '' },
    { range: '366-370', name: '力量卷轴VII', id: '58490', cost: '海洋墨水*1 坚韧羊皮纸*2', steps: [365, 370, 375, 380], notice: '' },
    { range: '371-375', name: '敏捷卷轴VII', id: '58482', cost: '海洋墨水*1 坚韧羊皮纸*2', steps: [370, 375, 380, 385], notice: '' },
    { range: '376-381', name: '雕文', id: '', cost: '海洋墨水*3 坚韧羊皮纸*1', steps: [], notice: '橙色配方冲点' },
    { range: '382-385', name: '雕文', id: '', cost: '海洋墨水*3 坚韧羊皮纸*1', steps: [], notice: '黄色配方冲点' },
    { range: '386-386', name: '诺森德雕文领悟', id: '53905', cost: '海洋墨水*3 落雪墨水*1 坚韧羊皮纸*5', steps: [385, 425, 437, 450], notice: '可以留到397雕文变绿再用' },
    { range: '387-392', name: '雕文', id: '', cost: '海洋墨水*3 坚韧羊皮纸*1', steps: [], notice: '橙色配方冲点' },
    { range: '393-397', name: '雕文', id: '', cost: '海洋墨水*3 坚韧羊皮纸*1', steps: [], notice: '黄色配方冲点' },
    { range: '398-400', name: '雕文', id: '', cost: '海洋墨水*3 坚韧羊皮纸*1', steps: [], notice: '绿色配方冲点' },
    { range: '401-405', name: '耐力卷轴VIII', id: '50620', cost: '海洋墨水*1 坚韧羊皮纸*2', steps: [400, 405, 410, 415], notice: '' },
    { range: '406-410', name: '精神卷轴VIII', id: '50611', cost: '海洋墨水*1 坚韧羊皮纸*2', steps: [405, 410, 415, 420], notice: '' },
    { range: '411-415', name: '智力卷轴VIII', id: '50604', cost: '海洋墨水*1 坚韧羊皮纸*2', steps: [410, 415, 420, 425], notice: '' },
    { range: '416-420', name: '力量卷轴VIII', id: '58491', cost: '海洋墨水*1 坚韧羊皮纸*2', steps: [415, 420, 425, 430], notice: '' },
    { range: '421-425', name: '敏捷卷轴VIII', id: '58483', cost: '海洋墨水*1 坚韧羊皮纸*2', steps: [420, 425, 430, 435], notice: '' },
  ],
  stage4: [
    { range: '426-450', name: '秋闲墨水', id: '86004', cost: '烬色染料*2', steps: [440, 445, 450], notice: '' },
    { range: '451-460', name: '神秘的财富卡', id: '86609', cost: '秋闲墨水*1 坚韧羊皮纸*1', steps: [460, 467, 475], notice: '可以多搓几点' },
    { range: '461-475', name: '冒险者日志', id: '89367', cost: '秋闲墨水*1 坚韧羊皮纸*4', steps: [475, 480, 485], notice: '' },
    { range: '476-480', name: '消魔尘', id: '92027', cost: '秋闲墨水*1', steps: [475, 487, 500], notice: '可以多搓几点' },
    { range: '480-500', name: '蚀刻之角', id: '86647', cost: '炼狱墨水*4 破烂的龙角', steps: [500, 502, 505], notice: '' },
    { range: '501-510', name: '纸折甲虫', id: '86646', cost: '坚韧羊皮纸*3', steps: [500, 500, 510], notice: '奥丹姆掉落；海底和深岩也有类似的' },
    { range: '511-520', name: '恶毒凯旋护符', id: '99547', cost: '炼狱墨水*5 动燃生命*6 动燃之水*6 饰银腕镯', steps: [520, 525, 530], notice: '同类可替' },
    { range: '521-525', name: '纹饰徽记', id: '86652', cost: '炼狱墨水*12 动燃生命*36 动燃之水*12 防毒食人魔之眼', steps: [525, 530, 535], notice: '同类可替' },
  ],
}
</script>

<style lang="scss" scoped>
.prof-inscription{
  .inner {
  }
}
</style>