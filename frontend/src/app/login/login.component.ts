import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({ 
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    loading = false;
    submitted = false;
    loginError = null;
    @Output() onLoginSuccess = new EventEmitter<any>();

    constructor(
        private formBuilder: FormBuilder,
        private dataService: DataService
    ) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    get form() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;

        this.dataService.login(this.form['username'].value, this.form['password'].value).subscribe(
            () => {
                this.loginError = null;
                this.loading = false;
                this.onLoginSuccess.emit();
            },
            (response: HttpErrorResponse ) => {
                this.loginError = response.error.errorMessage
                this.loading = false;
                return;
            }
        );
    }

    clearErrorMessage() {
        this.loginError = null;
    }
}