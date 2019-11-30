import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  DoCheck,
  SimpleChanges,
  OnDestroy
} from '@angular/core';
import { Product } from 'src/app/Product';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements DoCheck, OnInit, OnDestroy {

  @Input()
  product: Product;

  @Output()
  addingToKart: EventEmitter<string>;

  today = new Date();

  constructor(
    private cartService: CartService
  ) {
    this.addingToKart = new EventEmitter();
    console.log(' 1. Construnctor');
  }
  addToKart() {
    console.log('Adding to kart: ' + this.product.id);
    this.cartService.addToCart(this.product);
    this.addingToKart.emit(this.product.id);
  }

  ngOnInit() {
    console.log('3. ngOnInit');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('2. ngOnChanges');
  //   console.log(changes);
  // }
  ngDoCheck() {
    console.log('4. ngDoCheck');
  }
  ngOnDestroy() {
    console.log('5. ngOnDestroy');
  }

}
