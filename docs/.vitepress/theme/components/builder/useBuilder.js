import { ref, watch, onMounted } from 'vue';
import { defaultConfig } from './defaultConfig.js';

const STORAGE_KEY = 'rk-website-builder-v1';

const safeParse = (s) => {
  try { return JSON.parse(s); } catch { return null; }
};

const merge = (base, override) => {
  if (!override) return base;
  if (Array.isArray(base) || Array.isArray(override)) return override;
  if (typeof base === 'object' && base !== null && typeof override === 'object') {
    const out = { ...base };
    for (const k of Object.keys(override)) out[k] = merge(base[k], override[k]);
    return out;
  }
  return override;
};

const isBrowser = () => typeof window !== 'undefined';

const encodeShare = (cfg) => {
  if (!isBrowser()) return '';
  const json = JSON.stringify(cfg);
  return btoa(unescape(encodeURIComponent(json)));
};

const decodeShare = (str) => {
  try {
    return JSON.parse(decodeURIComponent(escape(atob(str))));
  } catch {
    return null;
  }
};

export function useBuilder() {
  const config = ref(defaultConfig());
  const dirty = ref(false);
  const lastSaved = ref(null);

  const load = () => {
    if (!isBrowser()) return;

    const hash = window.location.hash;
    if (hash.startsWith('#share=')) {
      const decoded = decodeShare(hash.slice(7));
      if (decoded) {
        config.value = merge(defaultConfig(), decoded);
        history.replaceState(null, '', window.location.pathname + window.location.search);
        return;
      }
    }
    const stored = safeParse(localStorage.getItem(STORAGE_KEY));
    if (stored) {
      config.value = merge(defaultConfig(), stored);
      lastSaved.value = stored.__savedAt || null;
    }
  };

  const save = () => {
    if (!isBrowser()) return;
    const stamped = { ...config.value, __savedAt: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stamped));
    lastSaved.value = stamped.__savedAt;
    dirty.value = false;
  };

  const reset = () => {
    config.value = defaultConfig();
    if (isBrowser()) localStorage.removeItem(STORAGE_KEY);
    dirty.value = false;
    lastSaved.value = null;
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(config.value, null, 2)], { type: 'application/json' });
    triggerDownload(blob, 'site-config.json');
  };

  const importJson = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const parsed = safeParse(reader.result);
        if (!parsed) return reject(new Error('Invalid JSON'));
        config.value = merge(defaultConfig(), parsed);
        resolve(parsed);
      };
      reader.onerror = reject;
      reader.readAsText(file);
    });
  };

  const buildShareUrl = () => {
    if (!isBrowser()) return '';
    return `${window.location.origin}${window.location.pathname}#share=${encodeShare(config.value)}`;
  };

  let saveTimer = null;
  watch(
    config,
    () => {
      dirty.value = true;
      if (saveTimer) clearTimeout(saveTimer);
      saveTimer = setTimeout(save, 800);
    },
    { deep: true }
  );

  onMounted(load);

  return {
    config,
    dirty,
    lastSaved,
    load,
    save,
    reset,
    exportJson,
    importJson,
    buildShareUrl,
  };
}

export function triggerDownload(blob, filename) {
  if (typeof window === 'undefined') return;
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
