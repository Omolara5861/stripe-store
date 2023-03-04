import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
    cols = 3;
  category: string | undefined;

    onUpdateColumnsCount(colsCount: number): void {
      this.cols = colsCount;
    }

    onShowCategory(newCategory: string): void {
      this.category = newCategory;
    }
}
