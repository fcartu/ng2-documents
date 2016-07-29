import { Component } from '@angular/core';

import { AlertComponent, DATEPICKER_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'home',
  directives: [
    AlertComponent,
    DATEPICKER_DIRECTIVES
  ],
  template: `
    <h1>Home</h1>
    <alert type="info">Hello from ng2-bootstrap {{ date.toDateString() }}</alert>
    <div>
      <datepicker [(ngModel)]="date" [showWeeks]="true"></datepicker>
    </div>
  `
})
export class HomeComponent {
  date: Date;

  constructor() {
    this.date = new Date();
  }
}
