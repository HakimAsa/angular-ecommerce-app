import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Input() currentPage!: number;
  @Input() totalPages!: number;
  @Output() onPageChange = new EventEmitter<number>();

  goToPage(page: number): void {
    if (typeof page === 'number' && page >= 1 && page <= this.totalPages) {
      this.onPageChange.emit(page);
    }
  }
  getPages(): (number | string)[] {
    const pages: (number | string)[] = [];
    const maxVisible = 5; // Max page buttons to show before using '...'

    if (this.totalPages <= maxVisible) {
      // Show all pages if total pages are small
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }

    if (this.currentPage <= 3) {
      // Show first 3 pages, ..., last page
      pages.push(1, 2, 3, '...', this.totalPages);
    } else if (this.currentPage >= this.totalPages - 2) {
      // Show first page, ..., last 3 pages
      pages.push(
        1,
        '...',
        this.totalPages - 2,
        this.totalPages - 1,
        this.totalPages
      );
    } else {
      // Show first page, ..., middle pages, ..., last page
      pages.push(
        1,
        '...',
        this.currentPage - 1,
        this.currentPage,
        this.currentPage + 1,
        '...',
        this.totalPages
      );
    }

    return pages;
  }
}
