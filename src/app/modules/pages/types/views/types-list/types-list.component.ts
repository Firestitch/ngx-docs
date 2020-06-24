import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TypeDocItem } from 'ngx-docs-generator';
import { DocsService } from '../../../../../services/docs.service';


@Component({
  templateUrl: './types-list.component.html'
})
export class FsDocsTypesListComponent implements OnInit, OnDestroy {

  public docs: TypeDocItem[];

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
        this.docs = this._docs.getDocForType('types') as any;
      });
  }
}
