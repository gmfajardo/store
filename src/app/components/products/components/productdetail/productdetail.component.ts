import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {

  product: Product;
  constructor(private route: ActivatedRoute,
    private productService: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      const id = param.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {

    this.productService.getProduct(id)
      .subscribe((product: Product) => {
        this.product = product;
      });
  }
  createProduct() {
    const product: Product = {
      id: "46",
      description: "Recurved Bow",
      image: 'assets/images/archery-3.jpg',
      price: 456.21,
      title: 'Bow'
    };
    this.productService.createProduct(product)
      .subscribe((product: Product) => {
        this.product = product;
      });
  }
}
