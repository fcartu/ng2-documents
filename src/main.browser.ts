import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import { provideForms, disableDeprecatedForms } from '@angular/forms';
// import {enableProdMode} from '@angular/core';

import {APP_ROUTER_PROVIDERS} from './app/app.routes';
import {AppComponent} from './app/app';

// enableProdMode()

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  provideForms(),
  disableDeprecatedForms(),
  { provide: LocationStrategy, useClass: HashLocationStrategy }
])
.catch(err => console.error(err));
