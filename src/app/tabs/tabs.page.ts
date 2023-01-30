import { Component, OnInit } from '@angular/core';
import { TabService } from '../shared/services/tab.service';
import { Tab } from '../shared/models/tab.model';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  tabs: Tab[] = []

  constructor(private tabService: TabService) { }

  tabChange(e: any) {
    this.tabService.publish(e)
  }

  ngOnInit(): void {
    this.tabs = this.tabService.getTabs()
  }
}
