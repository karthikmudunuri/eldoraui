export interface TocItem {
  title: string;
  url: string;
  items?: TocItem[];
}

export interface TableOfContents {
  items?: TocItem[];
}
