import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/Product';

@Pipe({
  name: 'cartProduct'
})
export class CartProductPipe implements PipeTransform {

  uniqueProducts: Product[] = [];

  transform(value: Product[]): Product[] {
    value.forEach(product => {
      if (!this.uniqueProducts.find(p => p.id === product.id)) {
        product.quantity = 1;
        this.uniqueProducts.push(product);
      } else {
        this.uniqueProducts.find(p => p.id === product.id).quantity += 1;
      }
    });
    return this.uniqueProducts;
  }
}
