import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(
        private http: HttpClient,
        private storage: Storage
    ) {}

    get token() {
        return localStorage.getItem('tokenLoginBank');
    }

    get userId() {
        return localStorage.getItem('userIdBank');
    }

    saveStorage(token: string, userId: number) {
        this.storage.create();
        this.storage.set('tokenLoginBank', token);
        localStorage.setItem('tokenLoginBank', token);
        localStorage.setItem('userIdBank', userId.toString());
    }
    
    // Servicio para validar el token
    validateToken(): Observable<any> {
        const url = `${environment.urlRest}auth/renew`;
        console.log(this.token);
        
        return this.http.get(url, {
            headers: {
                'x-token': this.token
            }
        }).pipe(
            map((resp: any) => {
                console.log(resp);
                this.saveStorage(resp.token, resp.id);
                return true;
            }),
            catchError(error => {
                console.log(error);
                return of(false)
            })
        )
    }
    
    // Servicio para peticion del logi
    login(credentials: {email, password}) {
        console.log(credentials);
        
        const url = `${environment.urlRest}auth/login`;
        return this.http.post(url, credentials).pipe(
            map((resp: any) => {
                this.saveStorage(resp.token, resp.id);
                return true;
            }),
            catchError(err => throwError(err))
        );
    }

}
