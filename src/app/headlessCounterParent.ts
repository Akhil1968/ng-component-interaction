import { Component, ViewChild } from '@angular/core';
import { HeadlessCounter } from './headlessCounter';

@Component({
  selector: 'headless-counter-parent',
  template: `
    <h3>@ViewChild using Component</h3>
    Headless Counter Example:
    <button type="button" (click)="increase()">Increase</button>
    <button type="button" (click)="decrease()">Decrease</button>
    <br/><br/>
    <headless-counter></headless-counter> 
  `
})
export class HeadlessCounterParent {
    @ViewChild(HeadlessCounter)
    private numberComponent: HeadlessCounter;
    increase() {
       this.numberComponent.increaseByOne();
    }
    decrease() {
       this.numberComponent.decreaseByOne();
    }
} 