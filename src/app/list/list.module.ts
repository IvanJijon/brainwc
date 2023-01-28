import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortedComponent } from './sorted/sorted.component';
import { IonicModule } from '@ionic/angular';
import { ProgressSheetModule } from '../progress-sheet/progress-sheet.module';



@NgModule({
  declarations: [SortedComponent],
  imports: [
    IonicModule,
    CommonModule,
    ProgressSheetModule

  ],
  exports: [SortedComponent]
})
export class ListModule { }
