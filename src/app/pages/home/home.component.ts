import { Component } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { Product } from '../../shared/models/product';

/** The height of product box */
const ROW_HEIGHT: {[id:number]:number} = {1: 400, 3: 335, 4: 350};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  cols = 3;
  rowHeight = ROW_HEIGHT[this.cols];
  category: string | undefined;

  constructor(private cartService: CartService) {}

    onUpdateColumnsCount(colsCount: number): void {
      this.cols = colsCount;
      this.rowHeight = ROW_HEIGHT[this.cols];
    }

    onShowCategory(newCategory: string): void {
      this.category = newCategory;
    }

    onAddToCart(product: Product): void {
      //Send new properties since the product is different from cart item
      this.cartService.addToCart({
        product: product.image,
        name: product.title,
        price: product.price,
        quantity: 1,
        id: product.id,
      });
    }
}
