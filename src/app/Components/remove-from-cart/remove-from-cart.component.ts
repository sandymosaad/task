import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart/cart.service';
import { Product } from '../../Types/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-from-cart',
  standalone: true,
  imports: [],
  templateUrl: './remove-from-cart.component.html',
  styleUrl: './remove-from-cart.component.css'
})
export class RemoveFromCartComponent implements OnInit {
   cartItems: Product[] = [];

  constructor( private cartService: CartService,
    private router: Router) { }

  ngOnInit(){
    this.cartItems = this.cartService.getCartItems();
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }
  removeFromCart(item: Product) {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCartItems();
  }

  goBack(){
    this.router.navigate(['/products']);
  }
}
