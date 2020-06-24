import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { DocsData } from '../data/docs.data';
import { IVersionsList } from '../interfaces/version-item.interface';
import { DocItem } from '../interfaces/doc-item.inteface';


@Injectable()
export class DocsService {

  private readonly _activeVersion$ = new BehaviorSubject<any>(null);
  private readonly _versions$ = new BehaviorSubject<any[]>([]);
  private readonly _data$ = new BehaviorSubject<Map<string, DocItem[]>>(null);
  // private readonly _isLoading = new BehaviorSubject<boolean>(false);

  constructor(private _docsData: DocsData) {
  }

  // public get dataLoaded$() {
  //   return this._dataLoaded$.asObservable();
  // }

  public get activeVersion$() {
    return this._activeVersion$.pipe();
  }

  public get activeVersion() {
    return this._activeVersion$.getValue();
  }

  public get versions$() {
    return this._versions$.pipe();
  }

  public get versions() {
    return this._versions$.getValue();
  }

  public get data$(): Observable<Map<string, DocItem[]>> {
    return this._data$.asObservable();
  }

  public get data(): Map<string, DocItem[]> {
    return this._data$.getValue();
  }

  public init() {
    // this._dataLoaded$.next(false);

    this._docsData.fetchVersionsList()
      .pipe(
        tap((data) => this._saveVersionList(data)),
        tap(() => this._initActiveVersion()),
        switchMap(() => this._fetchDocsData()),
      )
      .subscribe({
        next: (data) => {
          const dataMap = new Map<string, DocItem[]>(
            data.data.map((item) => [item.type, item.data])
          );

          this._data$.next(dataMap);
        },
        error: (error) => {
          this._data$.next(null);

          console.error('Version data can not be loaded', error);
        },
        complete: () => {
          // this._dataLoaded$.next(true);
        }
      })
  }

  public getDocFor(type: string, name: string) {
    const docs = this.data.get(type);

    return docs.find((doc) => doc.name === name);
  }

  public getDocForType(type: string) {
    return this.data.get(type);
  }

  public

  private _saveVersionList(data: IVersionsList) {
    this._versions$.next(data.versions);
  }

  private _initActiveVersion() {
    if (this.versions.length > 0) {
      const active = this.versions[this.versions.length - 1];

      this._activeVersion$.next(active);
    }
  }

  private _fetchDocsData() {
    if (this.activeVersion) {
      return this._docsData.fetchVersionDocs(this.activeVersion.version);
    } else {
      return of(null);
    }
  }
}
