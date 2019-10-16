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

  constructor(private productService:ProductService,private itemService:ItemService) {  }

  ngOnInit() {
    this.products=this.productService.findAll();
  }

}
