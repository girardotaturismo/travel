import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Info, Leaf } from "lucide-react";

export const metadata = {
  title: "Nosotros | Girardota Travel",
  description: "Conoce más sobre Girardota, un municipio lleno de historia, tradición y naturaleza. Encuentra nuestro punto de información turística y canales de contacto.",
};

export default function Nosotros() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#006738]/90">
          <Image
            src="/banners/nosotros.jpg"
            alt="Paisaje Verde Girardota"
            fill
            sizes="100vw"
            className="object-cover mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white mt-10">
          <span className="inline-block py-1 px-4 rounded-full bg-white/20 border border-white/30 text-sm font-semibold mb-6 backdrop-blur-md shadow-sm">
            Sobre el Portal Turístico
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 drop-shadow-lg">
            Nosotros
          </h1>
          <div className="text-lg md:text-xl text-white/95 max-w-4xl mx-auto font-medium leading-relaxed drop-shadow-md space-y-4">
            <p>
              Girardota es un destino que se construye desde su historia, sus tradiciones y la calidez de su gente.
            </p>
            <p>
              Este portal es un punto de encuentro para descubrir el municipio a través de su cultura, su gastronomía y sus experiencias, reuniendo en un solo lugar aquello que hace especial al territorio.
            </p>
            <p>
              Más que una guía, es una invitación a recorrer Girardota, a conectar con sus paisajes y a reconocer a quienes, con su trabajo y pasión, hacen del turismo una experiencia auténtica y cercana.
            </p>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Nuestro Municipio */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="w-16 h-16 bg-[#1cae49]/10 rounded-2xl flex items-center justify-center mb-8">
                <Leaf className="w-8 h-8 text-[#1cae49]" />
              </div>
              <h3 className="text-[26px] font-extrabold text-slate-900 mb-4 tracking-tight">Nuestro municipio</h3>
              <div className="text-slate-600 leading-relaxed font-medium text-[16px] space-y-4">
                <p>
                  Girardota, en el norte del Valle de Aburrá, es un territorio donde la fe, la naturaleza y la tradición se entrelazan para dar vida a experiencias auténticas.
                </p>
                <p>
                  Rodeado de montañas y atravesado por paisajes que invitan a detenerse, este municipio guarda una riqueza natural que se complementa con su profundo arraigo cultural y religioso.
                </p>
                <p>
                  Sus caminos, sus encuentros y sus espacios patrimoniales cuentan historias que se mantienen vivas en el tiempo, reflejando la identidad de una comunidad que honra sus raíces y comparte con orgullo lo que es.
                </p>
              </div>
            </div>

            {/* Punto de Información */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="w-16 h-16 bg-[#006738]/10 rounded-2xl flex items-center justify-center mb-8">
                <Info className="w-8 h-8 text-[#006738]" />
              </div>
              <h3 className="text-[26px] font-extrabold text-slate-900 mb-4 tracking-tight">Punto de Información Turística</h3>
              <p className="text-slate-600 leading-relaxed font-medium mb-6 text-[16px]">
                Un espacio pensado para acompañarte en tu recorrido. Aquí podrás encontrar orientación, mapas, guías y recomendaciones que te ayudarán a descubrir lo mejor de Girardota y vivir una experiencia a tu medida.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <MapPin className="w-6 h-6 text-[#166534] shrink-0" strokeWidth={2.5} />
                  <div>
                    <p className="text-[13px] font-bold text-slate-500 uppercase tracking-widest mb-1">Ubicación</p>
                    <span className="font-semibold text-[15px]">Parque Principal de Girardota</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <Clock className="w-6 h-6 text-[#166534] shrink-0" strokeWidth={2.5} />
                  <div>
                     <p className="text-[13px] font-bold text-slate-500 uppercase tracking-widest mb-1">Horarios de Atención</p>
                     <span className="font-semibold text-[15px] block">Martes a Viernes: 10:00 a.m. - 4:00 p.m.</span>
                     <span className="font-semibold text-[15px] block">Sábado y Domingos: 10:00 AM - 3:00 PM</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contáctenos */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="w-16 h-16 bg-emerald-600/10 rounded-2xl flex items-center justify-center mb-8">
                <Phone className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-[26px] font-extrabold text-slate-900 mb-4 tracking-tight">Contáctenos</h3>
              <p className="text-slate-600 leading-relaxed font-medium mb-8 text-[16px]">
                ¿Tienes dudas, sugerencias o representas a un comercio local y quieres sumarte a este portal? Queremos escucharte y trabajar de la mano.
              </p>
              <div className="space-y-4">
                <a href="tel:+5760440536" className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 hover:bg-[#166534]/5 text-slate-700 hover:text-[#166534] transition-colors border border-slate-100 hover:border-[#166534]/20 group">
                  <Phone className="w-6 h-6 text-slate-400 group-hover:text-[#166534] transition-colors" strokeWidth={2.5} />
                  <div>
                    <p className="text-[13px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Línea de Atención</p>
                    <p className="font-bold text-[16px]">(604) 405 3636</p>
                  </div>
                </a>
                <a href="mailto:turismo@girardota.gov.co" className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 hover:bg-[#166534]/5 text-slate-700 hover:text-[#166534] transition-colors border border-slate-100 hover:border-[#166534]/20 group">
                  <Mail className="w-6 h-6 text-slate-400 group-hover:text-[#166534] transition-colors" strokeWidth={2.5} />
                  <div>
                    <p className="text-[13px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Correo Electrónico</p>
                    <p className="font-bold text-[16px]">turismo@girardota.gov.co</p>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
