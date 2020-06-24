import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { FsChipModule } from '@firestitch/chip';
import { FsSkeletonModule } from '@firestitch/skeleton';

import { FsDocsModulesModule } from '../modules/modules.module';

import { FsDocsPropertyListModule } from '../../common/property-list/property-list.module';
import { FsDocsMethodsListModule } from '../../common/methods-list/methods-list.module';
import { FsDocsConstsListComponent } from './views/consts-list/consts-list.component';
import { FsDocsConstsRoutingModule } from './consts-routing.module';
import { FsDocsConstItemComponent } from './components/const-item/const-item.component';


@NgModule({
  imports: [
    CommonModule,
    FsDocsConstsRoutingModule,
    MatListModule,
    MatCardModule,
    FsChipModule,
    FsSkeletonModule,
    FsDocsModulesModule,
    FsDocsPropertyListModule,
    FsDocsMethodsListModule,
  ],
  declarations: [
    FsDocsConstsListComponent,
    FsDocsConstItemComponent,
  ],
  exports: [
  ],
  providers: [
  ]
})
export class FsDocsConstsModule {

}
