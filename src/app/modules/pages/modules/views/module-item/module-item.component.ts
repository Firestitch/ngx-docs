import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocsService } from '../../../../../services/docs.service';
import { ModuleDocItem } from 'ngx-docs-generator';


@Component({
  templateUrl: './module-item.component.html'
})
export class FsDocsModuleItemComponent implements OnInit {

  public docItem: ModuleDocItem;

  constructor(
    private _docs: DocsService,
    private _route: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    const routeData = this._route.snapshot;
    this.docItem = this._docs.getDocFor('modules', routeData.params.name);
  }

  private _listenRouteChanges() {
    this._route.params
      .subscribe((params) => {
        this.docItem = this._docs.getDocFor(params.type, params.name);
      });
  }
}
