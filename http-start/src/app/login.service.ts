import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

@Injectable()

export class LoginService {

  login(credentials, thenCb?, errorCb?) {
    const email    = credentials.email;
    const password = credentials.password;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(errorCb)
      .then(thenCb);
  }

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
