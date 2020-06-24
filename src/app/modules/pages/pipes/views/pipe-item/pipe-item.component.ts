import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PipeDocItem } from 'ngx-docs-generator';
import { DocsService } from '../../../../../services/docs.service';


@Component({
  templateUrl: './pipe-item.component.html'
})
export class FsDocsPipeItemComponent implements OnInit, OnDestroy {

  public docItem: PipeDocItem;

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
        this.docItem = this._docs.getDocFor('pipes', params.name) as PipeDocItem;
      });
  }

}
