import { Component, OnInit } from '@angular/core';
import { Product } from '../../entities/product.entity';
import {ProductService} from '../../services/product.service';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  private products:Product[];
  config: any;


  pageChanged(event){
    this.config.currentPage = event;
  }


  constructor(private productService:ProductService,private itemService:ItemService) { 

   //configs for pagination module

    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.itemService.items.length
    };


   }

  ngOnInit() {
    this.products=this.productService.findAll();
  }

}
