import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsTemplateRoutingModule } from './products-template-routing.module';
import { ProductsTemplateComponent } from './products-template.component';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AtomsModule } from '../../atoms/atoms.module';




@NgModule({
  declarations: [ProductsTemplateComponent],
  imports: [
    CommonModule,
    ProductsTemplateRoutingModule,
    AtomsModule
  ],
  exports: [ProductsTemplateComponent],
  providers: [NgbCarouselConfig],
})
export class ProductsTemplateModule { }
