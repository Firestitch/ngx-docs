import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FsDocsClassesListComponent } from './views/class-list/classes-list.component';
import { FsDocsClassItemComponent } from './views/class-item/class-item.component';


export const routes: Routes = [
  {
    path: '',
    component: FsDocsClassesListComponent,
  },
  {
    path: ':name',
    component: FsDocsClassItemComponent,
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class FsDocsClassesRoutingModule {}
