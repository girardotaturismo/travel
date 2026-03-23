import Link from 'next/link';
import Image from 'next/image';
import { navegacion } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
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
          <Button variant="default" className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-wide">
            Descubre Más
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
