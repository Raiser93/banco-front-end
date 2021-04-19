import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ModalCreateAccountBankComponent } from './modal-create-account-bank/modal-create-account-bank.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalAccountsThirdComponent } from './modal-accounts-third/modal-accounts-third.component';



@NgModule({
  declarations: [
    ModalCreateAccountBankComponent,
    ModalAccountsThirdComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ModalCreateAccountBankComponent,
    ModalAccountsThirdComponent
  ]
})
export class ComponentsModule { }
