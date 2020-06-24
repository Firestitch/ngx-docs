import { Pipe, PipeTransform } from '@angular/core';
import { ModuleExportedItem } from 'ngx-docs-generator';
@Pipe({
  name: 'printExportedSelectors',
})
export class FsPrintExportedSelectorsPipe implements PipeTransform {
  public transform(value: ModuleExportedItem): string {
    const selectors = Object.keys(value)
      .reduce((acc, key) => {
        const items = value[key];
        items.forEach((item) => {
          acc.push(item.selector);
        })

        return acc;
      }, []);

    return selectors.join(', ');
  }
}
