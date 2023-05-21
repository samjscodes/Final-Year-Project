import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoalsTipsPagePage } from './goals-tips-page.page';

const routes: Routes = [
  {
    path: '',
    component: GoalsTipsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoalsTipsPagePageRoutingModule {}
