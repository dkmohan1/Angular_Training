import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { Selector } from './services/selection.services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ProductModule,
  ],
  providers: [{provide:"selector",useClass:Selector}],
  bootstrap: [AppComponent]
})
export class AppModule { }
