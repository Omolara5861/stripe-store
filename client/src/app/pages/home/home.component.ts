import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { Product } from '../../shared/models/product';
import { Subscription } from 'rxjs';
import { StoreService } from '../../shared/services/store.service';

/** The height of product box */
const ROW_HEIGHT: {[id:number]:number} = {1: 400, 3: 335, 4: 350};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  cols = 3;
  rowHeight = ROW_HEIGHT[this.cols];
  category: string | undefined;
  products: Product[] | undefined;
  sort = 'desc';
  count = 12;

  /** This variable contain subscription from service that would be removed when the component is destroyed to avoid memory leaks */
  productsSubscription: Subscription | undefined;

  constructor(private cartService: CartService, private storeService :StoreService) {}

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.productsSubscription = this.storeService
    .getAllProducts( this.count.toString(), this.sort, this.category)
    .subscribe((_products) => {
      this.products = _products;
    });
  }

  /**
   * Updates page layout
   * @param colsCount is the number of columns to display the product list per row
   */
    onUpdateColumnsCount(colsCount: number): void {
      this.cols = colsCount;
      this.rowHeight = ROW_HEIGHT[this.cols];
    }

    /**
     * Update the number of product to display
     * @param count is the no of products to display
     */
    onItemsCountChange(newCount: number): void {
      this.count = newCount;
      this.getProductList();
    }

    onSortChange(newSort: string): void {
      this.sort = newSort;
      this.getProductList();
    }

    onShowCategory(newCategory: string): void {
      this.category = newCategory;
      this.getProductList();
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

    ngOnDestroy(): void {
      if (this.productsSubscription) {
        this.productsSubscription.unsubscribe();
      }
    }
}
