import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { tap, map, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user/user.service';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private userService: UserService,
        private router: Router
    ) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.userService.validateToken().pipe(
            tap(isAuthenticated => {
                if (!isAuthenticated) {
                    this.router.navigateByUrl('/login');
                }
            })
        );
    }
    // canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //     return this.userService.validateToken().pipe(
    //         tap(isAuthenticated => {
    //             if (!isAuthenticated) {
    //                 this.router.navigateByUrl('/login');
    //             }
    //         })
    //     );
    // }

}
