import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RouterModule } from '@angular/router';
import { AtomsModule } from '../atoms/atoms.module';
import { LaunchComponent } from './launch/launch.component';
import { FormsModule } from '@angular/forms';
import { MoleculesModule } from '../molecules/molecules.module';



@NgModule({
  declarations: [HeaderComponent, ShoppingCartComponent, LaunchComponent],
  imports: [
    CommonModule,
    RouterModule,
    AtomsModule,
    FormsModule,
    MoleculesModule

  ],
  exports: [HeaderComponent, ShoppingCartComponent, LaunchComponent]
})
export class OrganismsModule { }
