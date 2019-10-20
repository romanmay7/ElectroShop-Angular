import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service';
import { Item } from '../../entities/item.entity';

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

  constructor(public itemService:ItemService) { }

  ngOnInit() {
    // this.items=this.itemService.items;
    // this.total=this.itemService.total;
    this.remove=this.itemService.remove;
    this.loadCart=this.itemService.loadCart;

    this.loadCart();


  }

}
