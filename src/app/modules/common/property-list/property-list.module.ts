import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsDocsPropertyListComponent } from './components/property-list/property-list.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FsDocsPropertyListComponent,
  ],
  exports: [
    FsDocsPropertyListComponent,
  ]
})
export class FsDocsPropertyListModule {
}
