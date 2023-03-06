import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../../../../shared/models/product';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent {
  //Pass fullWidth property to the parent component home
  @Input() fullWidthMode = false;

  @Input() product: Product | undefined;

  //Pass event to parent component
  @Output() addToCart = new EventEmitter<Product>();

  /** Emits the product gotten from the cart */
  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
