import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service';
import { Item } from '../../entities/item.entity';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public items:Item[]=[];
  public total:number=0;
  public remove(id:string):void{};
  public loadCart():void{};
  //public search_term:any;

  constructor(public itemService:ItemService,public productService:ProductService,) { }

  ngOnInit() {
    // this.items=this.itemService.items;
    // this.total=this.itemService.total;
    this.remove=this.itemService.remove;
    this.loadCart=this.itemService.loadCart;
    //this.search_term=this.productService.term;

    this.loadCart();


  }

}
