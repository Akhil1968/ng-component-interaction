import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'eventemitter-child',
  template: `
      <button (click)="sendMessage()">Send Message</button>
  `
})
export class EventEmitterChildComponent {

  message: string = "Hi Parent, How are you!"

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  sendMessage() {
    this.messageEvent.emit(this.message)
  }
}