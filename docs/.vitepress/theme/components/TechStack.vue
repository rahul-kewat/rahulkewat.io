<template>
  <section class="rk-stack rk-section">
    <div class="rk-stack__head rk-reveal">
      <span class="rk-section__eyebrow">Stack &amp; tools</span>
      <h2 class="rk-section__title">
        Tools I use to <span class="rk-grad-text">ship fast.</span>
      </h2>
    </div>

    <div class="rk-stack__marquee" v-for="(row, rIdx) in [stack, stack2]" :key="rIdx" :data-reverse="rIdx === 1 ? 'true' : 'false'">
      <div class="rk-stack__track">
        <div
          v-for="(t, idx) in [...row, ...row]"
          :key="idx"
          class="rk-stack__chip"
        >
          <span class="rk-stack__chip-icon">{{ t.icon }}</span>
          <span>{{ t.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stack = [
  { name: 'Vue 3', icon: '🟢' },
  { name: 'VitePress', icon: '⚡' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'Tailwind', icon: '🎨' },
  { name: 'Figma', icon: '✨' },
  { name: 'Stripe', icon: '💳' },
  { name: 'Notion', icon: '📓' },
];

const stack2 = [
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Cloudflare', icon: '☁️' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Linear', icon: '📐' },
  { name: 'OpenAI', icon: '🤖' },
  { name: 'Slack', icon: '💬' },
  { name: 'ClickUp', icon: '🗂️' },
  { name: 'Loom', icon: '🎥' },
];
</script>

<style scoped>
.rk-stack__head { text-align: center; margin: 0 auto 2.5rem; }

.rk-stack__marquee {
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
  margin-bottom: 1rem;
}

.rk-stack__track {
  display: flex;
  gap: 0.75rem;
  width: max-content;
  animation: rk-stack-scroll 32s linear infinite;
}

.rk-stack__marquee[data-reverse="true"] .rk-stack__track {
  animation-direction: reverse;
}

@keyframes rk-stack-scroll {
  to { transform: translateX(-50%); }
}

.rk-stack__chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--rk-fg);
  border: 1px solid var(--rk-border);
  background: var(--rk-glass-bg);
  border-radius: 999px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  white-space: nowrap;
  transition: transform 0.3s var(--rk-ease), border-color 0.3s var(--rk-ease), color 0.3s var(--rk-ease);
}

.rk-stack__chip:hover {
  transform: translateY(-2px);
  border-color: var(--rk-accent);
  color: var(--rk-accent);
}

.rk-stack__chip-icon { font-size: 1rem; }

@media (prefers-reduced-motion: reduce) {
  .rk-stack__track { animation: none; }
}
</style>
