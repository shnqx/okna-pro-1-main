'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Factory, Gauge, Recycle, ShieldCheck, Sparkles } from 'lucide-react';

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export function AdvantagesSection() {
  return (
    <section id="advantages" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              <Sparkles className="h-4 w-4" /> Почему мы
            </p>
            <h2 className="max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
              Не окна. <span className="text-gradient-orange">Инженерная система</span> комфорта.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Каждая деталь проходит контроль на собственном производстве — от профиля до последнего оборота ручки.
          </p>
        </motion.div>

        <div className="grid auto-rows-[250px] gap-4 md:grid-cols-4">
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 md:col-span-2 md:row-span-2"
          >
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-accent/10 blur-3xl transition-all duration-500 group-hover:bg-accent/20" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">За 12 лет работы</p>
                  <p className="mt-2 font-display text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">25 000<span className="text-accent">+</span></p>
                  <p className="mt-1 font-medium text-muted-foreground">установленных окон</p>
                </div>
                <div className="rounded-2xl border border-accent/20 bg-accent/10 p-3 text-accent"><ArrowUpRight className="h-5 w-5" /></div>
              </div>
              <div className="relative mt-8 h-32">
                <svg viewBox="0 0 600 150" className="h-full w-full overflow-visible" role="img" aria-label="График роста количества установленных окон">
                  <defs>
                    <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#FF6600" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="#FF6600" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 128 C65 124 70 110 120 116 S180 104 220 106 S270 82 315 91 S370 65 420 70 S475 35 520 42 S565 12 600 18 V150 H0Z" fill="url(#chartFill)" />
                  <path d="M0 128 C65 124 70 110 120 116 S180 104 220 106 S270 82 315 91 S370 65 420 70 S475 35 520 42 S565 12 600 18" fill="none" stroke="#FF6600" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="600" cy="18" r="5" fill="#FF6600" className="animate-pulse" />
                </svg>
                <div className="absolute inset-x-0 bottom-0 flex justify-between border-t border-border/60 pt-2 text-[10px] uppercase tracking-wider text-muted-foreground"><span>2014</span><span>2018</span><span>2022</span><span>2026</span></div>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal} transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 md:col-span-2"
          >
            <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-accent/10 blur-2xl" />
            <div className="flex items-start justify-between"><div className="rounded-2xl border border-accent/20 bg-accent/10 p-3 text-accent"><Factory className="h-5 w-5" /></div><span className="rounded-full border border-accent/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">Live control</span></div>
            <h3 className="mt-6 font-display text-xl font-bold">Собственный завод</h3>
            <p className="mt-2 mb-2 max-w-sm text-sm leading-relaxed text-muted-foreground">Производим окна сами, поэтому контролируем качество и сроки</p>
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3"><div className="relative h-2 flex-1 overflow-hidden rounded-full bg-accent/10"><div className="absolute inset-y-0 left-0 w-2/3 rounded-full bg-accent animate-laser-sweep" /></div><span className="font-mono text-xs text-accent">98.7%</span></div>
          </motion.article>

          <motion.article
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal} transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-3xl border border-border bg-surface p-6 md:col-span-1"
          >
            <div className="flex items-center justify-between">
              <Recycle className="h-5 w-5 text-accent" />
            </div>
            <h3 className="mt-6 font-display text-lg font-bold">Всё по плану</h3>
            <div className="mt-5 space-y-3 text-xs">
              <div className="flex items-center gap-2 text-foreground">
                <span className="h-2 w-2 rounded-full bg-accent" />Замер</div>
              <div className="ml-1 h-3 border-l border-dashed border-accent/50" />
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="h-2 w-2 rounded-full border border-accent" />Доставка
              </div>

              <div className="ml-1 h-3 border-l border-dashed border-accent/50" />
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="h-2 w-2 rounded-full border border-accent" />Монтаж
              </div>

            </div>
          </motion.article>

          <motion.article
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal} transition={{ duration: 0.6, delay: 0.4 }}
            className="group rounded-3xl border border-border bg-surface p-6 transition-colors hover:border-accent/40 md:col-span-1"
          >
            <div className="flex items-center justify-between"><Gauge className="h-5 w-5 text-accent transition-transform duration-500 group-hover:rotate-45" /><ShieldCheck className="h-4 w-4 text-muted-foreground" /></div>
            <p className="mt-6 font-display text-3xl font-extrabold">60 000</p>
            <h3 className="mt-1 text-sm font-semibold text-foreground">открываний Roto</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">Точность немецкой фурнитуры в каждом движении.</p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
