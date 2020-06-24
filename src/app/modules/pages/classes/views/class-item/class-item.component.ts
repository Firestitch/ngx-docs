import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClassDocItem } from 'ngx-docs-generator';

import { DocsService } from '../../../../../services/docs.service';


@Component({
  templateUrl: './class-item.component.html',
})
export class FsDocsClassItemComponent implements OnInit {

  public docItem: ClassDocItem;
  public type: 'classes' | 'providers';

  constructor(
    private _docs: DocsService,
    private _route: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this._listenRouteChanges();
  }

  private _listenRouteChanges() {
    this._route.params
      .subscribe((params) => {
        this.type = (this._route.data as any).value.type;
        this.docItem = this._docs.getDocFor(this.type, params.name) as ClassDocItem;
      });
  }

}
