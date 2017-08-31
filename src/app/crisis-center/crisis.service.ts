import {Injectable} from '@angular/core';

/**
 * 危机实体类
 */
export class Crisis {
  constructor(public id: number, public name: string) {
  }
}

/**
 * 危机列表
 * @type {[Crisis,Crisis,Crisis,Crisis]}
 */
const CRISES = [
  new Crisis(1, '恶龙焚城'),
  new Crisis(2, '空降大白鲨'),
  new Crisis(3, '巨人偷袭地球'),
  new Crisis(4, '火山喷发')
];

const crisisPromise = Promise.resolve(CRISES);

@Injectable()
export class CrisisService {
  static nextCrisisId = 100;

  getCrises() {
    return crisisPromise;
  }

  getCrisis(id: number | string) {
    return crisisPromise.then(crises => crises.find(crisis => crisis.id === +id));
  }

  addCrisis(name: string) {
    name = name.trim();
    if (name) {
      const crisis = new Crisis(CrisisService.nextCrisisId, name);
      crisisPromise.then(crises => crises.push(crisis));
    }
  }
}
