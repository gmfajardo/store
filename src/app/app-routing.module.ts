import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// import { HomeComponent } from './components/home/components/home/home.component';
// import { ProductsComponent } from './components/products/products.component';
// import { ContactComponent } from './components/contact/contact.component';
import { DemoComponent } from './components/demo/demo.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
// import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { AdminGuard } from './admin.guard';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)

      },
      {
        path: 'products',
        loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'products/:id',
        loadChildren: () =>
        import('./components/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule)
      }
    ]
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
