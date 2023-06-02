import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightPipes'
})
export class HighlightPipesPipe implements PipeTransform {

  transform(value: any, args: any): any {
    console.log('value', value);
    console.log('args', args);


    if (!args) {
      return value;
    }
    // Match in a case insensitive maneer
    const re = new RegExp(args, 'gi');
    // const re = new RegExp(args, 'g');
    const match = value.match(re);
    // If there's no match, just return the original value.
    if (!match) {
      return value;
    }

    const replacedValue = value.replace(re, "<mark>" + match[0] + "</mark>")
    return replacedValue
  }
}
