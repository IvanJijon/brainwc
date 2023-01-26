import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgrammingPage } from './programming.page';

import { Tab1PageRoutingModule } from './programming-routing.module';
import { ListModule } from '../list/list.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    ListModule
  ],
  declarations: [ProgrammingPage]
})
export class ProgrammingPageModule { }
