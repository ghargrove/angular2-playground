
import { Component, ElementRef, AfterViewInit } from 'angular2/core';

import {NgForm} from 'angular2/common';
import {Hero}   from './hero';

@Component({
  selector: 'hero-form',
  templateUrl: 'app/new-hero.component.html'
})
export class NewHeroComponent implements AfterViewInit {

  powers: string[] = [
    'Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'
  ]

  model: Hero = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted: boolean = false;

  constructor(private el: ElementRef) {}

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  /**
   * This will be called when the view is fully initialized
   */
  ngAfterViewInit() {
    $(this.el.nativeElement).find('select').material_select();
  }
}