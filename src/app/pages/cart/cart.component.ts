import { Component, OnInit } from '@angular/core';
import { Cart } from '../../shared/models/cart';
import { CartItem } from '../../shared/models/cart';
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

  /** */
  onClearCart(): void {
    this.cartService.clearCart();
  }
}
