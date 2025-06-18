import { Component, WritableSignal } from '@angular/core';
import { ProductService } from './product.service';
import { computed, effect, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductStatisticsComponent } from './product-statistics/product-statistics.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor , FormsModule, ProductStatisticsComponent],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  products = this.productService.productList;
  productCount = computed(() => this.products().length);
  newProduct: WritableSignal<string> = signal('')

  constructor(private productService: ProductService) {
    effect(() => {
      console.log('Lista de produtos mudou:', this.products());
    });
  }

  add() {
    const name = this.newProduct().trim();
    if (name) {
      this.productService.addProduct(name);
      this.newProduct.set('');
    }
  }
}
