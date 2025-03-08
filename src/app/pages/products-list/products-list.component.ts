import { Component, computed, inject, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from './product-card/product-card.component';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      description: 'Lorem ipsum dolor sit amet.',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      price: 9.99,
      stock: 10,
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts',
      description: 'Consectetur adipiscing elit.',
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      price: 19.99,
      stock: 5,
    },
    {
      id: 3,
      title: 'Mens Cotton Jacket',
      description:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      price: 29.99,
      stock: 0,
    },
    {
      id: 4,
      title: 'Mens Casual Slim Fit',
      price: 15.99,
      description:
        'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
      // "category": "men's clothing",
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      // "rating": {
      // "rate": 2.1,
      // "count": 430
      // },
      stock: 0,
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      // "category": "jewelery",
      image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
      // "rating": {
      // "rate": 4.6,
      // "count": 400
      // },
      stock: 1,
    },
    {
      id: 6,
      title: 'Solid Gold Petite Micropave ',
      price: 168,
      description:
        'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
      // "category": "jewelery",
      image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
      // "rating": {
      // "rate": 3.9,
      // "count": 70
      // },
      stock: 5,
    },

    // Add more products here...
  ]);

  searchService = inject(SearchService);

  filteredProducts = computed(() => {
    const searchValue = this.searchService.getSearchTerm()().toLowerCase(); // Get latest search term
    return searchValue
      ? this.products().filter(
          (product) =>
            product.title.toLowerCase().includes(searchValue) ||
            product.description.toLowerCase().includes(searchValue)
        )
      : this.products();
  });
}
