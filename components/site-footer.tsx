import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Send, Youtube, Clock3 } from 'lucide-react';

const footerNav = [
  {
    title: 'Компания',
    links: [
      { href: '/#advantages', label: 'Преимущества' },
      { href: '/#configurator', label: 'Конфигуратор окон' },
      { href: '/#contacts', label: 'Контакты' },
      { href: '/blog', label: 'Блог' },
    ],
  },
  {
    title: 'Продукция',
    links: [
      { href: '/#configurator', label: 'Окна Rehau' },
      { href: '/#configurator', label: 'Окна Grunder' },
      { href: '/#configurator', label: 'Алюминиевые системы' },
      { href: '/#configurator', label: 'Панорамное остекление' },
    ],
  },
  {
    title: 'Блог',
    links: [
      { href: '/blog/kak-vybrat-okna-v-kottedzh', label: 'Окна для коттеджа' },
      { href: '/blog/trendy-panoramnogo-ostekleniya-2026', label: 'Панорамное остекление 2026' },
      { href: '/blog/raznica-profiley-rehau', label: 'Профили Rehau' },
    ],
  },
];

const seoAreas = [
  'Санкт-Петербург',
  'Ленинградская область',
  'Всеволожск',
  'Выборг',
  'Гатчина',
  'Кириши',
  'Сертолово',
  'Пушкин',
  'Колпино',
  'Петергоф',
  'Зеленогорск',
  'Сестрорецк',
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-surface/50">
      <div className="bg-grid-sm absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-orange-600 shadow-lg shadow-accent/30">
                <div className="absolute inset-[3px] rounded-lg bg-background/90" />
                <div className="absolute inset-[6px] rounded-md border border-accent/40" />
              </div>
              <span className="font-display text-lg font-extrabold tracking-tight">
                Окна <span className="text-accent">ПРО</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Собственный завод светопрозрачных систем в Санкт-Петербурге. Немецкий профиль Rehau, фурнитура Roto, гарантия производителя 10 лет.
            </p>
            <div className="mt-6 space-y-3">
              <a href="tel:+78129890005" className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-accent">
                <Phone className="h-4 w-4 text-accent" />
                +7 (812) 989-00-05
              </a>
              <a href="mailto:info@okna-pro.spb.ru" className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-accent">
                <Mail className="h-4 w-4 text-accent" />
                okna.infospb@mail.ru
              </a>
              <p className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                Тельмана, Красноборская дорога 2, завод «Окна ПРО»
              </p>
              <p className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock3 className="h-4 w-4 text-accent" />
                Пн–Пт 9:00–18:00
              </p>
            </div>
          </div>

          {/* Nav columns */}
          {footerNav.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA + socials */}
          {/* <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-foreground">Мы в сети</h3>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="Telegram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Send className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
            <Link
              href="/#contacts"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-shadow hover:glow-orange"
            >
              Бесплатный замер
            </Link>
          </div> */}
        </div>

        {/* SEO areas */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            География работ
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {seoAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-border/60 bg-surface/50 px-3 py-1 text-xs text-muted-foreground"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ООО «Окна ПРО». Все права защищены. ИНН 7812345678.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-foreground">Политика конфиденциальности</Link>
            <Link href="#" className="transition-colors hover:text-foreground">Договор оферты</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
