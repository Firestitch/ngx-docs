import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { FsChipModule } from '@firestitch/chip';
import { FsSkeletonModule } from '@firestitch/skeleton';

import { FsDocsModulesModule } from '../modules/modules.module';

import { FsDocsPropertyListModule } from '../../common/property-list/property-list.module';
import { FsDocsMethodsListModule } from '../../common/methods-list/methods-list.module';

import { FsDocsFunctionsListComponent } from './views/functions-list/functions-list.component';
import { FsDocsFunctionItemComponent } from './components/functions-item/function-item.component';
import { FsDocsFunctionsRoutingModule } from './functions-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FsDocsFunctionsRoutingModule,
    MatListModule,
    MatCardModule,
    FsChipModule,
    FsSkeletonModule,
    FsDocsModulesModule,
    FsDocsPropertyListModule,
    FsDocsMethodsListModule,
  ],
  declarations: [
    FsDocsFunctionsListComponent,
    FsDocsFunctionItemComponent,
  ],
  exports: [
  ],
  providers: [
  ]
})
export class FsDocsFunctionsModule {

}
