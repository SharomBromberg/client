import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { HomeComponent } from './components/pages/home/home.component';
// import { HomeComponent } from './components/pages/home/home.component';
// import { AboutComponent } from './components/pages/about/about.component';

const routes: Routes = [

  // {
  //   path: '',
  //   component: HomeComponent,
  // },

  // // {
  // //   path: '',
  // //   component: ProductListComponent,
  // // },
  // {
  //   path: 'product/create',
  //   component: ProductFormComponent,
  // },
  // {
  //   path: 'product/update/:id',
  //   component: ProductFormComponent,
  // },

  // {
  //   path: 'categories',
  //   component: CategoriesListComponent,
  // },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
