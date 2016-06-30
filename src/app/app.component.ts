import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  directives: [ ROUTER_DIRECTIVES ],
  styleUrls: ['app.component.css']
})

export class AppComponent {
	title: string = 'app works';
}
