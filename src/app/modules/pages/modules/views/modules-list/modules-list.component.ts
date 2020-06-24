import { Component, OnInit } from '@angular/core';
import { DocsService } from '../../../../../services/docs.service';
import { ModuleDocItem } from 'ngx-docs-generator';

@Component({
  templateUrl: './modules-list.component.html'
})
export class FsDocsModulesListComponent implements OnInit {

  public docs: ModuleDocItem[];
  constructor(private _docs: DocsService) {}

  public ngOnInit() {
    this.docs = this._docs.getDocForType('modules') as any;
  }
}
