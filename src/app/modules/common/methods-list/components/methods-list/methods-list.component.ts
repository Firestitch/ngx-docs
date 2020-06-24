import { Component, Input } from '@angular/core';
import { TransformedMethod } from 'ngx-docs-generator';


@Component({
  selector: 'fs-docs-methods-list',
  templateUrl: './methods-list.component.html',
  styleUrls: [
    './methods-list.component.scss',
  ]
})
export class FsDocsMethodsListComponent {

  @Input()
  public methods: TransformedMethod[];

}
