import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSheetComponent } from './progress-sheet.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ProgressSheetComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [ProgressSheetComponent]
})
export class ProgressSheetModule { }
