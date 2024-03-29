import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';

import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { OrganismsModule } from '../organisms/organisms.module';

import { DevelopmentComponent } from './development/development.component';
import { NetworksComponent } from './networks/networks.component';
import { SupportComponent } from './support/support.component';
import { TechnologyComponent } from './technology/technology.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    DevelopmentComponent,
    NetworksComponent,
    SupportComponent,
    TechnologyComponent,

  ],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    TemplatesRoutingModule,
    NgbModule
  ],
  exports: [
    DevelopmentComponent,
    NetworksComponent,
    SupportComponent,
    TechnologyComponent
  ]
})
export class TemplatesModule { }
