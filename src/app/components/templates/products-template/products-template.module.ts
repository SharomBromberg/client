import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsTemplateRoutingModule } from './products-template-routing.module';
import { ProductsTemplateComponent } from './products-template.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';




@NgModule({
  declarations: [ProductsTemplateComponent],
  imports: [
    CommonModule,
    ProductsTemplateRoutingModule,
    SlickCarouselModule,


  ],
  exports: [ProductsTemplateComponent]
})
export class ProductsTemplateModule { }
