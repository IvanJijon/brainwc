import { Component } from '@angular/core';
import { TabService } from '../shared/services/tab.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private tabService: TabService) { }

  tabChange(e: any) {
    this.tabService.publish(e)
  }
}
