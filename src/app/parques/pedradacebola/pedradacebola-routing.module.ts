import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedradacebolaPage } from './pedradacebola.page';

const routes: Routes = [
  {
    path: '',
    component: PedradacebolaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedradacebolaPageRoutingModule {}
