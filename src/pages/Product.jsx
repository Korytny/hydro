import { motion } from 'framer-motion';
import { Sparkles, Recycle, ShieldCheck, Droplets, CheckCircle } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const products = [
  {
    name: 'Стеклянная бутылка',
    tagline: 'Премиальная чистота вкуса',
    volume: '500 мл',
    material: 'Стекло',
    features: [
      'Многоразовая, экологичная',
      'Сохраняет вкус и свежесть',
      'Премиальный дизайн',
      'Высокая концентрация H₂',
      'Герметичная крышка',
    ],
    icon: Sparkles,
    gradient: 'from-cyan-accent to-blue-500',
    image: '/images/glass-bottle.jpg',
    badge: 'Хит продаж',
    description:
      'Наши стеклянные бутылки — идеальный выбор для дома и офиса. Стекло не вступает в реакцию с водой, сохраняя её чистоту и свежесть. Бутылка оснащена герметичной крышкой, которая удерживает водород внутри.',
  },
  {
    name: 'Алюминиевая банка',
    tagline: 'Здоровье в дорогу',
    volume: '330 мл',
    material: 'Алюминий',
    features: [
      'Удобно брать с собой',
      'Не бьётся',
      'Лёгкая и компактная',
      '100% перерабатываемая',
      'Сохранение свойств до 24 ч',
    ],
    icon: Recycle,
    gradient: 'from-cyan-light to-emerald-400',
    image: '/images/aluminum-can.jpg',
    badge: 'Новинка',
    description:
      'Алюминиевые банки Hydro Genium созданы для активного образа жизни. Берите их на тренировку, в поездку или на прогулку — водородная вода всегда будет под рукой.',
  },
  {
    name: 'Оптовая поставка',
    tagline: 'Для бизнеса и партнёров',
    volume: 'От 1000 шт.',
    material: 'Любая тара',
    features: [
      'Индивидуальный дизайн',
      'Сертификация качества',
      'Гибкие условия сотрудничества',
      'Доставка по всей РФ',
      'Конкурентные цены',
    ],
    icon: ShieldCheck,
    gradient: 'from-violet-500 to-cyan-accent',
    image: '/images/wellness.jpg',
    badge: 'B2B',
    description:
      'Предлагаем выгодные условия для дистрибьюторов, фитнес-клубов, спа-салонов и магазинов здорового питания. Возможно производство под вашим брендом.',
  },
];

const advantages = [
  { icon: CheckCircle, text: 'Концентрация H₂ более 1.5 ppm' },
  { icon: CheckCircle, text: 'pH 8–11, ORP −500…−800 mV' },
  { icon: CheckCircle, text: 'Без консервантов и добавок' },
  { icon: CheckCircle, text: 'Сертифицированное производство' },
];

export default function Product() {
  return (
    <div className="pt-24 pb-16">
      {/* Products grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product, idx) => (
            <ProductCard key={product.name} product={product} index={idx} />
          ))}
        </div>
      </section>

      {/* Common advantages */}
      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-glass-border bg-white/[0.03] p-8 backdrop-blur-sm sm:p-12"
        >
          <h2 className="text-2xl font-bold text-white sm:text-3xl text-center">
            Преимущества нашей{' '}
            <span className="bg-gradient-to-r from-cyan-accent to-cyan-light bg-clip-text text-transparent">
              продукции
            </span>
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((adv) => (
              <div key={adv.text} className="flex items-center gap-3">
                <adv.icon className="h-5 w-5 shrink-0 text-cyan-accent" />
                <span className="text-sm text-white/70">{adv.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
