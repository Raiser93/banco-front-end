import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    registerForm: FormGroup;

    sliderOpts = {
        allowSlidePrev: false,
        allowSlideNext: false,
    };

    constructor(
        private userService: UserService,
        private router: Router
    ) {
        this.registerForm = new FormGroup({
            name: new FormControl('', Validators.compose([
                Validators.required
            ])),
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.email
            ])),
            identification_number: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(12),
                Validators.maxLength(12),
                Validators.pattern('[0-9]*')
            ])),
            password: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6)
            ])),
            confirmPassword: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6)
            ])),
        });
    }

    ngOnInit() {}

    register(form: NgForm) {
        if (form.invalid) {
            return;
        }

        this.userService.register(form.value).subscribe(resp => {
            if (resp ) {
                this.router.navigateByUrl('/pages');
            }
        });
    }
}
