import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with image */}
      <div className="absolute inset-0">
        <img
          src="/images/water-hero.jpg"
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-ocean/80 via-deep-ocean/60 to-deep-ocean" />
        {/* Aurora blobs overlay */}
        <div className="absolute top-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-accent/10 blur-[120px]" />
        <div className="absolute top-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-cyan-light/8 blur-[100px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-32 pb-20 text-center">
        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="text-white">Hydro </span>
          <span className="bg-gradient-to-r from-cyan-accent via-cyan-light to-white bg-clip-text text-transparent">
            Genium
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/60 sm:text-xl"
        >
          Водородная вода — путь к долголетию, красоте и здоровью
        </motion.p>

        {/* Metrics badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <div className="glass-strong rounded-full px-5 py-2">
            <span className="text-sm font-medium">
              pH <span className="text-cyan-accent font-bold">8–11</span>
            </span>
          </div>
          <div className="glass-strong rounded-full px-5 py-2">
            <span className="text-sm font-medium">
              ORP <span className="text-cyan-accent font-bold">−500…−800 mV</span>
            </span>
          </div>
          <div className="glass-strong rounded-full px-5 py-2">
            <span className="text-sm font-medium">
              <span className="text-cyan-accent font-bold">Антиоксидант</span> №1
            </span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/product"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-accent to-cyan-light px-8 py-3.5 text-base font-semibold text-midnight-ink transition-all duration-300 hover:shadow-lg hover:shadow-cyan-accent/30 hover:scale-105"
          >
            Смотреть продукты
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="/science"
            className="rounded-full border border-white/20 px-8 py-3.5 text-base font-medium text-white/80 transition-all duration-300 hover:border-cyan-accent/50 hover:text-white hover:bg-white/5"
          >
            Узнать больше
          </a>
        </motion.div>

        {/* Sparkle particles */}
        <div className="absolute top-1/4 left-[10%] h-2 w-2 rounded-full bg-cyan-accent/40 blur-sm animate-pulse" />
        <div className="absolute top-1/3 right-[15%] h-1.5 w-1.5 rounded-full bg-cyan-light/40 blur-sm animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-[20%] h-1 w-1 rounded-full bg-white/30 blur-sm animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-[25%] h-2.5 w-2.5 rounded-full bg-cyan-accent/20 blur-sm animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-ocean to-transparent" />
    </section>
  );
}
