import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: RouterConfig = [
  { path: '', redirectTo: 'home', terminal: true },
  { path: 'home', component: HomeComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
