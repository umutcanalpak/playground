import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe',
  // pure: false
})
export class MyPipePipe implements PipeTransform {
  transform(value: any[], idSmallerOrEqualThen: number ) {
    return value.filter(val => val.id <= idSmallerOrEqualThen);
  }
}
