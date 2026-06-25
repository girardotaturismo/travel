import {defineField, defineType} from 'sanity'

export const comercioType = defineType({
  name: 'comercio',
  title: 'Directorio Comercial',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del Establecimiento',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Identificador (Slug)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainCategory',
      title: 'Categoría Principal',
      type: 'string',
      options: {
        list: [
          {title: 'Hospedaje', value: 'Hospedaje'},
          {title: 'Gastronomía', value: 'Gastronomía'},
          {title: 'Experiencias Turísticas', value: 'Experiencias Turísticas'},
          {title: 'Productos Locales', value: 'Productos Locales'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subCategory',
      title: 'Subcategoría',
      type: 'string',
      options: {
        list: [
          {title: 'Hotel', value: 'Hotel'},
          {title: 'Glamping', value: 'Glamping'},
          {title: 'Restaurante', value: 'Restaurante'},
          {title: 'Café', value: 'Café'},
          {title: 'Experiencias de Naturaleza', value: 'Experiencias de Naturaleza'},
          {title: 'Experiencias de Aventura', value: 'Experiencias de Aventura'},
          {title: 'Experiencias de Agroturismo', value: 'Experiencias de Agroturismo'},
          {title: 'Turismo Cultural', value: 'Experiencias de Turismo Cultural'},
          {title: 'Ruta Turística Religiosa', value: 'Ruta Turística Religiosa'},
          {title: 'Ruta Turística Urbana', value: 'Ruta Turística Urbana'},
          {title: 'Productos de nuestros campesinos', value: 'Productos de nuestros campesinos'},
          {title: 'Productos de nuestros artesanos', value: 'Productos de nuestros artesanos'},
          {title: 'Tiendas de artículos religiosos', value: 'Tiendas de artículos religiosos'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción / Reseña (Para la tarjeta)',
      type: 'text',
      validation: (Rule) => Rule.required().max(400),
    }),
    defineField({
      name: 'gallery',
      title: 'Galería de Imágenes (Hasta 4 fotos)',
      description: 'Sube las fotos de alta calidad. Mínimo 1, Máximo 4.',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      validation: (Rule) => Rule.required().min(1).max(4).error('Solo puedes subir entre 1 y 4 fotografías para asegurar la velocidad de carga de la tarjeta.'),
    }),
    defineField({
      name: 'whatsappInfo',
      title: 'Número de WhatsApp',
      description: 'Ejemplo con código internacional: 573001234567',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Dirección Física / Ubicación',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Enlace de Instagram (Opcional)',
      type: 'string',
    }),
    defineField({
      name: 'facebook',
      title: 'Enlace de Facebook (Opcional)',
      type: 'string',
    }),
    defineField({
      name: 'website',
      title: 'Sitio Web (Opcional)',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'subCategory',
      media: 'gallery.0',
    },
  },
})
