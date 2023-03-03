import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
    cols = 3;

    onUpdateColumnsCount(colsCount: number): void {
      this.cols = colsCount;
    }
}
