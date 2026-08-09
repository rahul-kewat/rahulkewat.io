<template>
  <article class="rk-city" v-if="city" :style="{ '--city-accent': city.accent || 'var(--rk-accent)' }">
    <header class="rk-city__hero" :style="{ '--city-wash': city.coverGradient }">
      <div class="rk-city__hero-inner">
        <a class="rk-city__back" href="/travel/">← All cities</a>
        <div class="rk-city__eyebrow">
          <span class="rk-city__mark">{{ city.mark }}</span>
          <span>{{ city.region }} · {{ city.category }}</span>
        </div>
        <h1 class="rk-city__title">{{ city.name }}</h1>
        <p class="rk-city__tagline">{{ city.tagline }}</p>
        <p class="rk-city__summary">{{ city.summary }}</p>

        <dl class="rk-city__meta">
          <div>
            <dt>Vibe</dt>
            <dd>{{ city.vibe }}</dd>
          </div>
          <div>
            <dt>Stay</dt>
            <dd>{{ city.days }}</dd>
          </div>
          <div>
            <dt>Best season</dt>
            <dd>{{ city.season }}</dd>
          </div>
        </dl>
      </div>
    </header>

    <section class="rk-city__map-block">
      <div class="rk-city__map-head">
        <h2>Map of places I covered</h2>
        <p>Tap a photo pin for details, gallery, and Google Maps — or scroll the list below.</p>
      </div>
      <TravelMap
        :center="city.center"
        :zoom="city.zoom"
        :places="filtered"
        :active-id="activeId"
        :aria-label="`Map of ${city.name}`"
        @select="onSelect"
      />
    </section>

    <PlaceSheet
      :place="activePlace"
      :city-name="city.name"
      @close="activeId = null"
    />

    <section class="rk-city__places">
      <div class="rk-city__places-head">
        <h2>Places</h2>
        <div class="rk-city__filters" role="tablist" aria-label="Filter places">
          <button
            v-for="f in filters"
            :key="f.id"
            type="button"
            role="tab"
            class="rk-city__filter"
            :class="{ 'is-active': filter === f.id }"
            :aria-selected="filter === f.id"
            @click="filter = f.id"
          >
            {{ f.label }}
            <span>{{ f.count }}</span>
          </button>
        </div>
      </div>

      <ul class="rk-city__list">
        <li
          v-for="(place, idx) in filtered"
          :key="place.id"
          class="rk-city__place"
          :class="{ 'is-active': activeId === place.id }"
          :style="{ '--i': idx }"
          @click="onSelect(place.id)"
        >
          <div class="rk-city__place-media">
            <img
              :src="place.image"
              :alt="place.name"
              loading="lazy"
              decoding="async"
              referrerpolicy="no-referrer"
            />
          </div>
          <div class="rk-city__place-copy">
            <div class="rk-city__place-top">
              <span class="rk-city__tier" :class="`is-${place.tier}`">
                {{ place.tier === 'must' ? 'Must' : 'Optional' }}
              </span>
              <span v-if="place.bestTime" class="rk-city__when">{{ place.bestTime }}</span>
            </div>
            <h3>{{ place.name }}</h3>
            <p>{{ place.blurb }}</p>
            <p v-if="place.tip" class="rk-city__tip"><strong>Tip:</strong> {{ place.tip }}</p>
            <a
              class="rk-city__gmaps"
              :href="mapsLink(place)"
              target="_blank"
              rel="noopener"
              @click.stop
            >
              Open in Google Maps
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </li>
      </ul>
    </section>

    <nav class="rk-city__adjacent" aria-label="More destinations">
      <a v-if="adjacent.prev" class="rk-city__adj" :href="adjacent.prev.href">
        <span>Previous</span>
        <strong>{{ adjacent.prev.name }}</strong>
      </a>
      <a v-if="adjacent.next" class="rk-city__adj rk-city__adj--next" :href="adjacent.next.href">
        <span>Next</span>
        <strong>{{ adjacent.next.name }}</strong>
      </a>
    </nav>
  </article>
</template>

<script setup>
import { computed, ref } from 'vue';
import TravelMap from './TravelMap.vue';
import PlaceSheet from './PlaceSheet.vue';
import { getAdjacentCities } from '../../data/travel/cities.js';

const props = defineProps({
  city: { type: Object, required: true },
});

const filter = ref('all');
const activeId = ref(null);
const adjacent = computed(() => getAdjacentCities(props.city?.slug));

const filters = computed(() => {
  const places = props.city?.places || [];
  return [
    { id: 'all', label: 'All', count: places.length },
    { id: 'must', label: 'Must', count: places.filter((p) => p.tier === 'must').length },
    { id: 'optional', label: 'Optional', count: places.filter((p) => p.tier === 'optional').length },
  ];
});

const filtered = computed(() => {
  const places = props.city?.places || [];
  const list =
    filter.value === 'all' ? places : places.filter((p) => p.tier === filter.value);
  return [...list].sort((a, b) => {
    if (a.tier === b.tier) return 0;
    return a.tier === 'must' ? -1 : 1;
  });
});

const activePlace = computed(() =>
  filtered.value.find((p) => p.id === activeId.value)
  || props.city?.places?.find((p) => p.id === activeId.value)
  || null
);

function onSelect(id) {
  activeId.value = id;
}

function mapsLink(place) {
  if (place.mapsUrl) return place.mapsUrl;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${place.name} ${props.city.name}`
  )}`;
}
</script>

<style scoped>
.rk-city {
  max-width: 1100px;
  margin: 0 auto;
  padding: 5.5rem 1.5rem 4rem;
}

.rk-city__hero {
  position: relative;
  padding: 2.5rem 0 2rem;
  margin-bottom: 2rem;
}

.rk-city__hero::before {
  content: '';
  position: absolute;
  inset: -2rem -1.5rem auto;
  height: 280px;
  background: var(--city-wash);
  pointer-events: none;
  z-index: -1;
  border-radius: 0 0 40% 40% / 0 0 18% 18%;
}

.rk-city__back {
  display: inline-flex;
  margin-bottom: 1.25rem;
  font-size: 0.88rem;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.25s var(--rk-ease);
}

.rk-city__back:hover { color: var(--city-accent, var(--rk-accent)); }

.rk-city__eyebrow {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.65rem;
  margin: 0 0 0.65rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

.rk-city__mark {
  color: var(--city-accent, var(--rk-accent));
  letter-spacing: 0.16em;
}

.rk-city__title {
  margin: 0 0 0.75rem;
  font-size: clamp(2.4rem, 6vw, 4rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1;
  color: var(--rk-fg);
}

.rk-city__tagline {
  margin: 0 0 0.85rem;
  font-size: 1.25rem;
  color: var(--vp-c-text-1);
  max-width: 36rem;
}

.rk-city__summary {
  margin: 0 0 1.75rem;
  max-width: 40rem;
  color: var(--vp-c-text-2);
  line-height: 1.65;
  font-size: 1.02rem;
}

.rk-city__meta {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin: 0;
  max-width: 640px;
}

@media (max-width: 600px) {
  .rk-city__meta { grid-template-columns: 1fr; gap: 0.75rem; }
}

.rk-city__meta div {
  padding: 0.85rem 0;
  border-top: 1px solid var(--rk-border);
}

.rk-city__meta dt {
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
  margin-bottom: 0.35rem;
}

.rk-city__meta dd {
  margin: 0;
  font-weight: 600;
  color: var(--rk-fg);
  font-size: 0.95rem;
}

.rk-city__map-block { margin-bottom: 3rem; }

.rk-city__map-head {
  margin-bottom: 1.25rem;
}

.rk-city__map-head h2,
.rk-city__places-head h2 {
  margin: 0 0 0.4rem;
  font-size: 1.5rem;
  letter-spacing: -0.02em;
}

.rk-city__map-head p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
}

.rk-city__places-head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.rk-city__filters {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.rk-city__filter {
  appearance: none;
  border: 1px solid var(--rk-border);
  background: transparent;
  color: var(--vp-c-text-2);
  border-radius: 999px;
  padding: 0.4rem 0.85rem;
  font: inherit;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: background 0.25s var(--rk-ease), color 0.25s var(--rk-ease), border-color 0.25s var(--rk-ease);
}

.rk-city__filter span {
  font-size: 0.72rem;
  opacity: 0.7;
}

.rk-city__filter.is-active {
  background: var(--rk-fg);
  color: var(--rk-bg);
  border-color: var(--rk-fg);
}

.rk-city__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

@media (max-width: 720px) {
  .rk-city__list { grid-template-columns: 1fr; }
}

.rk-city__place {
  padding: 0;
  border: 1px solid var(--rk-border);
  border-radius: var(--rk-radius-lg);
  background: var(--rk-glass-bg);
  cursor: pointer;
  overflow: hidden;
  display: grid;
  grid-template-columns: 120px 1fr;
  transition:
    border-color 0.3s var(--rk-ease),
    transform 0.35s var(--rk-ease),
    box-shadow 0.35s var(--rk-ease);
  animation: rk-city-in 0.55s var(--rk-ease) both;
  animation-delay: calc(var(--i, 0) * 45ms);
}

@media (max-width: 520px) {
  .rk-city__place { grid-template-columns: 1fr; }
}

.rk-city__place-media {
  min-height: 140px;
  background: var(--rk-surface);
}

.rk-city__place-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  min-height: 140px;
}

.rk-city__place-copy {
  padding: 1.1rem 1.2rem 1.2rem;
}

@keyframes rk-city-in {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

.rk-city__place:hover,
.rk-city__place.is-active {
  border-color: var(--rk-accent-border);
  transform: translateY(-2px);
  box-shadow: 0 14px 36px color-mix(in srgb, var(--rk-fg) 10%, transparent);
}

.rk-city__place-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.65rem;
}

.rk-city__tier {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.25rem 0.55rem;
  border-radius: 999px;
  border: 1px solid var(--rk-border);
  color: var(--vp-c-text-2);
}

.rk-city__tier.is-must {
  color: var(--city-accent, var(--rk-accent));
  border-color: color-mix(in srgb, var(--city-accent, var(--rk-accent)) 45%, var(--rk-border));
  background: color-mix(in srgb, var(--city-accent, var(--rk-accent)) 12%, transparent);
}

.rk-city__when {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
}

.rk-city__place h3 {
  margin: 0 0 0.45rem;
  font-size: 1.15rem;
  letter-spacing: -0.02em;
  color: var(--rk-fg);
}

.rk-city__place p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.92rem;
  line-height: 1.55;
}

.rk-city__tip {
  margin-top: 0.65rem !important;
  padding-top: 0.65rem;
  border-top: 1px dashed var(--rk-border);
  font-size: 0.86rem !important;
}

.rk-city__tip strong { color: var(--rk-fg); font-weight: 650; }

.rk-city__gmaps {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.9rem;
  font-size: 0.84rem;
  font-weight: 600;
  color: var(--city-accent, var(--rk-accent));
  text-decoration: none;
}

.rk-city__gmaps:hover { text-decoration: underline; }

.rk-city__adjacent {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--rk-border);
}

@media (max-width: 600px) {
  .rk-city__adjacent { grid-template-columns: 1fr; }
}

.rk-city__adj {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1.1rem 1.2rem;
  border: 1px solid var(--rk-border);
  border-radius: var(--rk-radius-lg);
  text-decoration: none;
  color: inherit;
  transition: border-color 0.3s var(--rk-ease), transform 0.3s var(--rk-ease);
}

.rk-city__adj:hover {
  border-color: color-mix(in srgb, var(--city-accent, var(--rk-accent)) 40%, var(--rk-border));
  transform: translateY(-2px);
}

.rk-city__adj--next { text-align: right; }

.rk-city__adj span {
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
  font-weight: 700;
}

.rk-city__adj strong {
  font-size: 1.15rem;
  letter-spacing: -0.02em;
  color: var(--rk-fg);
}

@media (prefers-reduced-motion: reduce) {
  .rk-city__place { animation: none; }
}
</style>
