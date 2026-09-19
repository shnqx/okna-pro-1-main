'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock3 } from 'lucide-react';
import type { BlogArticle } from '@/lib/blog-data';
import { readStoredArticles } from '@/lib/blog-storage';

export function StoredArticlePage({ slug }: { slug: string }) {
  const [article, setArticle] = useState<BlogArticle | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setArticle(readStoredArticles().find((item) => item.slug === slug) ?? null);
    setLoaded(true);
  }, [slug]);

  if (!loaded) return <div className="min-h-screen pt-40 text-center text-muted-foreground">Загрузка статьи...</div>;
  if (!article) return <div className="min-h-screen pt-40 text-center"><p className="text-muted-foreground">Статья не найдена.</p><Link href="/blog" className="mt-4 inline-flex text-accent">Вернуться в блог</Link></div>;

  return (
    <article className="relative overflow-hidden pb-24 pt-32 sm:pt-40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent"><ArrowLeft className="h-4 w-4" /> Все статьи</Link>
        <div className="mt-10 flex flex-wrap items-center gap-3 text-xs text-muted-foreground"><span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 font-semibold text-accent">{article.category}</span><span>{new Date(article.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}</span><span className="h-1 w-1 rounded-full bg-accent" /><span className="flex items-center gap-1"><Clock3 className="h-3 w-3" />{article.readingTime} мин чтения</span></div>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">{article.title}</h1>
        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-muted-foreground">{article.excerpt}</p>
        <img src={article.coverImage} alt={article.title} className="mt-10 aspect-[2/1] w-full rounded-3xl border border-border object-cover" />
        <div className="mx-auto mt-12 max-w-3xl">{article.content.map((block, index) => <p key={index} className="mb-6 text-base leading-[1.8] text-muted-foreground sm:text-lg">{block.type === 'list' ? block.items.join(' ') : block.text}</p>)}</div>
      </div>
    </article>
  );
}
