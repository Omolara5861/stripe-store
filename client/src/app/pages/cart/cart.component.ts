import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
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

  constructor(private cartService: CartService, private http: HttpClient) {}

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

  /** This method makes a post request to stripe to process users payment */
  onCheckout(): void {
    this.http
      .post('https://stripe-store-server.onrender.com/checkout', {
        items: this.cart.items,
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .subscribe(async (res: any) => {
        const stripe = await loadStripe('pk_test_51MieJTExOuRzEOei2oSlqlyimsiPZgryXz8xRCnvB1sDY3VzAcyXugLBYz4ScjEIUGkFSwKwT3F01NdJwg1NcEkN00JwWuoYib');
        stripe?.redirectToCheckout({
          sessionId: res.id,
        });
      });
  }
}