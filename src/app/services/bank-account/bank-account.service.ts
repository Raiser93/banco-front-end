import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
    providedIn: 'root'
})
export class BankAccountService {

    constructor(
        private http: HttpClient,
        private userService: UserService
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
}
