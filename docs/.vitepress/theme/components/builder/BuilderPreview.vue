<template>
  <div class="bp" :data-viewport="viewport">
    <div class="bp__frame-wrap">
      <div class="bp__chrome" v-if="viewport !== 'desktop'">
        <div class="bp__chrome-bar">
          <span></span><span></span><span></span>
        </div>
      </div>
      <iframe
        ref="frameRef"
        class="bp__frame"
        :srcdoc="html"
        title="Live preview of generated website"
        sandbox="allow-same-origin"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  html: String,
  viewport: { type: String, default: 'desktop' },
});

const frameRef = ref(null);
</script>

<style scoped>
.bp {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  height: 100%;
  min-height: 600px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  overflow: auto;
  background-image:
    linear-gradient(45deg, color-mix(in srgb, var(--vp-c-text-3) 5%, transparent) 25%, transparent 25%),
    linear-gradient(-45deg, color-mix(in srgb, var(--vp-c-text-3) 5%, transparent) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, color-mix(in srgb, var(--vp-c-text-3) 5%, transparent) 75%),
    linear-gradient(-45deg, transparent 75%, color-mix(in srgb, var(--vp-c-text-3) 5%, transparent) 75%);
  background-size: 18px 18px;
  background-position: 0 0, 0 9px, 9px -9px, -9px 0px;
}

.bp__frame-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);
  background: #fff;
  transition: max-width .35s ease, max-height .35s ease;
}

.bp[data-viewport="desktop"] .bp__frame-wrap { max-width: 100%; }
.bp[data-viewport="tablet"] .bp__frame-wrap { max-width: 768px; max-height: 1024px; }
.bp[data-viewport="mobile"] .bp__frame-wrap { max-width: 390px; max-height: 844px; }

.bp__chrome {
  height: 28px;
  background: #1a1a22;
  display: flex;
  align-items: center;
  padding: 0 0.75rem;
  flex-shrink: 0;
}
.bp__chrome-bar { display: flex; gap: 6px; }
.bp__chrome-bar span {
  width: 10px; height: 10px; border-radius: 50%;
  background: #555; opacity: 0.65;
}
.bp__chrome-bar span:nth-child(1) { background: #ff5f57; }
.bp__chrome-bar span:nth-child(2) { background: #febc2e; }
.bp__chrome-bar span:nth-child(3) { background: #28c840; }

.bp__frame {
  flex: 1;
  width: 100%;
  border: 0;
  background: #fff;
  min-height: 600px;
}
</style>
