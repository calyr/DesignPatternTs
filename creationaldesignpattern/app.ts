import {StatsTracker} from './stats-tracker';
import {test} from './test';
import { GameCharacterFactory } from './game-character-factory';
let tracker = StatsTracker.instance;

tracker.widgetViews = 90;
tracker.buttonClicks = 64;
tracker.facebookShares = 20;
tracker.twitterShares = 30;

console.log(`Widget view: ${tracker.widgetViews}`);
console.log(`Button clicks: ${tracker.buttonClicks}`);
console.log(`Facebook shares: ${tracker.facebookShares}`);
console.log(`Twitter shares: ${tracker.twitterShares}`);

tracker.widgetViews++;
tracker.twitterShares

test()


let warrior = GameCharacterFactory.getWarrior(6);
let mage = GameCharacterFactory.getMage(12);

console.log(`Warrior at`);

