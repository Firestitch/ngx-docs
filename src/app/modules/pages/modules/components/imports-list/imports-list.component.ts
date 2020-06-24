import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DocsService } from '../../../../../services/docs.service';

@Component({
  selector: 'fs-docs-imports-list',
  templateUrl: './imports-list.component.html',
})
export class FsDocsImportsListComponent implements OnChanges {

  @Input()
  public imports: string[];

  public list: { name: string, internal: boolean }[] = [];

  constructor(private _docs: DocsService) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.list = this._prepareImportsList();
  }

  private _prepareImportsList() {
    const list = [];

    this.imports.forEach((importedModule) => {
      const internal = !!this._docs.getDocFor('modules', importedModule);
      const listItem = {
        name: importedModule,
        internal,
      };

      list.push(listItem);
    });

    return list;
  }
}
