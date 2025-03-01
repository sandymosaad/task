import { Routes } from '@angular/router';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { RemoveFromCartComponent } from './Components/remove-from-cart/remove-from-cart.component';

export const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'products/remove-from-cart', component: RemoveFromCartComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];

