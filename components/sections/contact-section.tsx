'use client';

import { FormEvent, useState } from 'react';
import { Check, Mail, MapPin, Phone, Send } from 'lucide-react';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '').trim();
    const phone = String(form.get('phone') ?? '').trim();
    if (!name || phone.length < 6) {
      setError('Введите имя и корректный номер телефона.');
      return;
    }
    setSubmitted(true);
  }

  return (
    <section id="contacts" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-[2rem] border border-border bg-surface lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative overflow-hidden bg-accent p-8 text-white sm:p-12"><div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" /><div className="relative"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Следующий шаг</p><h2 className="mt-5 max-w-md font-display text-3xl font-extrabold tracking-tight sm:text-5xl">Откроем вам больше света.</h2><p className="mt-5 max-w-md text-base leading-relaxed text-white/75">Оставьте контакты — инженер приедет бесплатно, сделает точный замер и подготовит расчёт под ваш проект.</p><div className="mt-10 space-y-4 text-sm"><a href="tel:+78129890005" className="flex items-center gap-3 hover:text-white/70"><Phone className="h-4 w-4" />+7 (812) 989-00-05</a><a href="mailto:info@okna-pro.spb.ru" className="flex items-center gap-3 hover:text-white/70"><Mail className="h-4 w-4" />okna.infospb@mail.ru</a><p className="flex items-center gap-3"><MapPin className="h-4 w-4" />Тельмана, Красноборская дорога 2, завод «Окна ПРО»</p></div></div></div>
          <div className="p-8 sm:p-12">
            {submitted ? <div className="flex min-h-[360px] flex-col items-center justify-center text-center"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent"><Check className="h-8 w-8" /></div><h3 className="mt-6 font-display text-2xl font-bold">Заявка принята</h3><p className="mt-3 max-w-sm text-muted-foreground">Мы свяжемся с вами в ближайшее рабочее время и согласуем удобный день для замера.</p></div> : <form onSubmit={handleSubmit} className="mx-auto max-w-lg"><p className="text-sm font-semibold uppercase tracking-wider text-accent">Бесплатный замер</p><h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">Расскажите о проекте</h3><div className="mt-8 grid gap-5 sm:grid-cols-2"><label className="text-sm font-medium">Ваше имя<input name="name" required placeholder="Алексей" className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20" /></label><label className="text-sm font-medium">Телефон<input name="phone" type="tel" required placeholder="+7 (___) ___-__-__" className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20" /></label></div><label className="mt-5 block text-sm font-medium">Комментарий<textarea name="message" rows={4} placeholder="Например: нужны окна в коттедж, 8 проёмов" className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20" /></label>{error && <p className="mt-4 text-sm text-red-500">{error}</p>}<button type="submit" className="btn-neon mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold">Отправить заявку <Send className="h-4 w-4" /></button><p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.</p></form>}
          </div>
        </div>
      </div>
    </section>
  );
}
