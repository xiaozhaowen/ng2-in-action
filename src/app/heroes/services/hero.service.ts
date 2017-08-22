import {Hero} from "../models/hero";
import {HEROES} from "../mock/mock-heroes";

export class HeroService {
  getHeroes(): Promise<Hero[]>{
    return Promise.resolve(HEROES);
  }

  // See the "Take it slow" appendix
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

}
