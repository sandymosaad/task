import { Component } from '@angular/core';
import { CartService } from '../../Services/cart/cart.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../Types/product';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [
      CommonModule,
  ],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent {
  cartItems: Product[] = [];


  constructor (private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

removeFromCart(item: Product) {
  this.cartService.removeFromCart(item);
}

}
