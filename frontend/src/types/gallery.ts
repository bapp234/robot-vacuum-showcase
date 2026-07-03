import type { BaseEntity } from "./common";

export interface GalleryItem extends BaseEntity {
  image: string;

  title: string;

  description?: string;
}