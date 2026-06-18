import { Link } from 'react-router-dom';
import { Droplets, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-glass-border bg-ocean-surface/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deep-ocean/50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-accent to-cyan-light">
                <span className="text-sm font-bold text-midnight-ink">HG</span>
              </div>
              <span className="text-lg font-semibold text-white">
                Hydro <span className="text-cyan-accent">Genium</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/50">
              Водородная вода — ваш путь к долголетию, красоте и здоровью. 
              Производим стеклянные бутылки и алюминиевые банки с насыщением водородом.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">Навигация</h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Главная' },
                { to: '/product', label: 'Продукты' },
                { to: '/science', label: 'О науке' },
                { to: '/contacts', label: 'Контакты' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/60 transition-colors hover:text-cyan-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">Продукты</h3>
            <ul className="space-y-3">
              {['Стеклянные бутылки', 'Алюминиевые банки', 'Оптовые поставки'].map((item) => (
                <li key={item}>
                  <Link
                    to="/product"
                    className="text-sm text-white/60 transition-colors hover:text-cyan-accent"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Mail size="14" className="shrink-0 text-cyan-accent" />
                vodaovp@yandex.ru
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Phone size="14" className="shrink-0 text-cyan-accent" />
                +7-901-544-71-33
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <MessageCircle size="14" className="shrink-0 text-cyan-accent" />
                @hydrogeniumH2
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-glass-border pt-8">
          <p className="text-center text-xs text-white/30">
            &copy; {new Date().getFullYear()} Hydro Genium. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
