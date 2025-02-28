import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductService } from '../../Services/product/product.service';

import { Product } from '../../Types/product';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../Services/cart/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,
    FormsModule

  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[]=[];

  @Input() searchTerm: string = '';

  constructor(private productService: ProductService, private CartService:CartService) {
    this.products = this.productService.getProducts();
  }

  addToCart(product:any){
    this.CartService.addToCart(product);
  }
}

