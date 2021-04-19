import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrActionPage } from './qr-action.page';

const routes: Routes = [
  {
    path: '',
    component: QrActionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrActionPageRoutingModule {}
