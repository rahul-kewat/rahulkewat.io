<template>
  <footer class="rk-footer">
    <div class="rk-footer__inner">
      <div class="rk-footer__brand">
        <div class="rk-footer__logo">
          <img src="/rahulkewat_logo.png" alt="Rahul Kewat logo" />
          <span>Rahul Kewat</span>
        </div>
        <p>
          Helping freelancers, founders, and creators build a craft-led
          business they're proud of.
        </p>
        <div class="rk-footer__socials">
          <a
            v-for="s in socials"
            :key="s.label"
            :href="s.href"
            target="_blank"
            rel="noopener"
            :aria-label="s.label"
          >
            <span v-html="s.icon"></span>
          </a>
        </div>
      </div>

      <div class="rk-footer__cols">
        <div v-for="col in cols" :key="col.title" class="rk-footer__col">
          <h4>{{ col.title }}</h4>
          <ul>
            <li v-for="l in col.links" :key="l.label">
              <a :href="l.href" :target="l.external ? '_blank' : '_self'" :rel="l.external ? 'noopener' : null">
                {{ l.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="rk-footer__bottom">
      <span>© {{ year }} Rahul Kewat. Built with VitePress &amp; Vue 3.</span>
      <span class="rk-footer__made">Crafted with <span aria-label="love">♥</span> in India</span>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();

const socials = [
  {
    label: 'Upwork',
    href: 'https://www.upwork.com/freelancers/~017e44b615de910457',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12c1.5 3 4.5 3 6 0"/></svg>',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@iamrahulkewat',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/rahulkewat_/',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rahulkewat/',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/rahul-kewat',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  },
];

const cols = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Free tools', href: '/free-tools/' },
      { label: 'Freelancing playbook', href: '/freelancing/' },
      { label: 'Best tools', href: '/best-tools/' },
    ],
  },
  {
    title: 'Work with me',
    links: [
      { label: 'Book a 1:1 call', href: 'https://topmate.io/rahulkewat/1185547', external: true },
      { label: 'Consulting', href: '/services/markdown-examples' },
      { label: 'Workshops', href: '/services/api-examples' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rahulkewat/', external: true },
      { label: 'YouTube', href: 'https://www.youtube.com/@iamrahulkewat', external: true },
      { label: 'Instagram', href: 'https://www.instagram.com/rahulkewat_/', external: true },
      { label: 'GitHub', href: 'https://github.com/rahul-kewat', external: true },
    ],
  },
];
</script>

<style scoped>
.rk-footer {
  position: relative;
  margin-top: 4rem;
  padding: 4rem 1.5rem 2rem;
  border-top: 1px solid var(--vp-c-divider);
  background: var(--rk-glass-bg);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.rk-footer__inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  gap: 3rem;
}

@media (max-width: 800px) {
  .rk-footer__inner { grid-template-columns: 1fr; gap: 2.5rem; }
}

.rk-footer__brand p {
  color: var(--vp-c-text-2);
  margin: 1rem 0 1.5rem;
  max-width: 360px;
  line-height: 1.6;
  font-size: 0.95rem;
}

.rk-footer__logo {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: -0.01em;
}

.rk-footer__logo img { width: 28px; height: 28px; border-radius: 8px; }

.rk-footer__socials { display: flex; gap: 0.5rem; }

.rk-footer__socials a {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  background: var(--rk-glass-bg);
  transition: transform 0.3s var(--rk-ease), color 0.3s var(--rk-ease), border-color 0.3s var(--rk-ease), background 0.3s var(--rk-ease);
}

.rk-footer__socials a:hover {
  transform: translateY(-3px);
  color: var(--rk-bg);
  background: var(--rk-accent);
  border-color: var(--rk-accent);
}

.rk-footer__cols {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

@media (max-width: 600px) {
  .rk-footer__cols { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
}

.rk-footer__col h4 {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
  margin: 0 0 1rem;
}

.rk-footer__col ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.rk-footer__col a {
  color: var(--vp-c-text-2);
  font-size: 0.92rem;
  text-decoration: none;
  transition: color 0.25s var(--rk-ease);
}

.rk-footer__col a:hover {
  color: var(--rk-accent);
}

.rk-footer__bottom {
  max-width: 1200px;
  margin: 3rem auto 0;
  padding-top: 1.5rem;
  border-top: 1px dashed var(--vp-c-divider);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.82rem;
  color: var(--vp-c-text-3);
  flex-wrap: wrap;
  gap: 0.75rem;
}

.rk-footer__made span { color: var(--rk-accent); font-size: 1rem; }
</style>
