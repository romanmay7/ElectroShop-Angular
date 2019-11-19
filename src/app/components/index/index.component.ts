import { Component, OnInit } from '@angular/core';
import { Product } from '../../entities/product.entity';
import {ProductService} from '../../services/product.service';
import {ItemService} from '../../services/item.service';
import {FilterPipe} from '../../pipes/filter.pipe';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers:[FilterPipe]
})
export class IndexComponent implements OnInit {

  public products:Product[];
  config: any;


  pageChanged(event){
    this.config.currentPage = event;
  }


  constructor(public productService:ProductService,public itemService:ItemService) { 

   //configs for pagination module

    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.itemService.items.length
    };


   }

  async ngOnInit() {
    this.products=await this.productService.findAll();
  }

}
