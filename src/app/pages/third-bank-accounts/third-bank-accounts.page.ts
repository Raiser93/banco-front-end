import { Component } from '@angular/core';
import { MenuController, ModalController, ToastController, ViewDidEnter } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ModalAccountsThirdComponent } from 'src/app/components/modal-accounts-third/modal-accounts-third.component';
import { BankAccountService } from 'src/app/services/bank-account/bank-account.service';

@Component({
    selector: 'app-third-bank-accounts',
    templateUrl: './third-bank-accounts.page.html',
    styleUrls: ['./third-bank-accounts.page.scss'],
})
export class ThirdBankAccountsPage implements ViewDidEnter  {

    subAccountsThird: Observable<any[]>;

    constructor(
        private menuCtrl: MenuController,
        private modalCtrl: ModalController,
        private bankAccountService: BankAccountService,
        private toastCtrl: ToastController
    ) {}

    ionViewDidEnter() {
        this.menuCtrl.close();
        this.subAccountsThird = this.bankAccountService.getAccountThird();
    }


    async openModalCreateAccountThird() {
        const modal = await this.modalCtrl.create({
            component: ModalAccountsThirdComponent
        });

        modal.present();

        modal.onDidDismiss().then(({data}) => {
            if (data) {
                console.log(data);
                this.subAccountsThird = this.bankAccountService.getAccountThird();
            }
        });
    }

    async toastMessage({msg}: {msg: string}) {
        const toast = await this.toastCtrl.create({
            message: msg,
            duration: 2000
        });

        toast.present();
    }

}