<template>
  <section class="rk-hero">
    <div class="rk-hero__inner">
      <div class="rk-hero__content rk-reveal">
        <div class="rk-hero__pill">
          <span class="rk-hero__dot"></span>
          Available for select freelance projects
        </div>

        <h1 class="rk-hero__title">
          Hi, I'm <span class="rk-grad-text">Rahul Kewat</span><br />
          <span class="rk-hero__typer">
            <!-- invisible ghost reserves space for the longest phrase
                 so the image never shifts as the text animates -->
            <span class="rk-hero__typer-ghost" aria-hidden="true">{{ longest }}</span>
            <span class="rk-hero__typer-overlay">
              <span class="rk-hero__typer-text">{{ currentWord }}</span><span class="rk-hero__caret"></span>
            </span>
          </span>
        </h1>

        <p class="rk-hero__lede">
          I help ambitious freelancers, founders, and creators turn their craft
          into a six-figure business. Practical playbooks, real client wins,
          zero fluff.
        </p>

        <div class="rk-hero__cta">
          <a class="rk-btn rk-btn--primary" href="https://topmate.io/rahulkewat/1185547" target="_blank" rel="noopener">
            <span>Book a 1:1 call</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a class="rk-btn rk-btn--ghost" href="/freelancing/">
            Read the playbook
          </a>
        </div>

        <div class="rk-hero__meta">
          <div class="rk-hero__meta-item">
            <strong>$100k+</strong>
            <span>earned freelancing</span>
          </div>
          <div class="rk-hero__meta-divider"></div>
          <div class="rk-hero__meta-item">
            <strong>50+</strong>
            <span>clients shipped</span>
          </div>
          <div class="rk-hero__meta-divider"></div>
          <div class="rk-hero__meta-item">
            <strong>7+ yrs</strong>
            <span>in the trenches</span>
          </div>
        </div>

        <div class="rk-hero__socials" aria-label="Find Rahul on">
          <span class="rk-hero__socials-label">Find me on</span>
          <span class="rk-hero__socials-line" aria-hidden="true"></span>
          <a
            v-for="s in socials"
            :key="s.label"
            :href="s.href"
            :aria-label="s.label"
            target="_blank"
            rel="noopener"
            class="rk-hero__social"
          >
            <span class="rk-hero__social-icon" v-html="s.icon"></span>
            <span class="rk-hero__social-name">{{ s.label }}</span>
          </a>
        </div>
      </div>

      <div class="rk-hero__visual rk-reveal" data-delay="150">
        <div class="rk-hero__portrait">
          <img src="/rahul_kewat.png" alt="Rahul Kewat" loading="eager" />
          <div class="rk-hero__badge rk-hero__badge--top">
            <span>⚡</span> Top Rated Plus
          </div>
          <div class="rk-hero__badge rk-hero__badge--bottom">
            <span>🌍</span> Working with 12+ countries
          </div>
        </div>
      </div>
    </div>

    <div class="rk-hero__scroll" aria-hidden="true">
      <span>scroll</span>
      <div class="rk-hero__scroll-line"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const words = [
  'a freelance mentor.',
  'a six-figure consultant.',
  'a product builder.',
  'a creator economist.',
];

// Longest phrase reserves the typer's width so the layout never shifts
const longest = computed(() =>
  words.reduce((a, b) => (b.length > a.length ? b : a), '')
);

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rahulkewat/',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/rahul-kewat',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@iamrahulkewat',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/rahulkewat_/',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
  },
];

const currentWord = ref('');
let timer = null;
let wordIdx = 0;
let charIdx = 0;
let deleting = false;

const tick = () => {
  const word = words[wordIdx];
  if (!deleting) {
    charIdx++;
    currentWord.value = word.slice(0, charIdx);
    if (charIdx === word.length) {
      deleting = true;
      timer = setTimeout(tick, 1500);
      return;
    }
  } else {
    charIdx--;
    currentWord.value = word.slice(0, charIdx);
    if (charIdx === 0) {
      deleting = false;
      wordIdx = (wordIdx + 1) % words.length;
    }
  }
  timer = setTimeout(tick, deleting ? 35 : 70);
};

onMounted(() => {
  if (typeof window !== 'undefined') {
    timer = setTimeout(tick, 400);
  }
});

onBeforeUnmount(() => {
  if (timer) clearTimeout(timer);
});
</script>

<style scoped>
.rk-hero {
  position: relative;
  min-height: 92vh;
  display: flex;
  align-items: center;
  padding: 7rem 1.5rem 4rem;
  overflow: hidden;
}

.rk-hero__inner {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3rem;
  align-items: center;
}

/* Prevent inline content (the typer) from expanding its grid track,
   which is what causes the portrait to jump as text animates. */
.rk-hero__inner > * { min-width: 0; }

@media (max-width: 900px) {
  .rk-hero__inner {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

.rk-hero__pill {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.4rem 0.95rem;
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  border: 1px solid var(--rk-border);
  border-radius: 999px;
  background: transparent;
  margin-bottom: 1.5rem;
}

.rk-hero__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--rk-accent);
  box-shadow: 0 0 0 0 var(--rk-accent-glow);
  animation: rk-pulse 1.8s infinite;
}

@keyframes rk-pulse {
  0%   { box-shadow: 0 0 0 0 var(--rk-accent-glow); }
  70%  { box-shadow: 0 0 0 10px transparent; }
  100% { box-shadow: 0 0 0 0 transparent; }
}

.rk-hero__title {
  font-size: clamp(2.6rem, 6vw, 5rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1;
  margin: 0 0 1.5rem;
}

/* The typer reserves the maximum possible width via an invisible ghost,
   then renders the live text on top via an absolutely-positioned overlay.
   This means the H1's layout (and the image next to it) never shifts. */
.rk-hero__typer {
  position: relative;
  display: inline-block;
  vertical-align: top;
  color: var(--vp-c-text-2);
  font-weight: 800;
  max-width: 100%;
}

.rk-hero__typer-ghost {
  visibility: hidden;
  white-space: nowrap;
  pointer-events: none;
}

.rk-hero__typer-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  white-space: nowrap;
  display: inline-flex;
  align-items: baseline;
}

.rk-hero__typer-text { white-space: nowrap; }

.rk-hero__caret {
  display: inline-block;
  width: 3px;
  height: 1em;
  margin-left: 4px;
  background: var(--rk-accent);
  animation: rk-blink 1s steps(1) infinite;
  transform: translateY(4px);
}

@media (max-width: 900px) {
  .rk-hero__typer-overlay { justify-content: center; }
}

@keyframes rk-blink {
  50% { opacity: 0; }
}

.rk-hero__lede {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  max-width: 540px;
  margin-bottom: 2rem;
}

@media (max-width: 900px) {
  .rk-hero__lede { margin-left: auto; margin-right: auto; }
}

.rk-hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-bottom: 2.5rem;
}

@media (max-width: 900px) {
  .rk-hero__cta { justify-content: center; }
}

.rk-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.6rem;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 999px;
  text-decoration: none;
  transition: transform 0.3s var(--rk-ease), box-shadow 0.3s var(--rk-ease), background 0.3s var(--rk-ease);
  position: relative;
  overflow: hidden;
}

.rk-btn--primary {
  color: var(--rk-bg);
  background: var(--rk-fg);
  box-shadow: 0 10px 30px color-mix(in srgb, var(--rk-fg) 25%, transparent);
}

.rk-btn--primary:hover {
  background: var(--rk-accent);
  transform: translateY(-2px);
  box-shadow: 0 14px 36px var(--rk-accent-glow);
}

.rk-btn--ghost {
  color: var(--vp-c-text-1);
  background: transparent;
  border: 1px solid var(--rk-border);
}

.rk-btn--ghost:hover {
  border-color: var(--rk-accent);
  color: var(--rk-accent);
  transform: translateY(-2px);
}

.rk-hero__meta {
  display: inline-flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0.9rem 1.4rem;
  border: 1px solid var(--rk-border);
  border-radius: 999px;
  background: var(--rk-glass-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

@media (max-width: 900px) {
  .rk-hero__meta { margin: 0 auto; }
}

@media (max-width: 480px) {
  .rk-hero__meta {
    flex-direction: column;
    border-radius: 1.25rem;
    gap: 0.5rem;
  }
  .rk-hero__meta-divider { display: none; }
}

.rk-hero__meta-item {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.rk-hero__meta-item strong {
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--rk-fg);
}

.rk-hero__meta-item span {
  font-size: 0.74rem;
  color: var(--vp-c-text-2);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.rk-hero__meta-divider {
  width: 1px;
  height: 28px;
  background: var(--rk-border);
}

/* ─── Social row ─── */
.rk-hero__socials {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-top: 1.75rem;
  flex-wrap: wrap;
}

@media (max-width: 900px) {
  .rk-hero__socials { justify-content: center; }
}

.rk-hero__socials-label {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

.rk-hero__socials-line {
  flex: 0 0 32px;
  height: 1px;
  background: var(--rk-border);
}

@media (max-width: 900px) {
  .rk-hero__socials-line { display: none; }
}

.rk-hero__social {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.55rem;
  border-radius: 999px;
  text-decoration: none;
  color: var(--vp-c-text-2);
  border: 1px solid var(--rk-border);
  background: transparent;
  transition:
    transform 0.3s var(--rk-ease),
    color 0.3s var(--rk-ease),
    border-color 0.3s var(--rk-ease),
    background 0.3s var(--rk-ease),
    padding 0.3s var(--rk-ease);
}

.rk-hero__social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
}

.rk-hero__social-name {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  max-width: 0;
  overflow: hidden;
  white-space: nowrap;
  opacity: 0;
  transition:
    max-width 0.35s var(--rk-ease),
    opacity 0.25s var(--rk-ease),
    margin 0.35s var(--rk-ease);
}

.rk-hero__social:hover {
  transform: translateY(-2px);
  color: var(--rk-bg);
  background: var(--rk-fg);
  border-color: var(--rk-fg);
  padding-right: 0.85rem;
}

.rk-hero__social:hover .rk-hero__social-name {
  max-width: 80px;
  opacity: 1;
  margin-left: 2px;
}

.rk-hero__social:focus-visible {
  outline: 2px solid var(--rk-accent);
  outline-offset: 2px;
}

/* Visual / portrait — clean, no rings, no orbs */
.rk-hero__visual {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.rk-hero__portrait {
  position: relative;
  width: clamp(260px, 36vw, 420px);
  aspect-ratio: 1;
  border-radius: 50%;
}

.rk-hero__portrait img {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid var(--rk-border);
  box-shadow: 0 25px 60px color-mix(in srgb, var(--rk-fg) 14%, transparent);
  animation: rk-bob 6s ease-in-out infinite;
}

@keyframes rk-bob {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-10px); }
}

.rk-hero__badge {
  position: absolute;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 0.9rem;
  font-size: 0.78rem;
  font-weight: 600;
  background: var(--rk-bg);
  border: 1px solid var(--rk-border);
  border-radius: 999px;
  box-shadow: var(--rk-glass-shadow);
  animation: rk-bob 5s ease-in-out infinite;
}

.rk-hero__badge--top {
  top: 4%;
  right: -6%;
  animation-delay: -2s;
}

.rk-hero__badge--bottom {
  bottom: 6%;
  left: -8%;
  animation-delay: -4s;
}

@media (max-width: 600px) {
  .rk-hero__badge--top { right: 0; top: 0; }
  .rk-hero__badge--bottom { left: 0; bottom: 0; }
}

/* Scroll indicator */
.rk-hero__scroll {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  color: var(--vp-c-text-2);
  opacity: 0.7;
}

.rk-hero__scroll-line {
  width: 1px;
  height: 36px;
  background: linear-gradient(to bottom, var(--rk-fg), transparent);
  animation: rk-scroll 2s ease-in-out infinite;
}

@keyframes rk-scroll {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  51% { transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

@media (max-width: 600px) {
  .rk-hero__scroll { display: none; }
}
</style>
