import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  private items = signal<number>(0);

  get itemCount() {
    return this.items.asReadonly();
  }

  addItem() {
    this.items.update(count => count + 1);
  }

  removeItem() {
    this.items.update(count => Math.max(0, count - 1));
  }
}