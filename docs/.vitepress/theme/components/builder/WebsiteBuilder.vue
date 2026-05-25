<template>
  <div class="wb">
    <BuilderToolbar
      :viewport="viewport"
      :dirty="dirty"
      :last-saved="lastSaved"
      @update:viewport="viewport = $event"
      @share="onShare"
      @import="$refs.fileInput.click()"
      @reset="onReset"
      @export="onExport"
    />
    <input
      ref="fileInput"
      type="file"
      accept=".json,application/json"
      class="wb__file-input"
      @change="onImport"
    />

    <div class="wb__layout">
      <BuilderSidebar :config="config" />
      <BuilderPreview :html="renderedHtml" :viewport="viewport" />
    </div>

    <Teleport to="body">
      <Transition name="wb-toast">
        <div v-if="toast" class="wb__toast" role="status">{{ toast }}</div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import BuilderToolbar from './BuilderToolbar.vue';
import BuilderSidebar from './BuilderSidebar.vue';
import BuilderPreview from './BuilderPreview.vue';
import { useBuilder } from './useBuilder.js';
import { renderTemplate } from './templates/index.js';
import { exportBundle } from './exportSite.js';

const { config, dirty, lastSaved, reset, importJson, buildShareUrl } = useBuilder();

const viewport = ref('desktop');
const toast = ref('');
const fileInput = ref(null);

let toastTimer = null;
const showToast = (msg) => {
  toast.value = msg;
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (toast.value = ''), 2400);
};

const renderedHtml = ref('');
const renderNow = () => {
  try {
    renderedHtml.value = renderTemplate(config.value);
  } catch (err) {
    renderedHtml.value = `<!doctype html><html><body style="font-family:system-ui;padding:2rem;color:#ef4444">Render error: ${String(err)}</body></html>`;
  }
};

let renderTimer = null;
watch(
  config,
  () => {
    if (renderTimer) clearTimeout(renderTimer);
    renderTimer = setTimeout(renderNow, 80);
  },
  { deep: true, immediate: true }
);

const onShare = async () => {
  try {
    const url = buildShareUrl();
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(url);
      showToast('Share link copied to clipboard');
    } else {
      window.prompt('Copy this link', url);
    }
  } catch {
    showToast('Could not copy. Try again.');
  }
};

const onReset = () => {
  if (window.confirm('Reset to the starter content? This cannot be undone.')) {
    reset();
    showToast('Reset to defaults');
  }
};

const onExport = () => {
  exportBundle(config.value);
  showToast('Downloading index.html, sitemap.xml, robots.txt');
};

const onImport = async (e) => {
  const file = e.target.files?.[0];
  if (!file) return;
  try {
    await importJson(file);
    showToast('Config imported');
  } catch {
    showToast('Invalid JSON file');
  }
  e.target.value = '';
};
</script>

<style scoped>
.wb {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.wb__layout {
  display: grid;
  grid-template-columns: minmax(300px, 380px) 1fr;
  gap: 1rem;
  align-items: stretch;
  min-height: 720px;
}

@media (max-width: 1024px) {
  .wb__layout { grid-template-columns: 1fr; }
}

.wb__file-input { display: none; }

.wb__toast {
  position: fixed;
  bottom: 1.25rem; left: 50%; transform: translateX(-50%);
  padding: 0.65rem 1.1rem; border-radius: 999px;
  background: var(--rk-fg); color: var(--rk-bg);
  font-size: 0.85rem; font-weight: 500;
  box-shadow: 0 14px 30px var(--rk-accent-glow);
  z-index: 9999;
}

.wb-toast-enter-from, .wb-toast-leave-to { opacity: 0; transform: translate(-50%, 10px); }
.wb-toast-enter-active, .wb-toast-leave-active { transition: all .25s ease; }
</style>
