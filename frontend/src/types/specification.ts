import type { BaseEntity } from "./common";

export interface Specification extends BaseEntity {
  label: string;

  value: string;

  unit?: string;

  category: string;
}