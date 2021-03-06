import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThirdBankAccountsPageRoutingModule } from './third-bank-accounts-routing.module';

import { ThirdBankAccountsPage } from './third-bank-accounts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ThirdBankAccountsPageRoutingModule
  ],
  declarations: [ThirdBankAccountsPage]
})
export class ThirdBankAccountsPageModule {}
