import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { OrganismsModule } from '../../organisms/organisms.module';
import { MoleculesModule } from '../../molecules/molecules.module';
import { AtomsModule } from '../../atoms/atoms.module';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    OrganismsModule,
    MoleculesModule,
    AtomsModule,
    FormsModule,
    SlickCarouselModule
  ]
})
export class ProductsModule { }
