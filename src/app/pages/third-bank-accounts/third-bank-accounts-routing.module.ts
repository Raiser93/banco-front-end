import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThirdBankAccountsPage } from './third-bank-accounts.page';

const routes: Routes = [
  {
    path: '',
    component: ThirdBankAccountsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThirdBankAccountsPageRoutingModule {}
