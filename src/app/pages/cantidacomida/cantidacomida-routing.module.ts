import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CantidacomidaPage } from './cantidacomida.page';

const routes: Routes = [
  {
    path: '',
    component: CantidacomidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CantidacomidaPageRoutingModule {}
