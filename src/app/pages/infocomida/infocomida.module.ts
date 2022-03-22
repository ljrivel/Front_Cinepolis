import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfocomidaPageRoutingModule } from './infocomida-routing.module';

import { InfocomidaPage } from './infocomida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfocomidaPageRoutingModule
  ],
  declarations: [InfocomidaPage]
})
export class InfocomidaPageModule {}
