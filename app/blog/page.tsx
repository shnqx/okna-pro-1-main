import type { Metadata } from 'next';
import { BookOpen, Sparkles } from 'lucide-react';
import { BlogCatalog } from '@/components/blog/blog-catalog';

export const metadata: Metadata = { title: 'Блог об окнах и остеклении', description: 'Практические советы о выборе окон Rehau, панорамном остеклении, стеклопакетах и монтаже в Санкт-Петербурге.' };

export default function BlogPage() {
  return <section className="relative overflow-hidden pb-24 pt-36 sm:pt-44"><div className="bg-grid absolute inset-0 opacity-20" /><div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="max-w-3xl"><p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent"><BookOpen className="h-4 w-4" /> Журнал «Окна ПРО»</p><h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">Знания, которые <span className="text-gradient-orange">работают</span>.</h1><p className="mt-6 text-lg leading-relaxed text-muted-foreground">Разбираемся в профилях, стеклопакетах и технологиях остекления без маркетингового шума.</p></div><BlogCatalog /><div className="mt-12 flex items-center gap-3 rounded-2xl border border-accent/20 bg-accent/5 p-5 text-sm text-muted-foreground"><Sparkles className="h-5 w-5 shrink-0 text-accent" /> Новые материалы о комфортном остеклении выходят каждую неделю.</div></div></section>;
}
