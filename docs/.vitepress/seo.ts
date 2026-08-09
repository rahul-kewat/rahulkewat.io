/**
 * Sitewide SEO helpers for VitePress (rahulkewat.io).
 * Canonical host must stay in sync with sitemap.hostname.
 */

export const SITE_URL = 'https://rahulkewat.io';
export const SITE_NAME = 'Rahul Kewat';
export const DEFAULT_IMAGE = `${SITE_URL}/rahul_kewat.png`;
export const DEFAULT_DESCRIPTION =
  'Official website of Rahul Kewat (rahulkewat / therahulkewat) — freelance mentor, consultant, and creator. Freelancing playbooks, free tools, travel guides, and 1:1 mentorship.';

export const BRAND_ALIASES = [
  'Rahul Kewat',
  'rahulkewat',
  'therahulkewat',
  'Rahul Kewat freelance',
  'Rahul Kewat mentor',
];

export const SOCIAL_SAME_AS = [
  'https://www.linkedin.com/in/rahulkewat/',
  'https://www.youtube.com/@iamrahulkewat',
  'https://www.instagram.com/rahulkewat_/',
  'https://github.com/rahul-kewat',
  'https://www.upwork.com/freelancers/~017e44b615de910457',
  'https://twitter.com/irahulkewat',
  'https://topmate.io/rahulkewat',
];

/** Convert VitePress relativePath → absolute canonical URL */
export function toCanonical(relativePath = '') {
  let path = String(relativePath || '')
    .replace(/\\/g, '/')
    .replace(/(^|\/)index\.md$/, '$1')
    .replace(/\.md$/, '');

  if (!path || path === '/') return `${SITE_URL}/`;
  if (!path.startsWith('/')) path = `/${path}`;
  // Prefer trailing slash for section indexes; keep clean URLs without .html
  if (path.endsWith('/')) return `${SITE_URL}${path}`;
  // File pages: no forced trailing slash (cleanUrls)
  return `${SITE_URL}${path}`;
}

export function ensureDescription(pageData) {
  const existing = (pageData.description || pageData.frontmatter?.description || '').trim();
  if (existing) return existing;

  const title = (pageData.title || pageData.frontmatter?.title || '').trim();
  if (!title) return DEFAULT_DESCRIPTION;

  return `${title} by Rahul Kewat (rahulkewat) — practical freelancing advice, tools, and field notes from a six-figure freelancer.`;
}

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Rahul Kewat',
    alternateName: BRAND_ALIASES.filter((n) => n !== 'Rahul Kewat'),
    url: SITE_URL,
    image: DEFAULT_IMAGE,
    jobTitle: 'Freelance Mentor & Consultant',
    description: DEFAULT_DESCRIPTION,
    nationality: 'Indian',
    sameAs: SOCIAL_SAME_AS,
    knowsAbout: [
      'Freelancing',
      'Consulting',
      'Personal branding',
      'Client acquisition',
      'Pricing',
      'Travel',
    ],
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    alternateName: ['rahulkewat', 'therahulkewat', 'Rahul Kewat'],
    description: DEFAULT_DESCRIPTION,
    publisher: { '@id': `${SITE_URL}/#person` },
    inLanguage: 'en',
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Rahul Kewat',
    alternateName: ['rahulkewat', 'therahulkewat'],
    url: SITE_URL,
    logo: `${SITE_URL}/rahulkewat_logo.png`,
    image: DEFAULT_IMAGE,
    sameAs: SOCIAL_SAME_AS,
    founder: { '@id': `${SITE_URL}/#person` },
  };
}

export function webPageJsonLd({ title, description, url, type = 'WebPage' }) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#person` },
    author: { '@id': `${SITE_URL}/#person` },
    inLanguage: 'en',
  };
}

export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildBreadcrumbs(relativePath, title) {
  const crumbs = [{ name: 'Home', url: `${SITE_URL}/` }];
  const parts = String(relativePath || '')
    .replace(/\\/g, '/')
    .replace(/\.md$/, '')
    .split('/')
    .filter(Boolean);

  if (parts[parts.length - 1] === 'index') parts.pop();

  let acc = '';
  parts.forEach((part, idx) => {
    acc += `/${part}`;
    const isLast = idx === parts.length - 1;
    const label = isLast
      ? title || part
      : part
          .split('-')
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');
    crumbs.push({
      name: label,
      url: isLast ? toCanonical(relativePath) : `${SITE_URL}${acc}/`,
    });
  });

  return crumbs;
}

/** Full JSON-LD graph string for a VitePress pageData object */
export function buildPageJsonLd(pageData) {
  const relativePath = pageData?.relativePath || '';
  const url = toCanonical(relativePath);
  const pageTitle = pageData?.frontmatter?.title || pageData?.title || SITE_NAME;
  const pageDesc = ensureDescription(pageData || {});
  const isHome = relativePath === 'index.md' || relativePath === '';

  const nodes = [
    personJsonLd(),
    websiteJsonLd(),
    organizationJsonLd(),
    webPageJsonLd({
      title: pageTitle,
      description: pageDesc,
      url,
      type: isHome ? 'ProfilePage' : 'WebPage',
    }),
  ];

  if (!isHome) {
    nodes.push(breadcrumbJsonLd(buildBreadcrumbs(relativePath, pageTitle)));
  }

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': nodes.map(({ '@context': _ctx, ...rest }) => rest),
  });
}

