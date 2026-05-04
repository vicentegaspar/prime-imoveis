// Single source of truth for the property being advertised.
// Frontend / SEO / Map components all read from here — never hardcode listing
// data inside a component.
//
// ⚠️  The values below are DEMO PLACEHOLDERS so the page renders something
// inspectable while the Frontend Agent works. The Content Agent must replace
// every field with real data before public launch (and swap the external
// placehold.co images for local optimized files in /public/assets/images).

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
  name: 'Apartamento 3 quartos em Pinheiros',
  description:
    'Apartamento amplo, ensolarado e bem localizado, a poucos minutos de estações de metrô, restaurantes e parques. Ideal para família ou home office, com lazer completo no condomínio.',
  rentMonthlyBRL: 4500,
  bedrooms: 3,
  bathrooms: 2,
  parkingSpaces: 1,
  areaSqm: 92,
  address: {
    street: 'Rua Demonstração, 123',
    neighborhood: 'Pinheiros',
    city: 'São Paulo',
    state: 'SP',
    postalCode: '05422-000',
    country: 'BR',
    latitude: -23.5677,
    longitude: -46.6936,
  },
  features: [
    'Sacada com vista',
    'Cozinha planejada',
    'Piscina',
    'Academia',
    'Salão de festas',
    'Pet friendly',
    'Portaria 24h',
  ],
  // Placeholder photos via placehold.co — substitute by /assets/images/*.jpg
  // and switch to <Image /> from astro:assets once Content Agent uploads.
  images: [
    { src: 'https://placehold.co/1600x1067/0f172a/e2e8f0?text=Sala+%231', alt: 'Sala de estar com vista para a sacada' },
    { src: 'https://placehold.co/1600x1067/1e293b/e2e8f0?text=Cozinha', alt: 'Cozinha planejada com bancada' },
    { src: 'https://placehold.co/1600x1067/334155/e2e8f0?text=Quarto', alt: 'Quarto principal com armário embutido' },
    { src: 'https://placehold.co/1600x1067/475569/e2e8f0?text=Banheiro', alt: 'Banheiro suíte com box de vidro' },
    { src: 'https://placehold.co/1600x1067/64748b/f1f5f9?text=Sacada', alt: 'Sacada com vista para o bairro' },
    { src: 'https://placehold.co/1600x1067/94a3b8/0f172a?text=Lazer', alt: 'Área de lazer do condomínio' },
  ],
  contact: {
    phone: '+55 11 99999-9999',
    whatsapp: '5511999999999',
    email: 'contato@primeimoveis.com.br',
  },
};
