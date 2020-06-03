import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ACacadaPage } from './a-cacada.page';

const routes: Routes = [
  {
    path: '',
    component: ACacadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ACacadaPageRoutingModule {}
