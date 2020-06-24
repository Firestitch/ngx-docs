import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModuleDocItem } from 'ngx-docs-generator';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { DocsService } from '../../../../../services/docs.service';

@Component({
  templateUrl: './classes-list.component.html'
})
export class FsDocsClassesListComponent implements OnInit, OnDestroy {

  public docs: ModuleDocItem[];
  public type: 'classes' | 'providers';

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
        this.docs = this._docs.getDocForType(this.type) as any;
      });
  }
}
