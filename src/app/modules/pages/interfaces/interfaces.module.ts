import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { FsChipModule } from '@firestitch/chip';
import { FsSkeletonModule } from '@firestitch/skeleton';

import { FsDocsModulesModule } from '../modules/modules.module';

import { FsDocsPropertyListModule } from '../../common/property-list/property-list.module';
import { FsDocsMethodsListModule } from '../../common/methods-list/methods-list.module';

import { FsDocsInterfacesRoutingModule } from './interfaces-routing.module';
import { FsDocsInterfacesListComponent } from './views/interfaces-list/interfaces-list.component';
import { FsDocsInterfaceItemComponent } from './components/interface-item/interface-item.component';


@NgModule({
  imports: [
    CommonModule,
    FsDocsInterfacesRoutingModule,
    MatListModule,
    MatCardModule,
    FsChipModule,
    FsSkeletonModule,
    FsDocsModulesModule,
    FsDocsPropertyListModule,
    FsDocsMethodsListModule,
  ],
  declarations: [
    FsDocsInterfacesListComponent,
    FsDocsInterfaceItemComponent,
  ],
  exports: [
  ],
  providers: [
  ]
})
export class FsDocsInterfacesModule {

}
