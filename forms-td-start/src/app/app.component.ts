import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('loginForm') loginForm: NgForm;

  formValues;

  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    // SET ALL FORM DATA
    // this.loginForm.setValue({
    //     userData: {
    //       username: suggestedName,
    //       email: 'ujco@ujco.cz'
    //     },
    //     question: 'pet',
    //     gender: 'female'
    //   });
    // SET SINGLE/MULTIPLE FORM VALUE
    this.loginForm.form.patchValue({
      userData: {username: suggestedName, email: 'k@k.kk'}
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.formValues = this.loginForm.value;
    // RESET VALUES
    // this.loginForm.reset();
    // RESET TO SPECIFIC VALUE
    this.loginForm.reset({
      userData: {
        username: 'yolo'
      }
    });
  }

}
