import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { StoreService } from '../../../../shared/services/store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html'
})
export class FiltersComponent implements OnInit  {
  @Output() showCategory = new EventEmitter<string>();
//List of categories to filter products
  categories!: string[];
  categoriesSubscription!: Subscription;

  constructor(private storeService: StoreService) {}
  ngOnInit(): void {
    this.categoriesSubscription = this.storeService.getAllCategories().subscribe(_categories => this.categories = _categories);
  }

  onShowCategory(newCategory: string): void {
    this.showCategory.emit(newCategory);
  }

  ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }

}
