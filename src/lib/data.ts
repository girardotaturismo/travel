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
  address?: string;
  instagram?: string;
  facebook?: string;
  website?: string;
}

export const hospedajes: Entity[] = [
  {
    id: 'hosp-ancestros',
    name: 'Ancestros Ecoparque',
    category: 'Hotel',
    description: 'Alojamiento y gastronomía en medio de la naturaleza. Disfruta una estadía en casas del árbol, domos o casas de cristal con todo el confort. Complementa tu experiencia con nuestro restaurante, que ofrece platos frescos en un entorno natural. Ideal para parejas, familias o escapadas donde descanso y buena comida se unen.',
    imageUrl: '/comercios/ancestros.jpg',
    contact: 'https://wa.me/573186528633',
    address: 'Vereda El Palmar, Girardota, Antioquia.',
    instagram: 'https://instagram.com/ancestrosecoparque'
  },
  {
    id: 'hosp-mountain',
    name: 'Mountain View',
    category: 'Hotel',
    description: 'En Mountain View abrimos nuestras puertas para recibirte como parte de nuestra familia, con espacios llenos de tranquilidad, sabores preparados con amor y experiencias que hacen que cada visita sea inolvidable. Porque los mejores recuerdos no se planean solamente… se viven. Ven y crea tu próxima historia donde la montaña inspira, la mesa reúne y los recuerdos comienzan.',
    imageUrl: '/comercios/mountain-view.jpg',
    contact: 'https://wa.me/573215644422',
    address: 'Mtro 400 Vereda Manga Arriba, Girardota, Antioquia.',
    instagram: 'https://www.instagram.com/mountainviewgirardota?igsh=MWtxYzY1cGsydjA4Zw=='
  },
  {
    id: 'hosp-sky',
    name: 'Sky Natural',
    category: 'Hotel',
    description: 'Es un lugar para descansar, conectar con la naturaleza y vivir experiencias inolvidables. Contamos con día de sol o alojamiento a 30 min de Medellín, con piscinas, turcos toboganes, jacuzzis granja y senderos. Plan completo con almuerzo tipo bufet, carta variada, snack con helado y el mejor ambiente familiar. También tenemos cabañas privadas con jacuzzi.',
    imageUrl: '/comercios/sky-natural.jpg',
    contact: 'https://wa.me/573155307000',
    address: 'A 1.2 km del parque principal, vereda Manga Arriba, Girardota, Antioquia.',
    instagram: 'https://www.instagram.com/reel/DLNLdvZubDd/?igsh=MTl2bDlzcnhodzBvaQ=='
  },
  {
    id: 'hosp-pinos',
    name: 'Entre Los Pinos Glamping',
    category: 'Glamping',
    description: 'Ofrece una experiencia de hospedaje exclusiva en medio de la naturaleza, donde el confort, la privacidad y la tranquilidad se integran con paisajes rodeados de pinos y aire puro. Ideal para el descanso, el romance y la desconexión de la rutina.',
    imageUrl: '/comercios/entre-los-pinos.jpg',
    contact: 'https://wa.me/573013212157',
    address: 'Vereda el Yarumo, Girardota, Antioquia.',
    instagram: 'https://www.instagram.com/entre_lospinosglamping?igsh=MTV6bzhyNDluYXVtZQ=='
  },
  {
    id: 'hosp-benevento',
    name: 'Benevento',
    category: 'Glamping',
    description: 'Benevento es una reserva natural privada cerca de la ciudad, que ofrece estancias y experiencias inmersivas de descanso y bienestar en espacios exclusivos, porque creemos que toda vida necesita pausas para que, curiosa o irónicamente, pueda continuar. Somos un refugio donde naturaleza, diseño y cuidado se encuentran.',
    imageUrl: '/comercios/benevento.jpg',
    contact: 'https://wa.me/573172948977',
    address: 'Vereda La Matica parte baja, Girardota, Antioquia.',
    instagram: 'https://www.instagram.com/benevento.col'
  }
];

export const restaurantes: Entity[] = [
  {
    id: 'gastro-lisa',
    name: 'Truchera Piedra Lisa',
    category: 'Restaurante',
    description: 'Atrévete a vivir una experiencia inolvidable en medio de la naturaleza. Aquí no solo disfrutas una deliciosa trucha, sino que te conviertes en protagonista al pescarla tú mismo. Rodeado de montañas, aire puro y paisajes que enamoran, este es el plan perfecto para desconectarte, compartir y crear recuerdos únicos.',
    imageUrl: '/comercios/truchera-piedra-lisa.jpg',
    contact: 'https://wa.me/573007850160',
    address: 'Vereda El Barro Km 3, Girardota, Antioquia.',
    instagram: 'https://www.instagram.com/trucherapiedralisa?igsh=YzlxNjg2YTl0ZGJ0&utm_source=qr'
  },
  {
    id: 'gastro-meandros',
    name: 'Los Meandros',
    category: 'Restaurante',
    description: 'Mirador restaurante campestre que brinda una experiencia natural, deliciosa y memorable. Nuestra especialidad son los chicharrones con más de 12 presentaciones diferentes, además de parrilla, hamburguesería, picadas, bebidas naturales, licores y coctelería; todos los productos basados en recetas ancestrales y tradicionales de la región antioqueña.',
    imageUrl: '/comercios/los-meandros.jpg',
    contact: 'https://wa.me/573219498060',
    address: 'Vereda La Matica Parte Baja, a medio km de la autopista Norte, Girardota, Antioquia.',
    instagram: 'https://www.instagram.com/los_meandros?igsh=MTZicXR3N29wNWE0OQ=='
  },
  {
    id: 'gastro-campanario',
    name: 'Campanario Encanto Cultural',
    category: 'Restaurante',
    description: 'Campanario Encanto Cultural es una casa de estilo colonial y republicano con más de 250 años de historia construida con materiales propios de la época que aún se conservan. Actualmente, la casa sirve como espacio cultural, artístico y gastronómico buscando impulsar talentos locales y deleitar los paladares con platos auténticos de la cocina nacional e internacional.',
    imageUrl: '/comercios/campanario.jpg',
    contact: 'https://wa.me/573122265485',
    address: 'Calle 7 # 14-35, Frente a la puerta del perdón de la Catedral, Girardota, Antioquia.',
    instagram: 'https://www.instagram.com/campanarioencantocultural?igsh=NG9pdDdmbGliNHFx&utm_source=qr'
  },
  {
    id: 'gastro-chingon',
    name: 'Q´Chingon',
    category: 'Restaurante',
    description: 'En el corazón de Girardota hay un rincón con alma mexicana. Un lugar donde los sabores cuentan historias, donde cada plato es preparado con pasión y cada visita se convierte en un recuerdo. En Q\'Chingón no solo vas a comer. Vas a sentir el calor de una atención cercana, genuina y acogedora, como en casa, pero con el sabor de México.',
    imageUrl: '/comercios/q-chingon.jpg',
    contact: 'https://wa.me/573192832793',
    address: 'calle 10 # 16-10, frente al colegio Emiliano Garcia, Girardota, Antioquia.',
    instagram: 'https://www.instagram.com/q.chingon_?igsh=MTlvdTF5YnRpemJheQ%3D%3D&utm_source=qr'
  },
  {
    id: 'gastro-fresas',
    name: 'Q Fresas',
    category: 'Restaurante',
    description: 'Q\'Fresas nació en Girardota con un sueño: convertir un antojo sencillo en una experiencia inolvidable. Aquí cada visitante puede crear su combinación perfecta de fresas con crema y toppings, disfrutando sabores que despiertan sonrisas y crean recuerdos. Te invitamos a descubrir nuestro famoso Taco Fresa, una propuesta única que mezcla creatividad, sabor y la calidez de nuestra gente.',
    imageUrl: '/comercios/q-fresas.jpg',
    contact: 'https://wa.me/573042880849',
    address: 'carrera 16 # 9-48, frente al colegio Emiliano Garcia, Girardota, Antioquia.',
    instagram: 'https://www.instagram.com/q.fresas_?igsh=aW5lOXljN2c3b3F2'
  },
  {
    id: 'gastro-toros',
    name: 'Toros Café',
    category: 'Café',
    description: 'Toros Café es mucho más que una tienda de café: es un punto de encuentro donde el café de especialidad se vive en cada taza. Disfruta bebidas únicas, comida y un ambiente acogedor para trabajar, compartir con amigos, crear momentos especiales y descubrir la pasión por el buen café. Rutas cafeteras • Coffee truck para eventos • Tienda de café de especialidad.',
    imageUrl: '/comercios/toros-cafe.jpg',
    contact: 'https://wa.me/573236415645',
    address: 'Parque de la poesía, barrio Santa Ana, Girardota, Antioquia.',
    instagram: 'https://www.instagram.com/toros.cafe?igsh=czlkZ2dyaWF1amho'
  },
  {
    id: 'gastro-mokka',
    name: 'Mökka Tienda de Café',
    category: 'Café',
    description: 'En Mökka cada visita es una invitación a detener el tiempo, compartir conversaciones, descubrir el valor del café de especialidad y disfrutar los pequeños momentos que hacen grande la vida. Entre aromas, sabores y experiencias únicas encontrarás métodos manuales, brunch, repostería artesanal, bebidas para todos los gustos y espacios pensados para leer, jugar, conectar y crear recuerdos que permanecerán contigo.',
    imageUrl: '/comercios/mokka.jpg',
    contact: 'https://wa.me/573165545754',
    address: 'Mall Santana, Calle 10 BB #10-09 Local 103, Girardota, Antioquia.',
    instagram: 'https://www.instagram.com/mokka_tiendadecafe?igsh=enF4M2tsc2t0emE2'
  },
  {
    id: 'gastro-gratitud',
    name: 'Café Gratitud',
    category: 'Café',
    description: 'Es un acogedor punto de encuentro donde el café de especialidad, la calidez y la gratitud se unen para brindar una experiencia memorable a residentes y visitantes. Nuestro propósito es compartir un lugar auténtico, agradable y representativo de la hospitalidad de nuestro municipio, cada detalle está diseñado para transmitir tranquilidad, cercanía y bienestar. ¡Aquí no solo servimos un delicioso café, aquí creamos momentos que invitan a volver a Girardota!',
    imageUrl: '/comercios/cafe-gratitud.jpg',
    contact: 'https://wa.me/573162880654',
    address: 'Calle 7 #14-13, al costado de la Catedral de Girardota, Antioquia.',
    instagram: 'https://www.instagram.com/nuestrocafegratitud?igsh=aHEwOHh5eG9memxx&utm_source=qr'
  },
  {
    id: 'gastro-abigail',
    name: 'Abigail’s Coffee',
    category: 'Café',
    description: 'Hay lugares que invitan a quedarse, conversar y disfrutar sin prisa. En Abigail\'s Coffee te esperamos con el aroma de un buen café, un brunch delicioso y un espacio de coworking diseñado para inspirar nuevas ideas, crear grandes proyectos y compartir momentos especiales. Café • Brunch • Coworking',
    imageUrl: '/comercios/abigail-coffee.jpg',
    contact: 'https://wa.me/573127619095',
    address: 'Carrera 14 # 7-90 a una cuadra del parque principal, Girardota, Antioquia.',
    instagram: 'https://www.instagram.com/abigailscoffe?igsh=MW52OXF0M3lvYWFjMg=='
  }
];

export const experiencias: Entity[] = [
  {
    id: 'exp-trekking',
    name: 'Trekking, Cascada y Charco',
    category: 'Experiencias de Naturaleza',
    description: 'Vive una experiencia de aventura y naturaleza entre montañas. Recorre un antiguo camino ancestral que conecta Girardota y Guarne, practica tiro con arco, contempla espectaculares panorámicas del Valle de Aburrá y culmina la jornada con un refrescante baño en cascada y charco natural. Una experiencia perfecta para conectar con el paisaje y la emoción.',
    imageUrl: '/comercios/trekking.jpg',
    contact: 'https://wa.me/573007848944',
    address: 'Veredas El Cano y Jamunidi, Girardota, Antioquia.',
    instagram: 'https://www.instagram.com/charcuzzi?igsh=MXM2YmVpeTUxbDRreg=='
  },
  {
    id: 'exp-charcuzzi',
    name: 'Charcuzzi Recargado',
    category: 'Experiencias de Aventura',
    description: 'Atrévete a vivir la adrenalina del torrentismo en una cascada de 70 metros, rodeada de exuberante fauna y flora. No necesitas experiencia, solo ganas de aventura. Conéctate con la naturaleza, supera tus límites y rompe con la rutina en una experiencia inolvidable en la montaña.',
    imageUrl: '/comercios/charcuzzi.jpg',
    contact: 'https://wa.me/573007848944',
    address: 'Veredas El Cano y Jamunidi, Girardota, Antioquia.',
    instagram: 'https://www.instagram.com/charcuzzi?igsh=MXM2YmVpeTUxbDRreg=='
  },
  {
    id: 'exp-tigre',
    name: 'Cascada El Tigre',
    category: 'Experiencias de Aventura',
    description: 'Vive la emoción del torrentismo en El Tigre, una cascada escondida en LarutanaturaL. Desciende 30 metros con una inclinación de 85°, mientras el agua y la fuerza del bosque te envuelven por completo. No necesitas experiencia para domar El Tigre, solo el deseo de conquistar una aventura inolvidable.',
    imageUrl: '/comercios/cascada-el-tigre.jpg',
    contact: 'https://wa.me/573007848944',
    address: 'Vereda Juan Cojo, Girardota, Antioquia.',
    instagram: 'https://www.instagram.com/charcuzzi?igsh=MXM2YmVpeTUxbDRreg=='
  },
  {
    id: 'exp-reto',
    name: 'El Reto San Antonio',
    category: 'Experiencias de Aventura',
    description: 'Acepta el desafío de descender una de las cascadas más imponentes del Valle de Aburrá. Son 130 metros de adrenalina, rodeados de montaña, senderos naturales y una extraordinaria riqueza en fauna y flora. Una experiencia extrema para aventureros con experiencia en rappel que buscan superar sus propios límites.',
    imageUrl: '/comercios/reto-san-antonio.jpg',
    contact: 'https://wa.me/573007848944',
    address: 'Veredas El Cano y Jamunidi, Girardota, Antioquia.',
    instagram: 'https://www.instagram.com/charcuzzi?igsh=MXM2YmVpeTUxbDRreg=='
  },
  {
    id: 'exp-cuatrimoto',
    name: 'Aventura y Cuatrimoto en medio de la naturaleza',
    category: 'Experiencias de Aventura',
    description: 'Vive la emoción de recorrer la montaña en cuatrimoto y disfrutar actividades como puente tibetano y bici aérea. Una experiencia segura que combina adrenalina, paisajes únicos y conexión con la naturaleza. Ideal para parejas, amigos y grupos que buscan salir de la rutina.',
    imageUrl: '/comercios/cuatrimoto.jpg',
    contact: 'https://wa.me/573186528633',
    address: 'Vereda El Palmar, Girardota, Antioquia.',
    instagram: 'https://instagram.com/ancestrosecoparque'
  },
  {
    id: 'exp-apiario',
    name: 'Fanfanillo Apiario & Farm',
    category: 'Experiencias de Agroturismo',
    description: 'Sube a las colinas de Girardota y déjate sorprender por Fanfanillo: una casona centenaria de tapia, colmenas vivas y la miel más pura del norte del Valle de Aburrá. Un recorrido donde la historia familiar, las abejas y el territorio antioqueño se convierten en una experiencia que no se olvida.',
    imageUrl: '/comercios/fanfanillo-apiario.jpg',
    contact: 'https://wa.me/573006134644',
    address: 'Sector Los Martínez N° 29 (Vía Madre Laura), Vereda Juan Cojo, Girardota, Antioquia',
    instagram: 'https://www.instagram.com/fanfanillo?igsh=ajRjaXd1c3dvbjVr'
  },
  {
    id: 'exp-fique',
    name: 'Ruta del fique ancestral que conecta cultura y tradición',
    category: 'Experiencias de Turismo Cultural',
    description: 'Conoce el proceso del fique, una fibra natural con gran valor cultural. Apoya el trabajo de artesanas locales y descubre productos únicos hechos a mano. Una experiencia que conecta con la tradición de nuestro campo.',
    imageUrl: '/comercios/fique-ancestral.jpg',
    contact: 'https://wa.me/573186528633',
    address: 'Vereda El Palmar, Girardota, Antioquia.',
    instagram: 'https://instagram.com/ancestrosecoparque'
  },
  {
    id: 'exp-sainete',
    name: 'Parque Vivo el Sainete',
    category: 'Experiencias de Turismo Cultural',
    description: 'Vive una experiencia auténtica en Parque Vivo El Sainete, donde la tradición, la cultura campesina y la diversión se unen en un entorno natural único. Disfruta actividades recreativas, espectáculos típicos y momentos inolvidables en familia, conectando con las raíces y el patrimonio de Antioquia.',
    imageUrl: '/comercios/parque-sainete.jpg',
    contact: 'https://wa.me/573046477623',
    address: 'Vereda San Andres, Girardota, Antioquia.'
  },
  {
    id: 'exp-religiosa',
    name: 'Ruta Religiosa El Señor Caído',
    category: 'Ruta Turística Religiosa',
    description: 'Explora la devoción y arquitectura del santuario de Girardota recorriendo sus emblemáticas estaciones y participando del fervor colectivo.',
    imageUrl: '/comercios/ruta-religiosa.jpg',
    contact: 'https://wa.me/573000000000',
    address: 'Santuario del Señor Caído, Centro',
    website: 'www.girardota.gov.co'
  },
  {
    id: 'exp-urbana',
    name: 'Descubre la esencia urbana de Girardota',
    category: 'Ruta Turística Urbana',
    description: 'Descubre la esencia cultural y tradicional de Girardota a través de un recorrido por sus lugares más emblemáticos. Realiza la ruta urbana y visita la Catedral Nuestra Señora del Rosario y el Santuario del Señor Caído, la Biblioteca Municipal Alberto Aguirre, la Casa de la Cultura Pedrito Ruiz y el inspirador Parque de la Poesía.',
    imageUrl: '/comercios/ruta-urbana.jpg',
    contact: 'https://wa.me/573000000000',
    address: 'Zona Urbana, Girardota, Antioquia.'
  }
];

export const productosLocales: Entity[] = [
  {
    id: 'prod-fanfanillo',
    name: 'Productos de la colmena Fanfanillo',
    category: 'Productos de nuestros campesinos',
    description: 'Fanfanillo ofrece productos apícolas elaborados con altos estándares de calidad y los beneficios naturales de las abejas. Descubre su miel pura, polen nutritivo, bálsamo hidratante y crema hidratante, ideales para fortalecer el bienestar, cuidar la piel y disfrutar las propiedades que la naturaleza brinda para la salud y el cuidado personal.',
    imageUrl: '/comercios/fanfanillo-productos.jpg',
    contact: 'https://wa.me/573006134644',
    instagram: 'https://www.instagram.com/fanfanillo?igsh=ajRjaXd1c3dvbjVr'
  },
  {
    id: 'prod-fique',
    name: 'Productos de Fique Asociación Mujeres',
    category: 'Productos de nuestros artesanos',
    description: 'Productos y accesorios de alta calidad elaborados a mano en fibra de fique por la Asociación de Mujeres de Girardota, preservando las técnicas de tejido ancestrales y apoyando el desarrollo del campo.',
    imageUrl: '/comercios/fique-productos.jpg',
    contact: 'https://wa.me/573186528633',
    address: 'Vereda El Palmar, Girardota, Antioquia.',
    instagram: 'https://instagram.com/ancestrosecoparque'
  }
];

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

export interface Festividad {
  name: string;
  description: string;
}
