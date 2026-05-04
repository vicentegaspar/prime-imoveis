// Single source of truth for the property being advertised.
// Subsequent agents (Frontend / SEO / Content) should consume from here only.

export type Property = {
  name: string;
  description: string;
  rentMonthlyBRL: number;
  bedrooms: number;
  bathrooms: number;
  parkingSpaces: number;
  areaSqm: number;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    latitude: number;
    longitude: number;
  };
  features: string[];
  images: { src: string; alt: string }[];
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
  };
};

export const property: Property = {
  name: 'Imóvel Prime — Aluguel',
  description:
    'Imóvel exclusivo para locação. Substitua este conteúdo pelos detalhes reais do imóvel.',
  rentMonthlyBRL: 0,
  bedrooms: 0,
  bathrooms: 0,
  parkingSpaces: 0,
  areaSqm: 0,
  address: {
    street: '',
    neighborhood: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'BR',
    latitude: 0,
    longitude: 0,
  },
  features: [],
  images: [],
  contact: {
    phone: '',
    whatsapp: '',
    email: '',
  },
};
