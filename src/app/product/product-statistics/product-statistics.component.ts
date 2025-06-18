import { Component, computed } from '@angular/core';
import { ProductService } from '../product.service'; // Ajuste o caminho se necessário
import { NgFor, NgIf } from '@angular/common'; // Importe NgFor e NgIf

@Component({
  selector: 'app-product-statistics',
  standalone: true,
  imports: [NgFor, NgIf], // Adicione NgFor e NgIf aos imports
  templateUrl: './product-statistics.component.html',
})
export class ProductStatisticsComponent {
  // Injeta o ProductService
  constructor(private productService: ProductService) {}

  // Acessa o signal productList do serviço
  // Este é um signal read-only, conforme definido no ProductService
  allProducts = this.productService.productList;

  // Cria um computed signal baseado no signal do serviço
  totalProducts = computed(() => this.allProducts().length);

  // Exemplo de como outro componente pode interagir com o serviço
  addProductExternally() {
    const newProduct = `Produto-${Math.floor(Math.random() * 1000)}`;
    this.productService.addProduct(newProduct);
    console.log(`Adicionado: "${newProduct}" (via ProductStatisticsComponent)`);
  }

  removeLastProduct() {
    const products = this.allProducts();
    if (products.length > 0) {
      const productToRemove = products[products.length - 1];
      this.productService.removeProduct(productToRemove);
      console.log(`Removido: "${productToRemove}" (via ProductStatisticsComponent)`);
    }
  }
}