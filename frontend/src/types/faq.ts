import type { BaseEntity } from "./common";

export interface FAQ extends BaseEntity {
  question: string;

  answer: string;

  isFeatured?: boolean;
}