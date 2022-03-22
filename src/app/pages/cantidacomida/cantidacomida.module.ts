import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CantidacomidaPageRoutingModule } from './cantidacomida-routing.module';

import { CantidacomidaPage } from './cantidacomida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CantidacomidaPageRoutingModule
  ],
  declarations: [CantidacomidaPage]
})
export class CantidacomidaPageModule {}
