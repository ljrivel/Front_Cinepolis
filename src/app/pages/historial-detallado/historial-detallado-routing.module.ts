import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialDetalladoPage } from './historial-detallado.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialDetalladoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialDetalladoPageRoutingModule {}
