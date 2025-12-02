export type Language = 'ja' | 'en' | 'pt';

export interface LocalizedString {
  ja: string;
  en: string;
  pt: string;
}

export interface Product {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  price: number;
  protocol: 'spotify' | 'tinder' | 'access_key' | 'xbox';
}

export interface TranslationMap {
  [key: string]: LocalizedString;
}

