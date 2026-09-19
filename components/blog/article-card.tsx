import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Clock3 } from 'lucide-react';
import type { BlogArticle } from '@/lib/blog-data';

export function ArticleCard({ article, featured = false }: { article: BlogArticle; featured?: boolean }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border border-border bg-surface ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      <Link href={`/blog/${article.slug}`} className="flex h-full flex-col md:block">
        <div
          className={`relative overflow-hidden ${
            featured ? 'aspect-[1.4] md:absolute md:inset-0 md:aspect-auto' : 'aspect-[1.55]'
          }`}
        >
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            sizes={featured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {featured && (
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent md:block" />
          )}
          <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
            {article.category}
          </div>
        </div>

        <div className={`${featured ? 'relative md:absolute md:bottom-0 md:left-0 md:right-0' : ''} p-6`}>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>
              {new Date(article.date).toLocaleDateString('ru-RU', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <span className="h-1 w-1 rounded-full bg-accent" />
            <span className="flex items-center gap-1">
              <Clock3 className="h-3 w-3" />
              {article.readingTime} мин
            </span>
          </div>
          <h2
            className={`mt-3 font-display font-bold tracking-tight ${
              featured ? 'text-2xl sm:text-3xl md:text-white' : 'text-xl'
            }`}
          >
            {article.title}
          </h2>
          <p
            className={`mt-3 line-clamp-3 text-sm leading-relaxed ${
              featured ? 'md:text-white/70' : 'text-muted-foreground'
            }`}
          >
            {article.excerpt}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
            Читать статью
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  );
}