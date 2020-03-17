import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  badWords = ['cock', 'sucker', 'donkey'];
  private filteredText: string;
  public filter = [];

  transform(text: string): any {

    this.badWords.forEach((element: string) => {
      if (text.includes(element)) {
        text = text.replace(element, '*'.repeat(element.length));
      }
    });

    return text;
  }

}
