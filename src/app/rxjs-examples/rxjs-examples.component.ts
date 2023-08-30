import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-examples',
  templateUrl: './rxjs-examples.component.html',
  styleUrls: ['./rxjs-examples.component.scss'],
})
export class RxjsExamplesComponent implements OnInit {
  ngOnInit(): void {
    this.example1();
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
