import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../entities/product.entity';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[], term:any,selected_category:any): any {
    
     var categorized_products;
    //filter by category
    if(selected_category==="All Categories")
    categorized_products=products;
    else{
       categorized_products=products.filter((product)=>{
          return product.category===selected_category});
       }

    //check if search term is undefined
    if(term===undefined)
    return categorized_products;//return all products
    

    //else filter by name
    return categorized_products.filter((product)=>{
      return product.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
