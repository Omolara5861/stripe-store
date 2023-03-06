import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../../shared/models/cart';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit{
  //Items in cart
  cart: Cart={items: [] };

  //Property to use in the table
  dataSource: Array<CartItem>=[];

  /** Items to display on the table */
  displayedColumns: Array<string>=[
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.dataSource = this.cart.items;
    this.cartService.cart.subscribe(_cart => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  /** Calculate the total price for the items in the cart */
  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }

  /** Removes @param item from cart */
  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  /** Increases quantity of an item. Runs the if statement from the service*/
  onAddQuantity(item: CartItem) : void {
    this.cartService.addToCart(item);
  }

  /** Increases quantity of an item. Runs the if statement from the service*/
  onRemoveQuantity(item: CartItem) : void {
    this.cartService.removeQuantity(item);
  }

  /** Clears cart*/
  onClearCart(): void {
    this.cartService.clearCart();
  }

  onCheckout(): void {
    
  }
}