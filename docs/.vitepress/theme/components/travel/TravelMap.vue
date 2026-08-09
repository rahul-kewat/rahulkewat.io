<template>
  <div class="rk-map" ref="wrap">
    <div class="rk-map__canvas" ref="el" role="img" :aria-label="ariaLabel"></div>
    <div class="rk-map__legend" aria-hidden="true">
      <span class="rk-map__chip rk-map__chip--must"><i></i> Must</span>
      <span class="rk-map__chip rk-map__chip--optional"><i></i> Optional</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';

const props = defineProps({
  center: { type: Array, required: true },
  zoom: { type: Number, default: 13 },
  places: { type: Array, default: () => [] },
  activeId: { type: String, default: null },
  ariaLabel: { type: String, default: 'Travel map' },
});

const emit = defineEmits(['select']);

const el = ref(null);
const wrap = ref(null);
let map = null;
let markers = new Map();
let L = null;

function escapeAttr(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

function iconHtml(place, active) {
  const src = escapeAttr(place.image);
  const name = escapeAttr(place.name);
  const fallback =
    "data:image/svg+xml," +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="92" height="92"><rect fill="%23ddd" width="92" height="92"/><text x="50%" y="54%" text-anchor="middle" font-size="28" fill="%23666" font-family="sans-serif">${(place.name || '?')[0]}</text></svg>`
    );
  return `
    <span class="rk-pin rk-pin--photo rk-pin--${place.tier}${active ? ' is-active' : ''}">
      <img src="${src}" alt="${name}" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${fallback}'" />
    </span>
  `;
}

function makeIcon(place, active) {
  return L.divIcon({
    className: 'rk-pin-wrap',
    html: iconHtml(place, active),
    iconSize: [46, 46],
    iconAnchor: [23, 23],
    popupAnchor: [0, -22],
  });
}

function syncMarkers() {
  if (!map || !L) return;
  markers.forEach((m) => m.remove());
  markers.clear();

  props.places.forEach((place) => {
    const marker = L.marker([place.lat, place.lng], {
      icon: makeIcon(place, place.id === props.activeId),
      title: place.name,
      riseOnHover: true,
    });
    marker.on('click', () => emit('select', place.id));
    marker.addTo(map);
    markers.set(place.id, marker);
  });
}

onMounted(async () => {
  if (typeof window === 'undefined' || !el.value) return;

  const leaflet = await import('leaflet');
  await import('leaflet/dist/leaflet.css');
  L = leaflet.default || leaflet;

  map = L.map(el.value, {
    scrollWheelZoom: false,
    zoomControl: true,
    attributionControl: true,
  }).setView(props.center, props.zoom);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);

  syncMarkers();

  if (props.places.length > 1) {
    const bounds = L.latLngBounds(props.places.map((p) => [p.lat, p.lng]));
    map.fitBounds(bounds.pad(0.2));
  }

  requestAnimationFrame(() => map.invalidateSize());
});

watch(
  () => [props.places, props.activeId],
  () => syncMarkers(),
  { deep: true }
);

watch(
  () => props.activeId,
  (id) => {
    if (!map || !id || !markers.has(id)) return;
    const place = props.places.find((p) => p.id === id);
    if (!place) return;
    map.panTo([place.lat, place.lng], { animate: true });
  }
);

onBeforeUnmount(() => {
  if (map) {
    map.remove();
    map = null;
  }
});
</script>

<style>
.rk-pin-wrap {
  background: transparent !important;
  border: none !important;
}

.rk-pin--photo {
  display: block;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--rk-bg, #fff);
  border: 3px solid #fff;
  box-shadow:
    0 0 0 2px color-mix(in srgb, var(--rk-muted, #6b6b6b) 55%, transparent),
    0 8px 20px color-mix(in srgb, var(--rk-fg, #000) 22%, transparent);
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s ease;
}

.rk-pin--photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background: #ddd;
  pointer-events: none;
}

.rk-pin--photo.rk-pin--must {
  box-shadow:
    0 0 0 2px var(--rk-accent, #008538),
    0 8px 20px color-mix(in srgb, var(--rk-fg, #000) 22%, transparent);
}

.rk-pin--photo.is-active {
  transform: scale(1.18);
  box-shadow:
    0 0 0 3px var(--rk-accent, #008538),
    0 12px 28px color-mix(in srgb, var(--rk-fg, #000) 28%, transparent);
}

.rk-map .leaflet-control-attribution {
  font-size: 10px;
  background: color-mix(in srgb, var(--rk-bg) 85%, transparent) !important;
}

.rk-map .leaflet-marker-icon {
  cursor: pointer;
}
</style>

<style scoped>
.rk-map {
  position: relative;
  width: 100%;
  height: min(62vh, 520px);
  min-height: 320px;
  border-radius: var(--rk-radius-xl, 1.75rem);
  overflow: hidden;
  border: 1px solid var(--rk-border);
  box-shadow: var(--rk-glass-shadow);
}

.rk-map__canvas {
  width: 100%;
  height: 100%;
  z-index: 0;
  background: var(--rk-surface);
}

.rk-map__legend {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  z-index: 500;
  display: flex;
  gap: 0.5rem;
  pointer-events: none;
}

.rk-map__chip {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.7rem;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--rk-fg);
  background: var(--rk-glass-bg);
  border: 1px solid var(--rk-border);
  border-radius: 999px;
  backdrop-filter: blur(10px);
}

.rk-map__chip i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: block;
}

.rk-map__chip--must i { background: var(--rk-accent); }
.rk-map__chip--optional i { background: var(--rk-muted); }

@media (max-width: 600px) {
  .rk-map {
    height: 48vh;
    min-height: 280px;
    border-radius: var(--rk-radius-lg, 1.25rem);
  }
}
</style>
