import { createClient } from 'next-sanity'

// Configuraremos en un entorno env.local para el despliegue a Vercel
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'demo1234'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Optimización global para llamadas recurrentes.
})
