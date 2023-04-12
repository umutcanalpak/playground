import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-jesse',
  templateUrl: './jesse.component.html',
  styleUrls: ['./jesse.component.scss'],
})
export class JesseComponent implements OnInit, AfterViewInit {
  @ViewChild('mavi') mavi?: any;

  ngOnInit(): void {
    console.log(11111111);
    console.log(this.mavi);
    console.dir(this.mavi);
    console.log(11111111);
  }

  ngAfterViewInit(): void {
    console.log(222222);
    console.log(this.mavi);
    console.dir(this.mavi);
    console.log(222222);
  }
}
