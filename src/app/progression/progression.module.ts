import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgressionPage } from './progression.page';

import { ProgrammingPageRoutingModule } from './progression-routing.module';
import { ListModule } from '../list/list.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ProgrammingPageRoutingModule,
    ListModule
  ],
  declarations: [ProgressionPage]
})
export class ProgrammingPageModule { }
