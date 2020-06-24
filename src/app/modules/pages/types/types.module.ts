import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { FsChipModule } from '@firestitch/chip';
import { FsSkeletonModule } from '@firestitch/skeleton';

import { FsDocsModulesModule } from '../modules/modules.module';

import { FsDocsPropertyListModule } from '../../common/property-list/property-list.module';
import { FsDocsMethodsListModule } from '../../common/methods-list/methods-list.module';

import { FsDocsTypesRoutingModule } from './types-routing.module';
import { FsDocsTypesListComponent } from './views/types-list/types-list.component';
import { FsDocsTypeItemComponent } from './components/type-item/type-item.component';


@NgModule({
  imports: [
    CommonModule,
    FsDocsTypesRoutingModule,
    MatListModule,
    MatCardModule,
    FsChipModule,
    FsSkeletonModule,
    FsDocsModulesModule,
    FsDocsPropertyListModule,
    FsDocsMethodsListModule,
  ],
  declarations: [
    FsDocsTypesListComponent,
    FsDocsTypeItemComponent,
  ],
  exports: [
  ],
  providers: [
  ]
})
export class FsDocsTypesModule {

}
