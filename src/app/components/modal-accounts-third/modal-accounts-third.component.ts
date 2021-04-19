import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ModalController, ViewWillEnter } from '@ionic/angular';
import { BankAccountService } from 'src/app/services/bank-account/bank-account.service';

@Component({
    selector: 'app-modal-accounts-third',
    templateUrl: './modal-accounts-third.component.html',
    styleUrls: ['./modal-accounts-third.component.scss'],
})
export class ModalAccountsThirdComponent implements ViewWillEnter {
    bankAccountThirdForm: FormGroup;
    subServiceListBank: any;

    constructor(
        private bankAccountService: BankAccountService,
        private modalCtrl: ModalController,
    ) {
        this.bankAccountThirdForm = new FormGroup({
            alias: new FormControl('', Validators.compose([
                Validators.required,
            ])),
            bank: new FormControl('', Validators.compose([
                Validators.required,
            ])),
            type_account: new FormControl('', Validators.compose([
                Validators.required,
            ])),
            num_account: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(11),
                Validators.maxLength(11),
                Validators.pattern('[0-9]*')
            ])),
            identification_number: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(12),
                Validators.maxLength(12),
                Validators.pattern('[0-9]*')
            ])),
            type_currency: new FormControl('', Validators.compose([
                Validators.required,
            ])),
        });
    }

    ionViewWillEnter() {
        this.subServiceListBank = this.bankAccountService.getListBanks();
    }
    
    createAccountThird(form: NgForm) {
        if (form.invalid) {
            return;
        }
        
        this.bankAccountService.createAccountThird(form.value).subscribe(resp => {
            if (resp) {
                this.modalCtrl.dismiss(resp);       
            }
        })
    }

    closeModal() {
        this.modalCtrl.dismiss();
    }

}
