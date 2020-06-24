import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsComponent } from './views/docs/docs.component';

export const routes: Routes = [
  {
    path: '',
    component: DocsComponent,
    children: [
      {
        path: 'modules',
        loadChildren: () => import('./modules/pages/modules/modules.module')
          .then(m => m.FsDocsModulesModule),

      },
      {
        path: 'components',
        data: {
          type: 'components',
        },
        loadChildren: () => import('./modules/pages/components/components.module')
          .then(m => m.FsDocsComponentsModule),
      },
      {
        path: 'directives',
        data: {
          type: 'directives',
        },
        loadChildren: () => import('./modules/pages/components/components.module')
          .then(m => m.FsDocsComponentsModule),
      },
      {
        path: 'pipes',
        loadChildren: () => import('./modules/pages/pipes/pipes.module')
          .then(m => m.FsDocsPipesModule),

      },
      {
        path: 'providers',
        data: {
          type: 'providers',
        },
        loadChildren: () => import('./modules/pages/classes/classes.module')
          .then(m => m.FsDocsClassesModule),
      },
      {
        path: 'classes',
        data: {
          type: 'classes',
        },
        loadChildren: () => import('./modules/pages/classes/classes.module')
          .then(m => m.FsDocsClassesModule),
      },
      {
        path: 'interfaces',
        loadChildren: () => import('./modules/pages/interfaces/interfaces.module')
          .then(m => m.FsDocsInterfacesModule),

      },
      {
        path: 'types',
        loadChildren: () => import('./modules/pages/types/types.module')
          .then(m => m.FsDocsTypesModule),

      },
      {
        path: 'consts',
        loadChildren: () => import('./modules/pages/consts/consts.module')
          .then(m => m.FsDocsConstsModule),

      },
      {
        path: 'enums',
        loadChildren: () => import('./modules/pages/enums/enums.module')
          .then(m => m.FsDocsEnumsModule),

      },
      {
        path: 'functions',
        loadChildren: () => import('./modules/pages/functions/functions.module')
          .then(m => m.FsDocsFunctionsModule),

      },
    ],
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class DocsRoutingModule {}
