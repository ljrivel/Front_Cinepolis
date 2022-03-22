import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarcomidaPage } from './modificarcomida.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarcomidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarcomidaPageRoutingModule {}
