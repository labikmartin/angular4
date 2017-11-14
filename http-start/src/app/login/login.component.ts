import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from './../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  email = '';
  password = '';
  errorMsg = '';

  constructor(private loginService: LoginService) {}

  onLogin(form: NgForm) {
    const credentials = form.value;
    this.email    = credentials.email;
    this.password = credentials.password;
    this.loginService.login(
      credentials,
      (response) => {
        console.log(response);
      },
      (error) => {
        this.errorMsg = error.message;
        console.log(this.errorMsg);
      }
    );
  }
}
