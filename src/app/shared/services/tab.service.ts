import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Tab } from '../models/tab.model';

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

  getTabs(): Tab[] {
    return [{
      name: "programming",
      icon: "bug-outline",
      label: "Programming"
    },
    {
      name: "arts",
      icon: "create-outline",
      label: "Arts"
    },
    {
      name: "freelancing",
      icon: "cash-outline",
      label: "Freelancing"
    }]
  }
}
