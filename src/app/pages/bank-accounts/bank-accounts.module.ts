import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BankAccountsPageRoutingModule } from './bank-accounts-routing.module';

import { BankAccountsPage } from './bank-accounts.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BankAccountsPageRoutingModule,
    PipesModule
  ],
  declarations: [BankAccountsPage]
})
export class BankAccountsPageModule {}
