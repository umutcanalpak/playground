import { Component, OnInit } from '@angular/core';
import { MikeService } from './mike.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  time = 0;

  constructor(private mikeService: MikeService) {}

  ngOnInit(): void {
    this.time = this.mikeService.time;
  }
}
