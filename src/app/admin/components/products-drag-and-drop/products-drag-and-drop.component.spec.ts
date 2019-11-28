import { DragDropModule } from '@angular/cdk/drag-drop';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsDragAndDropComponent } from './products-drag-and-drop.component';

describe('ProductsDragAndDropComponent', () => {
  let component: ProductsDragAndDropComponent;
  let fixture: ComponentFixture<ProductsDragAndDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsDragAndDropComponent ],
      imports: [
        NoopAnimationsModule,
        DragDropModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDragAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
