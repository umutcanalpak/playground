import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySecondPipe',
  // pure: false
})
export class MySecondPipePipe implements PipeTransform {
  transform(value: any[], ...args: any ) {
    console.log(11111111111);
    console.log(args);
    console.log(11111111111);
    
    return [...value, ...args];
  }
}
