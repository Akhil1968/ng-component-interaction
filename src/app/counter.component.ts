import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter-component',
  styles: [],
  template: `
    <div>
      <button (click)="decrement()"> -  </button>
      {{count}} 
      <button mat-button (click)="increment()">+
      </button>
    </div>
  `
})
export class CounterComponent {
  
  @Input()
  count: number = 0;
  
  increment() {
    this.count++;
  }
  
  decrement() {
    this.count--;
  }
  
}