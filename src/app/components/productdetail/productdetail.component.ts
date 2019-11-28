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
      console.log(param);
      const id = param.id;
      this.product = this.productService.getProduct(id);
      console.log(this.product);
    });
  }

}
