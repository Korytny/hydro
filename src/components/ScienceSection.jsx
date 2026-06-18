import { motion } from 'framer-motion';
import { Atom, Microscope, Brain, Activity } from 'lucide-react';

const scienceFacts = [
  {
    icon: Atom,
    title: 'Что такое водородная вода?',
    content:
      'Водородная вода — это обычная питьевая вода, обогащённая молекулярным водородом (H₂). Молекулярный водород — самый лёгкий и мощный антиоксидант, который селективно нейтрализует свободные радикалы, не затрагивая полезные активные формы кислорода.',
  },
  {
    icon: Microscope,
    title: 'Ключевые показатели качества',
    content:
      'Наша вода имеет pH 8–11 (слабощелочная) и отрицательный окислительно-восстановительный потенциал (ORP) от −500 до −800 mV. Чем ниже ORP, тем выше антиоксидантная активность воды. Эти показатели гарантируют максимальную пользу для организма.',
  },
  {
    icon: Brain,
    title: 'Научная база',
    content:
      'Более 1000 научных исследований подтверждают терапевтический потенциал молекулярного водорода. Исследования показывают его эффективность при окислительном стрессе, воспалительных процессах, метаболическом синдроме и возрастных изменениях.',
  },
  {
    icon: Activity,
    title: 'Как водород действует на клетки?',
    content:
      'Будучи самым маленьким из молекул, H₂ проникает через все клеточные мембраны, достигая митохондрий и ядра клетки. Он нейтрализует гидроксильные радикалы (•OH) — самые агрессивные из свободных радикалов, превращая их в безвредную воду.',
  },
];

export default function ScienceSection() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-ocean via-ocean-surface/20 to-deep-ocean" />
      <div className="absolute inset-0 opacity-10">
        <img src="/images/molecule.jpg" alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-cyan-accent/3 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full border border-cyan-accent/30 bg-cyan-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-accent">
            Наука
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Как это{' '}
            <span className="bg-gradient-to-r from-cyan-accent to-cyan-light bg-clip-text text-transparent">
              работает
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 space-y-6">
          {scienceFacts.map((fact, idx) => (
            <motion.div
              key={fact.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-glass-border bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.06] hover:border-cyan-accent/30 sm:p-8"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-accent/20 to-cyan-light/10">
                  <fact.icon className="h-6 w-6 text-cyan-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    {fact.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base">
                    {fact.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="/science"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-medium text-white/80 transition-all duration-300 hover:border-cyan-accent/50 hover:text-white hover:bg-white/5"
          >
            Читать подробнее об исследованиях
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
