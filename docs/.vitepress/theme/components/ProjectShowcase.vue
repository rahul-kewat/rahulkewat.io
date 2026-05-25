<template>
  <section class="rk-projects rk-section">
    <div class="rk-projects__head rk-reveal">
      <span class="rk-section__eyebrow">Selected work</span>
      <h2 class="rk-section__title">
        Projects that <span class="rk-grad-text">moved the needle.</span>
      </h2>
      <p class="rk-section__lede">
        A glimpse into recent collaborations — from scrappy MVPs to production
        systems serving thousands of users.
      </p>
    </div>

    <div class="rk-projects__list">
      <article
        v-for="(p, idx) in projects"
        :key="p.title"
        class="rk-project rk-card rk-reveal"
        :data-delay="idx * 100"
      >
        <div class="rk-project__media">
          <div class="rk-project__media-pattern"></div>
          <div class="rk-project__year">{{ p.year }}</div>
          <div class="rk-project__emoji">{{ p.emoji }}</div>
        </div>
        <div class="rk-project__body">
          <div class="rk-project__tags">
            <span v-for="t in p.tags" :key="t" class="rk-project__tag">{{ t }}</span>
          </div>
          <h3 class="rk-project__title">{{ p.title }}</h3>
          <p class="rk-project__desc">{{ p.desc }}</p>
          <div class="rk-project__meta">
            <span class="rk-project__role">{{ p.role }}</span>
            <span class="rk-project__result">{{ p.result }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'SaaS Onboarding Revamp',
    desc: 'Redesigned activation flow for a B2B SaaS — cut time-to-value by 40% and lifted week-1 retention by 18%.',
    tags: ['Product', 'UX', 'Conversion'],
    year: '2025',
    emoji: '🚀',
    role: 'Product consultant',
    result: '+18% retention',
  },
  {
    title: 'Content Engine for a Solopreneur',
    desc: 'Built a repeatable LinkedIn + newsletter system. Grew audience from 2k to 32k in under 6 months.',
    tags: ['Brand', 'Content', 'Growth'],
    year: '2024',
    emoji: '📈',
    role: 'Brand strategist',
    result: '16x audience',
  },
  {
    title: 'Marketplace MVP',
    desc: 'Took a two-sided marketplace from sketch to launch in 9 weeks. Stripe-powered, fully serverless.',
    tags: ['Engineering', 'Stripe', 'Serverless'],
    year: '2024',
    emoji: '🛠️',
    role: 'Tech lead',
    result: 'Launched in 9 wks',
  },
  {
    title: 'Cohort-based Course',
    desc: 'Designed and delivered a 6-week freelancing cohort. NPS of 78, ~$60k in revenue across two batches.',
    tags: ['Education', 'Cohort', 'Operations'],
    year: '2023',
    emoji: '🎓',
    role: 'Course creator',
    result: 'NPS 78',
  },
];
</script>

<style scoped>
.rk-projects__head {
  text-align: center;
  margin: 0 auto 3rem;
}

.rk-projects__head .rk-section__lede { margin-left: auto; margin-right: auto; }

.rk-projects__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

@media (max-width: 800px) {
  .rk-projects__list { grid-template-columns: 1fr; }
}

.rk-project {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.rk-project__media {
  position: relative;
  aspect-ratio: 16 / 9;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: var(--rk-surface);
  color: var(--rk-fg);
  border-bottom: 1px solid var(--rk-border);
}

.rk-project__media::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 100%, var(--rk-accent-soft), transparent 60%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s var(--rk-ease);
}

.rk-project:hover .rk-project__media::after { opacity: 1; }

.rk-project__media-pattern {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 20%, color-mix(in srgb, var(--rk-fg) 14%, transparent) 1px, transparent 1px),
    radial-gradient(circle at 80% 70%, color-mix(in srgb, var(--rk-fg) 14%, transparent) 1px, transparent 1px);
  background-size: 24px 24px, 32px 32px;
  opacity: 0.5;
}

.rk-project__year {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--vp-c-text-2);
  background: var(--rk-bg);
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  border: 1px solid var(--rk-border);
}

.rk-project__emoji {
  position: relative;
  z-index: 1;
  font-size: 4rem;
  filter: grayscale(0.2) drop-shadow(0 4px 14px color-mix(in srgb, var(--rk-fg) 18%, transparent));
  transition: transform 0.5s var(--rk-ease), filter 0.5s var(--rk-ease);
}

.rk-project:hover .rk-project__emoji {
  filter: grayscale(0) drop-shadow(0 4px 18px var(--rk-accent-glow));
}

.rk-project:hover .rk-project__emoji {
  transform: scale(1.15) rotate(-6deg);
}

.rk-project__body {
  padding: 1.5rem;
}

.rk-project__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.85rem;
}

.rk-project__tag {
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  border: 1px solid var(--rk-border);
  color: var(--vp-c-text-2);
}

.rk-project__title {
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: -0.01em;
  margin: 0 0 0.5rem;
  color: var(--rk-fg);
}

.rk-project__desc {
  margin: 0 0 1rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  font-size: 0.95rem;
}

.rk-project__meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  border-top: 1px dashed var(--rk-border);
  padding-top: 0.85rem;
}

.rk-project__result {
  font-weight: 700;
  color: var(--rk-accent);
  letter-spacing: 0.01em;
}
</style>
