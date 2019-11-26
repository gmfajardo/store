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

  addToKart() {
    console.log('Adding to kart: ' + this.product.id);
    this.addingToKart.emit(this.product.id);
  }
  constructor() {
    this.addingToKart = new EventEmitter();
    console.log(' 1. Construnctor');
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
