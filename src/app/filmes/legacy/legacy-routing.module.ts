import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegacyPage } from './legacy.page';

const routes: Routes = [
  {
    path: '',
    component: LegacyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegacyPageRoutingModule {}
