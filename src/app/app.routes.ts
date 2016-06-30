import { provideRouter, RouterConfig } from '@angular/router';
import { ListComponent } from './list-component';

export const routes: RouterConfig = [
  { path: '',      redirectTo: '/items' },
  { path: 'items', component: ListComponent }
];

export const APP_ROUTER_PROVIDERS = [provideRouter(routes)];