import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Menu, X, MessageCircle } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Главная' },
  { href: '/product', label: 'Продукты' },
  { href: '/science', label: 'О науке' },
  { href: '/contacts', label: 'Контакты' },
];

export default function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'glass shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-accent to-cyan-light">
              <span className="text-sm font-bold text-midnight-ink">HG</span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">
              Hydro <span className="text-cyan-accent">Genium</span>
            </span>
          </Link>

          {/* Desktop nav — tubelight style */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-glass-border bg-white/5 px-2 py-1 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
                    isActive
                      ? 'text-white'
                      : 'text-white/60 hover:text-white/90'
                  )}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-accent/40 to-cyan-light/30 blur-sm" />
                  )}
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-accent/30 to-cyan-light/20" />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/contacts"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-accent to-cyan-light px-5 py-2 text-sm font-semibold text-midnight-ink transition-all duration-300 hover:shadow-lg hover:shadow-cyan-accent/30 hover:scale-105"
            >
              <MessageCircle size={16} />
              @hydrogeniumH2
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center rounded-full p-2 text-white/80 hover:text-white"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-glass-border glass">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'block rounded-xl px-4 py-3 text-base font-medium transition-all',
                    isActive
                      ? 'bg-cyan-accent/20 text-cyan-accent'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="/contacts"
              onClick={() => setMobileOpen(false)}
              className="mt-2 block rounded-full bg-gradient-to-r from-cyan-accent to-cyan-light px-5 py-3 text-center text-base font-semibold text-midnight-ink"
            >
              @hydrogeniumH2
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
