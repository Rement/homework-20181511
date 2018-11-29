import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'phonePipe'
})
export class PhonePipePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    let str = '+1';
    str += ' ';
    str += value.toString().substr(1, 3);
    str += '-';
    str += value.toString().substr(4, 3);
    str += '-';
    str += value.toString().substr(7);

    return str;
  }

}
