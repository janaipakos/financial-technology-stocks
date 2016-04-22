import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Dashboard} from './dashboard';
import {Manage} from './manage';

@RouteConfig([
  {path: '/', name: 'Dashboard', component: Dashboard},
  {path: '/manage', name: 'Manage', component: Manage}
])

@Component({
  selector: 'app'
})
@View({
  directives: [ROUTER_DIRECTIVES],
  template: `
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Stock Tracker</span>
        <div class="mdl-layout-spacer"></div>
        <nav class="mdl-navigation mdl-layout--large-screen-only">
          <a class="mdl-navigation__link" [routerLink]="['Dashboard']">Dashboard</a>
          <a class="mdl-navigation__link" [routerLink]="['Manage']">Manage</a>
        </nav>
      </div>
    </header>
    <main class="mdl-layout__content" style="padding: 20px;">
      <router-outlet></router-outlet>
    </main>
  </div>
  `
})
export class App {
}
