import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgressionPage } from './progression.page';

import { ProgressionPageRoutingModule } from './progression-routing.module';
import { ListModule } from '../list/list.module';

@NgModule({
  declarations: [ProgressionPage],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ProgressionPageRoutingModule,
    ListModule,
  ]
})
export class ProgressionPageModule { }
