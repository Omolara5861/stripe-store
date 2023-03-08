import { Component, OnInit } from '@angular/core';
import { Cart } from './shared/models/cart';
import { CartService } from './shared/services/cart.service';

@Component({
  selector: 'app-root',
  template: `
    <app-header [cart]="cart"></app-header>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'Stripe Store';

  cart: Cart = {items: []};

  constructor(public cartService: CartService){}

  ngOnInit(): void {
      this.cartService.cart.subscribe(_cart => this.cart = _cart);
  }

}
