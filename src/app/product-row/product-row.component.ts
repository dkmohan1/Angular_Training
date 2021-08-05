import { Component, Inject, OnInit } from '@angular/core';
import { Selector } from '../services/selection.services';

@Component({
  selector: 'productRow-comp',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  _selector:Selector;
  products:productType;
  items:itemWithStock[];
  constructor(@Inject("selector")selector:any) {
    this._selector=selector; 
    let item={"name":'FootBall',"stock":10};
    let item1={"name":'Bat',"stock":20};
    let item2={"name":'Baseball',"stock":30};
    let item3={"name":'Baseball',"stock":0};
    let item4={"name":'Baseball',"stock":-2};
    this.items=[item,item1,item2, item3, item4]
    
    this.products={"category":"Sporting Goods","list":this.items};
  }

  ngOnInit(): void {
    

  }

}
type productType={
  category:string;
  list: itemWithStock[];
}
type itemWithStock={
  name:string;
  stock: number;
}
