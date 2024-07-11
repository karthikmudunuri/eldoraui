export interface Item {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
}

export interface SubCategory {
  title: string;
  items: Item[];
}

export interface Category {
  title: string;
  slug: string;
  items: (Item | SubCategory)[];
}

export type DocsNav = Category[];
