import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html'
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>();
//List of categories to filter products
  categories: string[] = ['shoes', 'bags']

  onShowCategory(newCategory: string): void {
    this.showCategory.emit(newCategory);
  }
}
