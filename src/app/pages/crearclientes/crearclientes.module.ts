import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearclientesPageRoutingModule } from './crearclientes-routing.module';

import { CrearclientesPage } from './crearclientes.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CrearclientesPageRoutingModule
  ],
  declarations: [CrearclientesPage]
})
export class CrearclientesPageModule {}
