'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Download, ImagePlus, Save, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { articles as staticArticles, type BlogArticle } from '@/lib/blog-data';
import { mergeArticles, readStoredArticles, writeStoredArticles } from '@/lib/blog-storage';

const emptyForm = {
  title: '',
  slug: '',
  excerpt: '',
  category: 'Полезное',
  author: 'Редакция «Окна ПРО»',
  date: new Date().toISOString().slice(0, 10),
  readingTime: '5',
  tags: '',
  content: '',
};

type FormState = typeof emptyForm;

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-zа-яё0-9]+/gi, '-')
    .replace(/^-|-$/g, '');
}

export function AdminPanel() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [coverImage, setCoverImage] = useState('');
  const [storedArticles, setStoredArticles] = useState<BlogArticle[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => setStoredArticles(readStoredArticles()), []);

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setCoverImage(typeof reader.result === 'string' ? reader.result : '');
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.title || !form.excerpt || !form.content || !coverImage) {
      setMessage('Заполните заголовок, описание, текст и обложку.');
      return;
    }

    const article: BlogArticle = {
      slug: form.slug || slugify(form.title),
      title: form.title,
      excerpt: form.excerpt,
      category: form.category,
      author: form.author,
      date: form.date,
      readingTime: Number(form.readingTime) || 5,
      coverImage,
      tags: form.tags.split(',').map((tag) => tag.trim()).filter(Boolean),
      content: form.content.split(/\n\s*\n/).map((text) => ({ type: 'paragraph' as const, text: text.trim() })).filter((block) => block.text),
    };

    const nextArticles = [article, ...storedArticles.filter((item) => item.slug !== article.slug)];
    writeStoredArticles(nextArticles);
    setStoredArticles(nextArticles);
    setForm(emptyForm);
    setCoverImage('');
    setMessage('Статья сохранена. Она уже доступна в блоге на этом устройстве.');
  };

  const removeArticle = (slug: string) => {
    const nextArticles = storedArticles.filter((article) => article.slug !== slug);
    writeStoredArticles(nextArticles);
    setStoredArticles(nextArticles);
  };

  const exportArticles = () => {
    const blob = new Blob([JSON.stringify(mergeArticles(staticArticles, storedArticles), null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'okna-pro-blog.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="relative min-h-screen overflow-hidden pb-24 pt-28 sm:pt-36">
      <div className="bg-grid absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent">
          <ArrowLeft className="h-4 w-4" /> Вернуться в блог
        </Link>
        <div className="mt-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Редакция</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-6xl">Новая статья</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Добавьте материал, обложку и текст. Черновики сохраняются локально в браузере.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 grid gap-8 lg:grid-cols-[1fr_320px]">
          <section className="space-y-5 rounded-3xl border border-border bg-surface p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="sm:col-span-2">Заголовок<Input value={form.title} onChange={(event) => update('title', event.target.value)} onBlur={() => !form.slug && update('slug', slugify(form.title))} placeholder="Например, как выбрать стеклопакет" /></label>
              <label>Slug<Input value={form.slug} onChange={(event) => update('slug', event.target.value)} placeholder="kak-vybrat-steklopaket" /></label>
              <label>Категория<Input value={form.category} onChange={(event) => update('category', event.target.value)} /></label>
              <label>Автор<Input value={form.author} onChange={(event) => update('author', event.target.value)} /></label>
              <label>Дата<Input type="date" value={form.date} onChange={(event) => update('date', event.target.value)} /></label>
              <label>Время чтения, мин<Input type="number" min="1" value={form.readingTime} onChange={(event) => update('readingTime', event.target.value)} /></label>
              <label>Теги через запятую<Input value={form.tags} onChange={(event) => update('tags', event.target.value)} placeholder="окна, советы, Rehau" /></label>
            </div>
            <label>Краткое описание<Textarea value={form.excerpt} onChange={(event) => update('excerpt', event.target.value)} rows={4} placeholder="Что читатель узнает из статьи" /></label>
            <label>Текст статьи<Textarea value={form.content} onChange={(event) => update('content', event.target.value)} rows={14} placeholder="Разделяйте абзацы пустой строкой" /></label>
            <div className="flex flex-wrap items-center gap-4">
              <Button type="submit" className="gap-2"><Save className="h-4 w-4" /> Опубликовать</Button>
              {message && <span className="text-sm text-muted-foreground">{message}</span>}
            </div>
          </section>

          <aside className="space-y-5">
            <label className="block rounded-3xl border border-dashed border-accent/50 bg-accent/5 p-6 text-center">
              <ImagePlus className="mx-auto h-8 w-8 text-accent" />
              <span className="mt-3 block text-sm font-semibold">Загрузить обложку</span>
              <span className="mt-1 block text-xs text-muted-foreground">JPG, PNG или AVIF</span>
              <input type="file" accept="image/*" onChange={handleImage} className="sr-only" />
              {coverImage && <img src={coverImage} alt="Предпросмотр обложки" className="mt-5 aspect-[1.6] w-full rounded-2xl object-cover" />}
            </label>
            <div className="rounded-3xl border border-border bg-surface p-6">
              <div className="flex items-center justify-between gap-3"><h2 className="font-display text-xl font-bold">Мои статьи</h2><Button type="button" variant="ghost" size="icon" onClick={exportArticles} aria-label="Экспортировать статьи"><Download className="h-4 w-4" /></Button></div>
              <div className="mt-5 space-y-3">{storedArticles.length === 0 ? <p className="text-sm text-muted-foreground">Пока нет загруженных статей.</p> : storedArticles.map((article) => <div key={article.slug} className="flex items-start justify-between gap-3 border-t border-border pt-3"><p className="text-sm font-medium">{article.title}</p><button type="button" onClick={() => removeArticle(article.slug)} aria-label={`Удалить ${article.title}`} className="text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button></div>)}</div>
            </div>
          </aside>
        </form>
      </div>
    </main>
  );
}
