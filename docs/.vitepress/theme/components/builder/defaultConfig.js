/**
 * Default config schema used by every template.
 * Editing this changes the seed data used on first load.
 */
export const defaultConfig = () => ({
  template: 'modern',
  theme: {
    primary: '#8b5cf6',
    accent: '#06b6d4',
    bg: '#0b0b14',
    surface: '#15151f',
    text: '#f5f5fa',
    muted: '#a3a3b3',
    fontHeading: 'Space Grotesk',
    fontBody: 'Inter',
    radius: 16,
    mode: 'dark', // 'dark' | 'light'
  },
  content: {
    seo: {
      title: 'Jordan Reyes — Freelance Product Designer',
      description:
        'Award-winning product designer helping startups craft delightful, conversion-focused digital experiences. Available for select projects.',
      keywords: 'product designer, freelance designer, ux designer portfolio',
      siteUrl: 'https://example.com',
      twitter: '@jordanreyes',
    },
    hero: {
      name: 'Jordan Reyes',
      role: 'Freelance Product Designer',
      headline: 'I design digital products people actually love.',
      tagline:
        "I help ambitious founders ship beautiful, high-converting interfaces — without the fluff.",
      avatar: '',
      ctaPrimary: { text: 'Hire me', link: 'mailto:hello@example.com' },
      ctaSecondary: { text: 'View work', link: '#work' },
    },
    about: {
      enabled: true,
      heading: 'About me',
      body:
        "Hey, I'm Jordan — a product designer with 7+ years of experience working with venture-backed startups and indie founders. I specialise in turning early ideas into polished products that ship and scale. When I'm not designing, I'm probably hiking or playing chess badly.",
      highlights: [
        '7+ years of product design experience',
        'Worked with 50+ founders across 12 countries',
        'Top-rated on Upwork & Toptal',
      ],
    },
    services: {
      enabled: true,
      heading: 'Services',
      subheading: 'How I can help you ship.',
      items: [
        {
          icon: '🎯',
          title: 'Product strategy',
          description:
            'Translate fuzzy ideas into a clear, prioritized product roadmap.',
        },
        {
          icon: '🎨',
          title: 'UI / UX design',
          description:
            'Beautiful, accessible interfaces tested against real user behavior.',
        },
        {
          icon: '🚀',
          title: 'Launch sprints',
          description:
            'From wireframe to production-ready Figma in two focused weeks.',
        },
      ],
    },
    projects: {
      enabled: true,
      heading: 'Selected work',
      subheading: 'Some recent collaborations.',
      items: [
        {
          title: 'SaaS Onboarding Revamp',
          description:
            'Redesigned activation flow for a B2B SaaS and lifted week-1 retention by 18%.',
          tags: ['UX', 'SaaS', 'Conversion'],
          link: '#',
          year: '2025',
        },
        {
          title: 'Fintech Mobile App',
          description:
            'Designed a personal-finance app from zero — featured in the App Store.',
          tags: ['Mobile', 'Fintech', 'Branding'],
          link: '#',
          year: '2024',
        },
        {
          title: 'Marketplace MVP',
          description:
            'Took a two-sided marketplace from sketch to launch in 9 weeks.',
          tags: ['MVP', 'Web'],
          link: '#',
          year: '2024',
        },
      ],
    },
    skills: {
      enabled: true,
      heading: 'Toolbox',
      items: [
        'Figma',
        'Notion',
        'Framer',
        'Webflow',
        'Linear',
        'Loom',
        'Mixpanel',
        'Tailwind',
      ],
    },
    testimonials: {
      enabled: true,
      heading: 'Kind words',
      items: [
        {
          quote:
            "Jordan delivered the cleanest design system we've ever shipped. Our investors literally clapped.",
          name: 'Aarav Mehta',
          role: 'Founder, Indie SaaS',
        },
        {
          quote:
            'Sharp eye, calm hands. Took our messy product brief and turned it into something gorgeous.',
          name: 'Lina Park',
          role: 'Solo creator',
        },
      ],
    },
    contact: {
      enabled: true,
      heading: "Let's build something good.",
      body: 'Always open to interesting briefs. Drop me a line — I usually reply within a day.',
      email: 'hello@example.com',
      social: {
        twitter: 'https://twitter.com/jordanreyes',
        linkedin: 'https://linkedin.com/in/jordanreyes',
        github: '',
        upwork: '',
        dribbble: '',
        behance: '',
      },
    },
  },
});
