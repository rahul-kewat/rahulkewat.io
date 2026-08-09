<template>
  <section class="rk-travel rk-section">
    <div class="rk-travel__head rk-reveal">
      <span class="rk-section__eyebrow">Travel notes</span>
      <h2 class="rk-section__title">
        Cities I've <span class="rk-grad-text">walked</span>.
      </h2>
      <p class="rk-section__lede">
        {{ stats.cities }} destinations, {{ stats.places }} pinned places —
        must-visits, optional detours, and a map for each city.
      </p>
    </div>

    <div class="rk-travel__rail rk-reveal" aria-label="Destinations">
      <a
        v-for="city in cities"
        :key="city.slug"
        :href="city.href"
        class="rk-travel__pill"
        :style="{ '--accent': city.accent }"
      >
        <span class="rk-travel__pill-mark">{{ city.mark }}</span>
        {{ city.name }}
      </a>
    </div>

    <div class="rk-travel__grid">
      <a
        v-for="(city, idx) in featured"
        :key="city.slug"
        :href="city.href"
        class="rk-travel__card rk-reveal"
        :class="{ 'is-wide': idx === 0 }"
        :data-delay="idx * 90"
        :style="{ '--accent': city.accent }"
      >
        <div
          class="rk-travel__card-wash"
          :style="{ background: city.coverGradient }"
          aria-hidden="true"
        ></div>
        <div class="rk-travel__card-top">
          <span class="rk-travel__region">{{ city.region }}</span>
          <span class="rk-travel__days">{{ city.days }}</span>
        </div>
        <h3 class="rk-travel__name">{{ city.name }}</h3>
        <p class="rk-travel__tagline">{{ city.tagline }}</p>
        <div class="rk-travel__stats">
          <span><strong>{{ city.mustCount }}</strong> must</span>
          <span class="rk-travel__dot" aria-hidden="true"></span>
          <span><strong>{{ city.optionalCount }}</strong> optional</span>
        </div>
        <span class="rk-travel__cta">
          Open guide
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </a>
    </div>

    <div class="rk-travel__all rk-reveal" data-delay="200">
      <a href="/travel/">Browse all {{ stats.cities }} destinations →</a>
    </div>
  </section>
</template>

<script setup>
import { getCitySummaries, getTravelStats } from '../data/travel/cities.js';

const cities = getCitySummaries();
const stats = getTravelStats();
const featured = cities.filter((c) => c.featured).slice(0, 4);
</script>

<style scoped>
.rk-travel__head {
  text-align: center;
  margin: 0 auto 1.75rem;
}

.rk-travel__head .rk-section__lede {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
}

.rk-travel__rail {
  display: flex;
  flex-wrap: nowrap;
  gap: 0.5rem;
  overflow-x: auto;
  padding: 0.25rem 0 1.5rem;
  margin-bottom: 0.5rem;
  scrollbar-width: thin;
  -webkit-overflow-scrolling: touch;
}

.rk-travel__pill {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--rk-border);
  background: var(--rk-glass-bg);
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 0.86rem;
  font-weight: 650;
  transition: background 0.25s var(--rk-ease), color 0.25s var(--rk-ease), border-color 0.25s var(--rk-ease);
}

.rk-travel__pill:hover {
  color: var(--rk-bg);
  background: var(--rk-fg);
  border-color: var(--rk-fg);
}

.rk-travel__pill-mark {
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent, var(--rk-accent));
  font-weight: 800;
}

.rk-travel__pill:hover .rk-travel__pill-mark {
  color: color-mix(in srgb, var(--rk-bg) 70%, var(--accent, var(--rk-accent)));
}

.rk-travel__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

@media (max-width: 700px) {
  .rk-travel__grid { grid-template-columns: 1fr; }
}

.rk-travel__card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.6rem 1.5rem 1.4rem;
  text-decoration: none;
  color: inherit;
  border: 1px solid var(--rk-border);
  border-radius: var(--rk-radius-xl);
  background: var(--rk-glass-bg);
  overflow: hidden;
  isolation: isolate;
  transition:
    transform 0.4s var(--rk-ease),
    border-color 0.4s var(--rk-ease),
    box-shadow 0.4s var(--rk-ease);
}

@media (min-width: 701px) {
  .rk-travel__card.is-wide {
    grid-column: span 2;
    min-height: 220px;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-between;
    gap: 0 2rem;
  }

  .rk-travel__card.is-wide .rk-travel__tagline {
    max-width: 36rem;
  }
}

.rk-travel__card:hover {
  transform: translateY(-4px);
  border-color: color-mix(in srgb, var(--accent, var(--rk-accent)) 40%, var(--rk-border));
  box-shadow: 0 18px 48px color-mix(in srgb, var(--rk-fg) 12%, transparent);
}

.rk-travel__card-wash {
  position: absolute;
  inset: 0;
  z-index: -1;
  opacity: 0.95;
}

.rk-travel__card-top {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  width: 100%;
}

.rk-travel__region {
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 700;
}

.rk-travel__name {
  margin: 0 0 0.5rem;
  font-size: 1.75rem;
  font-weight: 850;
  letter-spacing: -0.03em;
  color: var(--rk-fg);
}

.rk-travel__card.is-wide .rk-travel__name {
  font-size: clamp(1.9rem, 3vw, 2.4rem);
}

.rk-travel__tagline {
  margin: 0 0 1.25rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  flex: 1;
}

.rk-travel__stats {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 0.88rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1.1rem;
}

.rk-travel__stats strong {
  color: var(--rk-fg);
  font-weight: 700;
}

.rk-travel__dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--rk-border);
}

.rk-travel__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  font-weight: 650;
  color: var(--accent, var(--rk-accent));
}

.rk-travel__all {
  margin-top: 1.75rem;
  text-align: center;
}

.rk-travel__all a {
  color: var(--vp-c-text-2);
  font-weight: 600;
  text-decoration: none;
  transition: color 0.25s var(--rk-ease);
}

.rk-travel__all a:hover { color: var(--rk-accent); }
</style>
