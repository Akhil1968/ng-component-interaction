import { Component }                from '@angular/core';


@Component({
  selector: 'countdown-parent',
  template: `
  <h3>Countdown to takeoff </h3>
  <button (click)="timer.start()">Start</button>
  <button (click)="timer.stop()">Stop</button>
  <div class="seconds">{{timer.seconds}}</div>
  <countdown-timer #timer></countdown-timer>
  `
})
export class CountdownParentComponent { }