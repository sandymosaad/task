import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart/cart.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../Types/product';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [
      CommonModule,
      RouterLink,
      RouterModule
  ],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent implements OnInit{
  cartItems: Product[] = [];
  cartItemCount: number = 0;

  constructor (private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }


  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  getCartItemsLength() {
    this.cartItemCount = this.cartService.getCartItemsLength();
    return this.cartItemCount;
  }

}
