import { Component, OnInit } from '@angular/core';
import { TabService } from '../shared/services/tab.service';

@Component({
  selector: 'app-progression',
  templateUrl: 'progression.page.html',
  styleUrls: ['progression.page.scss']
})
export class ProgressionPage implements OnInit {

  title = ""
  constructor(private tabService: TabService) { }

  ngOnInit() {
    this.tabService.getObservable().subscribe((tab) => this.title = tab.toUpperCase())
  }

}
