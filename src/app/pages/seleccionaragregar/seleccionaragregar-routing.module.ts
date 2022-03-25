import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionaragregarPage } from './seleccionaragregar.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionaragregarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionaragregarPageRoutingModule {}
