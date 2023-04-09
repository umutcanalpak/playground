import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-henry',
  templateUrl: './henry.component.html',
  styleUrls: ['./henry.component.scss'],
})
export class HenryComponent
  implements OnChanges, OnInit, AfterContentChecked, AfterViewChecked, DoCheck, AfterViewInit, AfterContentInit
{
  @Input() title?: string;
  @ViewChild('viewChild') viewChild?: any;
  age = '43';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  
    this.viewChild;
    this.age;
    debugger
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  
    this.viewChild;
    this.age;
    debugger
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  
    this.viewChild;
    this.age;
    debugger
  }
  
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }


  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  
    this.viewChild;
    this.age;
    debugger
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
    
    this.viewChild;
    this.age;
    debugger
  }
}
