"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Instagram, Facebook, Globe, Info, Clock, Map, ExternalLink, ZoomIn } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { ImageLightbox } from "@/components/ui/image-lightbox"
import type { RutaDetail } from "@/lib/data"

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
  detailText?: string
  detailImages?: string[]
  rutaDetail?: RutaDetail
}

export function CommerceCard({
  name,
  subCategory,
  description,
  images,
  whatsapp,
  address,
  instagram,
  facebook,
  website,
  detailText,
  detailImages,
  rutaDetail,
}: CommerceCardProps) {
  // Aseguramos que el link de whatsapp y web estén bien formateados
  const waLink = whatsapp.startsWith('http') ? whatsapp : `https://wa.me/${whatsapp.replace(/\D/g, '')}`
  const galleryPhotos = detailImages && detailImages.length > 0 ? detailImages : images

  // Estado del visor a pantalla completa (Lightbox)
  const [lightboxState, setLightboxState] = React.useState<{
    isOpen: boolean
    images: string[]
    initialIndex: number
    title?: string
  }>({
    isOpen: false,
    images: [],
    initialIndex: 0,
    title: undefined,
  })

  const openLightbox = (imgs: string[], index: number, titleText?: string) => {
    setLightboxState({
      isOpen: true,
      images: imgs,
      initialIndex: index,
      title: titleText,
    })
  }

  const closeLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }))
  }

  return (
    <>
      <Card className="overflow-hidden flex flex-col h-full border-0 shadow-lg group rounded-2xl bg-white">
        <div className="relative w-full aspect-[4/3] bg-muted">
          <Carousel className="w-full h-full" opts={{ loop: true }}>
            <CarouselContent>
              {images.map((img, idx) => (
                <CarouselItem
                  key={idx}
                  className="relative w-full aspect-[4/3] cursor-pointer"
                  onClick={() => openLightbox(images, idx, `${name} - Vista General`)}
                >
                  <Image
                    src={img}
                    alt={`${name} - foto ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                    <span className="p-2 rounded-full bg-black/60 text-white backdrop-blur-xs">
                      <ZoomIn className="w-5 h-5" />
                    </span>
                  </div>
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
          <Badge className="absolute top-4 left-4 z-10 bg-[#166534] hover:bg-[#14532d] text-white border-0 shadow-sm font-bold text-xs uppercase tracking-widest py-1.5 px-3.5 pointer-events-none">
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
          {whatsapp && (
            <Link href={waLink} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full bg-[#166534] hover:bg-[#14532d] text-white font-bold h-12 shadow-md gap-3 text-[15px] rounded-xl transition-all hover:scale-[1.02]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.299-.018-.461.13-.611.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413V1.488z" />
                </svg>
                Reservar o Contactar vía WhatsApp
              </Button>
            </Link>
          )}
          
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

          {/* Otros Enlaces y Botón Ver Más */}
          {(detailText || rutaDetail || facebook || website) && (
            <div className="flex flex-wrap gap-2 w-full mt-1">
              {(detailText || rutaDetail) && (
                <Dialog>
                  <DialogTrigger
                    render={
                      <Button
                        variant="outline"
                        className="inline-flex items-center justify-center h-10 px-4 rounded-lg border-2 border-[#166534]/30 bg-[#166534]/5 text-[#166534] hover:bg-[#166534] hover:text-white shadow-sm flex-1 gap-2 text-[14px] font-bold transition-all cursor-pointer"
                      >
                        <Info className="w-[18px] h-[18px]" />
                        <span>Ver más</span>
                      </Button>
                    }
                  />
                  <DialogContent className="max-w-3xl sm:max-w-4xl p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-2xl">
                    <DialogHeader className="space-y-2.5 pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-[#166534] text-white border-0 font-bold text-xs uppercase tracking-wider py-1 px-3">
                          {subCategory}
                        </Badge>
                      </div>
                      <DialogTitle className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                        {name}
                      </DialogTitle>
                      {address && (
                        <div className="flex items-center gap-2 text-slate-600 text-sm font-semibold">
                          <MapPin className="w-4 h-4 text-[#166534] shrink-0" />
                          <span>{address}</span>
                        </div>
                      )}
                    </DialogHeader>

                    <div className="py-2 space-y-8">
                      {/* Texto descriptivo principal */}
                      {detailText && (
                        <div className="bg-slate-50/90 border-l-4 border-[#166534] p-5 sm:p-6 rounded-r-2xl shadow-xs">
                          <p className="text-slate-700 text-[15px] sm:text-[16.5px] leading-relaxed font-normal">
                            {detailText}
                          </p>
                        </div>
                      )}

                      {/* Galería de Fotografías principales */}
                      {galleryPhotos && galleryPhotos.length > 0 && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-[#166534] flex items-center gap-2">
                              <span>Fotografías y Recorrido</span>
                            </h4>
                            <span className="text-[11px] font-semibold text-slate-400">
                              (Toca para ampliar y deslizar)
                            </span>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                            {galleryPhotos.map((img, idx) => (
                              <div
                                key={idx}
                                onClick={() => openLightbox(galleryPhotos, idx, `${name} - Galería General`)}
                                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 bg-slate-100 group cursor-pointer"
                              >
                                <Image
                                  src={img}
                                  alt={`${name} - foto ${idx + 1}`}
                                  fill
                                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                                  <span className="p-2 rounded-full bg-white/90 text-slate-900 shadow-md">
                                    <ZoomIn className="w-4 h-4" />
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Sección Detallada de la Ruta del Señor Caído */}
                      {rutaDetail && (
                        <div className="pt-6 border-t border-slate-200 space-y-8">
                          {/* Encabezado de la Ruta */}
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-[#166534] text-white flex items-center justify-center font-black text-lg shadow-sm shrink-0">
                              ✝
                            </div>
                            <div>
                              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                                {rutaDetail.routeTitle || "Ruta del Señor Caído Girardota"}
                              </h3>
                              <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">
                                Itinerario y Estaciones Principales
                              </p>
                            </div>
                          </div>

                          {/* Listado de Estaciones */}
                          {rutaDetail.stops && (
                            <div className="space-y-6">
                              {rutaDetail.stops.map((stop) => (
                                <div
                                  key={stop.number}
                                  className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-5 sm:p-6 transition-all hover:border-[#166534]/50 hover:shadow-md"
                                >
                                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-200/70">
                                    <div className="flex items-center gap-3">
                                      <span className="w-8 h-8 rounded-full bg-[#166534] text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs">
                                        {stop.number}
                                      </span>
                                      <h4 className="text-lg sm:text-xl font-extrabold text-slate-900">
                                        {stop.title}
                                      </h4>
                                    </div>
                                    {stop.duration && (
                                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#166534]/10 text-[#166534] text-xs font-bold w-fit">
                                        <Clock className="w-3.5 h-3.5" />
                                        <span>
                                          {stop.duration.startsWith('Tiempo') || stop.duration.startsWith('Depende')
                                            ? stop.duration
                                            : `Tiempo de duración: ${stop.duration}`}
                                        </span>
                                      </div>
                                    )}
                                  </div>

                                  <p className="text-slate-700 text-[14.5px] sm:text-[15.5px] leading-relaxed mb-4">
                                    {stop.description}
                                  </p>

                                  {stop.items && stop.items.length > 0 && (
                                    <div className="mb-4 bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs">
                                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                                        Establecimientos de devoción:
                                      </p>
                                      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                                        {stop.items.map((item, i) => (
                                          <li key={i} className="flex items-center gap-2 text-sm font-bold text-slate-800">
                                            <span className="w-2 h-2 rounded-full bg-[#166534] shrink-0" />
                                            <span>{item}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}

                                  {stop.images && stop.images.length > 0 && (
                                    <div className={`grid gap-3 pt-2 ${
                                      stop.images.length === 1
                                        ? 'grid-cols-1 max-w-md'
                                        : stop.images.length === 2
                                        ? 'grid-cols-1 sm:grid-cols-2'
                                        : 'grid-cols-2 sm:grid-cols-3'
                                    }`}>
                                      {stop.images.map((img, idx) => (
                                        <div
                                          key={idx}
                                          onClick={() => openLightbox(stop.images!, idx, `${stop.number}. ${stop.title}`)}
                                          className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xs border border-slate-200 bg-slate-100 group cursor-pointer"
                                        >
                                          <Image
                                            src={img}
                                            alt={`${stop.title} - foto ${idx + 1}`}
                                            fill
                                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                          />
                                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                                            <span className="p-2 rounded-full bg-white/90 text-slate-900 shadow-md">
                                              <ZoomIn className="w-4 h-4" />
                                            </span>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Banner del Mapa de la Ruta */}
                          {rutaDetail.routeMapUrl && (
                            <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-green-50 border-2 border-[#166534]/30 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                              <div className="flex items-center gap-3.5 text-left w-full sm:w-auto">
                                <div className="w-12 h-12 rounded-2xl bg-[#166534] text-white flex items-center justify-center shrink-0 shadow-md">
                                  <Map className="w-6 h-6" />
                                </div>
                                <div>
                                  <h4 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                                    Mapa Ruta del Señor Caído Girardota
                                  </h4>
                                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                                    Recorre todas las estaciones y lugares sagrados en Google Maps
                                  </p>
                                </div>
                              </div>
                              <Link
                                href={rutaDetail.routeMapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto shrink-0"
                              >
                                <Button className="w-full sm:w-auto bg-[#166534] hover:bg-[#14532d] text-white font-bold h-11 px-5 rounded-xl shadow-md gap-2 text-sm transition-all hover:scale-105 cursor-pointer">
                                  <ExternalLink className="w-4 h-4" />
                                  Abrir Mapa de la Ruta
                                </Button>
                              </Link>
                            </div>
                          )}

                          {/* Otros Lugares de Interés Religioso */}
                          {rutaDetail.otherAttractions && rutaDetail.otherAttractions.length > 0 && (
                            <div className="pt-6 border-t border-slate-200 space-y-4">
                              <div className="flex items-center justify-between">
                                <h4 className="text-lg sm:text-xl font-extrabold text-slate-900">
                                  {rutaDetail.otherAttractionsTitle || "Otros lugares o atractivos claves de la ruta religiosa:"}
                                </h4>
                                <span className="text-[11px] font-semibold text-slate-400">
                                  (Toca para ampliar y deslizar)
                                </span>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {rutaDetail.otherAttractions.map((att, i) => (
                                  <div
                                    key={i}
                                    className="flex items-start gap-3 bg-slate-50/80 p-4 rounded-xl border border-slate-200/80 shadow-xs"
                                  >
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#166534] mt-1.5 shrink-0" />
                                    <div>
                                      <p className="text-sm font-bold text-slate-900 leading-snug">{att.name}</p>
                                      <p className="text-xs font-semibold text-slate-500 mt-0.5">{att.location}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>

                              {rutaDetail.otherAttractionsImages && rutaDetail.otherAttractionsImages.length > 0 && (
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2">
                                  {rutaDetail.otherAttractionsImages.map((img, idx) => (
                                    <div
                                      key={idx}
                                      onClick={() => openLightbox(rutaDetail.otherAttractionsImages!, idx, "Otros atractivos religiosos de Girardota")}
                                      className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xs border border-slate-200 bg-slate-100 group cursor-pointer"
                                    >
                                      <Image
                                        src={img}
                                        alt={`Otros atractivos religiosos - foto ${idx + 1}`}
                                        fill
                                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                      />
                                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <span className="p-2 rounded-full bg-white/90 text-slate-900 shadow-md">
                                          <ZoomIn className="w-4 h-4" />
                                        </span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {rutaDetail.otherAttractionsMapUrl && (
                                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                                  <div className="flex items-center gap-3">
                                    <MapPin className="w-6 h-6 text-[#166534] shrink-0" />
                                    <div>
                                      <h5 className="text-sm sm:text-base font-bold text-slate-900">
                                        Mapa Lugares de Interés Religioso Girardota
                                      </h5>
                                      <p className="text-xs text-slate-500">
                                        Explora todas las capillas e iglesias clave del municipio
                                      </p>
                                    </div>
                                  </div>
                                  <Link
                                    href={rutaDetail.otherAttractionsMapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto shrink-0"
                                  >
                                    <Button
                                      variant="outline"
                                      className="w-full sm:w-auto border-2 border-[#166534] text-[#166534] hover:bg-[#166534] hover:text-white font-bold h-10 px-4 rounded-xl gap-2 text-xs sm:text-sm cursor-pointer"
                                    >
                                      <ExternalLink className="w-4 h-4" />
                                      Ver Mapa en Google Maps
                                    </Button>
                                  </Link>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-100">
                      <DialogClose
                        render={
                          <Button
                            variant="outline"
                            className="w-full sm:w-auto border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-bold h-11 px-6 rounded-xl text-sm cursor-pointer"
                          >
                            Cerrar
                          </Button>
                        }
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              )}

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

      {/* Visor a Pantalla Completa (Lightbox) con Gestos Táctiles */}
      <ImageLightbox
        isOpen={lightboxState.isOpen}
        onClose={closeLightbox}
        images={lightboxState.images}
        initialIndex={lightboxState.initialIndex}
        title={lightboxState.title}
      />
    </>
  )
}
