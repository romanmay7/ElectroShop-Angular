import { Injectable } from '@angular/core';
import { Product } from '../entities/product.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private products:Product[];

  constructor() { 
     this.products=[
     {id:'p01',name:'product01',price:100,photo:'product01.png'},
     {id:'p02',name:'product02',price:300,photo:'product02.png'},
     {id:'p03',name:'product03',price:400,photo:'product03.png'},
     {id:'p04',name:'product04',price:600,photo:'product04.png'},
     {id:'p05',name:'product05',price:700,photo:'product05.png'},
     {id:'p06',name:'product06',price:1000,photo:'product06.png'},
     {id:'p07',name:'product07',price:160,photo:'product07.png'},
     {id:'p08',name:'product08',price:250,photo:'product08.png'},
     {id:'p09',name:'product09',price:150,photo:'product09.png'}
     ];

  }

  findAll():Product[]{
    return this.products;
  }
 
  find(id:string):Product {
    return this.products[this.getSelectedIndex(id)];
  }

  getSelectedIndex(id: string) {
    for(var i=0;i<this.products.length;i++)
    {
      if(this.products[i].id==id)
      {
        return i;
      }
    }
    return -1; 
  }


}
