export interface ProductCard {
  id: number;
  name: string;
  option?: string;
  originalPrice: string;
  salePrice: string;
  image: string;
  hoverImage: string;
  url: string;
}

export interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
}