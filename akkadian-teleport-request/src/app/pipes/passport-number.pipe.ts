import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passportNumberPipe'
})
export class PassportNumberPipe implements PipeTransform {

  transform(value: string): boolean {
    const pattern = /^[A-Z]{3}-\d{4}[A-Z]{2}-[A-Z]{3}$/i;
    return pattern.test(value);
  }

}
