import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegacyPageRoutingModule } from './legacy-routing.module';

import { LegacyPage } from './legacy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegacyPageRoutingModule
  ],
  declarations: [LegacyPage]
})
export class LegacyPageModule {}
