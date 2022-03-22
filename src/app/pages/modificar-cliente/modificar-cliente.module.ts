import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarClientePageRoutingModule } from './modificar-cliente-routing.module';

import { ModificarClientePage } from './modificar-cliente.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ModificarClientePageRoutingModule
  ],
  declarations: [ModificarClientePage]
})
export class ModificarClientePageModule {}
