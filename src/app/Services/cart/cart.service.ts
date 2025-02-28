import { Injectable } from '@angular/core';
import { Product } from '../../Types/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cart: Product[] = [];

  getCartItems() {
    return this.cart;
  }

  addToCart(product:Product){
    this.cart.push(product);
  }

  removeFromCart(product:Product){
    this.cart = this.cart.filter(item => item.id !== product.id);
  }

}
