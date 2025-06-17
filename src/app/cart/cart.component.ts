import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { computed, effect } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
})
export class CartComponent {
  itemCount = this.cartService.itemCount;
  hasItems = computed(() => this.itemCount() > 0);

  constructor(private cartService: CartService) {
    effect(() => {
      console.log('Cart items changed:', this.itemCount());
    });
  }

  add() {
    this.cartService.addItem();
  }

  remove() {
    this.cartService.removeItem();
  }
}
