import Image from "next/image";
import { CalendarDays, Music } from "lucide-react";
import { festividades } from "@/lib/data";

export const metadata = {
  title: "Festividades y Eventos | Girardota Travel",
  description: "Conoce el calendario completo de festividades, encuentros culturales, deportivos y gastronómicos que llenan de vida a Girardota durante todo el año.",
};

export default function Festividades() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#006738]/90">
          <Image
            src="/banners/festividades.jpg"
            alt="Festividades Girardota"
            fill
            sizes="100vw"
            className="object-cover mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white mt-10">
           <span className="inline-block py-1 px-4 rounded-full bg-white/20 border border-white/30 text-sm font-semibold mb-6 backdrop-blur-md shadow-sm">
            Cultura y Tradición
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 drop-shadow-lg">
            Festividades y Eventos
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md">
            Girardota es un territorio de celebración. Durante el año, diferentes festividades, encuentros culturales, deportivos y gastronómicos llenan de vida al municipio, invitando a propios y visitantes a compartir y disfrutar de nuestras tradiciones.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {festividades.map((fest, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 flex items-start gap-6 transition-all hover:-translate-y-1 hover:shadow-xl group">
                <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center shrink-0">
                  <CalendarDays className="w-7 h-7 text-amber-500 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{fest.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {fest.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-[#1cae49]/10 rounded-3xl p-10 border border-[#1cae49]/20 text-center">
             <Music className="w-12 h-12 text-[#1cae49] mx-auto mb-6" />
             <h2 className="text-2xl font-black text-slate-900 mb-4">¡Agéndate con nosotros!</h2>
             <p className="text-slate-700 max-w-2xl mx-auto font-medium">
               Mantente atento a las redes oficiales del municipio o contáctanos en el Punto de Información Turística para conocer las fechas exactas de celebración de cada una de estas festividades durante el año en curso.
             </p>
          </div>
        </div>
      </section>
    </div>
  );
}
