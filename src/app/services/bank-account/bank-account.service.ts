import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { UserService } from '../user/user.service';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class BankAccountService {

    constructor(
        private http: HttpClient,
        private userService: UserService,
        private toastCtrl: ToastController
    ) {}

    createAccount(credentials: {
        num_account: number;
        type_account: string;
        balance_account: number;
        type_currency: string;
    }) {
        const url = `${environment.urlRest}bank/create-account`;
        return this.http.post(url, {
            ...credentials,
            userId: Number(this.userService.userId)
        }, {
            headers: {
                'x-token': this.userService.token
            }
        }).pipe(
            map((resp: any) => {
                return resp.account;
            }),
            catchError(err => {
                console.error(err);
                return throwError(err);
            })
        );
    }

    queryAccountUser() {
        const url = `${environment.urlRest}bank/accounts-user-id/${this.userService.userId}`;
        return this.http.get(url, {
            headers: {
                'x-token': this.userService.token
            }
        }).pipe(
            map((resp: any) => {
                return resp.accounts
            }),
            catchError(err => {
                console.error(err);
                return throwError(err);
            })
        )
    }


    getListBanks() {
        const url = `https://bogota-laburbano.opendatasoft.com/api/records/1.0/search/?dataset=bancos-de-colombia&q=10`;
        return this.http.get(url).pipe(
            map((resp: any) => {
                console.log(resp);
                return resp.records;
            }),
            catchError(err => {
                this.toastMessage({
                    msg: err.msg || 'Ocurrio un error al obtener las entidades bancarias'
                });
                return throwError(err);
            })
        )
    }

    createAccountThird(credentials) {
        const url = `${environment.urlRest}bank/accounts-create-third/${this.userService.userId}`;
        return this.http.post(url, credentials, {
            headers: {
                'x-token': this.userService.token
            }
        }).pipe(
            map((resp: any) => {
                console.log(resp);
                return resp.accountThrid
            }),
            catchError(err => {
                console.error(err);
                return throwError(err);
            })
        )
    }

    getAccountThird() {
        const url = `${environment.urlRest}bank/accounts-get-third/${this.userService.userId}`;
        return this.http.get(url, {
            headers: {
                'x-token': this.userService.token
            }
        }).pipe(
            map((resp: any) => {
                console.log(resp);
                return resp.accountsThird
            }),
            catchError(err => {
                this.toastMessage({
                    msg: err.msg || 'Ocurrio un error al obtener las cuentas de terceros'
                });
                return throwError(err);
            })
        )
    }

    
    async toastMessage({msg}: {msg: string}) {
        const toast = await this.toastCtrl.create({
            message: msg,
            duration: 2000
        });

        toast.present();
    }
}
