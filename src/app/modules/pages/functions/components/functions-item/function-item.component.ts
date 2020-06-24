import { Component, Input } from '@angular/core';
import { FunctionDocItem } from 'ngx-docs-generator';

@Component({
  selector: 'fs-docs-function-item',
  templateUrl: './function-item.component.html',
  styleUrls: [
    './function-item.component.scss',
  ]
})
export class FsDocsFunctionItemComponent {

  @Input()
  public item: FunctionDocItem;

}
