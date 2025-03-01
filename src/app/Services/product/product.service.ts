import { Injectable } from '@angular/core';
import { Product } from '../../Types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private products: Product[] = [
    { id: 1, name: 'iPhone 14', price: 30000, category: 'Mobile', description: 'A powerful smartphone with an advanced dual-camera system and A15 Bionic chip.', image: ['/images/m1.jpg','/images/m1-2.jpg','/images/m1-3.jpg'] },
    { id: 2, name: 'Samsung Galaxy S23', price: 28000, category: 'Mobile', description: 'A premium smartphone with a high-refresh-rate display and excellent camera quality.', image: ['/images/m3.jpg','/images/m3-2.jpg','/images/m3-3.jpg'] },
    { id: 3, name: 'Google Pixel 7', price: 25000, category: 'Mobile', description: 'A Google flagship phone featuring AI-powered photography and a sleek design.', image: ['/images/m4.jpg','/images/m4-2.jpg','/images/m4-3.jpg'] },
    { id: 4, name: 'OnePlus 11', price: 27000, category: 'Mobile', description: 'A fast and smooth smartphone with a powerful Snapdragon processor and great battery life.', image: ['/images/m5.jpg','/images/m5-2.jpg','/images/m5-3.jpg'] },
    { id: 5, name: 'Xiaomi 13 Pro', price: 22000, category: 'Mobile', description: 'A feature-packed smartphone with a high-resolution display and excellent camera performance.', image: ['/images/m6.jpg','/images/m6-2.jpg','/images/m6-3.jpg'] },

    { id: 6, name: 'MacBook Pro 16', price: 50000, category: 'Laptop', description: 'A powerful laptop with an M2 Pro chip, excellent display, and long battery life.', image: ['/images/L1.jpg','/images/L1-2.jpg','/images/L1-3.jpg'] },
    { id: 7, name: 'Dell XPS 15', price: 40000, category: 'Laptop', description: 'A premium Windows laptop with a stunning 4K display and high-end performance.', image: ['/images/L2.jpg','/images/L2-3.jpg','/images/L2-3.jpg'] },
    { id: 8, name: 'HP Spectre x360', price: 35000, category: 'Laptop', description: 'A convertible laptop with a touchscreen display and long-lasting battery.', image: ['/images/L3.jpg','/images/L3-2.jpg','/images/L3-3.jpg'] },
    { id: 9, name: 'Asus ROG Strix', price: 42000, category: 'Laptop', description: 'A high-performance gaming laptop with RGB lighting and powerful graphics.', image: ['/images/L6.webp','/images/L6-2.jpg','/images/L6-3.jpg'] },
    { id: 10, name: 'Lenovo ThinkPad X1', price: 38000, category: 'Laptop', description: 'A business-class laptop known for durability, security, and a great keyboard.', image: ['/images/L7.webp','/images/L7-2.jpg','/images/L7-3.jpg'] },

    { id: 11, name: 'Canon EOS R5', price: 60000, category: 'Camera', description: 'A professional mirrorless camera with 8K video recording and superior autofocus.', image: ['/images/C8.webp','/images/C8-2.jpg','/images/C8-3.jpg'] },
    { id: 12, name: 'Sony A7 IV', price: 55000, category: 'Camera', description: 'A full-frame mirrorless camera with high-resolution imaging and fast performance.', image: ['/images/C10.webp','/images/C10-2.jpg','/images/C10-3.jpg'] },
    { id: 13, name: 'Nikon Z9', price: 70000, category: 'Camera', description: 'A flagship mirrorless camera with incredible speed and image quality.', image: ['/images/C11.webp','/images/C11-2.jpg','/images/C11-3.jpg'] },
    { id: 14, name: 'Fujifilm X-T5', price: 50000, category: 'Camera', description: 'A retro-style mirrorless camera with outstanding color science and film simulations.', image: ['/images/C9-2.jpg','/images/C-3.jpg'] },
    { id: 15, name: 'Panasonic GH6', price: 48000, category: 'Camera', description: 'A video-focused camera with excellent stabilization and 4K recording capabilities.', image: ['/images/C6.jpg','/images/C7-2.jpg','/images/C7-3.jpg'] },

    { id: 16, name: 'PlayStation 5', price: 25000, category: 'PlayStation', description: 'A next-generation gaming console with ultra-fast SSD and stunning graphics.', image: ['/images/pl1.jpg','/images/pl1-2.jpg','/images/pl1-3.jpg'] },
    { id: 17, name: 'Xbox Series X', price: 23000, category: 'PlayStation', description: 'A powerful gaming console with 4K gaming and backward compatibility.', image: ['/images/pl7.webp','/images/pl7-2.jpg','/images/pl7-3.jpg'] },
    { id: 18, name: 'Nintendo Switch OLED', price: 12000, category: 'PlayStation', description: 'A hybrid gaming console with a vibrant OLED display and handheld mode.', image: ['/images/pl3.jpg','/images/pl3-2.jpg','/images/pl3-3.jpg'] },
    { id: 19, name: 'PlayStation 4 Pro', price: 18000, category: 'PlayStation', description: 'An enhanced version of the PS4 with 4K gaming capabilities.', image: ['/images/pl6.webp','/images/pl6-2.jpg','/images/pl6-3.jpg'] },
    { id: 20, name: 'Xbox Series S', price: 15000, category: 'PlayStation', description: 'A compact and budget-friendly gaming console with great performance.', image: ['/images/pl5.jpg','/images/pl5-2.jpg','/images/pl5-3.jpg'] }
];



  getProducts(): Product[] {
    return this.products;
  }
}
