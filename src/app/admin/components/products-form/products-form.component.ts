import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Router } from '@angular/router';
import { ProductsListComponent } from '../products-list/products-list.component';
import { MyValidators } from 'src/utils/MyValidators';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {

  image$: Observable<any>
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage) {
    this.buildForm();
  }

  ngOnInit() {
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
      this.productsService.createProduct(newProduct)
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
  uploadFile(event) {
    const file = event.target.files[0];
    console.log(file);
    const name = `products/${file.name}`;
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, file);

    task.snapshotChanges()
    .pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL()
        this.image$.subscribe(url => {
          console.log(url);
          this.form.get('image').setValue(url);
        })
      })
      )
      .subscribe();
  }
}
