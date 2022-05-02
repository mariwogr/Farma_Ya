import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const restultProducts = []
    for (const product of value){
      if(product.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        restultProducts.push(product);
      };
    };
    return restultProducts;
  }
}
