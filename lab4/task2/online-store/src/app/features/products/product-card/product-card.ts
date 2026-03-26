import { Component, computed, effect, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<Product>();

  // existing share output
  shared = output<Product>();

  // NEW: delete output (send product id)
  delete = output<number>();

  mainImage = signal<string>('');

  constructor() {
    effect(() => {
      const p = this.product();
      this.mainImage.set(p.images?.[0] ?? p.image);
    });
  }

  stars = computed(() => {
    const r = this.product().rating;
    return Array.from({ length: 5 }, (_, i) => r >= i + 1);
  });

  setMain(img: string) {
    this.mainImage.set(img);
  }

  openKaspi() {
    window.open(this.product().link, '_blank');
  }

  // NEW: Like
  like() {
    this.product().likes += 1;
  }

  // NEW: Delete emit
  requestDelete() {
    this.delete.emit(this.product().id);
  }

  shareWhatsApp() {
    const p = this.product();
    const text = `Check out this product: ${p.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    this.shared.emit(p);
  }

  shareTelegram() {
    const p = this.product();
    const url =
      `https://t.me/share/url?url=${encodeURIComponent(p.link)}&text=${encodeURIComponent(p.name)}`;
    window.open(url, '_blank');
    this.shared.emit(p);
  }
}