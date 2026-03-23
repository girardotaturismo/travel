import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Instagram, Facebook, Globe } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export interface CommerceCardProps {
  name: string
  subCategory: string
  description: string
  images: string[] // Array de URLs (hasta 4)
  whatsapp: string
  address?: string
  instagram?: string
  facebook?: string
  website?: string
}

export function CommerceCard({ name, subCategory, description, images, whatsapp, address, instagram, facebook, website }: CommerceCardProps) {
  // Aseguramos que el link de whatsapp y web estén bien formateados
  const waLink = whatsapp.startsWith('http') ? whatsapp : `https://wa.me/${whatsapp.replace(/\D/g, '')}`

  return (
    <Card className="overflow-hidden flex flex-col h-full border-0 shadow-lg group rounded-2xl">
      <div className="relative w-full aspect-[4/3] bg-muted">
        <Carousel className="w-full h-full" opts={{ loop: true }}>
          <CarouselContent>
            {images.map((img, idx) => (
              <CarouselItem key={idx} className="relative w-full aspect-[4/3]">
                <Image
                  src={img}
                  alt={`${name} - foto ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {images.length > 1 && (
            <>
              <CarouselPrevious className="left-3 h-8 w-8 bg-white/90 hover:bg-white text-slate-800 border-0 shadow-md transition-all" />
              <CarouselNext className="right-3 h-8 w-8 bg-white/90 hover:bg-white text-slate-800 border-0 shadow-md transition-all" />
            </>
          )}
        </Carousel>
        <Badge className="absolute top-4 left-4 z-10 bg-[#166534] hover:bg-[#14532d] text-white border-0 shadow-sm font-bold text-xs uppercase tracking-widest py-1.5 px-3.5">
          {subCategory.replace(/glampping/i, 'Glamping')}
        </Badge>
      </div>

      <CardHeader className="p-6 pb-3">
        <h3 className="text-[26px] font-extrabold text-slate-900 tracking-tight leading-tight mb-2">{name}</h3>
        {address && (
          <div className="flex items-start gap-2.5 text-slate-700 mt-1.5">
            <MapPin className="w-[18px] h-[18px] mt-0.5 shrink-0 text-[#166534]" strokeWidth={2.5} />
            <span className="text-[15px] font-semibold leading-tight">{address}</span>
          </div>
        )}
      </CardHeader>
      
      <CardContent className="p-6 pt-0 flex-grow">
        <p className="text-slate-600 text-[15px] leading-relaxed line-clamp-3 mb-2">
          {description}
        </p>
      </CardContent>

      <CardFooter className="p-6 pt-2 border-t border-slate-100 flex flex-col gap-3">
        {/* Enlace Primario WhatsApp */}
        <Link href={waLink} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button className="w-full bg-[#166534] hover:bg-[#14532d] text-white font-bold h-12 shadow-md gap-3 text-[15px] rounded-xl transition-all hover:scale-[1.02]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px]">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.299-.018-.461.13-.611.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413V1.488z" />
            </svg>
            Reservar o Contactar vía WhatsApp
          </Button>
        </Link>
        
        {/* Enlace Secundario Instagram */}
        {instagram && (
          <Link href={instagram.startsWith('http') ? instagram : `https://instagram.com/${instagram.replace('@','')}`} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button variant="outline" className="w-full border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800 font-bold h-12 shadow-sm gap-3 text-[15px] rounded-xl transition-all">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px]">
                <defs>
                  <linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2">
                    <stop offset="0%" stopColor="#f09433"/>
                    <stop offset="25%" stopColor="#e6683c"/>
                    <stop offset="50%" stopColor="#dc2743"/>
                    <stop offset="75%" stopColor="#cc2366"/>
                    <stop offset="100%" stopColor="#bc1888"/>
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#ig-grad)"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="url(#ig-grad)"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="url(#ig-grad)"/>
              </svg>
              Ver Perfil Oficial en Instagram
            </Button>
          </Link>
        )}

        {/* Otros Enlaces */}
        {(facebook || website) && (
          <div className="flex gap-2 w-full mt-1">
            {facebook && (
              <Link href={facebook.startsWith('http') ? facebook : `https://facebook.com/${facebook}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 px-3 rounded-lg border-2 border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 shadow-sm flex-1 gap-2 text-[14px] font-semibold transition-all">
                <Facebook className="w-[18px] h-[18px] text-blue-600" />
                <span>Facebook</span>
              </Link>
            )}
            {website && (
              <Link href={website.startsWith('http') ? website : `https://${website}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 px-3 rounded-lg border-2 border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 shadow-sm flex-1 gap-2 text-[14px] font-semibold transition-all">
                <Globe className="w-[18px] h-[18px]" />
                <span>Sitio Web</span>
              </Link>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
