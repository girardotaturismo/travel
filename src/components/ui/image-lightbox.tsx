"use client"

import * as React from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { X, ChevronLeft, ChevronRight, Hand, ZoomIn } from "lucide-react"
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
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    startIndex: initialIndex,
    loop: images.length > 1,
    dragFree: false,
    containScroll: "trimSnaps",
  })

  // Sync initial index when opened
  React.useEffect(() => {
    if (isOpen && emblaApi) {
      emblaApi.scrollTo(initialIndex, true)
      setCurrentIndex(initialIndex)
    }
  }, [isOpen, initialIndex, emblaApi])

  // Track slide change
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

  // Keyboard navigation & lock body scroll
  React.useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        emblaApi?.scrollPrev()
      } else if (e.key === "ArrowRight") {
        emblaApi?.scrollNext()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = originalStyle
    }
  }, [isOpen, emblaApi, onClose])

  if (!isOpen || images.length === 0) return null

  return (
    <div className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 backdrop-blur-xl animate-in fade-in duration-200 select-none">
      {/* Barra Superior */}
      <div className="relative z-20 flex items-center justify-between p-4 sm:p-6 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex flex-col text-left">
          {title && (
            <h3 className="text-white font-bold text-base sm:text-lg tracking-tight">
              {title}
            </h3>
          )}
          <span className="text-white/70 text-xs sm:text-sm font-semibold">
            Fotografía {currentIndex + 1} de {images.length}
          </span>
        </div>

        <button
          onClick={onClose}
          type="button"
          className="rounded-full p-2.5 bg-white/10 hover:bg-white/25 text-white transition-all hover:scale-110 focus:outline-none cursor-pointer"
          aria-label="Cerrar visor de imágenes"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Área Central: Carrusel con Gestos Táctiles */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden px-2 sm:px-12">
        <div ref={emblaRef} className="w-full h-full overflow-hidden flex items-center">
          <div className="flex h-full w-full">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="relative flex-[0_0_100%] min-w-0 h-full flex items-center justify-center p-2 sm:p-6"
              >
                <div className="relative max-h-[72vh] sm:max-h-[78vh] w-full h-full flex items-center justify-center">
                  <Image
                    src={img}
                    alt={`${title || 'Fotografía'} - ${idx + 1}`}
                    fill
                    sizes="100vw"
                    priority={idx === currentIndex}
                    className="object-contain drop-shadow-2xl rounded-lg pointer-events-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flechas Flotantes (Visibles si hay más de 1 foto) */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => emblaApi?.scrollPrev()}
              type="button"
              className="absolute left-3 sm:left-6 z-20 rounded-full p-3 bg-white/15 hover:bg-white/30 text-white backdrop-blur-md transition-all hover:scale-110 focus:outline-none cursor-pointer hidden sm:flex items-center justify-center"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            <button
              onClick={() => emblaApi?.scrollNext()}
              type="button"
              className="absolute right-3 sm:right-6 z-20 rounded-full p-3 bg-white/15 hover:bg-white/30 text-white backdrop-blur-md transition-all hover:scale-110 focus:outline-none cursor-pointer hidden sm:flex items-center justify-center"
              aria-label="Siguiente foto"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </>
        )}
      </div>

      {/* Barra Inferior: Indicador y Mensaje de Deslizar */}
      <div className="relative z-20 flex flex-col items-center gap-3 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2 py-2 px-4.5 bg-white/15 backdrop-blur-md rounded-full text-white/95 text-xs sm:text-sm font-semibold border border-white/20 shadow-xl">
            <Hand className="w-4 h-4 text-[#a3cf21] animate-pulse shrink-0" />
            <span>Desliza con el dedo hacia los lados o usa las flechas</span>
          </div>
        )}

        {/* Mini Puntos Indicadores */}
        {images.length > 1 && (
          <div className="flex items-center gap-1.5 flex-wrap justify-center max-w-xs">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => emblaApi?.scrollTo(idx)}
                className={cn(
                  "h-2 rounded-full transition-all cursor-pointer",
                  idx === currentIndex
                    ? "w-6 bg-[#a3cf21]"
                    : "w-2 bg-white/30 hover:bg-white/60"
                )}
                aria-label={`Ir a la foto ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
