import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ItemService} from '../../services/item.service';
import { Product } from '../../entities/product.entity';
import {Item} from '../../entities/item.entity'; 
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  private items:Item[]=[];
  private total:number=0;
  private remove(id:string):void{};
  private loadCart():void{};


  constructor(
    private activatedRoute:ActivatedRoute,
    private productService:ProductService,
    private itemService:ItemService
  ) { }

    ngOnInit() {

    // this.items=this.itemService.items;
    // this.total=this.itemService.total;
    this.remove=this.itemService.remove;
    this.loadCart=this.itemService.loadCart;

    this.activatedRoute.params.subscribe(async params=>{
      var id=params['id'];
      if(id) {
        var item:Item={
          product:await this.productService.find(id),
          quantity:1
        };
        if(localStorage.getItem('cart')==null){
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

      }else {
        this.loadCart();
      }
    } );

  }



}

