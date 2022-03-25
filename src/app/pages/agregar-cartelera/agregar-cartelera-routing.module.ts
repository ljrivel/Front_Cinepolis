import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarCarteleraPage } from './agregar-cartelera.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarCarteleraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarCarteleraPageRoutingModule {}
