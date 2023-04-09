import { Component } from '@angular/core';
import { MikeService } from '../mike.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
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
