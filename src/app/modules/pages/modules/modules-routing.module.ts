import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FsDocsModulesListComponent } from './views/modules-list/modules-list.component';
import { FsDocsModuleItemComponent } from './views/module-item/module-item.component';


export const routes: Routes = [
  {
    path: '',
    component: FsDocsModulesListComponent,
  },
  {
    path: ':name',
    component: FsDocsModuleItemComponent,
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class FsDocsModulesRoutingModule {}
