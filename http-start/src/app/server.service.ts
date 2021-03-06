import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";

// provides .map() method
import 'rxjs/Rx';

@Injectable()

export class ServerService {

  constructor(private http: Http) {}

  postServers(servers: any[], cb) {
    // HEADERS
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http
      .post('https://token-test-acf61.firebaseio.com/', servers, {headers: headers})
      .subscribe(cb);
  }

  fetchServers(cb, errorCb) {
    return this.http
      .get('https://token-test-acf61.firebaseio.com/')
      .map((response: Response) => {
        const data = response.json();
        return data;
      })
      .catch((error: Response) => {
        // CATCH DOESNT RETURN OBSERVABLE BY DEFAULT AS .map() DOES
        return Observable.throw(error);
      })
      .subscribe(cb, errorCb);
  }

  usingPipeAsync() {
    return this.http
      .get('https://token-test-acf61.firebaseio.com/')
      .map((response: Response) => {
        const data = response.json();
        return data[1].id;
      });
  }

}