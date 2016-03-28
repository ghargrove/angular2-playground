import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { HeroService } from './hero.service';
import { Hero } from './hero'

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heros: Hero[] = [];

  constructor(
    private _heroService: HeroService,
    private _router: Router) {
  }

  ngOnInit() {
    this.getHeros();
  }

  getHeros() {
    this._heroService.getHeros()
      .then(heros => this.heros = heros.slice(1,5))
  }

  gotoDetail(hero: Hero) {
    let link = ['HeroDetail', { id: hero.id }];
    this._router.navigate(link);
  }
}