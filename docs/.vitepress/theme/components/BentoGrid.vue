<template>
  <section class="rk-bento rk-section">
    <div class="rk-bento__head rk-reveal">
      <span class="rk-section__eyebrow">What I do</span>
      <h2 class="rk-section__title">
        Everything you need to <span class="rk-grad-text">go pro</span>.
      </h2>
      <p class="rk-section__lede">
        From mindset to systems to high-leverage offers — a complete operating
        system for running freelance & solo businesses that compound.
      </p>
    </div>

    <div class="rk-bento__grid">
      <a
        v-for="(item, idx) in items"
        :key="item.title"
        :href="item.link"
        :target="item.external ? '_blank' : '_self'"
        :rel="item.external ? 'noopener' : null"
        class="rk-bento__card rk-card rk-reveal"
        :class="item.span"
        :data-delay="idx * 90"
      >
        <div class="rk-bento__icon" v-html="item.icon"></div>
        <h3 class="rk-bento__title">{{ item.title }}</h3>
        <p class="rk-bento__desc">{{ item.desc }}</p>
        <span class="rk-bento__arrow" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <div class="rk-bento__shine" aria-hidden="true"></div>
      </a>
    </div>
  </section>
</template>

<script setup>
const stroke = (path) =>
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;

const items = [
  {
    title: 'Freelancing Playbook',
    desc: 'A 50-lesson course distilling 7 years of client work, pricing tactics, and proposals that actually close.',
    link: '/freelancing/',
    span: 'is-tall',
    icon: stroke('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'),
  },
  {
    title: '1:1 Mentorship',
    desc: 'Book a call. Bring your bottleneck. Walk away with a plan.',
    link: 'https://topmate.io/rahulkewat/1185547',
    external: true,
    icon: stroke('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'),
  },
  {
    title: 'Free Website Builder',
    desc: 'Build a stunning portfolio in 5 minutes. No login. Download & host anywhere.',
    link: '/free-tools/website-builder',
    icon: stroke('<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>'),
  },
  {
    title: 'Personal Brand',
    desc: 'Build a brand that earns you opportunities while you sleep — content, positioning, and proof.',
    link: '/freelancing/building-a-personal-brand',
    span: 'is-wide',
    icon: stroke('<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>'),
  },
  {
    title: 'Pricing & Proposals',
    desc: 'Stop trading hours. Package outcomes. Charge what you\'re worth.',
    link: '/freelancing/pricing-your-services-right',
    icon: stroke('<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>'),
  },
  {
    title: 'Scale & Systems',
    desc: 'From solo hustle to 6-figure business — operations, hiring, and offers.',
    link: '/freelancing/scailing-your-freelancing-income',
    icon: stroke('<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'),
  },
];
</script>

<style scoped>
.rk-bento__head {
  text-align: center;
  margin: 0 auto 3rem;
}

.rk-bento__head .rk-section__lede { margin-left: auto; margin-right: auto; }

.rk-bento__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(180px, auto);
  gap: 1rem;
}

@media (max-width: 900px) {
  .rk-bento__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .rk-bento__grid { grid-template-columns: 1fr; }
}

.rk-bento__card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1.6rem;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  isolation: isolate;
}

.rk-bento__card.is-tall { grid-row: span 2; }

@media (min-width: 901px) {
  .rk-bento__card.is-wide { grid-column: span 2; }
}

.rk-bento__icon {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  margin-bottom: 1rem;
  color: var(--rk-fg);
  background: var(--rk-bg);
  border: 1px solid var(--rk-border);
  transition:
    transform 0.4s var(--rk-ease),
    color 0.4s var(--rk-ease),
    background 0.4s var(--rk-ease),
    border-color 0.4s var(--rk-ease);
}

.rk-bento__card:hover .rk-bento__icon {
  transform: rotate(-6deg) scale(1.06);
  color: var(--rk-bg);
  background: var(--rk-accent);
  border-color: var(--rk-accent);
}

.rk-bento__title {
  font-size: 1.25rem;
  font-weight: 800;
  margin: 0 0 0.5rem;
  letter-spacing: -0.02em;
  color: var(--rk-fg);
}

.rk-bento__desc {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  line-height: 1.55;
}

.rk-bento__arrow {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: transparent;
  border: 1px solid var(--rk-border);
  color: var(--vp-c-text-2);
  transition: transform 0.45s var(--rk-ease), background 0.45s var(--rk-ease), color 0.45s var(--rk-ease), border-color 0.45s var(--rk-ease);
}

.rk-bento__card:hover .rk-bento__arrow {
  transform: translate(2px, -2px);
  background: var(--rk-accent);
  color: var(--rk-bg);
  border-color: var(--rk-accent);
}

.rk-bento__shine {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%),
              var(--rk-accent-soft), transparent 40%);
  opacity: 0;
  transition: opacity 0.4s var(--rk-ease);
  z-index: -1;
}

.rk-bento__card:hover .rk-bento__shine { opacity: 1; }
</style>
