import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appColorBorder]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class ColorBorderDirective {

  textColor = '#FFF';
  bgColor = '#00A';
  textBorder = '1px solid #00FF00';


  constructor(private element: ElementRef) {
  }

  onMouseEnter() {
    this.element.nativeElement.style.color = this.textColor;
    this.element.nativeElement.style.backgroundColor = this.bgColor;
    this.element.nativeElement.style.border = this.textBorder;
  }

  onMouseLeave() {
    this.element.nativeElement.style.color = null;
    this.element.nativeElement.style.backgroundColor = null;
    this.element.nativeElement.style.border = null;
  }
}
