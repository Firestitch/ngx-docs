import { Component } from '@angular/core';
import { DocsService } from '../../services/docs.service';


@Component({
  selector: 'fs-docs-version-picker',
  templateUrl: './version-picker.component.html',
  styleUrls: [
    './version-picker.component.scss',
  ]
})
export class VersionPickerComponent {
  constructor(public docs: DocsService) {
  }

  public changeVersion(version: string) {
    // this.docs.
  }

}
