import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schema} from './src/sanity/schemaTypes'

// Las variables pueden configurarse después en .env.local 
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'demo1234'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  title: 'Admin Alcaldía Panel',
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool(),
  ],
})
