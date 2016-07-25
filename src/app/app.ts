import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HomeComponent } from './home/home.component';

@Component({
  selector: 'ng2-docs',
  pipes: [],
  providers: [],
  directives: [ ROUTER_DIRECTIVES ],
  precompile: [HomeComponent],
  templateUrl: './app.html',
})
export class App {
  constructor() {}

}
