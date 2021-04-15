import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage {

    loginForm: FormGroup;

    validationMessage = {
        email: [
            { type: 'required', message: 'El correo es obligatorio' },
            { type: 'email', message: 'El correo no es valido' },
        ],
        password: [
            { type: 'required', message: 'La contraseña es requerida' },
            { type: 'minlength', message: 'La contraseña debe tener 6 caracteres como minimo' }
        ]
    }

    constructor(
        private userService: UserService,
        private router: Router
    ) {
        this.loginForm = new FormGroup({
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.email
            ])),
            password: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6)
            ]))
        });
    }
    
    login(form: NgForm) {
        if (form.invalid) {
            return;
        }
        
        this.userService.login(form.value).subscribe(resp => {
            if (resp) {
                this.router.navigateByUrl('/pages');
            }
        }, err => {
            console.log(err);
        });
    }
}
