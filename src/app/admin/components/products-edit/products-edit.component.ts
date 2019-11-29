import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MyValidators } from 'src/utils/MyValidators';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss']
})
export class ProductsEditComponent implements OnInit {
  id: string;
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.buildForm();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      console.log('Id from edit: ' + this.id)
      this.productsService.getProduct(this.id)
      .subscribe((product) => {
        console.log('Product from edit: ' + product);
        this.form.patchValue({
          id: product.id,
          title: product.title,
          description: product.description,
          price: product.price,
          image: product.image
        });
      });
    });
  }

  buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }
  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const newProduct = this.form.value;
      this.productsService.updateProduct(this.id, newProduct)
      .subscribe((resultProduct) => {
        console.log('Result: ' + resultProduct);
        this.router.navigate(['/admin/products']);
      });
    }
    console.log(this.form.value);
  }
  get priceField() {
    return this.form.get('price');
  }
}
