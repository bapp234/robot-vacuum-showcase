import type { BaseEntity } from "./common";

export interface Product extends BaseEntity {
  name: string;
  shortName: string;

  tagline: string;

  description: string;

  price: number;

  currency: string;

  sku: string;

  rating: number;

  reviewCount: number;

  heroImage: string;

  gallery: string[];

  colors: string[];

  inStock: boolean;

  badge?: string;
}