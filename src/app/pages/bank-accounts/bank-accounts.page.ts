import { Component, OnInit } from '@angular/core';
import { ViewDidEnter, MenuController, ModalController } from '@ionic/angular';
import { ModalCreateAccountBankComponent } from '../../components/modal-create-account-bank/modal-create-account-bank.component';
import { BankAccountService } from '../../services/bank-account/bank-account.service';

@Component({
    selector: 'app-bank-accounts',
    templateUrl: './bank-accounts.page.html',
    styleUrls: ['./bank-accounts.page.scss'],
})
export class BankAccountsPage implements ViewDidEnter {

    constructor(
        private menuCtrl: MenuController,
        private modalCtrl: ModalController,
        private bankAccountService: BankAccountService
    ) {}

    ionViewDidEnter() {
        this.menuCtrl.close();
        this.bankAccountService.queryAccountUser().subscribe(accounts => {
            console.log(accounts);
        });
    }

    async openModalCreateAccount() {
        const modal = await this.modalCtrl.create({
            component: ModalCreateAccountBankComponent,
        });

        modal.onDidDismiss().then(({data}) => {
            if (data) {
                console.log(data);
                this.bankAccountService.createAccount(data).subscribe(resp => {
                    console.log(resp);
                })
            }
        });

        return await modal.present();
    }
}
