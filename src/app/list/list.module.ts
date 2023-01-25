import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortedComponent } from './sorted/sorted.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [SortedComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [SortedComponent]
})
export class ListModule { }
