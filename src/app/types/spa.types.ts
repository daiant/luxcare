export interface Product {
  title: string;
  items: Serie[];
}
export interface Serie {
  title: string;
  subtitle: string;
  description: string;
  url: string;
  img: string;
  items: Spa[]
}
export interface Spa {
  title: string;
  subtitle: string;
  url: string;
  img: string;
  summary: SpaSummary[];
}
export type SpaSummary = string;
