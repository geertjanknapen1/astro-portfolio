
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error(
      'De site-URL ontbreekt in astro.config.mjs.'
    );
  }

  const base = import.meta.env.BASE_URL;

  const normalizedBase = `/${base}`
    .replace(/\/+/g, '/')
    .replace(/\/?$/, '/');

  const sitemapUrl = new URL(
    `${normalizedBase}sitemap-index.xml`,
    site
  );

  const robots = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${sitemapUrl.href}`,
    '',
  ].join('\n');

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
