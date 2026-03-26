export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  link: string;

  // Lab5 NEW
  likes: number;
  categoryId: number;
} 