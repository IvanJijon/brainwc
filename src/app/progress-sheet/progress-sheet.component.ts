import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-sheet',
  templateUrl: './progress-sheet.component.html',
  styleUrls: ['./progress-sheet.component.scss'],
})
export class ProgressSheetComponent implements OnInit {

  @Input() modalTrigger: string = ""
  @Input() itemTitle: string = "Item Title"

  constructor() { }

  ngOnInit() { }

}
