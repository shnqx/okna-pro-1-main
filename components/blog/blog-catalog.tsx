'use client';

import { useEffect, useState } from 'react';
import { ArticleCard } from '@/components/blog/article-card';
import { articles as staticArticles, type BlogArticle } from '@/lib/blog-data';
import { mergeArticles, readStoredArticles } from '@/lib/blog-storage';

export function BlogCatalog() {
  const [articles, setArticles] = useState<BlogArticle[]>(staticArticles);

  useEffect(() => {
    setArticles(mergeArticles(staticArticles, readStoredArticles()));
  }, []);

  return (
    <div className="mt-14 grid auto-rows-max gap-5 md:grid-cols-3">
      {articles.map((article, index) => (
        <ArticleCard key={article.slug} article={article} featured={index === 0} />
      ))}
    </div>
  );
}
