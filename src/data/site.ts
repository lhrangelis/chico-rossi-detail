export const site = {
  name: 'Chico Rossi Car Detail',
  title: 'Chico Rossi Car Detail — Estética Automotiva em Bariri/SP',
  description:
    'Lavagem, polimento, vitrificação, higienização, vidros e insulfilm em Bariri/SP, com produtos japoneses e aplicação credenciada Soft99 e G’zox.',
  phone: {
    display: '(14) 98103-9693',
    e164: '+5514981039693',
  },
  whatsapp: '5514981039693',
  instagram: {
    handle: '@chicorossi_cardetail',
    url: 'https://www.instagram.com/chicorossi_cardetail/',
  },
  facebook: {
    name: 'Chico Rossi Car Detailing',
    url: 'https://www.facebook.com/chico.rossi.cardetailing',
  },
  address: {
    street: 'R. Francisco Munhoz Cegarra, 655',
    district: 'Jardim Maria Luiza',
    city: 'Bariri',
    state: 'SP',
    zip: '17250-000',
  },
  timeZone: 'America/Sao_Paulo',
};

export const fullAddress = `${site.address.street} - ${site.address.district}, ${site.address.city} - ${site.address.state}, ${site.address.zip}`;

/** Ficha do comércio no Google Maps ("CHICO ROSSI DETAIL"). */
export const mapsPlace = {
  name: 'CHICO ROSSI DETAIL',
  placeId: 'ChIJhb-rpAhLv5QRipy0BJL7DXE',
  /** ID interno da ficha (aparece nas URLs /maps/place/…/data=…!1s<featureId>). */
  featureId: '0x94bf4b08a4abbf85:0x710dfb9204b49c8a',
  lat: -22.0806277,
  lng: -48.7356805,
};

const placeName = encodeURIComponent(mapsPlace.name);
// Mesmo formato do "Compartilhar → Incorporar um mapa" do Google Maps: aponta para a
// ficha do comércio (com o cartão do lugar), não apenas para a rua.
export const mapsEmbedUrl =
  'https://www.google.com/maps/embed?pb=' +
  `!1m18!1m12!1m3!1d600!2d${mapsPlace.lng}!3d${mapsPlace.lat}` +
  '!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1' +
  `!3m3!1m2!1s${encodeURIComponent(mapsPlace.featureId)}!2s${placeName}` +
  '!5e0!3m2!1spt-BR!2sbr!4v1760620000000!5m2!1spt-BR!2sbr';
export const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${placeName}&query_place_id=${mapsPlace.placeId}`;
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${placeName}&destination_place_id=${mapsPlace.placeId}`;

/** Link do WhatsApp com mensagem opcional já preenchida. */
export function wa(text?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/** Mensagem padrão de orçamento para um serviço. */
export function quoteMessage(subject?: string): string {
  return subject
    ? `Olá! Gostaria de um orçamento de ${subject}.`
    : 'Olá! Gostaria de um orçamento.';
}

export interface DayHours {
  /** 0 = domingo … 6 = sábado (igual a Date.getDay()). */
  day: number;
  label: string;
  open: string | null;
  close: string | null;
}

export const hours: DayHours[] = [
  { day: 1, label: 'Segunda-feira', open: '07:00', close: '17:30' },
  { day: 2, label: 'Terça-feira', open: '07:00', close: '17:30' },
  { day: 3, label: 'Quarta-feira', open: '07:00', close: '17:30' },
  { day: 4, label: 'Quinta-feira', open: '07:00', close: '17:30' },
  { day: 5, label: 'Sexta-feira', open: '07:00', close: '17:30' },
  { day: 6, label: 'Sábado', open: '08:00', close: '12:30' },
  { day: 0, label: 'Domingo', open: null, close: null },
];

export const brands = ['Soft99', 'G’zox', 'Prospec', 'Rupes', '3M', 'FSE', 'Glass Pro', 'Magnum', 'SGT'];
