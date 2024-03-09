import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsTemplateRoutingModule } from './products-template-routing.module';
import { ProductsTemplateComponent } from './products-template.component';


@NgModule({
  declarations: [ProductsTemplateComponent],
  imports: [
    CommonModule,
    ProductsTemplateRoutingModule
  ],
  exports: [ProductsTemplateComponent]
})
export class ProductsTemplateModule { }
