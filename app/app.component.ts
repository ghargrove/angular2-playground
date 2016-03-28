import { Component }       from 'angular2/core';

import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { HeroService }         from './hero.service';
import { HerosComponent }      from './heros.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { NewHeroComponent } from './new-hero.component';


@Component({
  selector: 'my-app',
  template: 
  `
    <nav class="blue-grey">
      <div class="nav-wrapper">
      <div class="container">
        <a [routerLink]="['Dashboard']" class="brand-logo">{{title}}</a>
        <ul class="right hide-on-med-and-down">
          <li><a [routerLink]="['Dashboard']">Dashboard</a></li>
          <li><a [routerLink]="['Heros']">Heros</a></li>
          <li><a [routerLink]="['NewHero']">New</a></li>
        </ul>
      </div>
      </div>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [HeroService]
})

@RouteConfig([
  {
    path: '/heros',
    name: 'Heros',
    component: HerosComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },
  {
    path: '/heros/new',
    name: 'NewHero',
    component: NewHeroComponent
  }
])

export class AppComponent {

  title = "Tour of heros";
}