import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Router } from '@angular/router';
import { ProductsListComponent } from '../products-list/products-list.component';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }
  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const newProduct = this.form.value;
      this.productsService.createProduct(newProduct)
      .subscribe((resultProduct) => {
        console.log('Result: ' + resultProduct);
        this.router.navigate(['/admin/products']);
      });
    }
    console.log(this.form.value);
  }
}
