import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'child-component',
  template: ` 
  <h3 >{{toShow}}<h3>
  <h4>{{childname}}</h4>
  <button class="btn btn-success" (click)="handleClick()" > 
    Click Me 
  </button>
  `,
  styleUrls: []
})
export class ChildComponent {
  toShow = 'I am child of Shape';
  @Input() childname: string = "Circle";

  @Output() event2018 = new EventEmitter();

  handleClick(){
    console.log("I have been implementated in the child component");
    this.event2018.emit();
  }
}
