export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterBrandContent {
  title: string;
  description: string;
}

export interface FooterNewsletterContent {
  title: string;
  description: string;
  placeholder: string;
  button: string;
}