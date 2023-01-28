import { Injectable } from '@angular/core';
import { Item } from '../models/list-item.model';

@Injectable({
  providedIn: 'root'
})
export class ProgressionService {

  constructor() { }

  items: Item[] = []

  getProgression(subject: string): Item[] {
    switch (subject) {
      case 'programming':
        this.items = [{
          id: 1,
          title: "a programming title",
          subtitle: "a subtitle",
          description: "a very very very long description de mas de 100 caracteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeres"
        },
        {
          id: 2,
          title: "another programming title",
          subtitle: "a subtitle",
          description: "a description"
        },
        {
          id: 3,
          title: "a third programming title",
          subtitle: "a subtitle",
          description: "a description"
        }]
        break
      case 'arts':
        this.items = [{
          id: 4,
          title: "an arts title",
          subtitle: "a subtitle",
          description: "a description"
        },
        {
          id: 5,
          title: "another arts title",
          subtitle: "a subtitle",
          description: "a description"
        },
        {
          id: 6,
          title: "a third arts title",
          subtitle: "a subtitle",
          description: "a description"
        }]
        break
      case 'freelancing':
        this.items = [{
          id: 7,
          title: "a freelancing title",
          subtitle: "a subtitle",
          description: "a description"
        },
        {
          id: 8,
          title: "another freelancing title",
          subtitle: "a subtitle",
          description: "a description"
        }]
        break
      default:
        break;
    }

    return this.items

  }
}
