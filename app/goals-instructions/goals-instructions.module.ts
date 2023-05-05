import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavParams } from '@ionic/angular';

import { IonicModule } from '@ionic/angular';

import { GoalsInstructionsPageRoutingModule } from './goals-instructions-routing.module';

import { GoalsInstructionsPage } from './goals-instructions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoalsInstructionsPageRoutingModule
  ],
  declarations: [GoalsInstructionsPage],
  providers: [NavParams],
})
export class GoalsInstructionsPageModule {}
