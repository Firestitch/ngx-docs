import { Component, Input } from '@angular/core';
import { TransformedProperty } from 'ngx-docs-generator';


@Component({
  selector: 'fs-docs-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: [
    './property-list.component.scss'
  ]
})
export class FsDocsPropertyListComponent {

  @Input()
  public properties: TransformedProperty[];
}
