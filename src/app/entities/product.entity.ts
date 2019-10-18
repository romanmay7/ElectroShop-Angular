import { Review } from './review.entity';

export class Product 
{
 id:string;
 name:string;
 price:number;
 photo:string;
 description:string;
 reviews:Review[];

}