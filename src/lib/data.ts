export type CategoriaHospedaje = 'Hoteles' | 'Fincas' | 'Glamping';
export type CategoriaGastronomia = 'Restaurantes' | 'Cafés';
export type CategoriaExperiencia =
  | 'Naturaleza'
  | 'Aventura'
  | 'Agroturismo'
  | 'Turismo Cultural'
  | 'Gastronómicas'
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
  { label: 'Festividades', href: '/festividades' },
];
