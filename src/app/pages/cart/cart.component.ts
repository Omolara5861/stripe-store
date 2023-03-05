import { Component } from '@angular/core';
import { Cart } from '../../shared/models/cart';
import { CartItem } from '../../shared/models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {
//Items in cart
  cart: Cart = {items: [{
    product: 'string',
    name: 'string',
    price: 120,
    quantity: 1,
    id: 1
  }]};

  //Property to use in the table
  dataSource: Array<CartItem> = [];

  /** Items to display on the table */
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];
}
