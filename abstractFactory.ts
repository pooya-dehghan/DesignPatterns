//abstract factory is used when our application is going to deal with variation of products with some similarity
//and some distinct features that seperate them into groups

//example of application :

//lets consider we have a game application in which there are diffrent types of heroes and these
//heroes are likely to change and be more or less during luanch and develope time
//for example we have three diffrent hero types :
//LEGENDS
//Royal
//COMMON

//and in these types we have some heros with diffrent jobs :
//ARCHERS
//CAVALRY
//INFANTRY

// so as you see we could have a archer of group legend which has a realy more powerfull archering skills than common archers
// and so they cost more to be produced !

//abstractfactory suggests that we implement a AbstractFactory which make all the ConcreteFactory to have same behaviors

interface HEROFactory {
  createArcher(): Archer;
  createCavalry(): Cavalry;
  createInfantry(): Infantry;
}

//now time to make concretefactories of applicatoins

class LegendFactory implements HEROFactory {
  createArcher() {
    return new LegendArcher();
  }
  createCavalry() {
    return new LegendCavalry();
  }
  createInfantry() {
    return new LegendInfantry();
  }
}

class RoyalFactory implements HEROFactory {
  createArcher() {
    return new RoyalArcher();
  }
  createCavalry() {
    return new RoyalCavalry();
  }
  createInfantry() {
    return new RoyalInfantry();
  }
}

class CommonFactory implements HEROFactory {
  createArcher() {
    return new CommonArcher();
  }
  createCavalry() {
    return new CommonCavalry();
  }
  createInfantry() {
    return new CommonInfantry();
  }
}

//lets implement my concreteproduct here

//LEGENDRY
class LegendArcher implements Archer {
  private trainCostAmount: number = 100;
  private damageDealAmount: number = 215;
  private voiceSelect: string = 'enemies died before my arrows !';
  private guardModeActiviated: boolean = false;
  trainCost(): number {
    return this.trainCostAmount;
  }
  damageDeal(): number {
    return this.damageDealAmount;
  }
  voiceOnSelect(): string {
    return this.voiceSelect;
  }
  guardMode(): boolean {
    this.guardModeActiviated = !this.guardModeActiviated;
    return this.guardModeActiviated;
  }
}

class LegendCavalry implements Cavalry {
  private trainCostAmount: number = 300;
  private damageDealAmount: number = 600;
  private voiceSelect: string =
    'sir under your command to smash enemy ! ride to the lords pride !';
  private raidActivated: boolean = false;
  trainCost(): number {
    return this.trainCostAmount;
  }
  damageDeal(): number {
    return this.damageDealAmount;
  }
  voiceOnSelect(): string {
    return this.voiceSelect;
  }

  raidCommand(): boolean {
    this.raidActivated = !this.raidActivated;
    return this.raidActivated;
  }
}

class LegendInfantry implements Infantry {
  private trainCostAmount: number = 200;
  private damageDealAmount: number = 400;
  private voiceSelect: string = 'my sword belongs to you master !';
  private isKingsGuard: boolean = false;
  trainCost(): number {
    return this.trainCostAmount;
  }
  damageDeal(): number {
    return this.damageDealAmount;
  }
  voiceOnSelect(): string {
    return this.voiceSelect;
  }
  kingsGuardSoldier(): boolean {
    this.isKingsGuard = !this.isKingsGuard;
    return this.isKingsGuard;
  }
}

//ROYAL
class RoyalArcher implements Archer {
  private trainCostAmount: number = 70;
  private damageDealAmount: number = 115;
  private voiceSelect: string = 'at lords service my arch is ready to kill!';
  private guardModeActiviated: boolean = false;

  trainCost(): number {
    return this.trainCostAmount;
  }
  damageDeal(): number {
    return this.damageDealAmount;
  }
  voiceOnSelect(): string {
    return this.voiceSelect;
  }
  guardMode(): boolean {
    this.guardModeActiviated = !this.guardModeActiviated;
    return this.guardModeActiviated;
  }
}

class RoyalCavalry implements Cavalry {
  private trainCostAmount: number = 200;
  private damageDealAmount: number = 400;
  private voiceSelect: string = 'lord show ill ride em all !';
  private raidActivated: boolean = false;

  trainCost(): number {
    return this.trainCostAmount;
  }
  damageDeal(): number {
    return this.damageDealAmount;
  }
  voiceOnSelect(): string {
    return this.voiceSelect;
  }

  raidCommand(): boolean {
    this.raidActivated = !this.raidActivated;
    return this.raidActivated;
  }
}

class RoyalInfantry implements Infantry {
  private trainCostAmount: number = 150;
  private damageDealAmount: number = 300;
  private voiceSelect: string = 'sword will kill for you lord !';
  private isKingsGuard: boolean = false;

  trainCost(): number {
    return this.trainCostAmount;
  }
  damageDeal(): number {
    return this.damageDealAmount;
  }
  voiceOnSelect(): string {
    return this.voiceSelect;
  }
  kingsGuardSoldier(): boolean {
    this.isKingsGuard = !this.isKingsGuard;
    return this.isKingsGuard;
  }
}

//COMMON
class CommonArcher implements Archer {
  private trainCostAmount: number = 60;
  private damageDealAmount: number = 90;
  private voiceSelect: string = 'rebelions are to be killed with your command';
  private guardModeActiviated: boolean = false;

  trainCost(): number {
    return this.trainCostAmount;
  }
  damageDeal(): number {
    return this.damageDealAmount;
  }
  voiceOnSelect(): string {
    return this.voiceSelect;
  }
  guardMode(): boolean {
    this.guardModeActiviated = !this.guardModeActiviated;
    return this.guardModeActiviated;
  }
}

class CommonCavalry implements Cavalry {
  private trainCostAmount: number = 200;
  private damageDealAmount: number = 300;
  private voiceSelect: string = 'my sword and horse are ready ! heeeha';
  private raidActivated: boolean = false;

  trainCost(): number {
    return this.trainCostAmount;
  }
  damageDeal(): number {
    return this.damageDealAmount;
  }
  voiceOnSelect(): string {
    return this.voiceSelect;
  }

  raidCommand(): boolean {
    this.raidActivated = !this.raidActivated;
    return this.raidActivated;
  }
}

class CommonInfantry implements Infantry {
  private trainCostAmount: number = 100;
  private damageDealAmount: number = 200;
  private voiceSelect: string = 'wheres my sword ! im drunk !';
  private raidActivated: boolean = false;
  private isKingsGuard: boolean = false;

  trainCost(): number {
    return this.trainCostAmount;
  }
  damageDeal(): number {
    return this.damageDealAmount;
  }
  voiceOnSelect(): string {
    return this.voiceSelect;
  }

  raidCommand(): boolean {
    this.raidActivated = !this.raidActivated;
    return this.raidActivated;
  }
  kingsGuardSoldier(): boolean {
    this.isKingsGuard = !this.isKingsGuard;
    return this.isKingsGuard;
  }
}

interface Archer {
  trainCost(): number;
  damageDeal(): number;
  voiceOnSelect(): string;
  guardMode(): boolean;
}

interface Cavalry {
  trainCost(): number;
  damageDeal(): number;
  voiceOnSelect(): string;
  raidCommand(): boolean;
}

interface Infantry {
  trainCost(): number;
  damageDeal(): number;
  voiceOnSelect(): string;
  kingsGuardSoldier(): boolean;
}
