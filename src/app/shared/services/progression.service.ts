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
          title: "a programming title",
          subtitle: "a subtitle",
          description: "a very very very long description de mas de 100 caracteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeres"
        },
        {
          title: "another programming title",
          subtitle: "a subtitle",
          description: "a description"
        },
        {
          title: "a third programming title",
          subtitle: "a subtitle",
          description: "a description"
        }]
        break
      case 'arts':
        this.items = [{
          title: "an arts title",
          subtitle: "a subtitle",
          description: "a description"
        },
        {
          title: "another arts title",
          subtitle: "a subtitle",
          description: "a description"
        },
        {
          title: "a third arts title",
          subtitle: "a subtitle",
          description: "a description"
        }]
        break
      case 'freelancing':
        this.items = [{
          title: "a freelancing title",
          subtitle: "a subtitle",
          description: "a description"
        },
        {
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
