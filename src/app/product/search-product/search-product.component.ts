import { Component, Inject, OnInit } from '@angular/core';
import { Selector } from 'src/app/services/selection.services';

@Component({
  selector: 'searchProduct-comp',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  _selector:Selector;
  isOnlyStockVisible:boolean=false;
  selection:string;
  constructor(@Inject("selector")selector:any) {    
  this._selector=selector;
  this.isOnlyStockVisible=true;
  this._selector.isOnlyStockVisible = this.isOnlyStockVisible;
  this.selection="";
  }

  ngOnInit(): void {
  }

}
