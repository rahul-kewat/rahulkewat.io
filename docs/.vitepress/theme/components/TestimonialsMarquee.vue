<template>
  <section class="rk-testi rk-section">
    <div class="rk-testi__head rk-reveal">
      <span class="rk-section__eyebrow">Kind words</span>
      <h2 class="rk-section__title">
        From folks I've <span class="rk-grad-text">worked with.</span>
      </h2>
    </div>

    <div class="rk-testi__marquee" aria-hidden="false">
      <div class="rk-testi__track">
        <article
          v-for="(t, idx) in doubled"
          :key="idx"
          class="rk-testi__card rk-card"
        >
          <div class="rk-testi__quote-mark">"</div>
          <p class="rk-testi__quote">{{ t.quote }}</p>
          <div class="rk-testi__person">
            <div class="rk-testi__avatar">{{ t.initials }}</div>
            <div class="rk-testi__meta">
              <strong>{{ t.name }}</strong>
              <span>{{ t.role }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const testimonials = [
  {
    name: 'Aarav Mehta',
    role: 'Founder, Indie SaaS',
    initials: 'AM',
    quote:
      "Rahul gave me the structure I'd been missing. Within 8 weeks I went from inconsistent gigs to a steady $8k/month pipeline.",
  },
  {
    name: 'Priya Sharma',
    role: 'Freelance designer',
    initials: 'PS',
    quote:
      "His proposals framework alone tripled my close rate. Worth every rupee, ten times over.",
  },
  {
    name: 'Daniel Cooper',
    role: 'CTO, Stealth startup',
    initials: 'DC',
    quote:
      "Sharp, calm, and incredibly practical. Rahul helped us ship our MVP faster than I thought possible.",
  },
  {
    name: 'Lina Park',
    role: 'Solo creator',
    initials: 'LP',
    quote:
      "I finally feel like a business owner instead of a busy contractor. The mindset shift alone was worth it.",
  },
  {
    name: 'Marco Bianchi',
    role: 'Agency founder',
    initials: 'MB',
    quote:
      "Rahul's frameworks helped me confidently raise rates by 60%. None of my best clients flinched.",
  },
];

const doubled = computed(() => [...testimonials, ...testimonials]);
</script>

<style scoped>
.rk-testi__head {
  text-align: center;
  margin: 0 auto 3rem;
}

.rk-testi__marquee {
  position: relative;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
}

.rk-testi__track {
  display: flex;
  gap: 1rem;
  width: max-content;
  animation: rk-marquee 50s linear infinite;
}

.rk-testi__marquee:hover .rk-testi__track {
  animation-play-state: paused;
}

@keyframes rk-marquee {
  to { transform: translateX(-50%); }
}

.rk-testi__card {
  flex: 0 0 360px;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
}

.rk-testi__quote-mark {
  position: absolute;
  top: 0.25rem;
  right: 1.25rem;
  font-size: 4rem;
  font-family: Georgia, serif;
  line-height: 1;
  color: var(--rk-accent);
  opacity: 0.5;
}

.rk-testi__quote {
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.6;
  color: var(--rk-fg);
}

.rk-testi__person {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: auto;
  padding-top: 0.85rem;
  border-top: 1px dashed var(--rk-border);
}

.rk-testi__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: var(--rk-bg);
  background: var(--rk-fg);
  font-weight: 700;
  font-size: 0.78rem;
  letter-spacing: 0.06em;
}

.rk-testi__meta {
  display: flex;
  flex-direction: column;
  font-size: 0.85rem;
  line-height: 1.3;
}

.rk-testi__meta strong { color: var(--rk-fg); }
.rk-testi__meta span { color: var(--vp-c-text-2); font-size: 0.78rem; }

@media (prefers-reduced-motion: reduce) {
  .rk-testi__track { animation: none; }
}

@media (max-width: 600px) {
  .rk-testi__card { flex-basis: 280px; }
}
</style>
