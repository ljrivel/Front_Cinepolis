import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarpeliPage } from './modificarpeli.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarpeliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarpeliPageRoutingModule {}
