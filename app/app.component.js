System.register(['angular2/core', 'angular2/router', './hero.service', './heros.component', './dashboard.component', './hero-detail.component', './new-hero.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, hero_service_1, heros_component_1, dashboard_component_1, hero_detail_component_1, new_hero_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (heros_component_1_1) {
                heros_component_1 = heros_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (new_hero_component_1_1) {
                new_hero_component_1 = new_hero_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Tour of heros";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <nav class=\"blue-grey\">\n      <div class=\"nav-wrapper\">\n      <div class=\"container\">\n        <a [routerLink]=\"['Dashboard']\" class=\"brand-logo\">{{title}}</a>\n        <ul class=\"right hide-on-med-and-down\">\n          <li><a [routerLink]=\"['Dashboard']\">Dashboard</a></li>\n          <li><a [routerLink]=\"['Heros']\">Heros</a></li>\n          <li><a [routerLink]=\"['NewHero']\">New</a></li>\n        </ul>\n      </div>\n      </div>\n    </nav>\n    <div class=\"container\">\n      <router-outlet></router-outlet>\n    </div>\n  ",
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [hero_service_1.HeroService]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/heros',
                            name: 'Heros',
                            component: heros_component_1.HerosComponent
                        },
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/detail/:id',
                            name: 'HeroDetail',
                            component: hero_detail_component_1.HeroDetailComponent
                        },
                        {
                            path: '/heros/new',
                            name: 'NewHero',
                            component: new_hero_component_1.NewHeroComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map