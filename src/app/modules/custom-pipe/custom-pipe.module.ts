import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './capitalize/capitalize.pipe';
import { CutPipe } from './cut/cut.pipe';
import { FilterPipe } from './filter/filter.pipe';



@NgModule({
  declarations: [CapitalizePipe, CutPipe, FilterPipe],
  imports: [
    CommonModule
  ],
  exports: [
    CapitalizePipe,
    CutPipe,
    FilterPipe
  ]
})
export class CustomPipeModule { }
