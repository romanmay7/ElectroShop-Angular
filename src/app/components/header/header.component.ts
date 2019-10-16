import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service';
import { Item } from '../../entities/item.entity';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private items:Item[]=[];
  private total:number=0;
  private remove(id:string):void{};
  private loadCart():void{};

  constructor(private itemService:ItemService) { }

  ngOnInit() {
    // this.items=this.itemService.items;
    // this.total=this.itemService.total;
    this.remove=this.itemService.remove;
    this.loadCart=this.itemService.loadCart;

    this.loadCart();


  }

}
