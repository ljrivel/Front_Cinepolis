import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialDetalladoPageRoutingModule } from './historial-detallado-routing.module';

import { HistorialDetalladoPage } from './historial-detallado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialDetalladoPageRoutingModule
  ],
  declarations: [HistorialDetalladoPage]
})
export class HistorialDetalladoPageModule {}
