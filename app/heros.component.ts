import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import {HeroDetailComponent} from './hero-detail.component';
import {Hero} from './hero';
import {HeroService} from './hero.service';

// 
@Component({
  selector:    'my-heros',
  templateUrl: 'app/heros.component.html',
  styleUrls:  ['app/heros.component.css'],
  directives: [HeroDetailComponent]
})


export class HerosComponent implements OnInit {

  /**
   * Component title
   */
  public title = "Tour of Heros";
  
  /**
   * Name of our hero
   */
  public selectedHero: Hero;

  /**
   * Our list of heros
   */
  public heros: Hero[];

  constructor(
    private _router: Router,
    private _heroService: HeroService) {

  }

  ngOnInit() {
    this.getHeros();
  }

  /**
   * Log our hero to the console
   */
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  /**
   * Get a list of Heros from the HeroService
   */
  getHeros() {
    this._heroService.getHeros().then(heros => this.heros = heros);
  }

  /**
   * Visit a single hero
   */
  gotoDetail() {
    let link = ["HeroDetail", { id: this.selectedHero.id }];
    this._router.navigate(link);
  }
  
}