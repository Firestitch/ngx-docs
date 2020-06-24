import { Injectable } from '@angular/core';
import { FsApi } from '@firestitch/api';
import { Observable } from 'rxjs';

import { IVersionsList } from '../interfaces/version-item.interface';
import { IDocItemsList } from '../interfaces/doc-item.inteface';


@Injectable()
export class DocsData {

  constructor(private _api: FsApi) {
  }

  public fetchVersionsList(): Observable<IVersionsList> {
    return this._api
      .get('/assets/docs/index.json', {}, { key: 'versions' });
  }

  public fetchVersionDocs(version): Observable<IDocItemsList> {
    return this._api
      .get(`/assets/docs/${version}/docs.json`, {}, { key: 'data' })
  }
}
