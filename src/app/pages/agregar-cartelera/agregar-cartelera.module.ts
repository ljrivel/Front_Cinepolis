import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarCarteleraPageRoutingModule } from './agregar-cartelera-routing.module';

import { AgregarCarteleraPage } from './agregar-cartelera.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule ,
    AgregarCarteleraPageRoutingModule
  ],
  declarations: [AgregarCarteleraPage]
})
export class AgregarCarteleraPageModule {}
