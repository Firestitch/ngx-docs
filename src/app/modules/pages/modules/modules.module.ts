import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { FsChipModule } from '@firestitch/chip';
import { FsSkeletonModule } from '@firestitch/skeleton';

import { FsDocsModulesListComponent } from './views/modules-list/modules-list.component';
import { FsDocsModuleItemComponent } from './views/module-item/module-item.component';
import { FsDocsModulesRoutingModule } from './modules-routing.module';
import { FsDocsImportsListComponent } from './components/imports-list/imports-list.component';
import { FsDocsDeclarationsListComponent } from './components/declarations-list/declarations-list.component';
import { FsPrintExportedSelectorsPipe } from './pipes/print-exported-selectors.pipe';


@NgModule({
  imports: [
    CommonModule,
    FsDocsModulesRoutingModule,
    MatListModule,
    MatCardModule,
    FsChipModule,
    FsSkeletonModule,
  ],
  declarations: [
    FsDocsModulesListComponent,
    FsDocsModuleItemComponent,
    FsDocsImportsListComponent,
    FsDocsDeclarationsListComponent,
    FsPrintExportedSelectorsPipe,
  ],
  exports: [
  ],
  providers: [
  ]
})
export class FsDocsModulesModule {

}
