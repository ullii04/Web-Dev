import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product.model';
import { PRODUCTS } from '../../../data/products';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = PRODUCTS;

  onShared(p: Product) {
    console.log('Shared:', p.name, p.link);
  }
}
