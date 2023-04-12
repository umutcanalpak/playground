import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-call',
  templateUrl: './server-call.component.html',
  styleUrls: ['./server-call.component.scss'],
})
export class ServerCallComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get('http://localhost:3000/api').subscribe((val) => {
      console.log(11111111);
      console.log(val);
      console.log(11111111);
    });
  }
}
