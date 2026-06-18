import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-ocean via-ocean-surface/30 to-deep-ocean" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full border border-cyan-accent/30 bg-cyan-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-accent">
              Контакты
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Свяжитесь с{' '}
              <span className="bg-gradient-to-r from-cyan-accent to-cyan-light bg-clip-text text-transparent">
                нами
              </span>
            </h2>
            <p className="mt-4 text-lg text-white/50">
              Готовы ответить на ваши вопросы о продукции, сотрудничестве и поставках
            </p>

            <div className="mt-10 space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'vodaovp@yandex.ru', href: 'mailto:vodaovp@yandex.ru' },
                { icon: Phone, label: 'Телефон / WhatsApp', value: '+7-901-544-71-33', href: 'tel:+79015447133' },
                { icon: MessageCircle, label: 'Telegram', value: '@hydrogeniumH2', href: 'https://t.me/hydrogeniumH2' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-accent/20 to-cyan-light/10">
                    <item.icon className="h-5 w-5 text-cyan-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-white transition-colors hover:text-cyan-accent sm:text-base"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-white sm:text-base">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-glass-border bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8"
          >
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-white/60">
                    Имя
                  </label>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-cyan-accent/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-cyan-accent/30"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-white/60">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-cyan-accent/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-cyan-accent/30"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-white/60">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  placeholder="Ваше сообщение..."
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-cyan-accent/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-cyan-accent/30 resize-none"
                />
              </div>
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-accent to-cyan-light py-3.5 text-base font-semibold text-midnight-ink transition-all duration-300 hover:shadow-lg hover:shadow-cyan-accent/30"
              >
                <Send size="18" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                Отправить сообщение
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
