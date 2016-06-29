import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ListService } from '../list.service';
import FilterPipe from '../filter-pipe.pipe';
import { DROPDOWN_DIRECTIVES, CollapseDirective } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'list',
  templateUrl: 'app/list-component/list-component.component.html',
  directives: [ DROPDOWN_DIRECTIVES, CollapseDirective ],
  providers: [ ListService ],
  pipes: [ FilterPipe ]
})

export class ListComponent implements OnInit {
  errorMessage: string;
  heroes: Item[];
  mode = 'Observable';

  constructor (private listService: ListService) {}

  ngOnInit() { this.getHeroes(); }

  public isCollapsed:boolean = true;

  getHeroes() {
    this.listService.getHeroes()
                     .subscribe(
                       heroes => this.heroes = heroes,
                       error =>  this.errorMessage = <any>error);
  }
}
