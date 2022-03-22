import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarcomidaPageRoutingModule } from './modificarcomida-routing.module';

import { ModificarcomidaPage } from './modificarcomida.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule ,
    ModificarcomidaPageRoutingModule
  ],
  declarations: [ModificarcomidaPage]
})
export class ModificarcomidaPageModule {}
