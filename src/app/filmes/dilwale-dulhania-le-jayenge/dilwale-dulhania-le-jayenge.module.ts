import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DilwaleDulhaniaLeJayengePageRoutingModule } from './dilwale-dulhania-le-jayenge-routing.module';

import { DilwaleDulhaniaLeJayengePage } from './dilwale-dulhania-le-jayenge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DilwaleDulhaniaLeJayengePageRoutingModule
  ],
  declarations: [DilwaleDulhaniaLeJayengePage]
})
export class DilwaleDulhaniaLeJayengePageModule {}
