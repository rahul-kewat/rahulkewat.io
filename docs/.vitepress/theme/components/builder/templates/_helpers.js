/**
 * HTML escape for safe interpolation into template strings.
 */
export const esc = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

/**
 * Returns Google Fonts <link> markup for chosen heading + body fonts.
 */
export const fontsLink = (heading, body) => {
  const families = new Set([heading, body].filter(Boolean));
  if (!families.size) return '';
  const url = Array.from(families)
    .map((f) => `family=${encodeURIComponent(f)}:wght@400;500;600;700;800`)
    .join('&');
  return `<link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?${url}&display=swap" rel="stylesheet">`;
};

/**
 * Generates SEO + Open Graph + Twitter + JSON-LD <head> markup.
 */
export const seoHead = (config) => {
  const { seo, hero } = config.content;
  const fullName = hero.name || 'My Portfolio';
  const role = hero.role || '';
  const title = seo.title || `${fullName} — ${role}`;
  const description = seo.description || hero.tagline || '';
  const url = seo.siteUrl || '';
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: fullName,
    jobTitle: role,
    description,
    url,
    sameAs: Object.values(config.content.contact.social || {}).filter(Boolean),
  };
  return `
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  ${seo.keywords ? `<meta name="keywords" content="${esc(seo.keywords)}">` : ''}
  <meta name="author" content="${esc(fullName)}">
  <meta name="robots" content="index, follow">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  ${url ? `<meta property="og:url" content="${esc(url)}">` : ''}
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  ${seo.twitter ? `<meta name="twitter:creator" content="${esc(seo.twitter)}">` : ''}
  ${url ? `<link rel="canonical" href="${esc(url)}">` : ''}
  <script type="application/ld+json">${JSON.stringify(personSchema, null, 2)}</script>`;
};

/**
 * Returns inline SVG markup for a known social network, sized 18px.
 */
export const socialIcon = (key) => {
  const map = {
    twitter:
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M18.244 2H21l-6.52 7.45L22 22h-6.84l-4.77-6.235L4.8 22H2.04l6.97-7.97L1.5 2h6.99l4.32 5.706L18.244 2zm-1.196 18h1.84L7.05 4h-1.97l11.968 16z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76c.97 0 1.75.79 1.75 1.76s-.78 1.76-1.75 1.76zM20 19h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V19h-3V8h2.88v1.5h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59V19z"/></svg>',
    github:
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.17.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.19-1.48 3.15-1.17 3.15-1.17.62 1.57.23 2.73.11 3.02.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.37-5.25 5.65.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.13 0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>',
    upwork:
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M18.561 5.025c-2.539 0-4.51 1.647-5.31 4.362-1.22-1.832-2.148-4.032-2.687-5.886H7.828v7.105c-.002 1.404-1.141 2.543-2.547 2.545-1.406-.002-2.543-1.142-2.545-2.545V3.5H0v7.105c0 2.911 2.371 5.298 5.282 5.298 2.913 0 5.283-2.387 5.283-5.298V9.416c.529 1.106 1.182 2.228 1.974 3.219L10.865 20.5h2.797l1.213-5.705c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.45 5.439-5.445 0-2.998-2.439-5.434-5.439-5.434zm0 8.132c-1.102 0-2.135-.467-3.074-1.227l.228-1.074.008-.042c.207-1.143.849-3.058 2.839-3.058 1.492 0 2.703 1.211 2.703 2.7 0 1.489-1.211 2.701-2.704 2.701z"/></svg>',
    dribbble:
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm9.94 12c-.04.66-.16 1.31-.34 1.94-1.41-.29-2.86-.45-4.32-.48.06-.93-.05-1.86-.34-2.74 1.7-.69 3.27-1.65 4.63-2.84.31 1.32.39 2.69.37 4.12zM18.5 5.7c-1.16 1.13-2.51 2.05-4 2.71-.88-1.83-1.97-3.57-3.25-5.16 2.74-.32 5.43.6 7.25 2.45zM9 4.06a23 23 0 0 1 3.36 5.18 21 21 0 0 1-9.84 1.18A10 10 0 0 1 9 4.06zM2.05 13.32a23 23 0 0 0 11.13-1.5l.6 1.43a14 14 0 0 0-7.36 5.7 10 10 0 0 1-4.37-5.63zm6.85 7.31a12 12 0 0 1 6.42-5.04 30 30 0 0 1 1.74 6.13 10 10 0 0 1-8.16-1.09zm10.16-.5a31 31 0 0 0-1.62-5.85c1.34.05 2.66.21 3.94.49a10 10 0 0 1-2.32 5.36z"/></svg>',
    behance:
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.96c.13 3.211 3.483 3.312 4.588 2.029h3.178zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>',
  };
  return map[key] || '';
};

/**
 * Filter out empty social entries and convert to [{key, label, url}] list.
 */
export const socialList = (social = {}) =>
  Object.entries(social)
    .filter(([, v]) => v)
    .map(([key, url]) => ({
      key,
      url,
      label: key.charAt(0).toUpperCase() + key.slice(1),
    }));

/**
 * Wraps a generated body and theme into a full HTML5 document string.
 */
export const wrapDocument = ({ config, head, css, body }) => {
  return `<!doctype html>
<html lang="en" data-theme="${config.theme.mode}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${seoHead(config)}
  ${fontsLink(config.theme.fontHeading, config.theme.fontBody)}
  ${head || ''}
  <style>${css}</style>
</head>
<body>
${body}
</body>
</html>`;
};
