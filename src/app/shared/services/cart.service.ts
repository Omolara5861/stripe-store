import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BehaviorSubject } from "rxjs";
import { Cart, CartItem } from "../models/cart";

@Injectable({
  providedIn: "root",
})
export class CartService {
  /** @BehaviorSubject holds the initial item / items in cart and updates it with new item added to the cart. 'item === product'. Components can subscribe to it and update the UI subsequently */
  cart = new BehaviorSubject<Cart>({ items: [] });
  constructor(private _snackBar: MatSnackBar) {}

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
    this._snackBar.open("1 item added to cart.", "Ok", { duration: 3000 });
  }

  /**
   * Remove an item from the cart, update cart object, and emit it
   * @param item is the product to remove from cart
   * @param updateCart stops the snackbar from displaying 2 notifications
   * @returns the remaining items in the cart without the one removed
   */
  removeFromCart(item: CartItem, updateCart = true): CartItem[] {
    const filteredItems = this.cart.value.items.filter(
      _item => _item.id !== item.id
    );

    if (updateCart) {
      this.cart.next({ items: filteredItems });
      this._snackBar.open("Item removed from cart.", "Ok", {
        duration: 3000,
      });
    }

    return filteredItems;
  }

  /**
   *To update the quantity in the cart page
   * @param item is the product that the quantity is to be removed
   */

  removeQuantity(item: CartItem): void {
    //Item to be removed once an item quantity hits 0
    let itemForRemoval!: CartItem;

    /** Filters Item that match @param item and deduct the quantity and when the quantity is 0, the item is marked for removal*/
    let filteredItems = this.cart.value.items.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity--;
        if (_item.quantity === 0) {
          itemForRemoval = _item;
        }
      }

      return _item;
    });

    /** If there is an item for removal, the item is removed and the filtered items is updated */
    if (itemForRemoval) {
      filteredItems = this.removeFromCart(itemForRemoval, true);
    }

    this.cart.next({ items: filteredItems });
    this._snackBar.open('Item removed from cart.', 'Ok', {
      duration: 3000,
    });
  }

  /** Calculate the total price for the items in the cart */
  getTotal(items: CartItem[]): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((sum, item) => sum + item, 0);
  }

  /** Remove all items in cart */
  clearCart(): void {
    this.cart.next({ items: [] });
    this._snackBar.open("Cart has been cleared.", "Ok", {
      duration: 3000,
    });
  }
}
