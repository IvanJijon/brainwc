import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  private tabSubject = new Subject<any>();

  constructor() { }

  publish(e: any) {
    this.tabSubject.next(e.tab);
  }
  getObservable(): Subject<any> {
    return this.tabSubject;
  }
}
