import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from './atoms/atoms.module';
import { MoleculesModule } from './molecules/molecules.module';
import { OrganismsModule } from './organisms/organisms.module';
import { TemplatesModule } from './templates/templates.module';
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PagesModule } from './pages/pages.module';



@NgModule({
  declarations: [ProductFormComponent, ProductListComponent],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    TemplatesModule,
    PagesModule,
    FormsModule
  ],
  exports: [
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    TemplatesModule,
    PagesModule,
    ProductFormComponent,
    ProductListComponent
  ],
})
export class ComponentsModule { }
