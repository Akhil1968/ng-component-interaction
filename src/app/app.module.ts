import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from './app.component';
import {ChildComponent} from './child.component';
import {CounterComponent} from './counter.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {CountdownParentComponent} from './countdownParent.component';
import {CountdownTimerComponent} from './countdownTimer.component';
import { HeadlessCounter } from './headlessCounter';
import { HeadlessCounterParent } from './headlessCounterParent';
@NgModule({
  declarations: [
    AppComponent, 
    ChildComponent, 
    CounterComponent, 
    CountdownParentComponent,
    CountdownTimerComponent,
    HeadlessCounter,
    HeadlessCounterParent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule
  ],
  exports: [MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
