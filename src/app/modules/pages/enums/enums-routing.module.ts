import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FsDocsEnumsListComponent } from './views/enums-list/enums-list.component';


export const routes: Routes = [
  {
    path: '',
    component: FsDocsEnumsListComponent,
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class FsDocsEnumsRoutingModule {}
