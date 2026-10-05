"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { X, ChevronLeft, ChevronRight, Hand } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ImageLightboxProps {
  isOpen: boolean
  onClose: () => void
  images: string[]
  initialIndex?: number
  title?: string
}

export function ImageLightbox({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
  title,
}: ImageLightboxProps) {
  const [mounted, setMounted] = React.useState(false)
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    startIndex: initialIndex,
    loop: images.length > 1,
    dragFree: false,
    containScroll: "trimSnaps",
  })

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Sincronizar índice inicial al abrir
  React.useEffect(() => {
    if (isOpen && emblaApi) {
      emblaApi.scrollTo(initialIndex, true)
      setCurrentIndex(initialIndex)
    }
  }, [isOpen, initialIndex, emblaApi])

  // Rastrear cambio de imagen en carrusel
  React.useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap())
    }
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  // Manejo de teclado (Escape, Flechas) y bloqueo del scroll
  React.useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation()
        onClose()
      } else if (e.key === "ArrowLeft") {
        e.stopPropagation()
        emblaApi?.scrollPrev()
      } else if (e.key === "ArrowRight") {
        e.stopPropagation()
        emblaApi?.scrollNext()
      }
    }

    document.addEventListener("keydown", handleKeyDown, true)
    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown, true)
      document.body.style.overflow = originalStyle
    }
  }, [isOpen, emblaApi, onClose])

  if (!mounted || !isOpen || images.length === 0) return null

  const lightboxContent = (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[99999] flex flex-col justify-between bg-black/95 backdrop-blur-xl animate-in fade-in duration-200 select-none"
    >
      {/* Barra Superior con Título y Botón Cerrar */}
      <div className="relative z-30 flex items-center justify-between px-4 py-3 sm:px-8 sm:py-5 bg-gradient-to-b from-black/90 via-black/60 to-transparent">
        <div className="flex flex-col text-left pr-4">
          {title && (
            <h3 className="text-white font-black text-base sm:text-xl tracking-tight leading-snug drop-shadow">
              {title}
            </h3>
          )}
          <span className="text-white/80 text-xs sm:text-sm font-semibold mt-0.5">
            Fotografía {currentIndex + 1} de {images.length}
          </span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
          type="button"
          className="flex items-center gap-2 rounded-full px-4 py-2 bg-white/20 hover:bg-red-600/90 text-white font-bold text-sm backdrop-blur-md transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer shadow-xl border border-white/20 shrink-0"
          aria-label="Cerrar visor de imágenes"
        >
          <X className="w-5 h-5" />
          <span className="hidden sm:inline">Cerrar</span>
        </button>
      </div>

      {/* Área Central: Carrusel con Gestos Táctiles */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden px-2 sm:px-14">
        <div ref={emblaRef} className="w-full h-full overflow-hidden flex items-center">
          <div className="flex h-full w-full">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="relative flex-[0_0_100%] min-w-0 h-full flex items-center justify-center p-2 sm:p-4"
              >
                <div className="relative max-h-[72vh] sm:max-h-[78vh] w-full h-full flex items-center justify-center">
                  <Image
                    src={img}
                    alt={`${title || 'Fotografía'} - ${idx + 1}`}
                    fill
                    sizes="100vw"
                    priority={idx === currentIndex}
                    className="object-contain drop-shadow-2xl rounded-2xl pointer-events-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flechas Flotantes para Escritorio */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation()
                emblaApi?.scrollPrev()
              }}
              type="button"
              className="absolute left-3 sm:left-6 z-30 rounded-full p-3.5 bg-white/15 hover:bg-white/35 text-white backdrop-blur-md transition-all hover:scale-110 active:scale-95 focus:outline-none cursor-pointer hidden sm:flex items-center justify-center border border-white/20 shadow-2xl"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                emblaApi?.scrollNext()
              }}
              type="button"
              className="absolute right-3 sm:right-6 z-30 rounded-full p-3.5 bg-white/15 hover:bg-white/35 text-white backdrop-blur-md transition-all hover:scale-110 active:scale-95 focus:outline-none cursor-pointer hidden sm:flex items-center justify-center border border-white/20 shadow-2xl"
              aria-label="Siguiente foto"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </>
        )}
      </div>

      {/* Barra Inferior: Indicador y Mensaje de Deslizar */}
      <div className="relative z-30 flex flex-col items-center gap-3 px-4 py-3 sm:px-8 sm:py-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2 py-2 px-5 bg-white/15 backdrop-blur-md rounded-full text-white text-xs sm:text-sm font-bold border border-white/20 shadow-2xl">
            <Hand className="w-4 h-4 text-[#a3cf21] animate-pulse shrink-0" />
            <span>Desliza con el dedo hacia los lados o usa las flechas</span>
          </div>
        )}

        {/* Mini Puntos Indicadores */}
        {images.length > 1 && (
          <div className="flex items-center gap-1.5 flex-wrap justify-center max-w-sm">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation()
                  emblaApi?.scrollTo(idx)
                }}
                className={cn(
                  "h-2 rounded-full transition-all cursor-pointer",
                  idx === currentIndex
                    ? "w-7 bg-[#a3cf21] shadow-md shadow-[#a3cf21]/50"
                    : "w-2 bg-white/30 hover:bg-white/70"
                )}
                aria-label={`Ir a la foto ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )

  return createPortal(lightboxContent, document.body)
}
