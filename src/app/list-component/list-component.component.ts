import { Component, OnInit } from '@angular/core';
import { Control } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from './item';
import { ListService } from '../list.service';
import { Observable } from 'rxjs/Rx';
import { DROPDOWN_DIRECTIVES, CollapseDirective } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'list',
  templateUrl: 'app/list-component/list-component.component.html',
  directives: [ DROPDOWN_DIRECTIVES, CollapseDirective ],
  providers: [ ListService ]
})

export class ListComponent implements OnInit {
  errorMessage: string;
  apiItems: Item[];
  items: Item[];
  sub: any;
  mode = 'Observable';
  listFilter = new Control();

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private listService: ListService) {
  }

  ngOnInit() {
    this.sub = this.router
      .routerState
      .queryParams
      .subscribe(params => {
        const countString = params['count'];
        this.getItems(countString && Number(countString));
      });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  getItems(count?: number) {
    // configure filter-triggered behaviour
    this.listFilter
      .valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .map(filter => this.apiItems.filter(item => {
        return (item.citation && item.citation.html || item.note && item.note.html).indexOf(filter) >= 0;
      }))
      .subscribe(
        items => this.items = items,
        error => this.errorMessage = <any>error
      );

    // Fetch items from the service
    this.listService.getItems(count).subscribe(
      items => {
        this.apiItems = items;
        this.items = items;
      },
      error => this.errorMessage = <any>error
    );
  }
}
