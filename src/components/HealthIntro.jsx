import { motion } from 'framer-motion';

export default function HealthIntro() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-ocean via-ocean-surface/30 to-deep-ocean" />
      <div className="absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-cyan-accent/5 blur-[150px]" />
      <div className="absolute bottom-1/3 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border border-cyan-accent/30 bg-cyan-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-accent">
            Hydrogenium
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            ВОДОРОДНАЯ{' '}
            <span className="bg-gradient-to-r from-cyan-accent to-cyan-light bg-clip-text text-transparent">
              ВОДА
            </span>
          </h2>
        </motion.div>

        {/* Main content card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <div className="rounded-2xl border border-glass-border bg-white/[0.03] p-8 backdrop-blur-sm sm:p-10">
            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              Щелочная водородная вода — источник здоровья, энергии и долголетия!
            </h3>

            <p className="mt-6 text-sm leading-relaxed text-white/60 sm:text-base">
              Вашим клеткам нужна щелочная среда. Кислая среда — идеальная среда для размножения
              вирусов, бактерий и грибков. Щелочная вода с pH 9–11 (pH крови 7,45) насыщает организм
              кислородом, создает защитный барьер для клеток и запускает процессы естественного
              оздоровления. Всего через несколько дней регулярного употребления:
            </p>

            <div className="mt-4 space-y-2 pl-5">
              {[
                '✔️ Очищается межклеточное пространство',
                '✔️ Клетки начинают выводить токсины',
                '✔️ Вы ощущаете прилив сил и бодрости',
              ].map((item) => (
                <p key={item} className="text-sm text-white/70 sm:text-base">
                  {item}
                </p>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-cyan-accent/20 bg-cyan-accent/[0.04] p-5">
              <h4 className="text-sm font-semibold text-cyan-accent sm:text-base">
                Сила молекулярного водорода и отрицательного ОВП
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base">
                Наша вода — это не просто H₂O. Она обогащена молекулярным водородом (H₂) — мощным
                антиоксидантом, который нейтрализует опасные свободные радикалы. А уникальный ОВП
                (окислительно-восстановительный потенциал) – −600…−900 мВ — заряжает клетки
                энергией, экономя ресурсы организма.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Science summary card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-8 max-w-4xl"
        >
          <div className="rounded-2xl border border-glass-border bg-white/[0.03] p-8 backdrop-blur-sm sm:p-10">
            <h3 className="text-lg font-semibold text-white sm:text-xl">
              Как водородная вода работает на уровне организма?
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-accent/10 text-xs font-bold text-cyan-accent">1</span>
                <div>
                  <p className="text-sm font-medium text-white">Вода — основа жизни</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-white/50">
                    Более 80% веса человека составляет вода. Кровь создаёт все остальные жидкости
                    организма — плазму, лимфу, секреты желёз. Она приносит клеткам питание и уносит
                    продукты жизнедеятельности, и ей нужно постоянное пополнение своего состава.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-accent/10 text-xs font-bold text-cyan-accent">2</span>
                <div>
                  <p className="text-sm font-medium text-white">Молекулярный водород H₂ в действии</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-white/50">
                    Попадая в организм с водой, водород мгновенно проникает в клетку и своим
                    отрицательным зарядом притягивает положительно заряженные свободные радикалы,
                    нейтрализует их и выводит. Оставшиеся ионы водорода клетка накапливает для
                    дальнейшего использования.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-accent/10 text-xs font-bold text-cyan-accent">3</span>
                <div>
                  <p className="text-sm font-medium text-white">Экономия энергии организма</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-white/50">
                    Употребляя воду с отрицательным ОВП, совпадающим с показателями организма, вы
                    даёте клеткам готовые электроны. Организму не нужно тратить ресурсы на
                    восстановление воды до нужных параметров — он получает энергию сразу.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-accent/10 text-xs font-bold text-cyan-accent">4</span>
                <div>
                  <p className="text-sm font-medium text-white">Щелочная среда — ключ к здоровью клеток</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-white/50">
                    Здоровые клетки имеют щелочную среду, раковые — кислотную. Вода с pH выше 7,5
                    нейтрализует кислотные отходы, накопленные в организме, и помогает удалять их.
                    При регулярном употреблении межклеточное пространство очищается, клетки
                    оживают и начинают выводить шлаки.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-accent/10 text-xs font-bold text-cyan-accent">5</span>
                <div>
                  <p className="text-sm font-medium text-white">Профилактика заболеваний</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-white/50">
                    Щелочная водородная вода используется для профилактики гипертонии, диабета,
                    болезней почек, подагры, ожирения, аллергий, астмы и других заболеваний,
                    вызванных накоплением кислотных отходов в организме.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
