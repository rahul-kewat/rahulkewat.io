<template>
  <Teleport to="body">
    <div
      v-if="place"
      class="rk-sheet"
      role="dialog"
      aria-modal="true"
      :aria-label="place.name"
      @keydown.esc.prevent="close"
    >
      <button type="button" class="rk-sheet__backdrop" aria-label="Close" @click="close"></button>

      <div class="rk-sheet__panel" ref="panel" tabindex="-1">
        <button type="button" class="rk-sheet__x" aria-label="Close details" @click="close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>

        <div class="rk-sheet__hero">
          <img
            v-if="activeImage"
            :src="activeImage"
            :alt="place.name"
            loading="eager"
            decoding="async"
            referrerpolicy="no-referrer"
            @error="onImgError"
          />
          <div class="rk-sheet__hero-fade" aria-hidden="true"></div>
          <span class="rk-sheet__tier" :class="`is-${place.tier}`">
            {{ place.tier === 'must' ? 'Must visit' : 'Optional' }}
          </span>
        </div>

        <div class="rk-sheet__body">
          <p v-if="place.bestTime" class="rk-sheet__when">{{ place.bestTime }}</p>
          <h2>{{ place.name }}</h2>
          <p class="rk-sheet__blurb">{{ place.blurb }}</p>
          <p v-if="place.tip" class="rk-sheet__tip"><strong>Tip:</strong> {{ place.tip }}</p>

          <div v-if="gallery.length > 1" class="rk-sheet__gallery">
            <button
              v-for="(src, i) in gallery"
              :key="src + i"
              type="button"
              class="rk-sheet__thumb"
              :class="{ 'is-active': activeImage === src }"
              @click="activeImage = src"
            >
              <img :src="src" :alt="`${place.name} photo ${i + 1}`" loading="lazy" referrerpolicy="no-referrer" />
            </button>
          </div>

          <div class="rk-sheet__actions">
            <a class="rk-sheet__maps" :href="mapsUrl" target="_blank" rel="noopener">
              Open in Google Maps
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a
              class="rk-sheet__street"
              :href="streetUrl"
              target="_blank"
              rel="noopener"
            >
              Street View
            </a>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { computed, ref, watch, nextTick, onBeforeUnmount } from 'vue';

const props = defineProps({
  place: { type: Object, default: null },
  cityName: { type: String, default: '' },
});

const emit = defineEmits(['close']);

const panel = ref(null);
const activeImage = ref('');
const broken = ref(new Set());

const gallery = computed(() => {
  const list = props.place?.gallery?.length
    ? props.place.gallery
    : props.place?.image
      ? [props.place.image]
      : [];
  return list.filter((src) => !broken.value.has(src));
});

const mapsUrl = computed(() => {
  if (!props.place) return '#';
  if (props.place.mapsUrl) return props.place.mapsUrl;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${props.place.name} ${props.cityName}`
  )}`;
});

const streetUrl = computed(() => {
  if (!props.place) return '#';
  return `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${props.place.lat},${props.place.lng}`;
});

watch(
  () => props.place,
  async (p) => {
    broken.value = new Set();
    activeImage.value = p?.image || p?.gallery?.[0] || '';
    if (typeof document === 'undefined') return;
    if (p) {
      document.body.style.overflow = 'hidden';
      await nextTick();
      panel.value?.focus();
    } else {
      document.body.style.overflow = '';
    }
  },
  { immediate: true }
);

function close() {
  emit('close');
}

function onImgError(e) {
  const src = e?.target?.currentSrc || e?.target?.src;
  if (!src || src.startsWith('data:')) return;
  const next = new Set(broken.value);
  next.add(src);
  broken.value = next;
  const remaining = gallery.value;
  activeImage.value = remaining[0] || '';
  if (!activeImage.value) {
    e.target.style.display = 'none';
  }
}

onBeforeUnmount(() => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = '';
  }
});
</script>

<style scoped>
.rk-sheet {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: grid;
  place-items: end center;
  padding: 0;
}

@media (min-width: 720px) {
  .rk-sheet {
    place-items: center;
    padding: 1.5rem;
  }
}

.rk-sheet__backdrop {
  position: absolute;
  inset: 0;
  border: 0;
  background: color-mix(in srgb, var(--rk-fg, #0a0a0a) 45%, transparent);
  backdrop-filter: blur(6px);
  cursor: pointer;
}

.rk-sheet__panel {
  position: relative;
  z-index: 1;
  width: min(520px, 100%);
  max-height: min(92vh, 860px);
  overflow: auto;
  background: var(--rk-bg, #fff);
  color: var(--rk-fg, #0a0a0a);
  border-radius: 24px 24px 0 0;
  box-shadow: 0 -8px 40px color-mix(in srgb, var(--rk-fg) 25%, transparent);
  outline: none;
  animation: rk-sheet-up 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

@media (min-width: 720px) {
  .rk-sheet__panel {
    border-radius: 22px;
    box-shadow: 0 24px 64px color-mix(in srgb, var(--rk-fg) 28%, transparent);
    animation: rk-sheet-pop 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  }
}

@keyframes rk-sheet-up {
  from { transform: translateY(24px); opacity: 0.6; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes rk-sheet-pop {
  from { transform: translateY(12px) scale(0.98); opacity: 0; }
  to { transform: none; opacity: 1; }
}

.rk-sheet__x {
  position: absolute;
  top: 0.85rem;
  right: 0.85rem;
  z-index: 2;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0;
  display: grid;
  place-items: center;
  background: color-mix(in srgb, var(--rk-bg) 82%, transparent);
  color: var(--rk-fg);
  cursor: pointer;
  backdrop-filter: blur(8px);
}

.rk-sheet__hero {
  position: relative;
  aspect-ratio: 16 / 11;
  background: var(--rk-surface, #f2f2f2);
  overflow: hidden;
}

.rk-sheet__hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.rk-sheet__hero-fade {
  position: absolute;
  inset: auto 0 0;
  height: 40%;
  background: linear-gradient(to top, color-mix(in srgb, var(--rk-bg) 70%, transparent), transparent);
  pointer-events: none;
}

.rk-sheet__tier {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 750;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: var(--rk-bg);
  border: 1px solid var(--rk-border);
  color: var(--vp-c-text-2, #666);
}

.rk-sheet__tier.is-must {
  color: var(--rk-accent);
  border-color: color-mix(in srgb, var(--rk-accent) 45%, var(--rk-border));
  background: color-mix(in srgb, var(--rk-accent) 12%, var(--rk-bg));
}

.rk-sheet__body {
  padding: 1.25rem 1.35rem 1.6rem;
}

.rk-sheet__when {
  margin: 0 0 0.35rem;
  font-size: 0.8rem;
  color: var(--vp-c-text-3, #888);
}

.rk-sheet__body h2 {
  margin: 0 0 0.55rem;
  font-size: 1.55rem;
  letter-spacing: -0.03em;
  line-height: 1.15;
}

.rk-sheet__blurb {
  margin: 0;
  color: var(--vp-c-text-2, #555);
  line-height: 1.55;
  font-size: 0.98rem;
}

.rk-sheet__tip {
  margin: 0.85rem 0 0;
  padding-top: 0.85rem;
  border-top: 1px dashed var(--rk-border, #e6e6e6);
  font-size: 0.9rem;
  color: var(--vp-c-text-2, #555);
  line-height: 1.5;
}

.rk-sheet__tip strong { color: var(--rk-fg); }

.rk-sheet__gallery {
  display: flex;
  gap: 0.5rem;
  margin-top: 1.1rem;
  overflow-x: auto;
  padding-bottom: 0.15rem;
}

.rk-sheet__thumb {
  flex: 0 0 auto;
  width: 72px;
  height: 56px;
  padding: 0;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid transparent;
  background: var(--rk-surface);
  cursor: pointer;
}

.rk-sheet__thumb.is-active {
  border-color: var(--rk-accent);
}

.rk-sheet__thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.rk-sheet__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 1.25rem;
}

.rk-sheet__maps,
.rk-sheet__street {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.7rem 1rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 650;
  text-decoration: none;
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
}

.rk-sheet__maps {
  background: var(--rk-fg);
  color: var(--rk-bg);
}

.rk-sheet__street {
  border: 1px solid var(--rk-border);
  color: var(--rk-fg);
  background: transparent;
}

.rk-sheet__maps:hover,
.rk-sheet__street:hover {
  transform: translateY(-1px);
}

@media (prefers-reduced-motion: reduce) {
  .rk-sheet__panel { animation: none; }
}
</style>
