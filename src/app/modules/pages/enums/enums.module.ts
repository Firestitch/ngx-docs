import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { FsChipModule } from '@firestitch/chip';
import { FsSkeletonModule } from '@firestitch/skeleton';

import { FsDocsModulesModule } from '../modules/modules.module';

import { FsDocsPropertyListModule } from '../../common/property-list/property-list.module';
import { FsDocsMethodsListModule } from '../../common/methods-list/methods-list.module';

import { FsDocsEnumsRoutingModule } from './enums-routing.module';
import { FsDocsEnumsListComponent } from './views/enums-list/enums-list.component';
import { FsDocsEnumItemComponent } from './components/enum-item/enum-item.component';


@NgModule({
  imports: [
    CommonModule,
    FsDocsEnumsRoutingModule,
    MatListModule,
    MatCardModule,
    FsChipModule,
    FsSkeletonModule,
    FsDocsModulesModule,
    FsDocsPropertyListModule,
    FsDocsMethodsListModule,
  ],
  declarations: [
    FsDocsEnumsListComponent,
    FsDocsEnumItemComponent,
  ],
  exports: [
  ],
  providers: [
  ]
})
export class FsDocsEnumsModule {

}
