import { Component } from '@angular/core';
import { ViewDidEnter, MenuController, ModalController, ActionSheetController, ToastController } from '@ionic/angular';
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
        private actionSheetCtrl: ActionSheetController,
        private toastCtrl: ToastController
    ) {}

    ionViewDidEnter() {
        this.menuCtrl.close();
        this.bankAccountService.queryAccountUser().subscribe(accounts => {
            console.log(accounts);
            this.listAccounts = accounts;
        }, err => {
            console.error(err);
            this.toastMessage({
                msg: err.msg || 'Ocurrio un error al obtener la cuentas bancarias'
            });
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
                }, err => {
                    this.toastMessage({
                        msg: err.msg || 'Ocurrio un error al crear una cuenta bancaria'
                    });
                });
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

    async toastMessage({msg}: {msg: string}) {
        const toast = await this.toastCtrl.create({
            message: msg,
            duration: 2000
        });

        toast.present();
    }
}
