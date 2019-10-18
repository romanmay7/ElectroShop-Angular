import { Component, OnInit } from '@angular/core';
import { Product } from '../../entities/product.entity';
import {ProductService} from '../../services/product.service';
import {ItemService} from '../../services/item.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  private products:Product[];
  private selected_product:Product;

  constructor(
    private productService:ProductService,
    private itemService:ItemService,
    private activatedRoute:ActivatedRoute
  ) { }

  async ngOnInit() {
    this.products=await this.productService.findAll();
     this.activatedRoute.params.subscribe(async params=>{
      var id=params['id'];
       if(id) { this.selected_product = await  this.productService.find(id)}; 
    });
  }
}
