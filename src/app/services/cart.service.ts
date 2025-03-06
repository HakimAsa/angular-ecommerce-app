import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);

  //add product to cart
  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
  }

  //remove product from cart
  removeFromCart(productId: number) {
    this.cart.set(this.cart().filter((p) => p.id !== productId));
  }

  constructor() {}
}
