import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { FsChipModule } from '@firestitch/chip';
import { FsSkeletonModule } from '@firestitch/skeleton';

import { FsDocsComponentsRoutingModule } from './components-routing.module';
import { FsDocsComponentsListComponent } from './views/components-list/components-list.component';
import { FsDocsComponentItemComponent } from './views/component-item/component-item.component';
import { FsDocsModulesModule } from '../modules/modules.module';
import { FsDocsPropertyListModule } from '../../common/property-list/property-list.module';


@NgModule({
  imports: [
    CommonModule,
    FsDocsComponentsRoutingModule,
    MatListModule,
    MatCardModule,
    FsChipModule,
    FsSkeletonModule,
    FsDocsModulesModule,
    FsDocsPropertyListModule,
  ],
  declarations: [
    FsDocsComponentsListComponent,
    FsDocsComponentItemComponent,
  ],
  exports: [
  ],
  providers: [
  ]
})
export class FsDocsComponentsModule {

}
