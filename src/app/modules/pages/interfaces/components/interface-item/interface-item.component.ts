import { Component, Input } from '@angular/core';
import { InterfaceDocItem } from 'ngx-docs-generator';

@Component({
  selector: 'fs-docs-interface-item',
  templateUrl: './interface-item.component.html',
})
export class FsDocsInterfaceItemComponent {

  @Input()
  public item: InterfaceDocItem;

}
