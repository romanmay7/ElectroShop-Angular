import { Injectable } from '@angular/core';
import { Product } from '../entities/product.entity';
import { Review } from '../entities/review.entity';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private products:Product[];
  private search_results:Product[];
  private reviews_p01:Review[];
  private reviews_p02:Review[];
  private reviews_p04:Review[];
  
  //Seeding 
  constructor() {
    this.reviews_p01=[{id:'1',reviewer_name:"John Doe Junior",date:"27 DEC 2018, 8:25PM",content:"I like this product!",rating:5},
    {id:'2',reviewer_name:"Samantha Vice",date:"27 JAN 2019, 6:01 PM",content:"Good Good Good!",rating:4}];

    this.reviews_p02=[{id:'1',reviewer_name:"Jonathan Wise",date:"12 APR 2018, 7:0 PM",content:"I won't recommend it ",rating:3},
    {id:'2',reviewer_name:"Dorothy Chambers",date:"14 FEB 2019, 8:20 PM",content:"Pretty Goog,though",rating:4},
    {id:'3',reviewer_name:"Fernando Gomez",date:"5 MAY 2019, 8:30 AM",content:"Nice device!!And pretty cheap",rating:5}];

    this.reviews_p04=[{id:'1',reviewer_name:"Anjei Kovalsky",date:"01 AUG 2019, 11:30 AM",content:"Overall Good,but too much expensive",rating:3}];

     this.products=[
     {id:'p01',category:'laptop',name:'Buisness Pro Laptop',price:1000,photo:'product01.png',description:"Laptop Computer. A laptop computer is a portable personal computer powered by a battery, or an AC cord plugged into an electrical outlet, which is also used to charge the battery. ... A laptop also has a thin display screen that is attached and can be folded flat for transport.",reviews:this.reviews_p01},
     {id:'p02',category:'headphones',name:'Super Sonic Phones',price:150,photo:'product02.png',description:"Headphones are small speakers that can be worn in or around your ears. ... Smaller headphones, often called earbuds or earphones, are placed inside the outer part of your ear canal. Like speakers, headphones contain transducers that convert an audio signal into sound waves",reviews:this.reviews_p02},
     {id:'p03',category:'laptop',name:'Gaming Laptop',price:1400,photo:'product03.png',description:"Laptop Computer. A laptop computer is a portable personal computer powered by a battery, or an AC cord plugged into an electrical outlet, which is also used to charge the battery. ... A laptop also has a thin display screen that is attached and can be folded flat for transport",reviews:[]},
     {id:'p04',category:'tablet',name:'Vaios 10 inch Tablet',price:600,photo:'product04.png',description:"A tablet is a wireless, portable personal computer with a touchscreen interface. The tablet form factor is typically smaller than a notebook computer, but larger than a smartphone.",reviews:this.reviews_p04},
     {id:'p05',category:'headphones',name:'Creativa Pro Headphones',price:300,photo:'product05.png',description:"Headphones are small speakers that can be worn in or around your ears. ... Smaller headphones, often called earbuds or earphones, are placed inside the outer part of your ear canal. Like speakers, headphones contain transducers that convert an audio signal into sound waves",reviews:[]},
     {id:'p06',category:'laptop',name:'Vaios 15 inch Laptop',price:1100,photo:'product06.png',description:"Laptop Computer. A laptop computer is a portable personal computer powered by a battery, or an AC cord plugged into an electrical outlet, which is also used to charge the battery. ... A laptop also has a thin display screen that is attached and can be folded flat for transport",reviews:[]},
     {id:'p07',category:'smartphone',name:'SuperNova Deluxe Smartphone',price:760,photo:'product07.png',description:"A smartphone is a mobile phone with highly advanced features. A typical smartphone has a high-resolution touch screen display, WiFi connectivity, Web browsing capabilities, and the ability to accept sophisticated applications.",reviews:[]},
     {id:'p08',category:'laptop',name:'SuperNova 14 inch Laptop',price:1250,photo:'product08.png',description:"Laptop Computer. A laptop computer is a portable personal computer powered by a battery, or an AC cord plugged into an electrical outlet, which is also used to charge the battery. ... A laptop also has a thin display screen that is attached and can be folded flat for transport",reviews:[]},
     {id:'p09',category:'camera',name:'DigiCam Pro Move L234',price:450,photo:'product09.png',description:"A digital camera is a similar to a traditional film-based camera, but it captures images digitally. When you take a picture with a digital camera, the image is recorded by a sensor, called a 'charged coupled device' or CCD. ... Some digital cameras have built-in memory, but most use an SD or Compact Flash card",reviews:[]}
     ];

  }

  async findAll():Promise<Product[]>{
    return this.products;
  }
 
  async find(id:string) {
    return this.products[await this.getSelectedIndex(id)];
  }

  async getProductsByCategory(ctg:string) {

    this.search_results=[];
    for(var i=0;i<this.products.length;i++)
    {
      if(this.products[i].category==ctg)
      {
        this.search_results.push(this.products[i]);
      }
    }
  }

  async getSelectedIndex(id: string) {
    for(var i=0;i<this.products.length;i++)
    {
      if(this.products[i].id==id)
      {
        return i;
      }
    }
    return -1; 
  }
  averageRating(p:Product):number
  {
  if(p.reviews.length)
  {
    var total=0;
    for(var i=0;i<p.reviews.length;i++)
    {
       total+=p.reviews[i].rating;
    }

    return total/p.reviews.length;
  }
  else return 0;
}

  round(n:number):number{
    return Math.floor(n);
  }

}


