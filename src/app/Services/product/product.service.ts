import { Injectable } from '@angular/core';
import { Product } from '../../Types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  private products :Product[] = [
    { id: 1, name: 'iPhone 14', price: 30000, category: 'Mobile', image: '/images/m1.jpg' },
    { id: 2, name: 'Samsung Galaxy S23', price: 28000, category: 'Mobile', image: '/images/m2.jpg' },
    { id: 3, name: 'Google Pixel 7', price: 25000, category: 'Mobile', image: '/images/m3.jpg' },
    { id: 4, name: 'OnePlus 11', price: 27000, category: 'Mobile', image: '/images/m4.jpg' },
    { id: 5, name: 'Xiaomi 13 Pro', price: 22000, category: 'Mobile', image: '/images/m5.jpg' },

    { id: 6, name: 'MacBook Pro 16', price: 50000, category: 'Laptop', image: '/images/L1.jpg' },
    { id: 7, name: 'Dell XPS 15', price: 40000, category: 'Laptop', image: '/images/L2.jpg' },
    { id: 8, name: 'HP Spectre x360', price: 35000, category: 'Laptop', image: '/images/L3.jpg' },
    { id: 9, name: 'Asus ROG Strix', price: 42000, category: 'Laptop', image: '/images/L4.jpg' },
    { id: 10, name: 'Lenovo ThinkPad X1', price: 38000, category: 'Laptop', image: '/images/L5.jpg' },

    { id: 11, name: 'Canon EOS R5', price: 60000, category: 'Camera', image: '/images/C1.jpg' },
    { id: 12, name: 'Sony A7 IV', price: 55000, category: 'Camera', image: '/images/c2.jpg' },
    { id: 13, name: 'Nikon Z9', price: 70000, category: 'Camera', image: '/images/c3.jpg' },
    { id: 14, name: 'Fujifilm X-T5', price: 50000, category: 'Camera', image: '/images/C4.jpg' },
    { id: 15, name: 'Panasonic GH6', price: 48000, category: 'Camera', image: '/images/C5.jpg' },

    { id: 16, name: 'PlayStation 5', price: 25000, category: 'PlayStation', image: '/images/pl1.jpg' },
    { id: 17, name: 'Xbox Series X', price: 23000, category: 'PlayStation', image: '/images/pl2.jpg' },
    { id: 18, name: 'Nintendo Switch OLED', price: 12000, category: 'PlayStation', image: '/images/pl3.jpg' },
    { id: 19, name: 'PlayStation 4 Pro', price: 18000, category: 'PlayStation', image: '/images/pl4.jpg' },
    { id: 20, name: 'Xbox Series S', price: 15000, category: 'PlayStation', image: '/images/pl5.jpg' },
  ];




  getProducts(): Product[] {
    return this.products;
  }
}
