import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('mavi') mavi: any;
  @ViewChild('siyah', {static: true}) siyah: any;
  showMavi = false;
  showSiyah = false;

  constructor() {}

  ngOnInit(): void {}

  show() {
    this.showMavi = true;
    this.showSiyah = true;
  }

  check() {
    console.log(111111);
    console.log('mavi', this.mavi);
    console.log('siyah', this.siyah);
    console.log(111111);
  }
}
