import { Component, Input } from '@angular/core';
import { TypeDocItem } from 'ngx-docs-generator';

@Component({
  selector: 'fs-docs-type-item',
  templateUrl: './type-item.component.html',
})
export class FsDocsTypeItemComponent {

  @Input()
  public item: TypeDocItem;

}
