import { Injectable } from '@angular/core';
import {ProductService} from './product.service';
import { Item } from '../entities/item.entity';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  public items:Item[]=[];
  public total:number=0;
  
  
  constructor(private productService:ProductService) { }

  async loadCart() {
    this.total=0;
    this.items=[];
    let cart=await JSON.parse(localStorage.getItem('cart'));
    
    for(var i=0;i<cart.length;i++) {
       let item=JSON.parse(cart[i]);
       this.items.push({
        product:item.product,
        quantity:item.quantity
       });
       this.total+=item.product.price * item.quantity;

    }
}
async add(id:string) {
  var item:Item={
    product:await this.productService.find(id),
    quantity:1
  };
  if(await localStorage.getItem('cart')==null){
    let cart:any=[];
    cart.push(JSON.stringify(item));
    await localStorage.setItem('cart',JSON.stringify(cart))
  }
  else
  {
    let cart:any=JSON.parse(await localStorage.getItem('cart'));
    let index:number=-1;
    for(var i=0;i<cart.length;i++){
      let item:Item=JSON.parse(cart[i]);
      if (item.product.id==id) {
        index=i;
        break;
      }
    }
  if(index==-1){
    cart.push(JSON.stringify(item));
    await localStorage.setItem('cart',JSON.stringify(cart));
  }
   else 
   {
    let item:Item=JSON.parse(cart[index]);
    item.quantity +=1;
    cart[index]=JSON.stringify(item);
    await localStorage.setItem("cart",JSON.stringify(cart));
   }
  
  }
  this.loadCart();
}

async remove(id:string) {
  let cart:any = await JSON.parse(localStorage.getItem('cart'))
  //let index:number=-1;
  for (var i=0;i<cart.length;i++) {
    let item:Item=JSON.parse(cart[i]);
    if(item.product.id==id)
    {
      cart.splice(i,1);
      break;
    }
  }
 await localStorage.setItem("cart",JSON.stringify(cart));
 await this.loadCart();

}


}
