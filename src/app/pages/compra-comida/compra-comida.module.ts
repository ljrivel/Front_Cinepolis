import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompraComidaPageRoutingModule } from './compra-comida-routing.module';

import { CompraComidaPage } from './compra-comida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompraComidaPageRoutingModule
  ],
  declarations: [CompraComidaPage]
})
export class CompraComidaPageModule {}
