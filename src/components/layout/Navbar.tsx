import Link from 'next/link';
import { navegacion } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo simulado */}
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-primary">¡Girardota,</span>
            <span className="font-black text-sm tracking-tighter text-secondary-foreground bg-secondary px-1.5 py-0.5 rounded-sm -mt-1.5 -rotate-2 inline-block w-max">Te Queremos!</span>
          </div>
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
