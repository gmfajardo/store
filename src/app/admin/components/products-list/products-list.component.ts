import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[];
  displayedColumns: string[] = ['id', 'title', 'price','actions'];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.fetchProducts();
  }
  fetchProducts() {
    this.productsService.getAll()
    .subscribe((products: Product[]) =>{
      this.products = products;
    })
  }
  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe((result) =>{
      this.fetchProducts();
    });
  }
}
