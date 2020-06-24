import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FsDocsFunctionsListComponent } from './views/functions-list/functions-list.component';


export const routes: Routes = [
  {
    path: '',
    component: FsDocsFunctionsListComponent,
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class FsDocsFunctionsRoutingModule {}
