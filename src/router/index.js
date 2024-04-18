import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CommonOverview from '../views/common/CommonOverview.vue'
import CommonItems from '../views/common/CommonItems.vue'
import CommonAddons from '../views/common/CommonAddons.vue'
import CommonMacros from '../views/common/CommonMacros.vue'
import CommonOutfits from '../views/common/CommonOutfits.vue'
import CommonQuests from '../views/common/CommonQuests.vue'
import CommonAchievements from '../views/common/CommonAchievements.vue'

import ClassOverview from '../views/class/ClassOverview.vue'
import ClassWarrior from '../views/class/ClassWarrior.vue'
import ClassPriest from '../views/class/ClassPriest.vue'
import ClassMage from '../views/class/ClassMage.vue'
import ClassWarlock from '../views/class/ClassWarlock.vue'
import ClassRogue from '../views/class/ClassRogue.vue'
import ClassPaladin from '../views/class/ClassPaladin.vue'
import ClassHunter from '../views/class/ClassHunter.vue'
import ClassDruid from '../views/class/ClassDruid.vue'
import ClassShaman from '../views/class/ClassShaman.vue'
import ClassDeathknight from '../views/class/ClassDeathknight.vue'

import SkillOverview from '../views/skill/SkillOverview.vue'
import SkillHerbalism from '../views/skill/SkillHerbalism.vue'
import SkillAlchemy from '../views/skill/SkillAlchemy.vue'
import SkillInscription from '../views/skill/SkillInscription.vue'
import SkillMining from '../views/skill/SkillMining.vue'
import SkillBlacksmithing from '../views/skill/SkillBlacksmithing.vue'
import SkillEngineering from '../views/skill/SkillEngineering.vue'
import SkillJewelcrafting from '../views/skill/SkillJewelcrafting.vue'
import SkillSkining from '../views/skill/SkillSkining.vue'
import SkillLeatherworking from '../views/skill/SkillLeatherworking.vue'
import SkillTailoring from '../views/skill/SkillTailoring.vue'
import SkillEncharting from '../views/skill/SkillEncharting.vue'
import SkillArchaeology from '../views/skill/SkillArchaeology.vue'
import SkillCooking from '../views/skill/SkillCooking.vue'
import SkillFirstAid from '../views/skill/SkillFirstAid.vue'
import SkillFishing from '../views/skill/SkillFishing.vue'

import DungeonOverview from '../views/dungeon/DungeonOverview.vue'
import DungeonThroneOfTheTides from '../views/dungeon/DungeonThroneOfTheTides.vue'
import DungeonBlackrockCaverns from '../views/dungeon/DungeonBlackrockCaverns.vue'
import DungeonGrimBatol from '../views/dungeon/DungeonGrimBatol.vue'
import DungeonHallsOfOrigination from '../views/dungeon/DungeonHallsOfOrigination.vue'
import DungeonTheStonecore from '../views/dungeon/DungeonTheStonecore.vue'
import DungeonTheVortexPinnacle from '../views/dungeon/DungeonTheVortexPinnacle.vue'
import DungeonLostCityOfTheTolvir from '../views/dungeon/DungeonLostCityOfTheTolvir.vue'
import DungeonZulAman from '../views/dungeon/DungeonZulAman.vue'
import DungeonZulGurub from '../views/dungeon/DungeonZulGurub.vue'
import DungeonWellOfEternity from '../views/dungeon/DungeonWellOfEternity.vue'
import DungeonHourOfTwilight from '../views/dungeon/DungeonHourOfTwilight.vue'
import DungeonEndTime from '../views/dungeon/DungeonEndTime.vue'

import RaidOverview from '../views/raid/RaidOverview.vue'
import RaidBaradinHold from '../views/raid/RaidBaradinHold.vue'
import RaidThroneOfTheFourWinds from '../views/raid/RaidThroneOfTheFourWinds.vue'
import RaidBlackwingDescent from '../views/raid/RaidBlackwingDescent.vue'
import RaidTheBastionOfTwilight from '../views/raid/RaidTheBastionOfTwilight.vue'
import RaidFirelands from '../views/raid/RaidFirelands.vue'
import RaidDragonSoul from '../views/raid/RaidDragonSoul.vue'

import CalcGem from '../views/calculator/CalcGem.vue'

const router = createRouter({
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    { path: '/common-overview', name: 'common-overview', component: CommonOverview },
    { path: '/common-items', name: 'common-items', component: CommonItems },
    { path: '/common-addons', name: 'common-addons', component: CommonAddons },
    { path: '/common-macros', name: 'common-macros', component: CommonMacros },
    { path: '/common-outfits', name: 'common-outfits', component: CommonOutfits },
    { path: '/common-quests', name: 'common-quests', component: CommonQuests },
    { path: '/common-achievements', name: 'common-achievements', component: CommonAchievements },

    { path: '/class-overview', name: 'class-overview', component: ClassOverview },
    { path: '/class-warrior', name: 'class-warrior', component: ClassWarrior },
    { path: '/class-priest', name: 'class-priest', component: ClassPriest },
    { path: '/class-mage', name: 'class-mage', component: ClassMage },
    { path: '/class-warlock', name: 'class-warlock', component: ClassWarlock },
    { path: '/class-rogue', name: 'class-rogue', component: ClassRogue },
    { path: '/class-paladin', name: 'class-paladin', component: ClassPaladin },
    { path: '/class-hunter', name: 'class-hunter', component: ClassHunter },
    { path: '/class-druid', name: 'class-druid', component: ClassDruid },
    { path: '/class-shaman', name: 'class-shaman', component: ClassShaman },
    { path: '/class-deathknight', name: 'class-deathknight', component: ClassDeathknight },

    { path: '/skill-overview', name: 'skill-overview', component: SkillOverview },
    { path: '/skill-herbalism', name: 'skill-herbalism', component: SkillHerbalism },
    { path: '/skill-alchemy', name: 'skill-alchemy', component: SkillAlchemy },
    { path: '/skill-inscription', name: 'skill-inscription', component: SkillInscription },
    { path: '/skill-mining', name: 'skill-mining', component: SkillMining },
    { path: '/skill-blacksmithing', name: 'skill-blacksmithing', component: SkillBlacksmithing },
    { path: '/skill-engineering', name: 'skill-engineering', component: SkillEngineering },
    { path: '/skill-jewelcrafting', name: 'skill-jewelcrafting', component: SkillJewelcrafting },
    { path: '/skill-skining', name: 'skill-skining', component: SkillSkining },
    { path: '/skill-leatherworking', name: 'skill-leatherworking', component: SkillLeatherworking },
    { path: '/skill-tailoring', name: 'skill-tailoring', component: SkillTailoring },
    { path: '/skill-encharting', name: 'skill-encharting', component: SkillEncharting },
    { path: '/skill-archaeology', name: 'skill-archaeology', component: SkillArchaeology },
    { path: '/skill-cooking', name: 'skill-cooking', component: SkillCooking },
    { path: '/skill-firstAid', name: 'skill-firstAid', component: SkillFirstAid },
    { path: '/skill-fishing', name: 'skill-fishing', component: SkillFishing },

    { path: '/dungeon-overview', name: 'dungeon-overview', component: DungeonOverview },
    { path: '/dungeon-throneOfTheTides', name: 'dungeon-throneOfTheTides', component: DungeonThroneOfTheTides },
    { path: '/dungeon-blackrockCaverns', name: 'dungeon-blackrockCaverns', component: DungeonBlackrockCaverns },
    { path: '/dungeon-GrimBatol', name: 'dungeon-GrimBatol', component: DungeonGrimBatol },
    { path: '/dungeon-hallsOfOrigination', name: 'dungeon-hallsOfOrigination', component: DungeonHallsOfOrigination },
    { path: '/dungeon-theStonecore', name: 'dungeon-theStonecore', component: DungeonTheStonecore },
    { path: '/dungeon-theVortexPinnacle', name: 'dungeon-theVortexPinnacle', component: DungeonTheVortexPinnacle },
    { path: '/dungeon-lostCityOfTheTolvir', name: 'dungeon-lostCityOfTheTolvir', component: DungeonLostCityOfTheTolvir },
    { path: '/dungeon-zulAman', name: 'dungeon-zulAman', component: DungeonZulAman },
    { path: '/dungeon-zulGurub', name: 'dungeon-zulGurub', component: DungeonZulGurub },
    { path: '/dungeon-wellOfEternity', name: 'dungeon-wellOfEternity', component: DungeonWellOfEternity },
    { path: '/dungeon-hourOfTwilight', name: 'dungeon-hourOfTwilight', component: DungeonHourOfTwilight },
    { path: '/dungeon-endTime', name: 'dungeon-endTime', component: DungeonEndTime },

    { path: '/raid-overview', name: 'raid-overview', component: RaidOverview },
    { path: '/raid-baradinHold', name: 'raid-baradinHold', component: RaidBaradinHold },
    { path: '/raid-throneOfTheFourWinds', name: 'raid-throneOfTheFourWinds', component: RaidThroneOfTheFourWinds },
    { path: '/raid-blackwingDescent', name: 'raid-blackwingDescent', component: RaidBlackwingDescent },
    { path: '/raid-theBastionOfTwilight', name: 'raid-theBastionOfTwilight', component: RaidTheBastionOfTwilight },
    { path: '/raid-firelands', name: 'raid-firelands', component: RaidFirelands },
    { path: '/raid-dragonSoul', name: 'raid-dragonSoul', component: RaidDragonSoul },

    { path: '/calc-gem', name: 'calc-gem', component: CalcGem },
  ]
})

export default router
