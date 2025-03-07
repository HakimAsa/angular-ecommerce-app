import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  cartService = inject(CartService);
  searchForm = new FormControl('');
}
