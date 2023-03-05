import { Component } from '@angular/core';

const ROW_HEIGHT: {[id:number]:number} = {1: 400, 3: 335, 4: 350};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  cols = 3;
  rowHeight = ROW_HEIGHT[this.cols];
  category: string | undefined;

    onUpdateColumnsCount(colsCount: number): void {
      this.cols = colsCount;
      this.rowHeight = ROW_HEIGHT[this.cols];
    }

    onShowCategory(newCategory: string): void {
      this.category = newCategory;
    }
}
