import { Component } from '@angular/core';
import { Cart } from '../../shared/models/cart';
import { CartItem } from '../../shared/models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {
  //Items in cart
  cart: Cart={
    items: [{
      product: 'https://via.placeholder.com/150',
      name: 'string',
      price: 120,
      quantity: 1,
      id: 1
    }]
  };

  //Property to use in the table
  dataSource: Array<CartItem>=[
    {
      product: 'https://via.placeholder.com/150',
      name: 'string',
      price: 120,
      quantity: 1,
      id: 1
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'string',
      price: 120,
      quantity: 3,
      id: 2
    }
  ];

  /** Items to display on the table */
  displayedColumns: Array<string>=[
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];

  /** Calculate the total price for the items in the cart */
  getTotal(items: CartItem[]): number {
    return items
    .map(item => item.price * item.quantity)
    .reduce((sum, item) => sum + item, 0)
  }

  /** */
  onClearCart(): void {

  }
}
