import { Component, OnInit } from '@angular/core';
import { MikeService } from './mike.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  time = 0;
  myObject: any = {
    name: 'myObject',
    mavi: {
      name: 'mavi',
      siyah: {
        name: 'siyah',
        time: new Date().getTime(),
      },
    },
  };

  myArray: any = [
    {
      mavi: {
        name: 'mavi',
        siyah: {
          name: 'siyah',
          time: new Date().getTime(),
        },
      },
    },
    {
      mavi: {
        name: 'mavi',
        siyah: {
          name: 'siyah',
          time: new Date().getTime(),
        },
      },
    },
    {
      mavi: {
        name: 'mavi',
        siyah: {
          name: 'siyah',
          time: new Date().getTime(),
        },
      },
    },
  ];

  title = '';

  constructor(private mikeService: MikeService) {}

  ngOnInit(): void {
    this.time = this.mikeService.time;
  }

  update() {
    this.myArray[1].mavi.siyah.time = new Date().getTime();
  }
}
