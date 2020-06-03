import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BloodAndMoneyPageRoutingModule } from './blood-and-money-routing.module';

import { BloodAndMoneyPage } from './blood-and-money.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BloodAndMoneyPageRoutingModule
  ],
  declarations: [BloodAndMoneyPage]
})
export class BloodAndMoneyPageModule {}
