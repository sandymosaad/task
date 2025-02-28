import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductCardComponent } from './Components/product-card/product-card.component';
import { CartSummaryComponent } from './Components/cart-summary/cart-summary.component';
import { HeaderComponent } from './Components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ProductListComponent,
    HeaderComponent,
    ProductCardComponent,
    CartSummaryComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product-listing';

  searchTerm: string = '';

  onSearchTermChange(term: string) {
    this.searchTerm = term;
  }
}
