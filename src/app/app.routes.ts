import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { QualityComponent } from './quality/quality.component';

const routes: RouterConfig = [
  { path: '', redirectTo: 'home', terminal: true },
  { path: 'home', component: HomeComponent },
  { path: 'quality', component: QualityComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
