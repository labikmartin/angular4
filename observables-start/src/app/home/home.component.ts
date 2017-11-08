import 'rxjs/Rx';

import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const myNumbers = Observable.interval(1000);
    // myNumbers.subscribe((number: number) => {
    //   console.log(number);
    // });
    const meinObservabul = Observable.create((observer: Observer<string|number>) => {
      setTimeout(() => {
        observer.next('First shot');
      }, 2000);
      setTimeout(() => {
        observer.next(6);
      }, 4000);
      setTimeout(() => {
        observer.error('Its fucked');
      }, 6000);
    });
    meinObservabul.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('Shots completed');
      }
    );
  }

}
