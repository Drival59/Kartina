import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpaces'
})
export class ReplaceSpacesPipe implements PipeTransform {

  transform(value: string, args?: string): string {
    let result = "";
    for (let index = 0; index < value.length; index++) {
      if (value.charAt(index) === " ") {
        result += value.charAt(index).replace(' ', '_');
      } else {
        result += value.charAt(index);
      }
    }
    return result;
  }

}
