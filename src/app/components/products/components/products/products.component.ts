import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  // products: Product[] = [
  //   {
  //     id: '1',
  //     image: 'assets/images/archery-1.jpg',
  //     title: 'Camiseta',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '2',
  //     image: 'assets/images/hoodie.png',
  //     title: 'Hoodie',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '3',
  //     image: 'assets/images/mug.png',
  //     title: 'Mug',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '4',
  //     image: 'assets/images/pin.png',
  //     title: 'Pin',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '5',
  //     image: 'assets/images/stickers1.png',
  //     title: 'Stickers',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '6',
  //     image: 'assets/images/stickers2.png',
  //     title: 'Stickers',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  // ];
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.fetchProducts();
    console.log('ALL: ' + this.products);
  }

  fetchProducts() {
    this.productService.getAll()
    .subscribe(products => {
      // console.log('JSON: ' + JSON.stringify(products));
      // console.log(products.map(j =>
      //   j.title
      // ));
      // console.log(products.entries().next().value);
      // console.log(products.values());
      // console.log(products.values().next().value);
      products.forEach((p) => {
        this.products.push(p);
      });
    });
  }
  addToKart(id: string) {
    console.log('from event' + id);
  }
}
