import { Component } from '@angular/core';
// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';
import { ListComponent } from './list-component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: '<list></list>',
  directives: [ ListComponent ],
  styleUrls: ['app.component.css']
})

export class AppComponent {}
