import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CommonOverview from '../views/common/CommonOverview.vue'
import CommonDb from '../views/common/CommonDb.vue'
import CommonAddons from '../views/common/CommonAddons.vue'
import CommonMacros from '../views/common/CommonMacros.vue'
import CommonFactions from '../views/common/CommonFactions.vue'
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

import ProfOverview from '../views/prof/ProfOverview.vue'
import ProfHerbalism from '../views/prof/ProfHerbalism.vue'
import ProfAlchemy from '../views/prof/ProfAlchemy.vue'
import ProfInscription from '../views/prof/ProfInscription.vue'
import ProfMining from '../views/prof/ProfMining.vue'
import ProfBlacksmithing from '../views/prof/ProfBlacksmithing.vue'
import ProfEngineering from '../views/prof/ProfEngineering.vue'
import ProfJewelcrafting from '../views/prof/ProfJewelcrafting.vue'
import ProfSkining from '../views/prof/ProfSkining.vue'
import ProfLeatherworking from '../views/prof/ProfLeatherworking.vue'
import ProfTailoring from '../views/prof/ProfTailoring.vue'
import ProfEncharting from '../views/prof/ProfEncharting.vue'
import ProfArchaeology from '../views/prof/ProfArchaeology.vue'
import ProfCooking from '../views/prof/ProfCooking.vue'
import ProfFirstAid from '../views/prof/ProfFirstAid.vue'
import ProfFishing from '../views/prof/ProfFishing.vue'

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

import KitGemName from '../views/kit/KitGemName.vue'
import KitRaidBuffSim from '../views/kit/KitRaidBuffSim.vue'
import KitHasteBreakPointCalc from '../views/kit/KitHasteBreakPointCalc.vue'
import KitMacroGenerator from '../views/kit/KitMacroGenerator.vue'

const router = createRouter({
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  history: createWebHistory('/ctm'),
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
    { path: '/common-db', name: 'common-db', component: CommonDb },
    { path: '/common-addons', name: 'common-addons', component: CommonAddons },
    { path: '/common-macros', name: 'common-macros', component: CommonMacros },
    { path: '/common-factions', name: 'common-factions', component: CommonFactions },
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

    { path: '/prof-overview', name: 'prof-overview', component: ProfOverview },
    { path: '/prof-herbalism', name: 'prof-herbalism', component: ProfHerbalism },
    { path: '/prof-alchemy', name: 'prof-alchemy', component: ProfAlchemy },
    { path: '/prof-inscription', name: 'prof-inscription', component: ProfInscription },
    { path: '/prof-mining', name: 'prof-mining', component: ProfMining },
    { path: '/prof-blacksmithing', name: 'prof-blacksmithing', component: ProfBlacksmithing },
    { path: '/prof-engineering', name: 'prof-engineering', component: ProfEngineering },
    { path: '/prof-jewelcrafting', name: 'prof-jewelcrafting', component: ProfJewelcrafting },
    { path: '/prof-skining', name: 'prof-skining', component: ProfSkining },
    { path: '/prof-leatherworking', name: 'prof-leatherworking', component: ProfLeatherworking },
    { path: '/prof-tailoring', name: 'prof-tailoring', component: ProfTailoring },
    { path: '/prof-encharting', name: 'prof-encharting', component: ProfEncharting },
    { path: '/prof-archaeology', name: 'prof-archaeology', component: ProfArchaeology },
    { path: '/prof-cooking', name: 'prof-cooking', component: ProfCooking },
    { path: '/prof-firstAid', name: 'prof-firstAid', component: ProfFirstAid },
    { path: '/prof-fishing', name: 'prof-fishing', component: ProfFishing },

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

    { path: '/kit-gemName', name: 'kit-gemName', component: KitGemName },
    { path: '/kit-raidBuffSim', name: 'kit-raidBuffSim', component: KitRaidBuffSim },
    { path: '/kit-hasteBreakPointCalc', name: 'kit-hasteBreakPointCalc', component: KitHasteBreakPointCalc },
    { path: '/kit-macroGenerator', name: 'kit-macroGenerator', component: KitMacroGenerator },
  ]
})

export default router
