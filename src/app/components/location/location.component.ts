import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-location',
  imports: [],
  templateUrl: './location.component.html',
})
export class LocationComponent implements OnInit {
  location: string = 'Fetching location...';
  suburb: string = 'Fetching suburb...';
  constructor(private locationService: LocationService) {}
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
