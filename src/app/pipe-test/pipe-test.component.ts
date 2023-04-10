import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.scss'],
})
export class PipeTestComponent {
  myArray: any = [1, 2, 3, 4, 5, 6, 7];
  myObjectArray: any = [
    {
      id: 1,
      objectName: '1',
    },
    {
      id: 2,
      objectName: '2',
    },
    {
      id: 3,
      objectName: '3',
    },
  ];

  edit() {
    this.myObjectArray[0].id = 4;

    // this.myObjectArray = [...this.myObjectArray];
  }

  edit2() {
    this.myObjectArray[0] = { ...this.myObjectArray[0], id: 999 };

    this.myObjectArray = [...this.myObjectArray];
  }

  edit3() {
    this.myObjectArray.push({
      id: 0,
      objectName: '0',
    });

    
    // this.myObjectArray = this.myObjectArray;
    // this.myObjectArray = [...this.myObjectArray];
  }
}
