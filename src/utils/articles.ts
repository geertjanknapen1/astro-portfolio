import type { CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'articles'>;

export function getPublishedArticles(articles: Article[]): Article[]
{
    return articles
        .filter((article) => !article.data.draft)
        .sort(
            (first, second) => first.data.publishedAt.getTime() - second.data.publishedAt.getTime()
        );
}

export function formatArticleDate(date: Date): string
{
    return new Intl.DateTimeFormat('nl-NL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'Europe/Amsterdam',
    }).format(date);
}

export function getReadingTimeInMinutes(body: string): number
{
    const words = body.trim().match(/\S+/g)?.length ?? 0;

    return Math.max(1, Math.ceil(words / 200));
}