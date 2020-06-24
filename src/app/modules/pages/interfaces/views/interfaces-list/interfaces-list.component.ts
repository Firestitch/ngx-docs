import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { InterfaceDocItem } from 'ngx-docs-generator';

import { DocsService } from '../../../../../services/docs.service';


@Component({
  templateUrl: './interfaces-list.component.html'
})
export class FsDocsInterfacesListComponent implements OnInit, OnDestroy {

  public docs: InterfaceDocItem[];

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
        this.docs = this._docs.getDocForType('interfaces') as any;
      });
  }
}
