// Hero data service

import {HEROS} from './mock-heros';
import {Injectable} from 'angular2/core';

@Injectable()
export class HeroService {

  /**
   * Return an array of heros
   */
  getHeros() {
    return Promise.resolve(HEROS);
  }

  /**
   * Get a single hero
   */
  getHero(id: number) {
    return Promise.resolve(HEROS).then(
      heros => heros.filter(hero => hero.id == id)[0]
    );
  }
}