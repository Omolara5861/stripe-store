import { Component, Input } from '@angular/core';
import { Cart, CartItem } from '../../models/cart';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  /**A subscriber that emits to the home component */
  private _cart: Cart = {items: []};
  itemsQuantity = 0;

  constructor(private cartService: CartService){
    cartService.loadCart();
  }

  /** Getters that returns the items in the cart */
  @Input() get cart(): Cart {
    return this._cart;
  }

  /** Setters for adding new items to the cart */
  set cart(cart: Cart) {
    this._cart = cart;

    /** Update items quantity every time the cart changes */
    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }
}
