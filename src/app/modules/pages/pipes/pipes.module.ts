import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { FsChipModule } from '@firestitch/chip';
import { FsSkeletonModule } from '@firestitch/skeleton';

import { FsDocsModulesModule } from '../modules/modules.module';
import { FsDocsPropertyListModule } from '../../common/property-list/property-list.module';
import { FsDocsPipesRoutingModule } from './pipes-routing.module';
import { FsDocsPipesListComponent } from './views/pipes-list/pipes-list.component';
import { FsDocsPipeItemComponent } from './views/pipe-item/pipe-item.component';


@NgModule({
  imports: [
    CommonModule,
    FsDocsPipesRoutingModule,
    MatListModule,
    MatCardModule,
    FsChipModule,
    FsSkeletonModule,
    FsDocsModulesModule,
    FsDocsPropertyListModule,
  ],
  declarations: [
    FsDocsPipesListComponent,
    FsDocsPipeItemComponent,
  ],
  exports: [
  ],
  providers: [
  ]
})
export class FsDocsPipesModule {

}
