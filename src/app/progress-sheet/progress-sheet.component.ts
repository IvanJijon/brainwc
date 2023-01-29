import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../shared/models/list-item.model';

@Component({
  selector: 'app-progress-sheet',
  templateUrl: './progress-sheet.component.html',
  styleUrls: ['./progress-sheet.component.scss'],
})
export class ProgressSheetComponent implements OnInit {

  @Input() modalTrigger: string = ""
  @Input() item: Item = {
    title: "",
    subtitle: "",
    description: ""
  }

  constructor() { }

  ngOnInit() { }

}
