import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any ): any {
    const resultTitulars = [];
    for(const titular of value){
      if(titular.Titular.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultTitulars.push(titular);
      }
    }
    return resultTitulars;
  }
 }
