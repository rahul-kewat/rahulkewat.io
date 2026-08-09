<template>
  <div class="rk-hub">
    <header class="rk-hub__hero">
      <div class="rk-hub__hero-wash" aria-hidden="true"></div>
      <span class="rk-section__eyebrow">Field notes</span>
      <h1 class="rk-hub__title">
        Places I've <span class="rk-grad-text">travelled</span>.
      </h1>
      <p class="rk-hub__lede">
        Map-first city guides with must-visits, optional detours, and the tips
        I actually used on the ground — not a scraped “top 50” list.
      </p>

      <dl class="rk-hub__stats">
        <div>
          <dt>{{ stats.cities }}</dt>
          <dd>cities</dd>
        </div>
        <div>
          <dt>{{ stats.places }}</dt>
          <dd>places pinned</dd>
        </div>
        <div>
          <dt>{{ stats.must }}</dt>
          <dd>must-visits</dd>
        </div>
      </dl>

      <nav class="rk-hub__route" aria-label="Jump to a city">
        <a
          v-for="city in cities"
          :key="city.slug"
          :href="`#city-${city.slug}`"
          class="rk-hub__route-chip"
        >
          {{ city.name }}
        </a>
      </nav>
    </header>

    <div class="rk-hub__toolbar">
      <div class="rk-hub__filters" role="tablist" aria-label="Filter by vibe">
        <button
          v-for="f in filters"
          :key="f"
          type="button"
          class="rk-hub__filter"
          :class="{ 'is-active': category === f }"
          @click="category = f"
        >
          {{ f }}
        </button>
      </div>
      <p class="rk-hub__count">{{ visible.length }} guide{{ visible.length === 1 ? '' : 's' }}</p>
    </div>

    <div v-if="featured.length && category === 'All'" class="rk-hub__featured">
      <a
        v-for="city in featured"
        :key="city.slug"
        :id="`city-${city.slug}`"
        :href="city.href"
        class="rk-hub__feature"
        :style="{ '--accent': city.accent }"
      >
        <div class="rk-hub__feature-wash" :style="{ background: city.coverGradient }" aria-hidden="true"></div>
        <div class="rk-hub__feature-top">
          <span class="rk-hub__mark">{{ city.mark }}</span>
          <span class="rk-hub__cat">{{ city.category }}</span>
        </div>
        <h2>{{ city.name }}</h2>
        <p>{{ city.tagline }}</p>
        <div class="rk-hub__feature-meta">
          <span>{{ city.region }} · {{ city.days }}</span>
          <span>{{ city.mustCount }} must · {{ city.optionalCount }} optional</span>
        </div>
        <span class="rk-hub__go">
          Open guide
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </a>
    </div>

    <div class="rk-hub__grid">
      <a
        v-for="(city, idx) in gridCities"
        :key="city.slug"
        :id="`city-${city.slug}`"
        :href="city.href"
        class="rk-hub__card"
        :style="{ '--accent': city.accent, '--i': idx }"
      >
        <div class="rk-hub__card-wash" :style="{ background: city.coverGradient }" aria-hidden="true"></div>
        <div class="rk-hub__card-top">
          <span class="rk-hub__mark">{{ city.mark }}</span>
          <span>{{ city.days }}</span>
        </div>
        <h2>{{ city.name }}</h2>
        <p class="rk-hub__region">{{ city.region }} · {{ city.category }}</p>
        <p class="rk-hub__tagline">{{ city.tagline }}</p>
        <div class="rk-hub__meta">
          <span>{{ city.mustCount }} must</span>
          <span class="rk-hub__dot" aria-hidden="true"></span>
          <span>{{ city.optionalCount }} optional</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { getCitySummaries, getTravelStats } from '../../data/travel/cities.js';

const cities = getCitySummaries();
const stats = getTravelStats();
const category = ref('All');

const filters = ['All', ...stats.categories];

const visible = computed(() =>
  category.value === 'All'
    ? cities
    : cities.filter((c) => c.category === category.value)
);

const featured = computed(() =>
  visible.value.filter((c) => c.featured).slice(0, 3)
);

const gridCities = computed(() => {
  if (category.value !== 'All') return visible.value;
  const featuredSlugs = new Set(featured.value.map((c) => c.slug));
  return visible.value.filter((c) => !featuredSlugs.has(c.slug));
});
</script>

<style scoped>
.rk-hub {
  max-width: 1120px;
  margin: 0 auto;
  padding: 5.5rem 1.5rem 5rem;
}

.rk-hub__hero {
  position: relative;
  margin-bottom: 2.5rem;
  padding-bottom: 0.5rem;
  max-width: 44rem;
}

.rk-hub__hero-wash {
  position: absolute;
  inset: -3rem -2rem auto;
  height: 280px;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(ellipse 70% 80% at 0% 20%, color-mix(in srgb, #c45c26 22%, transparent), transparent 60%),
    radial-gradient(ellipse 50% 60% at 80% 0%, color-mix(in srgb, var(--rk-accent) 16%, transparent), transparent 55%);
}

.rk-hub__title {
  margin: 1rem 0 0.85rem;
  font-size: clamp(2.4rem, 6vw, 3.8rem);
  font-weight: 900;
  letter-spacing: -0.045em;
  line-height: 1.02;
  color: var(--rk-fg);
}

.rk-hub__lede {
  margin: 0 0 1.75rem;
  color: var(--vp-c-text-2);
  font-size: 1.08rem;
  line-height: 1.65;
}

.rk-hub__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 0 0 1.75rem;
  max-width: 420px;
}

.rk-hub__stats div {
  padding: 0.85rem 0;
  border-top: 1px solid var(--rk-border);
}

.rk-hub__stats dt {
  margin: 0;
  font-size: 1.65rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--rk-fg);
}

.rk-hub__stats dd {
  margin: 0.15rem 0 0;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

.rk-hub__route {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.rk-hub__route-chip {
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  border: 1px solid var(--rk-border);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: background 0.25s var(--rk-ease), color 0.25s var(--rk-ease), border-color 0.25s var(--rk-ease);
}

.rk-hub__route-chip:hover {
  color: var(--rk-bg);
  background: var(--rk-fg);
  border-color: var(--rk-fg);
}

.rk-hub__toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.rk-hub__filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.rk-hub__filter {
  appearance: none;
  border: 1px solid var(--rk-border);
  background: transparent;
  color: var(--vp-c-text-2);
  border-radius: 999px;
  padding: 0.4rem 0.9rem;
  font: inherit;
  font-size: 0.82rem;
  font-weight: 650;
  cursor: pointer;
  transition: background 0.25s var(--rk-ease), color 0.25s var(--rk-ease), border-color 0.25s var(--rk-ease);
}

.rk-hub__filter.is-active {
  background: var(--rk-fg);
  color: var(--rk-bg);
  border-color: var(--rk-fg);
}

.rk-hub__count {
  margin: 0;
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}

.rk-hub__featured {
  display: grid;
  grid-template-columns: 1.35fr 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

@media (max-width: 900px) {
  .rk-hub__featured { grid-template-columns: 1fr; }
}

.rk-hub__feature {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 260px;
  padding: 1.6rem 1.5rem 1.4rem;
  border: 1px solid var(--rk-border);
  border-radius: var(--rk-radius-xl);
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  isolation: isolate;
  transition: transform 0.4s var(--rk-ease), border-color 0.4s var(--rk-ease), box-shadow 0.4s var(--rk-ease);
}

.rk-hub__feature:first-child { min-height: 300px; }

.rk-hub__feature:hover {
  transform: translateY(-4px);
  border-color: color-mix(in srgb, var(--accent, var(--rk-accent)) 45%, var(--rk-border));
  box-shadow: 0 20px 48px color-mix(in srgb, var(--rk-fg) 12%, transparent);
}

.rk-hub__feature-wash,
.rk-hub__card-wash {
  position: absolute;
  inset: 0;
  z-index: -1;
  opacity: 0.95;
}

.rk-hub__feature-top,
.rk-hub__card-top {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1.1rem;
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
}

.rk-hub__mark {
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent, var(--rk-accent));
}

.rk-hub__cat {
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-weight: 600;
}

.rk-hub__feature h2,
.rk-hub__card h2 {
  margin: 0 0 0.45rem;
  font-size: clamp(1.6rem, 3vw, 2.15rem);
  font-weight: 850;
  letter-spacing: -0.03em;
  color: var(--rk-fg);
}

.rk-hub__feature p {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.55;
  flex: 1;
}

.rk-hub__feature-meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
  margin: 1.25rem 0 1rem;
  padding-top: 0.9rem;
  border-top: 1px solid var(--rk-border);
  font-size: 0.84rem;
  color: var(--vp-c-text-3);
}

.rk-hub__go {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.92rem;
  font-weight: 650;
  color: var(--accent, var(--rk-accent));
}

.rk-hub__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

@media (max-width: 900px) {
  .rk-hub__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 600px) {
  .rk-hub__grid { grid-template-columns: 1fr; }
}

.rk-hub__card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.35rem 1.3rem 1.25rem;
  border: 1px solid var(--rk-border);
  border-radius: var(--rk-radius-lg);
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  isolation: isolate;
  animation: rk-hub-in 0.55s var(--rk-ease) both;
  animation-delay: calc(var(--i, 0) * 40ms);
  transition: transform 0.35s var(--rk-ease), border-color 0.35s var(--rk-ease), box-shadow 0.35s var(--rk-ease);
}

@keyframes rk-hub-in {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}

.rk-hub__card:hover {
  transform: translateY(-3px);
  border-color: color-mix(in srgb, var(--accent, var(--rk-accent)) 40%, var(--rk-border));
  box-shadow: 0 14px 36px color-mix(in srgb, var(--rk-fg) 10%, transparent);
}

.rk-hub__region {
  margin: 0 0 0.55rem !important;
  font-size: 0.78rem;
  color: var(--vp-c-text-3) !important;
}

.rk-hub__tagline {
  margin: 0 0 1.1rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  font-size: 0.95rem;
  flex: 1;
}

.rk-hub__meta {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-size: 0.84rem;
  color: var(--vp-c-text-3);
  border-top: 1px solid var(--rk-border);
  padding-top: 0.85rem;
}

.rk-hub__dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--rk-border);
}

@media (prefers-reduced-motion: reduce) {
  .rk-hub__card { animation: none; }
}
</style>
