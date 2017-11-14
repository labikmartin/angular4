import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { NgForm } from '@angular/forms';

import { LoginService } from './../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class RegisterComponent {
  email = '';
  password = '';
  errorMsg = '';

  constructor(private loginService: LoginService) {}

  onRegister(form: NgForm) {
    const credentials = form.value;
    this.email    = credentials.email;
    this.password = credentials.password;
    this.loginService.register(
      credentials,
      (response) => {
        console.log(response);
      },
      (error) => {
        this.errorMsg = error.message;
        console.log(this.errorMsg);
    });
  }
}
