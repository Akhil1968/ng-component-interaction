import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
  <h2>
    I am parent {{ title }}!
  </h2>
  
  <child-component [childname]="nameOfMyChild" (event2018)="handleClick()">
  </child-component>
  <counter-component [count]="initialCounterValue"></counter-component>
  <counter-component [count]='10'></counter-component>
  <counter-component [count]="25"></counter-component>
  <countdown-parent> </countdown-parent>
  <headless-counter-parent></headless-counter-parent>
  </div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shape';
  nameOfMyChild = 'Triangle';
  initialCounterValue = 5;
  handleClick(){
    console.log("I am handleClick() method in AppComponent");
  }
}
