import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearpeliculaPage } from './crearpelicula.page';

const routes: Routes = [
  {
    path: '',
    component: CrearpeliculaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearpeliculaPageRoutingModule {}
