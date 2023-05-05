import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoalsInstructionsPage } from './goals-instructions.page';

const routes: Routes = [
  {
    path: '',
    component: GoalsInstructionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoalsInstructionsPageRoutingModule {}
