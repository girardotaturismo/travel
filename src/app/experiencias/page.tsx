import { client } from "@/sanity/lib/client"
import { COMERCIOS_QUERY, type ComercioItem } from "@/sanity/lib/queries"
import { CommerceCard } from "@/components/ui/commerce-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { experiencias as fallbackData } from "@/lib/data"

export const revalidate = 60

export default async function ExperienciasPage() {
  let comercios: ComercioItem[] = []
  
  try {
    const rawData = await client.fetch<ComercioItem[]>(COMERCIOS_QUERY)
    comercios = rawData.filter((c) => c.mainCategory === 'Experiencias Turísticas')
  } catch (error) {
    console.error("Sanity fetch failed. Using fallback.", error)
  }

  // Graceful Degradation / Mockups
  const displayData: ComercioItem[] = comercios.length > 0 ? comercios : fallbackData.map((c) => ({
    _id: c.id,
    name: c.name,
    slug: c.id,
    mainCategory: 'Experiencias Turísticas' as const,
    subCategory: c.category,
    description: c.description,
    images: [c.imageUrl],
    whatsappInfo: c.contact || '',
    address: c.address,
    instagram: c.instagram,
    facebook: c.facebook,
    website: c.website,
  }))

  const naturaleza = displayData.filter((c) => c.subCategory === 'Experiencias de Naturaleza')
  const aventura = displayData.filter((c) => c.subCategory === 'Experiencias de Aventura')
  const agroturismo = displayData.filter((c) => c.subCategory === 'Experiencias de Agroturismo')
  const cultural = displayData.filter((c) => c.subCategory === 'Experiencias de Turismo Cultural')
  const religiosa = displayData.filter((c) => c.subCategory === 'Ruta Turística Religiosa')
  const urbana = displayData.filter((c) => c.subCategory === 'Ruta Turística Urbana')

  const renderGrid = (items: typeof displayData) => {
    if (items.length === 0) {
      return (
        <div className="py-20 text-center bg-white/50 rounded-3xl border border-border/50 shadow-sm backdrop-blur-sm mx-4">
          <p className="text-muted-foreground text-xl font-medium">Aún no se han configurado actividades en esta ruta.</p>
        </div>
      )
    }
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-8 px-4 md:px-0">
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
    <div className="min-h-screen pb-24 bg-[#FAFAFA]">
      <section className="bg-primary pt-24 pb-24 rounded-b-[3rem] shadow-xl overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl relative z-10">
          <span className="inline-block py-1 px-4 rounded-full bg-white/20 border border-white/30 text-white font-semibold mb-6 backdrop-blur">
            Circuitos y Experiencias
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">Descubre Tu <br/><span className="text-[#a3cf21]">Aventura Ideal</span></h1>
          <p className="text-xl text-white/90 leading-relaxed font-medium">
            Conecta con el alma de nuestro municipio. Desde rutas culturales y religiosas hasta caminatas por la naturaleza, diseña tu propia experiencia interactiva.
          </p>
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542662565-7e4fd159b923?ixlib=rb-4.0.3')] mix-blend-overlay opacity-20 bg-cover bg-center"></div>
      </section>

      <section className="container mx-auto px-0 md:px-8 -mt-10 relative z-20">
        <Tabs defaultValue="todos" className="w-full">
          <div className="flex justify-start md:justify-center mb-10 w-full overflow-x-auto pb-4 snap-x px-4 md:px-0 scrollbar-hide">
            <TabsList className="h-16 p-1.5 rounded-2xl bg-white border border-border/50 shadow-lg flex-nowrap w-max min-w-max">
              <TabsTrigger value="todos" className="px-5 h-12 rounded-xl text-sm md:text-base font-bold data-[state=active]:bg-primary data-[state=active]:text-white whitespace-nowrap snap-center transition-all">Explorar Todas</TabsTrigger>
              <TabsTrigger value="naturaleza" className="px-5 h-12 rounded-xl text-sm md:text-base font-bold data-[state=active]:bg-primary data-[state=active]:text-white whitespace-nowrap snap-center transition-all">Naturaleza</TabsTrigger>
              <TabsTrigger value="aventura" className="px-5 h-12 rounded-xl text-sm md:text-base font-bold data-[state=active]:bg-primary data-[state=active]:text-white whitespace-nowrap snap-center transition-all">Aventura</TabsTrigger>
              <TabsTrigger value="agroturismo" className="px-5 h-12 rounded-xl text-sm md:text-base font-bold data-[state=active]:bg-primary data-[state=active]:text-white whitespace-nowrap snap-center transition-all">Agroturismo</TabsTrigger>
              <TabsTrigger value="cultural" className="px-5 h-12 rounded-xl text-sm md:text-base font-bold data-[state=active]:bg-primary data-[state=active]:text-white whitespace-nowrap snap-center transition-all">Cultural</TabsTrigger>
              <TabsTrigger value="religiosa" className="px-5 h-12 rounded-xl text-sm md:text-base font-bold data-[state=active]:bg-primary data-[state=active]:text-white whitespace-nowrap snap-center transition-all">Ruta Religiosa</TabsTrigger>
              <TabsTrigger value="urbana" className="px-5 h-12 rounded-xl text-sm md:text-base font-bold data-[state=active]:bg-primary data-[state=active]:text-white whitespace-nowrap snap-center transition-all">Ruta Urbana</TabsTrigger>
            </TabsList>
          </div>

          <div className="w-full">
            <TabsContent value="todos" className="mt-0 outline-none">{renderGrid(displayData)}</TabsContent>
            <TabsContent value="naturaleza" className="mt-0 outline-none">{renderGrid(naturaleza)}</TabsContent>
            <TabsContent value="aventura" className="mt-0 outline-none">{renderGrid(aventura)}</TabsContent>
            <TabsContent value="agroturismo" className="mt-0 outline-none">{renderGrid(agroturismo)}</TabsContent>
            <TabsContent value="cultural" className="mt-0 outline-none">{renderGrid(cultural)}</TabsContent>
            <TabsContent value="religiosa" className="mt-0 outline-none">{renderGrid(religiosa)}</TabsContent>
            <TabsContent value="urbana" className="mt-0 outline-none">{renderGrid(urbana)}</TabsContent>
          </div>
        </Tabs>
      </section>

      {/* Cross-browser scrollbar hiding helper */}
      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />
    </div>
  )
}
