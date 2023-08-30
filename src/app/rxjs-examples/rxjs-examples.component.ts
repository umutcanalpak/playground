import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-examples',
  templateUrl: './rxjs-examples.component.html',
  styleUrls: ['./rxjs-examples.component.scss'],
})
export class RxjsExamplesComponent implements OnInit {
  readonly server = 'http://localhost:3000/';

  ngOnInit(): void {
    // this.example1();
    this.example2();
  }

  getFetchObservable(url = '', method = 'GET') {
    return new Observable((subscriber) => {
      fetch(this.server + url, {
        method,
      })
        .then((value) => {
          return value.json();
        })
        .then((value) => {
          subscriber.next(value);
          subscriber.complete();
        });
    });
  }

  example2() {
    const observable = this.getFetchObservable('example-200');

    new Observable();

    const subscription = observable.subscribe({
      next: (value) => {
        console.log('value', value);
      },
      error: (err) => {
        console.log('err', err);
      },
      complete: () => {
        console.log('completed');
      },
    });

    setTimeout(() => {
      console.log('subscription.closed', subscription.closed);
    }, 2000);
  }

  example1() {
    const observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      setTimeout(() => {
        subscriber.next(3);
        subscriber.complete();
      }, 1000);
    });

    console.log('before subscribe');

    const subscription = observable.subscribe({
      next: (value) => {
        console.log('value', value);
      },
      error: (err) => {
        console.log('err', err);
      },
      complete: () => {
        console.log('completed');
      },
    });

    console.log('after subscribe');

    console.log('subscription.closed', subscription.closed);

    // subscription.unsubscribe();

    setTimeout(() => {
      console.log('subscription.closed', subscription.closed);
    }, 2000);
  }
}
