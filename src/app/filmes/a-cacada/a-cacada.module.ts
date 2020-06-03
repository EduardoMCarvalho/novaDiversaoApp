import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ACacadaPageRoutingModule } from './a-cacada-routing.module';

import { ACacadaPage } from './a-cacada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ACacadaPageRoutingModule
  ],
  declarations: [ACacadaPage]
})
export class ACacadaPageModule {}
