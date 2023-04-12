import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss']
})
export class ViewchildComponent {
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
