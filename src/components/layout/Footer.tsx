import Link from "next/link";
import { navegacion } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#006738] text-white">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="font-black text-2xl tracking-tighter">¡Girardota, <span className="text-[#a3cf21]">Te Queremos!</span></h3>
            <p className="text-sm text-white/80 leading-relaxed max-w-xs">
              Conectando a visitantes y locales con la riqueza cultural, gastronómica, natural y turística del territorio.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Descubre</h4>
            <ul className="space-y-3 text-sm text-white/80">
              {navegacion.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-[#a3cf21] transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Transporte</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link href="/transporte/urbano" className="hover:text-[#a3cf21] transition-colors">Zona Urbana</Link></li>
              <li><Link href="/transporte/rural" className="hover:text-[#a3cf21] transition-colors">Zona Rural</Link></li>
              <li><Link href="/transporte/intermunicipal" className="hover:text-[#a3cf21] transition-colors">Intermunicipal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Atención al Ciudadano</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link href="/faq" className="hover:text-[#a3cf21] transition-colors">Preguntas Frecuentes</Link></li>
              <li><Link href="/emergencias" className="hover:text-[#a3cf21] transition-colors">Contactos de Emergencia</Link></li>
              <li><Link href="/pqrsf" className="hover:text-[#a3cf21] transition-colors">PQRSF</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-white/60">
          <p>© {new Date().getFullYear()} Alcaldía de Girardota. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <Link href="/terminos" className="hover:text-white">Términos y condiciones</Link>
             <Link href="/privacidad" className="hover:text-white">Política de Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
