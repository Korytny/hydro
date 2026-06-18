import { motion } from 'framer-motion';

const products = [
  {
    name: 'Стеклянная бутылка',
    tagline: 'Премиальная чистота вкуса',
    volume: '500 мл',
    material: 'Стекло',
    image: '/images/glass-bottle.jpg',
    features: [
      'Многоразовая, экологичная',
      'Сохраняет вкус и свежесть',
      'Премиальный дизайн',
      'Высокая концентрация H₂',
    ],
    badge: 'Хит',
  },
  {
    name: 'Алюминиевая банка',
    tagline: 'Здоровье в дорогу',
    volume: '330 мл',
    material: 'Алюминий',
    image: '/images/aluminum-can.jpg',
    features: [
      'Удобно брать с собой',
      'Не бьётся',
      'Лёгкая и компактная',
      '100% перерабатываемая',
    ],
    badge: 'Новинка',
  },
  {
    name: 'Оптовая поставка',
    tagline: 'Для бизнеса и партнёров',
    volume: 'От 1000 шт.',
    material: 'Любая тара',
    image: '/images/wellness.jpg',
    features: [
      'Индивидуальный дизайн',
      'Сертификация качества',
      'Гибкие условия сотрудничества',
      'Доставка по всей РФ',
    ],
    badge: 'B2B',
  },
];

export default function Products() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full border border-cyan-accent/30 bg-cyan-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-accent">
            Продукция
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Наша{' '}
            <span className="bg-gradient-to-r from-cyan-accent to-cyan-light bg-clip-text text-transparent">
              продукция
            </span>
          </h2>
          <p className="mt-4 text-lg text-white/50">
            Выбирайте удобный формат водородной воды для активной и здоровой жизни
          </p>
        </motion.div>

        {/* Product cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {products.map((product, idx) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative overflow-hidden rounded-2xl border border-glass-border bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.06] hover:border-cyan-accent/30 hover:-translate-y-1"
            >
              {/* Shine border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-cyan-accent/10 to-transparent animate-shimmer" />
              </div>

              {/* Badge */}
              <div className="absolute top-4 right-4 z-10 rounded-full border border-cyan-accent/30 bg-cyan-accent/10 px-3 py-1 text-xs font-semibold text-cyan-accent backdrop-blur-sm">
                {product.badge}
              </div>

              {/* Product image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-white/40 uppercase tracking-wider">{product.material}</span>
                  <span className="text-xs font-medium text-cyan-accent">{product.volume}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                <p className="mt-1 text-sm text-white/50">{product.tagline}</p>

                <ul className="mt-4 space-y-2">
                  {product.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-white/60">
                      <span className="h-1 w-1 rounded-full bg-cyan-accent" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <button className="mt-6 w-full rounded-xl border border-white/20 py-2.5 text-sm font-medium text-white/80 transition-all duration-300 hover:border-cyan-accent/50 hover:bg-cyan-accent/10 hover:text-white">
                  Подробнее
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
