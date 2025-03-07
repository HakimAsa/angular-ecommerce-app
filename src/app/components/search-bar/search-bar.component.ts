import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
  standalone: true, // If using Standalone components
})
export class SearchBarComponent {
  searchForm = new FormControl('');
  @Output() searchEvent = new EventEmitter<string>();

  constructor() {
    // provide the form control to the parent component
    this.searchForm.valueChanges.subscribe((value) => {
      this.searchEvent.emit(value || '');
    });
  }
  onSearchInput(event: Event) {
    const inputValue = (event.target as HTMLInputElement)?.value || '';
    this.searchEvent.emit(inputValue); // Directly emit the string
  }
}
