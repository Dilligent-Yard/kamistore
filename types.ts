export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  protocol: 'spotify' | 'tinder' | 'access_key' | 'xbox' | 'youtube';
}
