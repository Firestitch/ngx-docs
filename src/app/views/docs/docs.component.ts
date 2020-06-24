import { Component, OnInit } from '@angular/core';
import { DocsService } from '../../services/docs.service';

@Component({
  selector: 'fs-docs',
  templateUrl: 'docs.component.html',
  styleUrls: [
    './docs.component.scss',
  ]
})
export class DocsComponent implements OnInit {

  constructor(public docs: DocsService) {
  }

  public ngOnInit() {
    this.docs.init();
  }
}
