'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Ruler, Thermometer, Volume2 } from 'lucide-react';

const brands = ['Rehau', 'Grunder', 'Алюминий'];
const modelsByBrand: Record<string, string[]> = {
  Rehau: ['Blitz 60 мм', 'Grazio 70 мм', 'Delight 70 мм +10% света', 'Intelio 80 мм'],
  Grunder: ['G-Comfort 60 мм', 'G-Design 70 мм', 'G-Premium 80 мм'],
  'Алюминий': ['Alumark S50', 'Alumark S70', 'Panorama S90'],
};
const colors = [
  { name: 'Чёрный', value: '#18191b' },
  { name: 'Дуб', value: '#a8794c' },
  { name: 'Антрацит', value: '#4c535a' },
  { name: 'Белый', value: '#fdfdfd' }
];

export function ConfiguratorSection() {
  const [brand, setBrand] = useState('Rehau');
  const [model, setModel] = useState(modelsByBrand.Rehau[1]);
  const [color, setColor] = useState(colors[2]);
  const [sent, setSent] = useState(false);

  const stats = useMemo(() => {
    const profile = model.match(/(60|70|80)/)?.[1] ?? '70';
    const base = profile === '60' ? 64 : profile === '80' ? 94 : 82;
    return { heat: brand === 'Алюминий' ? Math.max(base - 12, 55) : base, noise: profile === '80' ? 92 : profile === '60' ? 68 : 82, thickness: Number(profile) };
  }, [brand, model]);

  const handleBrandChange = (nextBrand: string) => {
    setBrand(nextBrand);
    setModel(modelsByBrand[nextBrand][0]);
  };

  return (
    <section id="configurator" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-ambient opacity-70" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl"><p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent"><Ruler className="h-4 w-4" /> Конфигуратор</p><h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">Соберите своё <span className="text-gradient-orange">окно</span>.</h2><p className="mt-4 text-lg leading-relaxed text-muted-foreground">Выберите профиль, модель и цвет — увидите характеристики в реальном времени.</p></div>
        <div className="grid overflow-hidden rounded-[2rem] border border-border bg-surface shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-border p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="space-y-8">
              <div><p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">01 / Бренд</p><div className="grid grid-cols-3 gap-2">{brands.map((item) => <button key={item} onClick={() => handleBrandChange(item)} className={`rounded-xl border px-3 py-3 text-sm font-semibold transition-all ${brand === item ? 'border-accent bg-accent/10 text-accent shadow-sm shadow-accent/20' : 'border-border text-muted-foreground hover:border-accent/40 hover:text-foreground'}`}>{item}</button>)}</div></div>
              <div><p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">02 / Модель профиля</p><div className="space-y-2">{modelsByBrand[brand].map((item) => <button key={item} onClick={() => setModel(item)} className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition-all ${model === item ? 'border-accent bg-accent/10 text-foreground' : 'border-border text-muted-foreground hover:border-accent/40'}`}><span>{item}</span>{model === item && <Check className="h-4 w-4 text-accent" />}</button>)}</div></div>
              <div><p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">03 / Ламинация</p><div className="flex gap-4">{colors.map((item) => <button key={item.name} onClick={() => setColor(item)} className="group flex flex-col items-center gap-2" aria-label={item.name}><span className={`h-10 w-10 rounded-full border-2 transition-all ${color.name === item.name ? 'border-accent ring-4 ring-accent/20' : 'border-border group-hover:border-accent/50'}`} style={{ backgroundColor: item.value }} /> <span className={`text-[10px] ${color.name === item.name ? 'text-foreground' : 'text-muted-foreground'}`}>{item.name}</span></button>)}</div></div>
              <div className="space-y-5 border-t border-border pt-6"><AnimatedStat icon={<Thermometer className="h-4 w-4" />} label="Теплоизоляция" value={stats.heat} suffix="%" /><AnimatedStat icon={<Volume2 className="h-4 w-4" />} label="Шумоизоляция" value={stats.noise} suffix="%" /></div>
            </div>
          </div>
          <div className="relative flex min-h-[520px] flex-col justify-between bg-grid-sm p-6 sm:p-8">
            <div className="flex items-center justify-between"><div><p className="text-xs uppercase tracking-wider text-muted-foreground">Ваша конфигурация</p><p className="mt-1 font-display text-xl font-bold">{brand} · {model}</p></div><span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">Готово к расчёту</span></div>
            <div className="relative mx-auto flex w-full max-w-md flex-1 items-center justify-center py-10"><WindowPreview frameColor={color.value} thickness={stats.thickness} /></div>
            <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-5 sm:flex-row"><p className="text-sm text-muted-foreground">Точная стоимость после бесплатного замера</p><button onClick={() => setSent(true)} className="btn-neon inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">{sent ? 'Заявка отправлена' : 'Получить расчёт'}{sent ? <Check className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}</button></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedStat({ icon, label, value, suffix }: { icon: React.ReactNode; label: string; value: number; suffix: string }) {
  return <div><div className="mb-2 flex items-center justify-between text-sm"><span className="flex items-center gap-2 text-muted-foreground">{icon}{label}</span><span className="font-semibold text-foreground">{value}{suffix}</span></div><div className="h-2 overflow-hidden rounded-full bg-border"><motion.div animate={{ width: `${value}%` }} transition={{ duration: 0.7, ease: 'easeOut' }} className="h-full rounded-full bg-gradient-to-r from-accent to-orange-400" /></div></div>;
}

function WindowPreview({ frameColor, thickness }: { frameColor: string; thickness: number }) {
  return <AnimatePresence mode="wait"><motion.div key={`${frameColor}-${thickness}`} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35 }} className="relative aspect-[4/5] w-[min(72%,280px)] rounded-2xl p-3 shadow-2xl" style={{ backgroundColor: frameColor, boxShadow: `0 20px 80px ${frameColor}55, inset 0 0 0 ${Math.max(2, thickness / 20)}px rgba(255,102,0,.4)` }}><div className="grid h-full grid-cols-2 gap-2 rounded-lg bg-sky-900/20 p-2"><div className="relative rounded bg-gradient-to-br from-sky-100/40 to-sky-500/10"><div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" /></div><div className="relative rounded bg-gradient-to-br from-sky-100/40 to-sky-500/10"><div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" /></div><div className="relative rounded bg-gradient-to-br from-sky-100/40 to-sky-500/10"><div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" /></div><div className="relative rounded bg-gradient-to-br from-sky-100/40 to-sky-500/10"><div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" /></div></div><div className="absolute left-1/2 top-3 bottom-3 w-2 -translate-x-1/2 rounded-full" style={{ backgroundColor: frameColor }} /><div className="absolute left-3 right-3 top-1/2 h-2 -translate-y-1/2 rounded-full" style={{ backgroundColor: frameColor }} /><div className="absolute -right-14 top-1/2 flex -translate-y-1/2 items-center gap-2 text-xs font-semibold text-accent"><span className="h-px w-8 bg-accent" />{thickness} мм</div></motion.div></AnimatePresence>;
}
