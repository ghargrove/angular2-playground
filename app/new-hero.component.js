System.register(['angular2/core', './hero'], function(exports_1, context_1) {
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
    var core_1, hero_1;
    var NewHeroComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            }],
        execute: function() {
            NewHeroComponent = (function () {
                function NewHeroComponent(el) {
                    this.el = el;
                    this.powers = [
                        'Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'
                    ];
                    this.model = new hero_1.Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
                    this.submitted = false;
                }
                NewHeroComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                };
                Object.defineProperty(NewHeroComponent.prototype, "diagnostic", {
                    // TODO: Remove this when we're done
                    get: function () {
                        return JSON.stringify(this.model);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * This will be called when the view is fully initialized
                 */
                NewHeroComponent.prototype.ngAfterViewInit = function () {
                    $(this.el.nativeElement).find('select').material_select();
                };
                NewHeroComponent = __decorate([
                    core_1.Component({
                        selector: 'hero-form',
                        templateUrl: 'app/new-hero.component.html'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], NewHeroComponent);
                return NewHeroComponent;
            }());
            exports_1("NewHeroComponent", NewHeroComponent);
        }
    }
});
//# sourceMappingURL=new-hero.component.js.map