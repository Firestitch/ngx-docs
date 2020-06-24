import { Component, Input } from '@angular/core';
import { DocsService } from '../../../../../services/docs.service';

@Component({
  selector: 'fs-docs-declarations-list',
  templateUrl: './declarations-list.component.html',
})
export class FsDocsDeclarationsListComponent {

  @Input()
  public declarations: any[];

  @Input()
  public type: 'components' | 'directives' | 'pipes';

  constructor(private _docs: DocsService) {}
}
