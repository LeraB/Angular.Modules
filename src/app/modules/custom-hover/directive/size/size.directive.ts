import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appSize]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class SizeDirective {

  textSize = '48px';
  textStyle = 'italic';


  constructor(private element: ElementRef) {
  }

  onMouseEnter() {
    this.element.nativeElement.style.fontSize = this.textSize;
    this.element.nativeElement.style.fontStyle = this.textStyle;
  }

  onMouseLeave() {
    this.element.nativeElement.style.fontSize = null;
    this.element.nativeElement.style.fontStyle = null;
  }

}
