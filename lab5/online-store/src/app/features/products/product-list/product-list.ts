import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = input.required<Product[]>();
  localProducts: Product[] = [];

  ngOnChanges() {
    this.localProducts = [...this.products()];
  }

  remove(id: number) {
    this.localProducts = this.localProducts.filter(p => p.id !== id);
  }

  onShared(p: Product) {
    console.log('Shared:', p.name, p.link);
  }
}