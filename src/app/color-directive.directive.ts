import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirectiveDirective {
  @Input() appColor: string = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
