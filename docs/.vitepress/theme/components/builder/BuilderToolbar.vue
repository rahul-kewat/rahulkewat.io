<template>
  <div class="bt">
    <div class="bt__group">
      <span class="bt__brand">
        <span class="bt__brand-dot"></span>
        Site Builder
      </span>
      <span class="bt__status" :class="{ 'is-dirty': dirty }">
        <span v-if="dirty">Saving…</span>
        <span v-else-if="lastSaved">Auto-saved</span>
        <span v-else>Ready</span>
      </span>
    </div>

    <div class="bt__group bt__group--center">
      <div class="bt__viewport">
        <button
          v-for="vp in viewports"
          :key="vp.id"
          type="button"
          class="bt__vp-btn"
          :class="{ 'is-active': viewport === vp.id }"
          :title="vp.label"
          @click="$emit('update:viewport', vp.id)"
          :aria-label="vp.label"
        >
          <span v-html="vp.icon"></span>
        </button>
      </div>
    </div>

    <div class="bt__group bt__group--end">
      <button class="bt__btn" type="button" @click="$emit('share')" title="Copy share link">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
        Share
      </button>
      <button class="bt__btn" type="button" @click="$emit('import')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
        Import
      </button>
      <button class="bt__btn bt__btn--ghost" type="button" @click="$emit('reset')">
        Reset
      </button>
      <button class="bt__btn bt__btn--primary" type="button" @click="$emit('export')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download site
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  viewport: String,
  dirty: Boolean,
  lastSaved: String,
});

defineEmits(['update:viewport', 'share', 'import', 'reset', 'export']);

const viewports = [
  {
    id: 'desktop',
    label: 'Desktop',
    icon:
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  },
  {
    id: 'tablet',
    label: 'Tablet',
    icon:
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
  },
  {
    id: 'mobile',
    label: 'Mobile',
    icon:
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
  },
];
</script>

<style scoped>
.bt {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  padding: 0.6rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--rk-glass-bg);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  position: sticky;
  top: 1rem;
  z-index: 10;
}
@media (max-width: 800px) {
  .bt { grid-template-columns: 1fr; gap: 0.5rem; }
  .bt__group--center, .bt__group--end { justify-content: flex-start !important; }
}

.bt__group { display: flex; align-items: center; gap: 0.5rem; }
.bt__group--center { justify-content: center; }
.bt__group--end { justify-content: flex-end; flex-wrap: wrap; }

.bt__brand {
  display: inline-flex; align-items: center; gap: 0.5rem;
  font-weight: 700; letter-spacing: -0.01em; font-size: 0.92rem;
}
.bt__brand-dot {
  width: 10px; height: 10px; border-radius: 50%;
  background: var(--rk-grad-primary);
  box-shadow: 0 0 12px var(--rk-accent-1);
}
.bt__status {
  font-size: 0.72rem; color: var(--vp-c-text-3);
  padding: 0.2rem 0.55rem; border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
}
.bt__status.is-dirty { color: var(--rk-accent-2); border-color: color-mix(in srgb, var(--rk-accent-2) 40%, var(--vp-c-divider)); }

.bt__viewport {
  display: inline-flex; padding: 0.25rem;
  border: 1px solid var(--vp-c-divider); border-radius: 999px;
  background: var(--vp-c-bg-soft);
}
.bt__vp-btn {
  width: 32px; height: 32px; border: none; cursor: pointer;
  border-radius: 999px; background: transparent;
  display: grid; place-items: center; color: var(--vp-c-text-2);
  transition: all .2s ease;
}
.bt__vp-btn.is-active { background: var(--rk-grad-primary); color: #fff; }
.bt__vp-btn:hover:not(.is-active) { color: var(--vp-c-text-1); background: var(--vp-c-bg); }

.bt__btn {
  display: inline-flex; align-items: center; gap: 0.4rem;
  padding: 0.5rem 0.9rem; font-size: 0.82rem; font-weight: 600;
  border: 1px solid var(--vp-c-divider); border-radius: 999px;
  background: var(--vp-c-bg-soft); color: var(--vp-c-text-1);
  cursor: pointer; transition: all .2s ease;
  font-family: inherit;
}
.bt__btn:hover { border-color: var(--rk-accent-1); transform: translateY(-1px); }
.bt__btn--ghost { background: transparent; }
.bt__btn--primary {
  color: var(--rk-bg); background: var(--rk-fg);
  border: none; box-shadow: 0 6px 16px color-mix(in srgb, var(--rk-fg) 25%, transparent);
}
.bt__btn--primary:hover { background: var(--rk-accent); box-shadow: 0 8px 22px var(--rk-accent-glow); }
</style>
