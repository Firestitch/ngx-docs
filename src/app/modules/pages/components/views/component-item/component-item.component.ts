import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ComponentDocItem } from 'ngx-docs-generator';

import { DocsService } from '../../../../../services/docs.service';


@Component({
  templateUrl: './component-item.component.html'
})
export class FsDocsComponentItemComponent implements OnInit, OnDestroy {

  public docItem: ComponentDocItem;
  public type: 'components' | 'directives';

  private _destroy$ = new Subject<void>();

  constructor(
    private _docs: DocsService,
    private _route: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this._listenRouteChanges();
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
  }

  private _listenRouteChanges() {
    this._route.params
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((params) => {
        this.type = (this._route.data as any).value.type;
        this.docItem = this._docs.getDocFor(this.type, params.name) as ComponentDocItem;
      });
  }

}
