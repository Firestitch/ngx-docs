import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FsSidenavModule } from '@firestitch/sidenav';
import { FsSkeletonModule } from '@firestitch/skeleton';
import { FsMenuModule } from '@firestitch/menu';

import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './views/docs/docs.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { VersionPickerComponent } from './components/version-picker/version-picker.component';
import { DocsService } from './services/docs.service';
import { DocsData } from './data/docs.data';


@NgModule({
  imports: [
    CommonModule,
    DocsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,

    FsMenuModule,
    FsSidenavModule,
    FsSkeletonModule,
  ],
  declarations: [
    DocsComponent,
    SideNavComponent,
    VersionPickerComponent,
  ],
  exports: [
    DocsComponent,
  ],
  providers: [
    DocsService,
    DocsData,
  ]
})
export class FsDocsModule {

}
