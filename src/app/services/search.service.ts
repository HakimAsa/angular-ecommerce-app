import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchTerm = signal<string>(''); // Store search term

  setSearchTerm(term: string) {
    this.searchTerm.set(term);
  }

  getSearchTerm() {
    return this.searchTerm;
  }
}
