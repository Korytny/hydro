import { motion } from 'framer-motion';
import {
  Shield,
  Heart,
  Droplets,
  Zap,
  Activity,
  Sparkles,
  Atom,
  Wind,
} from 'lucide-react';

const benefitCategories = [
  {
    title: 'Детокс и очищение',
    icon: Droplets,
    items: [
      'Детоксикация организма',
      'Выведение токсинов и тяжёлых металлов',
      'Выведение камней из почек',
    ],
    gradient: 'from-cyan-accent/20 to-cyan-light/10',
  },
  {
    title: 'Иммунитет и защита',
    icon: Shield,
    items: [
      'Нейтрализация свободных радикалов',
      'Укрепление иммунитета',
      'Антиоксидантная защита на клеточном уровне',
      'Противовоспалительное действие',
    ],
    gradient: 'from-blue-500/20 to-cyan-accent/10',
  },
  {
    title: 'Сердце и сосуды',
    icon: Heart,
    items: [
      'Нормализация артериального давления',
      'Улучшение кровообращения',
      'Снижение уровня холестерина',
      'Профилактика сердечно-сосудистых заболеваний',
    ],
    gradient: 'from-cyan-light/20 to-emerald-400/10',
  },
  {
    title: 'Энергия и молодость',
    icon: Zap,
    items: [
      'Повышение уровня энергии',
      'Замедление процессов старения',
      'Улучшение состояния кожи',
      'Ускорение восстановления после нагрузок',
    ],
    gradient: 'from-cyan-accent/20 to-violet-500/10',
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemAnim = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Benefits() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-ocean via-ocean-surface/30 to-deep-ocean" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full border border-cyan-accent/30 bg-cyan-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-accent">
            Преимущества
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Почему{' '}
            <span className="bg-gradient-to-r from-cyan-accent to-cyan-light bg-clip-text text-transparent">
              водородная вода
            </span>
            ?
          </h2>
          <p className="mt-4 text-lg text-white/50">
            Молекулярный водород — мощнейший антиоксидант, который помогает организму
            бороться с окислительным стрессом на клеточном уровне
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefitCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              variants={itemAnim}
              className="group relative overflow-hidden rounded-2xl border border-glass-border bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.06] hover:border-cyan-accent/30"
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Shine border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-cyan-accent/10 to-transparent animate-shimmer" />
              </div>

              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-accent/20 to-cyan-light/10 mb-4">
                  <cat.icon className="h-6 w-6 text-cyan-accent" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {cat.title}
                </h3>

                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-2xl border border-glass-border bg-white/[0.03] p-8 backdrop-blur-sm"
        >
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-accent sm:text-4xl">pH 8–11</div>
              <div className="mt-2 text-sm text-white/50">Слабощелочная вода</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-accent sm:text-4xl">−500…−800 mV</div>
              <div className="mt-2 text-sm text-white/50">Отрицательный окислительно-восстановительный потенциал</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-accent sm:text-4xl">55 дин/см²</div>
              <div className="mt-2 text-sm text-white/50">Поверхностное натяжение</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
