import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearpeliculaPageRoutingModule } from './crearpelicula-routing.module';

import { CrearpeliculaPage } from './crearpelicula.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    IonicModule,
    CrearpeliculaPageRoutingModule
  ],
  declarations: [CrearpeliculaPage]
})
export class CrearpeliculaPageModule {}
