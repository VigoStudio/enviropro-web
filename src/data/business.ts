/**
 * EnviroPro USA — Datos centralizados del negocio.
 * Toda la web consume desde aquí. NO hardcodear datos en componentes.
 *
 * TODO antes de lanzamiento: confirmar con cliente los campos marcados.
 */

export interface PhoneNumber {
  label: string;
  display: string;        // formato visible: "(305) 992-6186"
  e164: string;           // formato click-to-call: "+13059926186"
  region: 'miami' | 'broward' | 'orlando' | 'tollfree';
  isEmergency: boolean;
}

export interface ServiceArea {
  city: string;
  county: 'Miami-Dade' | 'Broward' | 'Orange';
  slug: string;           // para programmatic SEO fase 2
  isPriority: boolean;
}

export interface BusinessData {
  legalName: string;
  brandName: string;
  tagline: { en: string; es: string };
  foundedYear: number;
  yearsInBusiness: number;
  license: string;        // TODO: confirmar licencia FL real
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    formatted: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  phones: PhoneNumber[];
  email: {
    support: string;      // TODO: confirmar con cliente si es info@ o crear nuevo
    quotes: string;
    emergencies: string;
  };
  hours: {
    emergency: string;    // "24/7"
    office: string;       // "Mon-Fri 8AM-6PM"
  };
  social: {
    facebook: string;
    instagram?: string;   // TODO: confirmar si tienen
    google: string;       // TODO: link real de Google Business Profile
  };
  insurancePartners: string[];  // TODO: lista real del cliente
  certifications: string[];
  serviceAreas: ServiceArea[];
}

export const business: BusinessData = {
  legalName: 'Enviro Pro USA',
  brandName: 'EnviroPro',
  tagline: {
    en: "South Florida's Trusted Restoration Experts — 24/7 Emergency Response",
    es: 'Expertos en Restauración de Confianza en South Florida — Emergencias 24/7',
  },
  foundedYear: 1990, // TODO: confirmar año exacto de fundación
  yearsInBusiness: 36,
  license: 'FL-LICENSE-TODO', // TODO: pedir número de licencia estatal de FL al cliente

  address: {
    street: '14262 SW 140th St',
    city: 'Miami',
    state: 'FL',
    zip: '33186',
    country: 'US',
    formatted: '14262 SW 140th St, Miami, FL 33186',
  },

  geo: {
    latitude: 25.6431,
    longitude: -80.4267,
  },

  phones: [
    {
      label: '24/7 Emergency',
      display: '1-877-216-6653',
      e164: '+18772166653',
      region: 'tollfree',
      isEmergency: true,
    },
    {
      label: 'Miami-Dade',
      display: '(305) 992-6186',
      e164: '+13059926186',
      region: 'miami',
      isEmergency: false,
    },
    {
      label: 'Broward',
      display: '(954) 317-0109',
      e164: '+19543170109',
      region: 'broward',
      isEmergency: false,
    },
    {
      label: 'Orlando',
      display: '(407) 358-6388',
      e164: '+14073586388',
      region: 'orlando',
      isEmergency: false,
    },
  ],

  email: {
    support: 'info@enviropro.net',     // TODO: confirmar email activo con cliente
    quotes: 'quotes@enviropro.net',    // TODO: crear o confirmar
    emergencies: 'emergency@enviropro.net', // TODO: crear o confirmar
  },

  hours: {
    emergency: '24/7 — 365 days a year',
    office: 'Mon-Fri 8:00 AM – 6:00 PM EST',
  },

  social: {
    facebook: 'https://facebook.com/enviroprousa',
    instagram: undefined, // TODO: confirmar si tienen IG
    google: 'https://g.page/enviropro-todo', // TODO: link real de GBP
  },

  insurancePartners: [
    // TODO: lista real del cliente. Placeholders comunes en FL restoration:
    'State Farm',
    'Allstate',
    'Citizens Property Insurance',
    'Universal Property',
    'Tower Hill',
  ],

  certifications: [
    'IICRC Certified',
    'Angie\'s List Certified',
    'ADA Compliant',
    // TODO: confirmar EPA Lead-Safe, OSHA, otras
  ],

  serviceAreas: [
    // Miami-Dade (prioridad)
    { city: 'Miami', county: 'Miami-Dade', slug: 'miami', isPriority: true },
    { city: 'Miami Beach', county: 'Miami-Dade', slug: 'miami-beach', isPriority: true },
    { city: 'Coral Gables', county: 'Miami-Dade', slug: 'coral-gables', isPriority: true },
    { city: 'Pinecrest', county: 'Miami-Dade', slug: 'pinecrest', isPriority: true },
    { city: 'Kendall', county: 'Miami-Dade', slug: 'kendall', isPriority: true },
    { city: 'Doral', county: 'Miami-Dade', slug: 'doral', isPriority: true },
    { city: 'Hialeah', county: 'Miami-Dade', slug: 'hialeah', isPriority: true },
    // Broward
    { city: 'Fort Lauderdale', county: 'Broward', slug: 'fort-lauderdale', isPriority: true },
    { city: 'Hollywood', county: 'Broward', slug: 'hollywood', isPriority: true },
    { city: 'Pembroke Pines', county: 'Broward', slug: 'pembroke-pines', isPriority: true },
  ],
};

// Helpers de uso común
export const emergencyPhone = business.phones.find((p) => p.isEmergency)!;
export const miamiPhone = business.phones.find((p) => p.region === 'miami')!;
export const browardPhone = business.phones.find((p) => p.region === 'broward')!;
export const orlandoPhone = business.phones.find((p) => p.region === 'orlando')!;
