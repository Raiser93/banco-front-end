import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-modal-create-account-bank',
    templateUrl: './modal-create-account-bank.component.html',
    styleUrls: ['./modal-create-account-bank.component.scss'],
})
export class ModalCreateAccountBankComponent {
    
    bankAccountForm: FormGroup;

    constructor(
        private modalCtrl: ModalController
    ) {
        this.bankAccountForm = new FormGroup({
            num_account: new FormControl(null, Validators.compose([
                Validators.required,
                Validators.minLength(11),
                Validators.maxLength(11),
                Validators.pattern('[0-9]*')
            ])),
            type_account: new FormControl('SAVINGS_ACCOUNT', Validators.compose([
                Validators.required
            ])),
            balance_account: new FormControl(0, Validators.compose([
                Validators.required
            ])),
            type_currency: new FormControl('CO', Validators.compose([
                Validators.required
            ])),
        })
    }

    closeModal() {
        this.modalCtrl.dismiss();
    }

    createAccount() {
        if (this.bankAccountForm.invalid) {
            return;
        }

        this.modalCtrl.dismiss(this.bankAccountForm.value);
    }

    intToString(field) {
        
        let value = this.bankAccountForm.get(field).value;
        if (value.toString().length > 11) {
            value = (value.toString() as string).substr(0, 11)
        }
        this.bankAccountForm.setValue({
            ...this.bankAccountForm.value,
            [field]: value.toString()
        });
        console.log(value);
        

    }

}
