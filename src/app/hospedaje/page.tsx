import { client } from "@/sanity/lib/client"
import { COMERCIOS_QUERY, type ComercioItem } from "@/sanity/lib/queries"
import { CommerceCard } from "@/components/ui/commerce-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { hospedajes as fallbackData } from "@/lib/data"

export const revalidate = 60 // ISR revalidator 60s (Static Regeneration)

export default async function HospedajePage() {
  let comercios: ComercioItem[] = []
  
  try {
    const rawData = await client.fetch<ComercioItem[]>(COMERCIOS_QUERY)
    comercios = rawData.filter((c) => c.mainCategory === 'Hospedaje')
  } catch (error) {
    console.error("Sanity fetch failed. Using fallback.", error)
  }

  // Graceful degradation: si Sanity no está configurado (demo), mostramos el mock.
  const displayData: ComercioItem[] = comercios.length > 0 ? comercios : fallbackData.map((c, i) => ({
    _id: c.id,
    name: c.name,
    slug: c.id,
    mainCategory: 'Hospedaje' as const,
    subCategory: c.category,
    description: c.description,
    images: [c.imageUrl, c.imageUrl, c.imageUrl], // Simulamos un carrousel duplicando la foto.
    whatsappInfo: c.contact || '',
    address: c.address,
    instagram: c.instagram,
    facebook: c.facebook,
    website: c.website,
  }))

  const hoteles = displayData.filter((c) => c.subCategory === 'Hotel')
  const glamping = displayData.filter((c) => c.subCategory === 'Glamping')

  const renderGrid = (items: typeof displayData) => {
    if (items.length === 0) {
      return (
        <div className="py-20 text-center bg-white rounded-3xl border shadow-sm">
          <p className="text-muted-foreground text-xl font-medium">Aún no hay establecimientos en esta subcategoría.</p>
        </div>
      )
    }
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-8">
        {items.map(item => (
          <CommerceCard
            key={item._id}
            name={item.name}
            subCategory={item.subCategory}
            description={item.description}
            images={item.images && item.images.length > 0 ? item.images.slice(0, 4) : ["/placeholder.jpg"]}
            whatsapp={item.whatsappInfo}
            address={item.address}
            instagram={item.instagram}
            facebook={item.facebook}
            website={item.website}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen pb-24 bg-muted/20">
      <section className="bg-primary pt-24 pb-20 rounded-b-[3rem] shadow-xl overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl relative z-10">
          <span className="inline-block py-1 px-4 rounded-full bg-white/20 border border-white/30 text-white font-semibold mb-6 backdrop-blur">
            Directorio Oficial
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">Hospedaje en <span className="text-[#a3cf21]">Girardota</span></h1>
          <p className="text-xl text-white/90 leading-relaxed font-medium">
            Descansa y desconecta en medio de la naturaleza o en el corazón del pueblo. Desde Hoteles cómodos hasta Glampings exclusivos.
          </p>
        </div>
        <div className="absolute inset-0 bg-[url('/banners/hospedaje.jpg')] mix-blend-overlay opacity-10 bg-cover bg-center"></div>
      </section>

      <section className="container mx-auto px-4 md:px-8 -mt-8 relative z-20">
        <Tabs defaultValue="todos" className="w-full">
          <div className="flex justify-center mb-10 w-full overflow-x-auto">
            <TabsList className="h-16 p-1.5 rounded-2xl bg-white border border-border/50 shadow-lg">
              <TabsTrigger value="todos" className="px-6 h-12 rounded-xl text-base font-bold data-[state=active]:bg-primary data-[state=active]:text-white">Explorar Todos</TabsTrigger>
              <TabsTrigger value="hoteles" className="px-6 h-12 rounded-xl text-base font-bold data-[state=active]:bg-primary data-[state=active]:text-white">Hoteles</TabsTrigger>
              <TabsTrigger value="glamping" className="px-6 h-12 rounded-xl text-base font-bold data-[state=active]:bg-primary data-[state=active]:text-white">Glamping</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="todos" className="mt-0 outline-none">{renderGrid(displayData)}</TabsContent>
          <TabsContent value="hoteles" className="mt-0 outline-none">{renderGrid(hoteles)}</TabsContent>
          <TabsContent value="glamping" className="mt-0 outline-none">{renderGrid(glamping)}</TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
