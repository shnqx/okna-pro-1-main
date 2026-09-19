'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Ruler } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/#configurator', label: 'Конфигуратор' },
  { href: '/#advantages', label: 'Преимущества' },
  { href: '/blog', label: 'Блог' },
  { href: '/#contacts', label: 'Контакты' },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'glass-strong shadow-lg shadow-black/5' : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Окна ПРО — на главную">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-orange-600 shadow-lg shadow-accent/30">
            <div className="absolute inset-[3px] rounded-lg bg-background/90" />
            <div className="absolute inset-[6px] rounded-md border border-accent/40" />
            <div className="absolute left-1/2 top-[6px] h-[calc(50%-3px)] w-px -translate-x-1/2 bg-accent/40" />
            <div className="absolute left-[6px] top-1/2 h-px w-[calc(50%-3px)] -translate-y-1/2 bg-accent/40" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-base font-extrabold tracking-tight text-foreground">
              Окна <span className="text-accent">ПРО</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Санкт-Петербург
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+78129890005"
            className="hidden items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent sm:flex"
          >
            <Phone className="h-4 w-4 text-accent" />
            +7 (812) 989-00-05
          </a>
          <ThemeToggle />
          <Link
            href="/#contacts"
            className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white animate-pulse-glow sm:flex"
          >
            <Ruler className="h-4 w-4" />
            Вызвать замерщика
          </Link>

          {/* Mobile menu button */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-surface/50 text-foreground lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Открыть меню"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden glass-strong lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+78129890005"
                className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold text-foreground"
              >
                <Phone className="h-4 w-4 text-accent" />
                +7 (812) 989-00-05
              </a>
              <Link
                href="/#configurator"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white"
              >
                <Ruler className="h-4 w-4" />
                Вызвать замерщика
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
