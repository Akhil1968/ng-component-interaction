import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
  <!-- Example 1: @Input : Parent to Child  -->
  <h2>Passing messagees: Parent to Child</h2>
  <counter-component [count]="initialCounterValue"></counter-component>
  <counter-component [count]='10'></counter-component>
  <counter-component [count]="25"></counter-component>
  <br>
  --------------------------------------------------------------------
  <!-- Example 2: @Output : Child to Parent via Event emitter -->
  <h2>Child to Parent via Event emitter</h2>
  <eventemitter-parent></eventemitter-parent>
  <br>
  --------------------------------------------------------------------
  <!-- Example 3: Parent calling methods of Child via local variable in parent's template -->
  <h2>Parent calling methods of Child via local variable in parent's template</h2>
  <countdown-parent> </countdown-parent>
  <br>
  --------------------------------------------------------------------
  <!-- Example 4: Parent calling methods of Child via local variable in parent's class -->
  <h2>Parent calling methods of Child via local variable in parent's clas</h2>
  <headless-counter-parent></headless-counter-parent>
 <br>
  --------------------------------------------------------------------
  <!--  @Input @Output: Parent passing data to child and Child calling method of a parent   -->
  
  <h2>
    I am parent {{ title }}!
  </h2>
    <child-component [childname]="nameOfMyChild" (event2018)="handleClick()">
  </child-component>
  ----------------------------------
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
