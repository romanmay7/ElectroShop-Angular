import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../entities/product.entity';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[], term:any): any {

    //check if search term is undefined
    if(term===undefined)
    return products;//return all products

    //else filter by name
    return products.filter((product)=>{
      return product.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
