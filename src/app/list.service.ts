import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Item } from './list-component/item';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ListService {
  constructor (private http: Http) {}

  private itemsUrl = `https://i7fea98uib.execute-api.us-east-1.amazonaws.com/prod/Dev_Random_ListData`;

  getItems(count: number = 10): Observable<Item[]> {
    // configure list size to fetch
    const search = new URLSearchParams();
    search.set('limit', count.toString());
    search.set('total', count.toString());

    return (
      this.http
        .get(this.itemsUrl, { search })
        .map(this.extractData)
        .catch(this.handleError)
     );
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.items || [];
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

     console.error(errMsg);
     return Observable.throw(errMsg);
  }
}
