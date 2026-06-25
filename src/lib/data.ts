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

export interface Festividad {
  name: string;
  description: string;
}

export const festividades: Festividad[] = [
  {
    name: 'Fiestas Del Señor Caído',
    description: 'Una de las celebraciones religiosas más importantes de Girardota y de Antioquia. Cada año, durante el mes de enero, miles de peregrinos y devotos llegan al municipio para rendir homenaje a la imagen del Señor Caído, considerada un símbolo de fe y esperanza. La programación incluye actos litúrgicos, procesiones y espacios de encuentro comunitario, convirtiendo a Girardota en un destino de turismo religioso de gran relevancia regional.'
  },
  {
    name: 'Semana Santa',
    description: 'Generalmente se realiza en el mes de marzo o abril. Sus solemnes procesiones, celebraciones eucarísticas y representaciones de la pasión, muerte y resurrección de Jesucristo congregan a habitantes y visitantes en un ambiente de reflexión y espiritualidad. Es una de las épocas más representativas para conocer el patrimonio religioso y cultural del municipio.'
  },
  {
    name: 'Qué Delicia Girardota',
    description: 'Festival gastronómico que exalta la creatividad culinaria y el talento de los emprendedores locales. Durante 10 días, entre finales de junio y comienzos de julio, restaurantes y establecimientos participantes presentan propuestas especiales que invitan a recorrer los sabores del municipio. Además de impulsar la economía local, el evento fortalece a Girardota como un destino gastronómico del norte del Valle de Aburrá.'
  },
  {
    name: 'Gira La Lectura',
    description: 'Una fiesta cultural que se realiza en el mes de agosto y se dedicada a promover la lectura, la escritura y el conocimiento. A través de encuentros con autores, talleres, exposiciones, actividades artísticas y espacios de formación, este evento acerca los libros a toda la comunidad. Es un escenario que fomenta la imaginación, el aprendizaje y el acceso a la cultura para personas de todas las edades.'
  },
  {
    name: 'Festival del Aire',
    description: 'Evento que llena el cielo de color y creatividad, que durante el mes de agosto, reune a familias, aficionados y visitantes alrededor del vuelo de cometas y otras actividades recreativas. Este festival promueve el encuentro comunitario, el disfrute de los espacios abiertos y el fortalecimiento de las tradiciones familiares en un ambiente de alegría y convivencia.'
  },
  {
    name: 'Semana de la Juventud',
    description: 'Celebración que reconoce el talento, la creatividad y el liderazgo de los jóvenes girardotanos. Durante varios días se desarrollan actividades deportivas, culturales, artísticas, recreativas y académicas que promueven la participación juvenil y la construcción de espacios para el desarrollo integral de las nuevas generaciones.'
  },
  {
    name: 'Feria del Chicharrón',
    description: 'Uno de los eventos gastronómicos más esperados del municipio en el mes de agosto. La feria reúne a emprendedores y amantes de la cocina tradicional alrededor de uno de los sabores más representativos de la cultura antioqueña. Además de las propuestas gastronómica que tienen como ingrediente principal el chicharrón y todo el concurso para premiar las mejores recetas, los asistentes disfrutan de muestras culturales, música en vivo y actividades para toda la familia.'
  },
  {
    name: 'Fiestas de la Danza y el Sainete',
    description: 'Celebración que rinde homenaje a las expresiones artísticas y folclóricas que hacen parte de la identidad cultural de Girardota. La programación incluye presentaciones de danza, comparsas, música tradicional y sainetes, una manifestación teatral popular cargada de humor y tradición. Estas fiestas destacan el talento local y contribuyen a preservar el patrimonio cultural del municipio.'
  }
];

export const navegacion = [
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Hospedaje', href: '/hospedaje' },
  { label: 'Gastronomía', href: '/gastronomia' },
  { label: 'Experiencias', href: '/experiencias' },
  { label: 'Productos Locales', href: '/productos-locales' },
  { label: 'Festividades', href: '/festividades' },
];
