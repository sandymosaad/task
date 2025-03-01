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

getCartItemsLength(): number {
  return this.cart.length;
}
  addToCart(product:Product){
    this.cart.push(product);
  }


  removeFromCart(product: Product) {
    const index = this.cart.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }


  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }
}
