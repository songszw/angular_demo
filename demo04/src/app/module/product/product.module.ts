import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { CartComponent } from './components/cart/cart.component';
import { PcontentComponent } from './components/pcontent/pcontent.component';
import { PlistComponent } from './components/plist/plist.component';

@NgModule({
  declarations: [ProductComponent, CartComponent, PcontentComponent, PlistComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
