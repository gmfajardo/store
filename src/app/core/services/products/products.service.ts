import { Injectable } from '@angular/core';
import { Product } from 'src/app/Product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }
  getAll() {
    // return this.products;
    return this.httpClient.get<Product[]>(`${environment.api_url}/products`);
  }
  getProduct(id: string) {
    return this.httpClient.get<Product>(`${environment.api_url}/products/${id}`);
    // return this.products.find(item =>
    //   item.id === id
    // );
  }
  createProduct(product: Product) {
    return this.httpClient.post(`${environment.api_url}/products`,product)
  }
}
