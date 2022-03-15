import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CantidadTicketsPage } from './cantidad-tickets.page';

const routes: Routes = [
  {
    path: '',
    component: CantidadTicketsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CantidadTicketsPageRoutingModule {}
