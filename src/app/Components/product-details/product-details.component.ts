import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductService } from '../../Services/product/product.service';
import { CartService } from '../../Services/cart/cart.service';
import { Product } from '../../Types/product';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,
    ProductListComponent,
    RouterLink
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  products: Product[]=[];
  filteredProducts: Product[] = [];
  product: Product | null = null;
  currentIndex = 0;


  constructor( private route:ActivatedRoute,
    private productService: ProductService ,
    private CartService: CartService ,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productID = params.get('id');
      if (productID) {
          this.getProduct(parseInt(productID));
        }
      });

    this.products = this.productService.getProducts();
    this.getRelatedProducts();
  }

  getProduct(id: number) {
    this.product = this.productService.getProducts().find(product => product.id === id) || null;
  }

  nextImage()
  {
    if (this.product && this.product.image && this.product.image.length > 0)
    {
      this.currentIndex = (this.currentIndex + 1) % this.product.image.length;
    }
  }

  prevImage()
  {
    if (this.product && this.product.image && this.product.image.length > 0)
    {
    this.currentIndex = (this.currentIndex - 1 + this.product.image.length) % this.product.image.length;
    }
  }

  getRelatedProducts() {
    this.filteredProducts = this.products.filter(product => product.category==(this.product?.category));
    return this.filteredProducts;
  }

  addToCart(product:Product){
    this.CartService.addToCart(product);
  }
  goBack(){
    this.router.navigate(['/products']);
  }
}

