import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompraComidaPage } from './compra-comida.page';

const routes: Routes = [
  {
    path: '',
    component: CompraComidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompraComidaPageRoutingModule {}
