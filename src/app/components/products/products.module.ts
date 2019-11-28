
import { NgModule } from '@angular/core';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductdetailComponent
  ],
  imports: [
        ProductsRoutingModule,
        CommonModule,
        SharedModule
  ]
})
export class ProductsModule { }
