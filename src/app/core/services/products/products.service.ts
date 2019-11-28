import { Injectable } from '@angular/core';
import { Product } from 'src/app/Product';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

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
  //     image: 'assets/images/archery-2.jpg',
  //     title: 'Hoodie',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '3',
  //     image: 'assets/images/archery-3.jpg',
  //     title: 'Mug',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '4',
  //     image: 'assets/images/archery-4.jpg',
  //     title: 'Pin',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '5',
  //     image: 'assets/images/archery-5.jpg',
  //     title: 'Stickers',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '6',
  //     image: 'assets/images/archery-6.jpg',
  //     title: 'Stickers',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  // ];
  constructor(private httpClient: HttpClient) { }
  getAll() {
    // return this.products;
    return this.httpClient.get<Product[]>('http://platzi-store.herokuapp.com/products');
  }
  getProduct(id: string) {
    return this.httpClient.get<Product>(`http://platzi-store.herokuapp.com/products/${id}`);
    // return this.products.find(item =>
    //   item.id === id
    // );
  }
}
