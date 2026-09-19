import type { BlogArticle } from '@/lib/blog-data';

export const STORED_ARTICLES_KEY = 'okna-pro-blog-articles';

export function readStoredArticles(): BlogArticle[] {
  if (typeof window === 'undefined') return [];

  try {
    const value = window.localStorage.getItem(STORED_ARTICLES_KEY);
    return value ? (JSON.parse(value) as BlogArticle[]) : [];
  } catch {
    return [];
  }
}

export function writeStoredArticles(articles: BlogArticle[]) {
  window.localStorage.setItem(STORED_ARTICLES_KEY, JSON.stringify(articles));
}

export function mergeArticles(staticArticles: BlogArticle[], storedArticles: BlogArticle[]) {
  const storedSlugs = new Set(storedArticles.map((article) => article.slug));
  return [...storedArticles, ...staticArticles.filter((article) => !storedSlugs.has(article.slug))];
}
