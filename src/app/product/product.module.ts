import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainProductComponent } from './main-product/main-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { ProductCategoryRowComponent } from '../product-category-row/product-category-row.component';
import { ProductRowComponent } from '../product-row/product-row.component';



@NgModule({
  declarations: [
    MainProductComponent,
    SearchProductComponent,
    ProductCategoryRowComponent,
    ProductRowComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[MainProductComponent, SearchProductComponent, ProductRowComponent]
})
export class ProductModule { }
