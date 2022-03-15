import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CantidadTicketsPageRoutingModule } from './cantidad-tickets-routing.module';

import { CantidadTicketsPage } from './cantidad-tickets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CantidadTicketsPageRoutingModule
  ],
  declarations: [CantidadTicketsPage]
})
export class CantidadTicketsPageModule {}
