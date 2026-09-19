'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Gift, Sparkles, ShieldCheck, Factory, Zap } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pt-48">
      {/* Ambient background */}
      <div className="bg-ambient absolute inset-0" />
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Собственный завод в Санкт-Петербурге
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Светопрозрачные системы{' '}
              <span className="text-gradient-orange">будущего</span>.
              <br />
              Окна из СПб с гарантией{' '}
              <span className="text-gradient-orange">производителя</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              Собственный завод. Изготовление за 5 дней. Немецкий профиль Rehau и фурнитура Roto.
            </motion.p>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm font-medium text-foreground">
                <Factory className="h-4 w-4 text-accent" />
                Свой завод
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm font-medium text-foreground">
                <Zap className="h-4 w-4 text-accent" />
                5 дней изготовление
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm font-medium text-foreground">
                <ShieldCheck className="h-4 w-4 text-accent" />
                Гарантия до 10 лет
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/#configurator"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-semibold text-white transition-all hover:glow-orange"
              >
                Рассчитать окно
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/40 px-7 py-4 text-base font-semibold text-foreground transition-colors hover:border-accent/40 hover:bg-surface"
              >
                Читать блог
              </Link>
            </motion.div>

            {/* Promo widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex items-center gap-4 rounded-2xl border border-accent/30 bg-gradient-to-r from-accent/10 to-transparent p-5"
            >
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/20">
                <Gift className="h-6 w-6 text-accent" />
                <div className="absolute inset-0 rounded-xl animate-pulse-glow" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Подарок: Энергосберегающий стеклопакет
                </p>
                <p className="text-sm text-muted-foreground">
                  при заказе от 3 окон — экономия до 15 000 ₽
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: 3D CSS Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <Window3D />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Window3D() {
  return (
    <div className="relative mx-auto aspect-square max-w-md perspective-1000">
      {/* Ambient glow behind window */}
      <div className="absolute inset-0 rounded-full bg-accent/20 blur-[80px]" />

      {/* Floating depth indicators */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-4 top-1/4 z-20 flex items-center gap-2 rounded-full border border-accent/40 bg-surface/80 px-3 py-1.5 text-xs font-semibold text-accent backdrop-blur-md"
      >
        <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
        60 мм
      </motion.div>
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -right-4 top-1/2 z-20 flex items-center gap-2 rounded-full border border-accent/40 bg-surface/80 px-3 py-1.5 text-xs font-semibold text-accent backdrop-blur-md"
      >
        <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
        70 мм
      </motion.div>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -left-2 bottom-1/4 z-20 flex items-center gap-2 rounded-full border border-accent/40 bg-surface/80 px-3 py-1.5 text-xs font-semibold text-accent backdrop-blur-md"
      >
        <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
        80 мм
      </motion.div>

      {/* Window frame — layered CSS gradients */}
      <motion.div
        animate={{ rotateY: [0, 5, 0, -5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="preserve-3d relative h-full w-full"
      >
        {/* Outer frame (depth) */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 shadow-2xl dark:from-slate-700 dark:via-slate-800 dark:to-slate-900" />
        {/* Frame border with orange accent line */}
        <div className="absolute inset-2 rounded-xl border-2 border-accent/30 bg-gradient-to-br from-slate-200 to-slate-400 dark:from-slate-600 dark:to-slate-800" />
        {/* Inner frame */}
        <div className="absolute inset-4 rounded-lg bg-gradient-to-br from-slate-100 to-slate-300 dark:from-slate-800 dark:to-slate-900" />

        {/* Glass panes */}
        <div className="absolute inset-6 grid grid-cols-2 grid-rows-2 gap-1 rounded-lg overflow-hidden">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="relative bg-gradient-to-br from-sky-200/30 via-accent/5 to-sky-400/20 dark:from-sky-500/10 dark:via-accent/5 dark:to-sky-600/10"
            >
              {/* Glass reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-white/10" />
              {/* Diagonal light streak */}
              <motion.div
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 1.2, ease: 'easeInOut' }}
                className="absolute -inset-2 bg-gradient-to-tr from-transparent via-white/30 to-transparent dark:via-white/10"
                style={{ clipPath: 'polygon(0 80%, 100% 0, 100% 20%, 0 100%)' }}
              />
            </div>
          ))}
        </div>

        {/* Center cross bar */}
        <div className="absolute left-1/2 top-6 bottom-6 w-1 -translate-x-1/2 bg-gradient-to-b from-slate-300 to-slate-500 dark:from-slate-600 dark:to-slate-800" />
        <div className="absolute top-1/2 left-6 right-6 h-1 -translate-y-1/2 bg-gradient-to-r from-slate-300 to-slate-500 dark:from-slate-600 dark:to-slate-800" />

        {/* Neon accent edge glow */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-accent/20" />
        <div className="absolute -inset-1 rounded-2xl bg-accent/10 blur-xl" />
      </motion.div>

      {/* Floating spec badge */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-4 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full glass-strong px-4 py-2 text-xs font-semibold text-foreground shadow-xl"
      >
        Rehau Intelio 80 · Roto NT
      </motion.div>
    </div>
  );
}
