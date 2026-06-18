import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'vodaovp@yandex.ru', href: 'mailto:vodaovp@yandex.ru', detail: 'Ответим в течение 24 часов' },
  { icon: Phone, label: 'Телефон / WhatsApp', value: '+7-901-544-71-33', href: 'tel:+79015447133', detail: 'Пн–Пт, 10:00–19:00' },
  { icon: MessageCircle, label: 'Telegram', value: '@hydrogeniumH2', href: 'https://t.me/hydrogeniumH2', detail: 'Быстрая связь' },
  { icon: Clock, label: 'Время работы', value: 'Пн–Пт: 10:00–19:00', detail: 'Сб–Вс: по договорённости' },
];

export default function Contacts() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-surface/50 via-deep-ocean to-deep-ocean" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-accent/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Свяжитесь с{' '}
            <span className="bg-gradient-to-r from-cyan-accent to-cyan-light bg-clip-text text-transparent">
              нами
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-white/50"
          >
            Отвечаем на вопросы о продукции, сотрудничестве и оптовых поставках
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="group flex items-start gap-4 rounded-2xl border border-glass-border bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.06] hover:border-cyan-accent/30"
              >
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
                      className="text-base font-medium text-white transition-colors hover:text-cyan-accent sm:text-lg"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-base font-medium text-white sm:text-lg">
                      {item.value}
                    </p>
                  )}
                  <p className="mt-0.5 text-sm text-white/40">{item.detail}</p>
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="flex items-center gap-3 pt-4">
              <MessageCircle className="h-5 w-5 text-cyan-accent" />
              <a href="https://t.me/hydrogeniumH2" className="text-sm text-white/50 hover:text-cyan-accent transition-colors">
                Telegram: @hydrogeniumH2
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5 text-cyan-accent" />
              <span className="text-sm text-white/50">WhatsApp: +7-901-544-71-33</span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl border border-glass-border bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8"
          >
            <h2 className="mb-6 text-xl font-semibold text-white">
              Отправить сообщение
            </h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-white/60">
                    Имя <span className="text-cyan-accent">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-cyan-accent/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-cyan-accent/30"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-white/60">
                    Email <span className="text-cyan-accent">*</span>
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
                  Телефон
                </label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-cyan-accent/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-cyan-accent/30"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-white/60">
                  Сообщение <span className="text-cyan-accent">*</span>
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
                Отправить
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
