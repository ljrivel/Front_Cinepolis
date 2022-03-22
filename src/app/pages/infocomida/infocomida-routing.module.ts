import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfocomidaPage } from './infocomida.page';

const routes: Routes = [
  {
    path: '',
    component: InfocomidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfocomidaPageRoutingModule {}
