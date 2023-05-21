import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoalsTipsPagePageRoutingModule } from './goals-tips-page-routing.module';

import { GoalsTipsPagePage } from './goals-tips-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoalsTipsPagePageRoutingModule
  ],
  declarations: [GoalsTipsPagePage]
})
export class GoalsTipsPagePageModule {}
