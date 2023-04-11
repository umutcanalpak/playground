import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  arr = [2, 3, 1];

  constructor() {}

  ngOnInit(): void {
    this.myFunc('111', '222', '3');
  }

  myFunc(...arr: string[]) {
    console.log(111111111);

    for (const item of arr) {
      console.log(item);
    }
    console.log(111111111);
  }
}
