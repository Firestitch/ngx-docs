import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsDocsMethodsListComponent } from './components/methods-list/methods-list.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FsDocsMethodsListComponent,
  ],
  exports: [
    FsDocsMethodsListComponent,
  ]
})
export class FsDocsMethodsListModule {
}
