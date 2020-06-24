import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FsDocsPipesListComponent } from './views/pipes-list/pipes-list.component';
import { FsDocsPipeItemComponent } from './views/pipe-item/pipe-item.component';


export const routes: Routes = [
  {
    path: '',
    component: FsDocsPipesListComponent,
  },
  {
    path: ':name',
    component: FsDocsPipeItemComponent,
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class FsDocsPipesRoutingModule {}
