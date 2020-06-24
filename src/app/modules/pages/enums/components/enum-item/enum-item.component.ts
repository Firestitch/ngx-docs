import { Component, Input } from '@angular/core';
import { EnumDocItem } from 'ngx-docs-generator';

@Component({
  selector: 'fs-docs-enum-item',
  templateUrl: './enum-item.component.html',
  styleUrls: [
    './enum-item.component.scss',
  ]
})
export class FsDocsEnumItemComponent {

  @Input()
  public item: EnumDocItem;

}
