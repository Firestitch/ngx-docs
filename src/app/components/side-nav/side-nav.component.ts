import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DocItem } from '../../interfaces/doc-item.inteface';
import { NAV_ITEMS } from '../../consts/nav-items';

@Component({
  selector: 'fs-docs-sidenav',
  templateUrl: './side-nav.component.html',
  styleUrls: [
    './side-nav.component.scss',
  ]
})
export class SideNavComponent implements OnChanges {

  @Input()
  public data: Map<string, DocItem[]>;

  public config;

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.data) {
      this._initConfig();
    }
  }

  private _initConfig() {
    const config = { items: [] };

    NAV_ITEMS
      .filter((item) => this.data.has(item.key))
      .forEach((item) => {
        const docItems = this.data.get(item.key);
        const navItem = {
          label: item.label,
          path: item.path,
          icon: item.icon,
          items: docItems.map((docItem) => {
            return { label: docItem.name, path: item.path + '/' + docItem.name }
          })
        };

        config.items.push(navItem);
      });

    this.config = config;

    console.log(this.config);

  }
}
