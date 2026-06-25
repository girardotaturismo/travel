"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navegacion } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90" onClick={() => setIsOpen(false)}>
          <Image 
            src="/logo.png" 
            alt="Logo Girardota Travel" 
            width={160} 
            height={50} 
            className="w-auto h-10 md:h-12 object-contain"
            priority 
          />
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navegacion.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-primary text-foreground/80 font-semibold tracking-wide">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/nosotros">
            <Button variant="default" className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-wide">
              Descubre Más
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Menu Móvil */}
      {isOpen && (
        <div className="md:hidden border-b bg-background animate-in slide-in-from-top-5 duration-200">
          <nav className="flex flex-col p-4 space-y-3 font-semibold text-base border-t">
            {navegacion.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="block py-2 px-3 rounded-lg hover:bg-muted transition-colors text-foreground/80 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t">
              <Link href="/nosotros" onClick={() => setIsOpen(false)} className="block w-full">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                  Descubre Más
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
