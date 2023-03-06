import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  /** @BehaviorSubject holds the initial item / items in cart and updates it with new item added to the cart. 'item === product'. Components can subscribe to it and update the UI subsequently */
  cart = new BehaviorSubject<Cart>({items: []});
  constructor(private _snackBar: MatSnackBar) { }

  addToCart(item: CartItem): void {
    /** New items array destructured from the original items object in order not to alter it*/
    const items = [...this.cart.value.items];

    /** Checks if item already exist in cart, if it does, the item quantity would be increase else it would add the item to the items array */
    const itemInCart = items.find((_item) => _item.id === item.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }

    /** Emit the items object so that every component that is subscribed to the cart can get the updated items */
    this.cart.next({ items });

    /**Displays popup with message for 3 secs */
    this._snackBar.open('1 item added to cart.', 'Ok', { duration: 3000 });
  }

  /** Calculate the total price for the items in the cart */
  getTotal(items: CartItem[]): number {
    return items
    .map(item => item.price * item.quantity)
    .reduce((sum, item) => sum + item, 0)
  }

}
