import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CartProductPipe } from './pipes/cart-product/cart-product.pipe';



@NgModule({
  declarations: [
    HighlightDirective,
    ExponentialPipe,
    HeaderComponent,
    FooterComponent,
    CartProductPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    HighlightDirective,
    ExponentialPipe,
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
    CartProductPipe
  ]
})
export class SharedModule { }
