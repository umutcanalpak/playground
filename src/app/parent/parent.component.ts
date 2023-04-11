import { Component } from '@angular/core';
import { MikeService } from '../mike.service';
import { MikeTwoService } from '../mike2.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  arr = [2, 3, 1];
  arr2 = [999999];
  obj = {
    title : 'mike',
    childObj: {
      title: 'jesse'
    }
  };

  constructor(
    private mikeService: MikeService,
    private mikeTwoService: MikeTwoService
    ) {}

  ngOnInit(): void {


    const copy = {
      ... this.obj
    };

    console.log(1111111111);
    console.log(copy.title);
    console.log(this.obj.title);
    copy.title = 'asdasdasdasdasd';
    console.log(copy.title);
    console.log(this.obj.title);
    console.log(1111111111);

    console.log(222222222222222);
    console.log(copy.childObj.title);
    console.log(this.obj.childObj.title);
    copy.childObj.title = 'asdasdasdasdasd';
    console.log(copy.childObj.title);
    console.log(this.obj.childObj.title);
    console.log(222222222222222);
    



    // console.log(11111);
    // console.log(this.mikeService.time);
    // console.log(this.mikeTwoService.time);
    // console.log(11111);
    


    // this.arr2 = this.arr.filter((value: number) => {
    //   return value === 8;
    // });



    // this.myFunc('111', '222', '3');
  }

  myFunc(...arr: string[]) {
    console.log(111111111);

    for (const item of arr) {
      console.log(item);
    }
    console.log(111111111);
  }
}
