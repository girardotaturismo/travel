export type CategoriaHospedaje = 'Hoteles' | 'Glamping';
export type CategoriaGastronomia = 'Restaurantes' | 'Cafés';
export type CategoriaExperiencia =
  | 'Naturaleza'
  | 'Aventura'
  | 'Agroturismo'
  | 'Turismo Cultural'
  | 'Ruta Religiosa'
  | 'Ruta Urbana';

export interface Entity {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  contact?: string; // WhatsApp link o telefono
}

export const hospedajes: Entity[] = [
  {
    id: 'hospedaje-1',
    name: 'Hotel Plaza Girardota',
    category: 'Hoteles',
    description: 'Cómodo hotel en el parque principal, ideal para descansar cerca a todo el comercio y transporte.',
    imageUrl: 'https://images.unsplash.com/photo-1542314831-c6a4d27ce6a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    contact: 'https://wa.me/573000000000'
  },
  {
    id: 'hospedaje-2',
    name: 'El Gran Glamping',
    category: 'Glamping',
    description: 'Experiencia exclusiva rodeada de naturaleza para desconectar de la ciudad y observar el cielo nocturno.',
    imageUrl: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    contact: 'https://wa.me/573110000000'
  }
];

export const restaurantes: Entity[] = [
  {
    id: 'gastro-1',
    name: 'Café de la Plaza',
    category: 'Cafés',
    description: 'El mejor café de origen de nuestro municipio, acompañado de repostería local elaborada por emprendedores.',
    imageUrl: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    contact: 'https://wa.me/573220000000'
  }
];

export const productosLocales: Entity[] = [
  {
    id: 'prod-1',
    name: 'Asociación de Campesinos de Girardota',
    category: 'Productos de nuestros campesinos',
    description: 'Frutas frescas, hortalizas orgánicas y café de origen cultivado con amor en las veredas de nuestro municipio.',
    imageUrl: 'https://images.unsplash.com/photo-1488459718432-010c58d2e405?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    contact: 'https://wa.me/573000000000'
  },
  {
    id: 'prod-2',
    name: 'Artesanías en Totumo y Madera',
    category: 'Productos de nuestros artesanos',
    description: 'Piezas únicas talladas a mano por artesanos locales, perfectas para llevar un recuerdo auténtico de Girardota.',
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    contact: 'https://wa.me/573000000000'
  },
  {
    id: 'prod-3',
    name: 'Artículos Religiosos El Santuario',
    category: 'Tiendas de artículos religiosos',
    description: 'Imágenes del Señor Caído, rosarios, velas y recordatorios religiosos ubicados a pocos pasos del templo principal.',
    imageUrl: 'https://images.unsplash.com/photo-1601134991666-d9dd1585243d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    contact: 'https://wa.me/573000000000'
  }
];

export const festividades = [
  'Fiestas Del Señor Caído',
  'Semana Santa',
  'Que Delicia Girardota',
  'Gira La Lectura',
  'Festival Del Aire',
  'Semana de la Juventud',
  'Feria del Chicharrón',
  'Fiestas de la Danza y el Sainete'
];

export const navegacion = [
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Hospedaje', href: '/hospedaje' },
  { label: 'Gastronomía', href: '/gastronomia' },
  { label: 'Experiencias', href: '/experiencias' },
  { label: 'Productos Locales', href: '/productos-locales' },
  { label: 'Festividades', href: '/festividades' },
];
