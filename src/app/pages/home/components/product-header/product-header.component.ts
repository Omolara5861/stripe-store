import { Component, EventEmitter, Output } from '@angular/core';
import { Sort } from '../../../../shared/models/types';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html'
})
export class ProductHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort: Sort = 'desc';
  itemShowCount = 12;

  onSortUpdated(newSort: Sort): void {
    this.sort = newSort;
  }

  onItemsUpdated(newItem: number): void {
    this.itemShowCount = newItem;
  }

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }
}
