import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg: any): any {
    const resultTj = [];
    for(const tj of value){
      if(tj.Maquina.indexOf(arg) > -1){
        resultTj.push(tj);
      }
    }
    return resultTj;
  }

}
