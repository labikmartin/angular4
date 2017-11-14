import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

@Injectable()

export class LoginService {

  // login(body, cb, errorCb?) {
  //   return this.http
  //     .post('token-test-acf61.firebaseapp.com', body)
  //     .subscribe(cb, errorCb);
  // }

  register(credentials, thenCb?, errorCb?) {
    const email    = credentials.email;
    const password = credentials.password;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(errorCb)
      .then(thenCb);
  }
}
