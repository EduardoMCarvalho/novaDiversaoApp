import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloodAndMoneyPage } from './blood-and-money.page';

const routes: Routes = [
  {
    path: '',
    component: BloodAndMoneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloodAndMoneyPageRoutingModule {}
