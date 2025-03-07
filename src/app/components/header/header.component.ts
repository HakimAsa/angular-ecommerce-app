import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, SearchBarComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  cartService = inject(CartService);
  @Output() searchEvent = new EventEmitter<string>();

  onSearchInput(searchValue: string) {
    console.log(searchValue);
    this.searchEvent.emit(searchValue); // Directly emit the string
  }
}
