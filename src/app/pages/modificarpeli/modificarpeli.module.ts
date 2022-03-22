import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarpeliPageRoutingModule } from './modificarpeli-routing.module';

import { ModificarpeliPage } from './modificarpeli.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule ,
    ModificarpeliPageRoutingModule
  ],
  declarations: [ModificarpeliPage]
})
export class ModificarpeliPageModule {}
