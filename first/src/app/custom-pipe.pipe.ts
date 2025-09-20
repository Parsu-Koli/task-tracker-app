import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  standalone: true
})
export class CustomPipePipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    console.log(args);
    let a=args;
  

    if(args.length>0){
      return value*args[0];
    } else {
      return value;
    }
  }

}
