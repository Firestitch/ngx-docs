import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FsDocsConstsListComponent } from './views/consts-list/consts-list.component';


export const routes: Routes = [
  {
    path: '',
    component: FsDocsConstsListComponent,
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class FsDocsConstsRoutingModule {}
