import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-call',
  templateUrl: './server-call.component.html',
  styleUrls: ['./server-call.component.scss'],
})
export class ServerCallComponent implements OnInit {
  url = 'http://localhost:3000/api';
  urlError = 'http://localhost:3000/api/error';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    const params = new HttpParams({
      fromString: 'name=term',
    });
    // const params = new HttpParams({
    //   fromObject: {
    //     color: 'mavi',
    //     age: 33,
    //   },
    // });

    this.httpClient
      .get(this.url, {
        params,
      })
      .subscribe({
        next(value) {
          console.log(111111111);
          console.log(value);
          console.log(111111111);
        },
        error(err) {
          console.log(2222222);
          console.log(err);
          console.log(2222222);
        },
      });
  }
}
