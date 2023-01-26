import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';
import { Item, ListItem } from 'src/app/shared/models/list-item.model';
import { ProgressionService } from 'src/app/shared/services/progression.service';
import { TabService } from 'src/app/shared/services/tab.service';

@Component({
  selector: 'app-sorted',
  templateUrl: './sorted.component.html',
  styleUrls: ['./sorted.component.scss'],
})
export class SortedComponent implements OnInit {

  items: Item[] = []
  currentTab = ""

  constructor(private tabService: TabService, private progressionService: ProgressionService) { }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    ev.detail.complete();
  }

  ngOnInit() {
    this.tabService.getObservable().subscribe((tab) => {
      this.currentTab = tab
      if (this.items.length == 0) { // prevent to reload data each time we change tab
        this.items = this.progressionService.getProgression(this.currentTab)
      }
    })
  }
}
