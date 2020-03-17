import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  private text: string;

  transform(value: string): string {
    this.text = value[0].toUpperCase();
    this.text += value.slice(1).toLowerCase();
    return this.text;
  }
}
