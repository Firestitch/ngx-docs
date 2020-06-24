import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FsDocsTypesListComponent } from './views/types-list/types-list.component';


export const routes: Routes = [
  {
    path: '',
    component: FsDocsTypesListComponent,
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class FsDocsTypesRoutingModule {}
