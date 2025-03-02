import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product/product.service';
import { Product } from '../../Types/product';
import { CartService } from '../../Services/cart/cart.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent  implements OnInit{
  products: Product[]=[];
  filteredProducts: Product[] = [];

  searchTerm: string = '';


  constructor(private productService: ProductService,
    private CartService:CartService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(){
    this.products = this.productService.getProducts();
    this.getFilteredProducts();
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['search'] || '';
    });
  }

  getFilteredProducts() {
    this.filteredProducts = this.products.filter(product => product.category.toLowerCase().includes(this.searchTerm.toLowerCase()));
    return this.filteredProducts;
  }

  addToCart(product:Product){
    this.CartService.addToCart(product);
  }

  goToProductDetails(productId: number) {
    this.router.navigate(['/product', productId]);
  }

}

