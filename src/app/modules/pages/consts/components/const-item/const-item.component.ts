import { Component, Input } from '@angular/core';
import { ConstDocItem } from 'ngx-docs-generator';

@Component({
  selector: 'fs-docs-const-item',
  templateUrl: './const-item.component.html',
})
export class FsDocsConstItemComponent {

  @Input()
  public item: ConstDocItem;

}
