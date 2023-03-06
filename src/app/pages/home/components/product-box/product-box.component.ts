import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../../../../shared/models/product';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent {
  //Pass fullWidth property to the parent component home
  @Input() fullWidthMode = false;

  product: Product | undefined = {
    id: 1,
    title: 'Sneakers',
    price: 200,
    category: 'shoes',
    description: 'string',
    image: 'https://via.placeholder.com/200'
  }

  //Pass event to parent component
  @Output() addToCart = new EventEmitter<Product>();

  /** Emits the product gotten from the cart */
  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
