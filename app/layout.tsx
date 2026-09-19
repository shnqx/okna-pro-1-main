import './globals.css';
import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

const display = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://okna.infospb@mail.ru'),
  title: {
    default: 'Окна ПРО — Светопрозрачные системы будущего | Окна в Санкт-Петербурге',
    template: '%s | Окна ПРО',
  },
  description:
    'Собственный завод в СПб. Изготовление окон за 5 дней. Немецкий профиль Rehau и фурнитура Roto. Гарантия производителя 10 лет. Бесплатный выезд замерщика по Санкт-Петербургу и Ленинградской области.',
  keywords: [
    'окна Санкт-Петербург',
    'окна Rehau',
    'остекление коттеджа',
    'панорамное остекление',
    'оконный завод СПб',
    'фурнитура Roto',
    'энергосберегающие окна',
    'ламинация окон',
    'Окна ПРО',
  ],
  authors: [{ name: 'Окна ПРО' }],
  creator: 'Окна ПРО',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://okna-pro.spb.ru',
    siteName: 'Окна ПРО',
    title: 'Окна ПРО — Светопрозрачные системы будущего | Окна в Санкт-Петербурге',
    description:
      'Собственный завод в СПб. Изготовление окон за 5 дней. Немецкий профиль Rehau и фурнитура Roto. Гарантия производителя 10 лет.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3a10edea?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Окна ПРО — премиальные светопрозрачные системы в Санкт-Петербурге',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Окна ПРО — Светопрозрачные системы будущего',
    description: 'Окна из СПб с гарантией производителя. Собственный завод. Профиль Rehau, фурнитура Roto.',
    images: ['https://images.unsplash.com/photo-1545324418-cc1a3a10edea?auto=format&fit=crop&w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://okna-pro.spb.ru',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.variable} ${display.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="relative min-h-screen bg-background">
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
