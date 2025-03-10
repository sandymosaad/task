import { Component, EventEmitter, Output } from '@angular/core';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';
import { SearchComponent } from '../search/search.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CartSummaryComponent,
    SearchComponent,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output() searchTermChange = new EventEmitter<string>();

  onSearchTermChange(term: string) {
    this.searchTermChange.emit(term);
  }
}
