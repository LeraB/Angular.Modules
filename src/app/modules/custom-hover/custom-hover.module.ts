import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorBorderDirective } from './directive/color-border/color-border.directive';
import { SizeDirective } from './directive/size/size.directive';


@NgModule({
  declarations: [ColorBorderDirective, SizeDirective],
  imports: [CommonModule],
  exports: [ColorBorderDirective, SizeDirective]
})
export class CustomHoverModule { }
