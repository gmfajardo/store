import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductsDashboardComponent } from './components/products-dashboard/products-dashboard.component';
import { ProductsTreeComponent } from './components/products-tree/products-tree.component';
import { ProductsDragAndDropComponent } from './components/products-drag-and-drop/products-drag-and-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ProductsListComponent } from './components/products-list/products-list.component';


@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent, 
    ProductsTableComponent, 
    ProductsDashboardComponent, 
    ProductsTreeComponent, 
    ProductsDragAndDropComponent, 
    ProductsListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
    DragDropModule
  ]
})
export class AdminModule { }
