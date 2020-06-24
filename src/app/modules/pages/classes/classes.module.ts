import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { FsChipModule } from '@firestitch/chip';
import { FsSkeletonModule } from '@firestitch/skeleton';

import { FsDocsModulesModule } from '../modules/modules.module';

import { FsDocsPropertyListModule } from '../../common/property-list/property-list.module';
import { FsDocsMethodsListModule } from '../../common/methods-list/methods-list.module';

import { FsDocsClassesRoutingModule } from './classes-routing.module';
import { FsDocsClassesListComponent } from './views/class-list/classes-list.component';
import { FsDocsClassItemComponent } from './views/class-item/class-item.component';


@NgModule({
  imports: [
    CommonModule,
    FsDocsClassesRoutingModule,
    MatListModule,
    MatCardModule,
    FsChipModule,
    FsSkeletonModule,
    FsDocsModulesModule,
    FsDocsPropertyListModule,
    FsDocsMethodsListModule,
  ],
  declarations: [
    FsDocsClassesListComponent,
    FsDocsClassItemComponent,
  ],
  exports: [
  ],
  providers: [
  ]
})
export class FsDocsClassesModule {

}
