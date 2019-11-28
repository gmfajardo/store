import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductsDashboardComponent } from './components/products-dashboard/products-dashboard.component';
import { ProductsTreeComponent } from './components/products-tree/products-tree.component';
import { ProductsDragAndDropComponent } from './components/products-drag-and-drop/products-drag-and-drop.component';


const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: 'list',
        component: ProductsTableComponent
      },
      {
        path: 'dashboard',
        component: ProductsDashboardComponent
      },
      {
        path: 'tree',
        component: ProductsTreeComponent
      },
      {
        path: 'dd',
        component: ProductsDragAndDropComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
