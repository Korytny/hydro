import { motion } from 'framer-motion';
import HealthIntro from '../components/HealthIntro';
import {
  Atom,
  TestTube,
  Heart,
  Shield,
  BookOpen,
  ArrowRight,
  Droplets,
  Clock,
  Thermometer,
  CheckCircle,
  Sparkles,
  Brain,
  Activity,
  Recycle,
} from 'lucide-react';

const sections = [
  {
    icon: Atom,
    title: 'Молекулярный водород — что это?',
    content:
      'Молекулярный водород (H₂) — это самый маленький и лёгкий элемент во Вселенной. Благодаря своим уникальным свойствам, он проникает через все биологические барьеры и достигает самых отдалённых уголков клетки. Водородная вода — это обычная питьевая вода, насыщенная молекулярным водородом до стабильной концентрации.',
    gradient: 'from-cyan-accent/20 to-blue-500/10',
  },
  {
    icon: TestTube,
    title: 'Ключевые показатели: pH и ORP',
    content: [
      {
        label: 'pH 8–11',
        desc: 'Слабощелочная среда помогает нейтрализовать избыточную кислотность организма, которая возникает из-за неправильного питания, стресса и загрязнённой окружающей среды.',
      },
      {
        label: 'ORP −500…−800 mV',
        desc: 'Отрицательный окислительно-восстановительный потенциал — главный показатель антиоксидантной активности. Чем ниже ORP, тем больше «лишних» электронов может отдать вода для нейтрализации свободных радикалов. Для сравнения: водопроводная вода имеет ORP от +200 до +500 mV.',
      },
    ],
    gradient: 'from-emerald-400/20 to-cyan-accent/10',
  },
  {
    icon: Shield,
    title: 'Антиоксидантная защита',
    content:
      'Свободные радикалы — нестабильные молекулы, которые повреждают клетки, ДНК и мембраны, вызывая окислительный стресс. Это главная причина старения и множества заболеваний. Молекулярный водород селективно нейтрализует только самые агрессивные свободные радикалы (гидроксильные радикалы •OH), превращая их в безвредную воду (H₂O). При этом он не затрагивает полезные активные формы кислорода, необходимые организму для нормальной работы.',
    gradient: 'from-violet-500/20 to-cyan-accent/10',
  },
  {
    icon: Heart,
    title: 'Влияние на здоровье',
    content: [
      {
        icon: Recycle,
        label: 'Детоксикация',
        desc: 'Очищает клетки и ткани, выводя шлаки и токсины.',
      },
      {
        icon: Heart,
        label: 'Защита сердца и сосудов',
        desc: 'Снижает холестерин, улучшает кровообращение, поддерживает при гипертонии и стенокардии.',
      },
      {
        icon: Activity,
        label: 'Помощь при хронических заболеваниях',
        desc: 'Уменьшает уровень глюкозы (важно при диабете), мочевой кислоты (при подагре), улучшает состояние печени, почек и ЖКТ.',
      },
      {
        icon: Shield,
        label: 'Укрепление иммунитета',
        desc: 'Ускоряет восстановление после болезней, смягчает симптомы аутоиммунных заболеваний.',
      },
      {
        icon: Sparkles,
        label: 'Молодость и красота',
        desc: 'Борется с целлюлитом, улучшает состояние кожи, поддерживает плотность костей, замедляет старение.',
      },
      {
        icon: Brain,
        label: 'Энергия и ясность мышления',
        desc: 'Снимает усталость, повышает концентрацию, регулирует температуру тела.',
      },
    ],
    gradient: 'from-rose-400/20 to-cyan-accent/10',
  },
];

const advantages = [
  {
    icon: CheckCircle,
    text: 'Безопасно — нет противопоказаний и побочных эффектов',
  },
  {
    icon: CheckCircle,
    text: 'Эффективно — результат заметен уже через несколько дней',
  },
  {
    icon: CheckCircle,
    text: 'Не вызывает отёков',
  },
];

const recommendations = [
  {
    icon: Droplets,
    text: 'Пейте от 1 литра в день в любое время',
  },
  {
    icon: Clock,
    text: 'Открытую бутылку (банку) рекомендуется употребить в течение часа',
  },
  {
    icon: Thermometer,
    text: 'Храните при температуре от +1°C до +18°C',
  },
];

const studies = [
  'Более 1000 научных публикаций в PubMed по молекулярному водороду',
  'Исследования в Японии, Китае, США и Европе с 2007 года',
  'Клинические испытания подтверждают безопасность и эффективность H₂',
  'Водород признан медицинским газом в 18 странах мира',
];

export default function Science() {
  return (
    <div className="pt-24 pb-16">
      <HealthIntro />

      {/* Content sections */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        {sections.map((section, idx) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-glass-border bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.06] hover:border-cyan-accent/30 sm:p-8"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative z-10 flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-accent/20 to-cyan-light/10">
                <section.icon className="h-6 w-6 text-cyan-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-white sm:text-2xl">
                  {section.title}
                </h2>

                {Array.isArray(section.content) ? (
                  <div className="mt-4 space-y-5">
                    {section.content.map((item) => (
                      <div key={item.label} className="flex items-start gap-3">
                        {'icon' in item ? (
                          <>
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-accent/20 to-cyan-light/10 mt-0.5">
                              <item.icon className="h-4 w-4 text-cyan-accent" />
                            </div>
                            <div>
                              <h3 className="text-base font-semibold text-white">
                                {item.label}
                              </h3>
                              <p className="mt-1 text-sm leading-relaxed text-white/60">
                                {item.desc}
                              </p>
                            </div>
                          </>
                        ) : (
                          <div>
                            <h3 className="text-base font-semibold text-cyan-accent">
                              {item.label}
                            </h3>
                            <p className="mt-1 text-sm leading-relaxed text-white/60">
                              {item.desc}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">
                    {section.content}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Advantages */}
      <section className="mx-auto mt-10 max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-glass-border bg-white/[0.03] p-8 backdrop-blur-sm sm:p-10"
        >
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Преимущества{' '}
            <span className="bg-gradient-to-r from-cyan-accent to-cyan-light bg-clip-text text-transparent">
              водородной воды
            </span>
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {advantages.map((item) => (
              <div key={item.text} className="flex items-start gap-3">
                <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-accent" />
                <span className="text-sm text-white/70 sm:text-base">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Recommendations */}
      <section className="mx-auto mt-8 max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-glass-border bg-white/[0.03] p-8 backdrop-blur-sm sm:p-10"
        >
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Рекомендации по{' '}
            <span className="bg-gradient-to-r from-cyan-accent to-cyan-light bg-clip-text text-transparent">
              употреблению
            </span>
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {recommendations.map((item) => (
              <div key={item.text} className="flex flex-col items-center text-center gap-3 rounded-xl border border-glass-border bg-white/[0.03] p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-accent/20 to-cyan-light/10">
                  <item.icon className="h-5 w-5 text-cyan-accent" />
                </div>
                <span className="text-sm text-white/70">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Research evidence */}
      <section className="mx-auto mt-8 max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-glass-border bg-white/[0.03] p-8 backdrop-blur-sm sm:p-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-6 w-6 text-cyan-accent" />
            <h2 className="text-2xl font-bold text-white">
              Исследования и{' '}
              <span className="bg-gradient-to-r from-cyan-accent to-cyan-light bg-clip-text text-transparent">
                доказательства
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {studies.map((study) => (
              <div key={study} className="flex items-start gap-3">
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-cyan-accent" />
                <span className="text-sm text-white/70 sm:text-base">{study}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
