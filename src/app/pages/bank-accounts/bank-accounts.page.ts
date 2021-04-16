import { Component } from '@angular/core';
import { ViewDidEnter, MenuController, ModalController, ActionSheetController } from '@ionic/angular';
import { ModalCreateAccountBankComponent } from '../../components/modal-create-account-bank/modal-create-account-bank.component';
import { BankAccountService } from '../../services/bank-account/bank-account.service';

@Component({
    selector: 'app-bank-accounts',
    templateUrl: './bank-accounts.page.html',
    styleUrls: ['./bank-accounts.page.scss'],
})
export class BankAccountsPage implements ViewDidEnter {

    listAccounts = [];
    typeAccountView: 'savings' | 'current' = 'savings';

    constructor(
        private menuCtrl: MenuController,
        private modalCtrl: ModalController,
        private bankAccountService: BankAccountService,
        private actionSheetCtrl: ActionSheetController
    ) {}

    ionViewDidEnter() {
        this.menuCtrl.close();
        this.bankAccountService.queryAccountUser().subscribe(accounts => {
            console.log(accounts);
            this.listAccounts = accounts;
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
                    this.listAccounts.push(resp);
                })
            }
        });

        return await modal.present();
    }


    async openActionSheetDetailAccount(account) {
        const actionSheet = await this.actionSheetCtrl.create({
            header: 'Acciones',
            buttons: [
                {
                    text: 'Movimientos',
                    icon: 'newspaper-outline',
                    handler: () => {
                        console.log('Log');
                    }
                }
            ]
        });

        await actionSheet.present();
    }

    segmentChanged(ev) {
        console.log(ev);
    }
}
