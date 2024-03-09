import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsTemplateComponent } from './products-template.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsTemplateRoutingModule { }
