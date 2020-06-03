import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DilwaleDulhaniaLeJayengePage } from './dilwale-dulhania-le-jayenge.page';

const routes: Routes = [
  {
    path: '',
    component: DilwaleDulhaniaLeJayengePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DilwaleDulhaniaLeJayengePageRoutingModule {}
