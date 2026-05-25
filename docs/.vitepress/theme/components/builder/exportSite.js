import { renderTemplate } from './templates/index.js';
import { triggerDownload } from './useBuilder.js';

const slugify = (s) =>
  String(s || 'site')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 50) || 'site';

export const exportHtml = (config) => {
  const html = renderTemplate(config);
  const filename = `${slugify(config.content.hero.name)}-website.html`;
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  triggerDownload(blob, filename);
};

export const buildSitemap = (siteUrl) => {
  const url = (siteUrl || '').replace(/\/+$/, '') || 'https://example.com';
  const today = new Date().toISOString().split('T')[0];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${url}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
};

export const buildRobots = (siteUrl) => {
  const url = (siteUrl || '').replace(/\/+$/, '') || 'https://example.com';
  return `User-agent: *
Allow: /

Sitemap: ${url}/sitemap.xml
`;
};

/**
 * Download a "deploy bundle" as three separate files via sequential clicks.
 * Browsers will prompt once when the user enables multi-download.
 */
export const exportBundle = (config) => {
  const html = renderTemplate(config);
  const url = config.content.seo.siteUrl;
  const blobs = [
    { content: html, name: 'index.html', type: 'text/html;charset=utf-8' },
    { content: buildSitemap(url), name: 'sitemap.xml', type: 'application/xml' },
    { content: buildRobots(url), name: 'robots.txt', type: 'text/plain' },
  ];
  blobs.forEach((b, i) => {
    setTimeout(() => {
      triggerDownload(new Blob([b.content], { type: b.type }), b.name);
    }, i * 350);
  });
};

export const livePreview = (config) => renderTemplate(config);
