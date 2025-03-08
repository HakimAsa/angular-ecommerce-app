import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, SearchBarComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  searchService = inject(SearchService);
  cartService = inject(CartService);

  onSearchInput(searchValue: string) {
    console.log('Search Term:', searchValue);
    this.searchService.setSearchTerm(searchValue);
  }
}
