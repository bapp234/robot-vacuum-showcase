import type { HTMLAttributes, ReactNode } from "react";

export type HeadingAlign = "left" | "center";

export interface HeadingProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  badge?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: HeadingAlign;
}