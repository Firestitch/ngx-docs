import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FsDocsComponentItemComponent } from './views/component-item/component-item.component';
import { FsDocsComponentsListComponent } from './views/components-list/components-list.component';


export const routes: Routes = [
  {
    path: '',
    component: FsDocsComponentsListComponent,
  },
  {
    path: ':name',
    component: FsDocsComponentItemComponent,
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class FsDocsComponentsRoutingModule {}
