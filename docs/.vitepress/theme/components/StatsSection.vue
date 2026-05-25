<template>
  <section class="rk-stats rk-section">
    <div class="rk-stats__head rk-reveal">
      <span class="rk-section__eyebrow">By the numbers</span>
      <h2 class="rk-section__title">
        Real outcomes,<br />
        <span class="rk-grad-text">not vanity metrics.</span>
      </h2>
      <p class="rk-section__lede">
        Years of shipping for clients across continents — distilled into a body
        of work that speaks louder than slogans.
      </p>
    </div>

    <div ref="gridRef" class="rk-stats__grid">
      <div
        v-for="(stat, idx) in stats"
        :key="stat.label"
        class="rk-card rk-stat rk-reveal"
        :data-delay="idx * 100"
      >
        <div class="rk-stat__icon" v-html="stat.icon"></div>
        <div class="rk-stat__value">
          <span class="rk-stat__prefix">{{ stat.prefix || '' }}</span>
          <span class="rk-stat__num">{{ formatNumber(animated[idx]) }}</span>
          <span class="rk-stat__suffix">{{ stat.suffix || '' }}</span>
        </div>
        <div class="rk-stat__label">{{ stat.label }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';

const stroke = (path) =>
  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;

const stats = [
  {
    label: 'Earned freelancing',
    value: 100,
    prefix: '$',
    suffix: 'k+',
    icon: stroke('<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>'),
  },
  {
    label: 'Clients served globally',
    value: 50,
    suffix: '+',
    icon: stroke('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'),
  },
  {
    label: 'Years of experience',
    value: 7,
    suffix: '+',
    icon: stroke('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'),
  },
  {
    label: 'Countries worked with',
    value: 12,
    suffix: '+',
    icon: stroke('<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'),
  },
];

const animated = reactive(stats.map(() => 0));
const gridRef = ref(null);
let observer = null;
let started = false;

const formatNumber = (n) => {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return Math.floor(n).toString();
};

const animate = () => {
  if (started) return;
  started = true;
  const duration = 1600;
  const start = performance.now();
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  const step = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOut(progress);
    stats.forEach((s, i) => {
      animated[i] = s.value * eased;
    });
    if (progress < 1) requestAnimationFrame(step);
    else stats.forEach((s, i) => (animated[i] = s.value));
  };
  requestAnimationFrame(step);
};

onMounted(() => {
  if (typeof window === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    stats.forEach((s, i) => (animated[i] = s.value));
    return;
  }
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) animate();
      });
    },
    { threshold: 0.3 }
  );
  if (gridRef.value) observer.observe(gridRef.value);
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
.rk-stats__head {
  text-align: center;
  margin: 0 auto 3rem;
}

.rk-stats__head .rk-section__lede { margin-left: auto; margin-right: auto; }

.rk-stats__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.rk-stat {
  padding: 1.75rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  overflow: hidden;
}

.rk-stat::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--rk-grad-soft);
  opacity: 0;
  transition: opacity 0.4s var(--rk-ease);
  pointer-events: none;
}

.rk-stat:hover::before { opacity: 1; }

.rk-stat__icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  color: var(--rk-fg);
  background: var(--rk-bg);
  border: 1px solid var(--rk-border);
  transition: color 0.3s var(--rk-ease), background 0.3s var(--rk-ease), border-color 0.3s var(--rk-ease);
}

.rk-stat:hover .rk-stat__icon {
  color: var(--rk-bg);
  background: var(--rk-accent);
  border-color: var(--rk-accent);
}

.rk-stat__value {
  font-size: clamp(2rem, 3.6vw, 2.85rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
  display: flex;
  align-items: baseline;
  color: var(--rk-fg);
}

.rk-stat__num,
.rk-stat__prefix,
.rk-stat__suffix {
  color: var(--rk-fg);
}

.rk-stat__suffix {
  color: var(--rk-accent);
  margin-left: 2px;
}

.rk-stat__label {
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
}
</style>
