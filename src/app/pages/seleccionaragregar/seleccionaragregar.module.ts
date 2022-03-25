import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionaragregarPageRoutingModule } from './seleccionaragregar-routing.module';

import { SeleccionaragregarPage } from './seleccionaragregar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionaragregarPageRoutingModule
  ],
  declarations: [SeleccionaragregarPage]
})
export class SeleccionaragregarPageModule {}
