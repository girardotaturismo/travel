import { groq } from 'next-sanity'

// Obtiene todos los comercios validando la galería (asegurando el formato GROQ)
export const COMERCIOS_QUERY = groq`*[_type == "comercio"] | order(name asc) {
  _id,
  name,
  "slug": slug.current,
  mainCategory,
  subCategory,
  description,
  "images": gallery[].asset->url,
  whatsappInfo,
  address,
  instagram,
  facebook,
  website
}`

import type { RutaDetail } from "@/lib/data"

export type ComercioItem = {
  _id: string;
  name: string;
  slug: string;
  mainCategory: string;
  subCategory: string;
  description: string;
  images: string[] | null;
  whatsappInfo: string;
  address?: string;
  instagram?: string;
  facebook?: string;
  website?: string;
  detailText?: string;
  detailImages?: string[];
  rutaDetail?: RutaDetail;
}
