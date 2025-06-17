import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products = signal<string[]>(['Notebook', 'Mouse', 'Teclado']);

  get productList() {
    return this.products.asReadonly();
  }

  addProduct(name: string) {
    this.products.update(list => [...list, name]);
  }
}
