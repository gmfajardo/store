import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';

import { ProductsTreeComponent } from './products-tree.component';

describe('ProductsTreeComponent', () => {
  let component: ProductsTreeComponent;
  let fixture: ComponentFixture<ProductsTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsTreeComponent ],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatTreeModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
