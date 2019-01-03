import { Component } from '@angular/core';

@Component({
  selector: 'eventemitter-parent',
  template: `
    Message: {{message}}
    <eventemitter-child (messageEvent)="receiveMessage($event)"></eventemitter-child>
  `
})
export class EventEmitterParentComponent {

  constructor() { }

  message:string;

  receiveMessage($event) {
    this.message = $event
  }
}