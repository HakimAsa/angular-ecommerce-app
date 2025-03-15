import {
  Component,
  EventEmitter,
  inject,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { SearchService } from '../../services/search.service';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, SearchBarComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  location: string = 'Fetching location...';
  suburb: string = 'Fetching suburb...';
  searchService = inject(SearchService);
  cartService = inject(CartService);

  constructor(private locationService: LocationService) {}

  onSearchInput(searchValue: string) {
    console.log('Search Term:', searchValue);
    this.searchService.setSearchTerm(searchValue);
  }

  ngOnInit(): void {
    this.locationService.getUserLocation().then((coords) => {
      this.location = `Lat: ${coords.latitude}, Lng: ${coords.longitude}`;
      this.getMyLocation(coords.latitude, coords.longitude);
    });
  }
  getMyLocation(lat: number, lng: number): void {
    fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.address);
        this.location = data.address.country || 'Unknown location';
        // data.address.city || data.address.town || 'Unknown location';
        this.suburb = data.address.suburb || 'Unknown suburb';
      })
      .catch((error) => {
        console.error('Error fetching city name:', error);
      });
  }
}
