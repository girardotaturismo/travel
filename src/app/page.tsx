import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { festividades, hospedajes, restaurantes } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] md:min-h-[700px] py-20 md:py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary/20">
          <Image
            src="/banners/home.jpg"
            alt="Paisaje de Girardota"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 max-w-4xl mx-auto leading-tight">
            <span className="text-[#a3cf21] drop-shadow-md">Girardota</span> <br className="hidden md:block"/> Territorio Espiritual, Cultural y Naturalmente Encantador.
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto mb-10 font-medium drop-shadow-sm">
            Descubre sus paisajes, recorre sus rutas y déjate sorprender por un territorio que guarda historia, tradición y experiencias por vivir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/experiencias" className="inline-flex items-center justify-center rounded-lg transition-colors bg-[#1cae49] hover:bg-[#1cae49]/90 text-white font-bold text-lg h-14 px-8 shadow-xl">
                Explorar Experiencias
             </Link>
             <Link href="/nosotros" className="inline-flex items-center justify-center rounded-lg transition-colors border bg-white/10 hover:bg-white/20 text-white border-white/40 font-bold text-lg h-14 px-8 backdrop-blur">
                Conoce Nuestro Municipio
             </Link>
          </div>
        </div>
      </section>

      {/* Accesos Rápidos */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-primary">Descubre lo que Girardota tiene para ti.</h2>
            <p className="text-muted-foreground max-w-[700px] text-lg font-medium">
              Experiencias, sabores y lugares que te invitan a quedarte un poco más. ¡Planea tu visita hoy!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/hospedaje" className="group">
              <Card className="overflow-hidden border-0 shadow-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl rounded-2xl">
                <div className="relative h-64 w-full">
                  <Image src="/banners/hospedaje.jpg" alt="Hospedaje" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Hospedaje</h3>
                    <p className="text-white/90 font-medium">Hoteles, Fincas y Glamping</p>
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/gastronomia" className="group">
              <Card className="overflow-hidden border-0 shadow-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl rounded-2xl">
                <div className="relative h-64 w-full bg-primary/20">
                  <Image src="/banners/gastronomia.jpg" alt="Gastronomía" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Gastronomía</h3>
                    <p className="text-white/90 font-medium">Restaurantes y Cafés</p>
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/experiencias" className="group">
              <Card className="overflow-hidden border-0 shadow-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl rounded-2xl">
                <div className="relative h-64 w-full bg-primary/20">
                  <Image src="/banners/experiencias.jpg" alt="Experiencias" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Experiencias</h3>
                    <p className="text-white/90 font-medium">Aventura, Naturaleza y Cultura</p>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Festividades Destacadas */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-primary mb-8 leading-tight">
                Festividades y Eventos
              </h2>
              <p className="text-xl text-foreground/70 mb-10 leading-relaxed font-medium">
                Girardota es un territorio de celebración. Durante todo el año, festividades y encuentros culturales, deportivos y gastronómicos llenan el municipio de alegría, creando espacios para compartir, disfrutar y vivir de cerca nuestras tradiciones.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {festividades.map((fest) => (
                  <li key={fest.name} className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-sm bg-[#a3cf21] text-[#a3cf21]" />
                    <span className="font-semibold text-foreground/80">{fest.name}</span>
                  </li>
                ))}
              </ul>

              <Link href="/festividades" className="inline-flex items-center justify-center rounded-lg transition-colors h-11 bg-[#006738] text-white hover:bg-[#006738]/90 font-bold px-8 shadow-md">
                Ver Calendario Completo
              </Link>
            </div>
            
            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/fiestas.jpg" 
                alt="Festividades Girardota" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-10 left-10">
                <span className="bg-white text-primary font-bold px-4 py-1.5 rounded-full text-sm mb-4 inline-block shadow-sm">Destacado</span>
                <h3 className="text-4xl font-black text-white">Fiestas de la Danza <br/> y el Sainete</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
