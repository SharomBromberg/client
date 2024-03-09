import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';
import { AtomsModule } from '../atoms/atoms.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [NavbarComponent, ListComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    AtomsModule,
    FormsModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [NavbarComponent, ListComponent, FooterComponent]
})
export class MoleculesModule { }
