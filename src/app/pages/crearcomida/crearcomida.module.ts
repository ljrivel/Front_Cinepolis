import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearcomidaPageRoutingModule } from './crearcomida-routing.module';

import { CrearcomidaPage } from './crearcomida.page';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    IonicModule,
    CrearcomidaPageRoutingModule
  ],
  declarations: [CrearcomidaPage]
})
export class CrearcomidaPageModule {}
