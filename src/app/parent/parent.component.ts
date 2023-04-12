import { Component } from '@angular/core';
import { MikeService } from '../mike.service';
import { MikeTwoService } from '../mike2.service';
import { interval, take, shareReplay } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  arr = [2, 3, 1];
  arr2 = [999999];
  arr3 = [
    {
      title: 'mike',
    },
  ];
  obj = {
    title: 'mike',
    childObj: {
      title: 'jesse',
    },
  };

  form = this.fb.group({
    title: ['qweqw'],
  });

  constructor(
    private mikeService: MikeService,
    private mikeTwoService: MikeTwoService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    function speak(word: string) {
      console.log('speak: ', word);
    }

    let registered = (word: string) => {};

    function registerSpeak(cb: (word: string) => void) {
      registered = cb;
    }

    registerSpeak(speak);
    console.log(1111);
    registered('qweqw');
    console.log(1111);
    //
    //
    //

    // const asd =  () => {};
    // const asd2 =  () => 2;
    // const asd3 =  () => '3';
    // console.log(11111111);
    // console.log(asd());
    // console.log(asd2());
    // console.log(asd3());
    // console.log(11111111);
    // console.log(11111111111111);
    // console.log(/[A-Z]/.test('A'));
    // console.log(11111111111111);
    //
    //
    //
    // function geralt() {
    //   return (param: string): string => {
    //     return param;
    //   };
    // }
    // function olaf() {
    //   return function (param: string): string {
    //     return param;
    //   };
    // }
    // const skyrim = geralt();
    // const warband = olaf();
    // console.log(111111111111);
    // console.log(skyrim);
    // console.log(skyrim('qweqwe'));
    // console.log(warband);
    // console.log(warband('asdasd'));
    // console.log(111111111111);
    // const time = new Date().getTime();
    // const shared$ = interval(2000).pipe(take(3), shareReplay());
    // shared$.subscribe((x) => {
    //   console.log('sub A: ', x, new Date().getTime() - time);
    // });
    // setTimeout(() => {
    //   shared$.subscribe((y) => {
    //     console.log('sub B: ', y, new Date().getTime() - time);
    //   });
    // }, 1000);
    // console.log(111111111111);
    // let copy : any= this.arr;
    // console.log(copy[0]);
    // console.log(this.arr[0]);
    // copy[0] = 123123123;
    // console.log(copy[0]);
    // console.log(this.arr[0]);
    // console.log(111111111111);
    // console.log('');
    // console.log(2222222222222);
    // copy = [...this.arr];
    // console.log(copy[0]);
    // console.log(this.arr[0]);
    // copy[0] = 123;
    // console.log(copy[0]);
    // console.log(this.arr[0]);
    // console.log(2222222222222);
    // console.log('');
    // console.log(3333333333333333333);
    // copy = this.arr.slice();
    // console.log(copy[0]);
    // console.log(this.arr[0]);
    // copy[0] = 4444;
    // console.log(copy[0]);
    // console.log(this.arr[0]);
    // console.log(3333333333333333333);
    // console.log('');
    // copy = [...this.arr3];
    // console.log(4444444444444444);
    // console.log(copy[0]);
    // console.log(this.arr3[0]);
    // copy[0].title = 'geralt';
    // console.log(copy[0]);
    // console.log(this.arr3[0]);
    // console.log(4444444444444444);
    // const copy = {
    //   ... this.obj
    // };
    // console.log(1111111111);
    // console.log(copy.title);
    // console.log(this.obj.title);
    // copy.title = 'asdasdasdasdasd';
    // console.log(copy.title);
    // console.log(this.obj.title);
    // console.log(1111111111);
    // console.log(222222222222222);
    // console.log(copy.childObj.title);
    // console.log(this.obj.childObj.title);
    // copy.childObj.title = 'asdasdasdasdasd';
    // console.log(copy.childObj.title);
    // console.log(this.obj.childObj.title);
    // console.log(222222222222222);
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
