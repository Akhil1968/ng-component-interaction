import { Component } from '@angular/core';

@Component({
  selector: 'headless-counter',
  template: '<h4>{{message}}</h4>'
})
export class HeadlessCounter {
	message:string ='';
	count:number = 0;
	increaseByOne() {
	   this.count = this.count + 1;
	   this.message = "Counter: " + this.count;
	}
	decreaseByOne() {
	   this.count = this.count - 1;
	   this.message = "Counter: " + this.count;
	}
} 