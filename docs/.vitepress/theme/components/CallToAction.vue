<template>
  <section class="rk-cta rk-section rk-section--narrow">
    <div class="rk-cta__card rk-card rk-reveal">
      <div class="rk-cta__bg" aria-hidden="true">
        <div class="rk-cta__orb rk-cta__orb--1"></div>
        <div class="rk-cta__orb rk-cta__orb--2"></div>
      </div>

      <div class="rk-cta__content">
        <span class="rk-section__eyebrow">Ready when you are</span>
        <h2 class="rk-cta__title">
          Let's turn your craft into a
          <span class="rk-grad-text">six-figure business.</span>
        </h2>
        <p class="rk-cta__lede">
          One conversation can change the trajectory of your career. Book a 1:1
          call or grab the free playbook — start where you stand.
        </p>

        <form class="rk-cta__form" @submit.prevent="onSubmit">
          <input
            v-model="email"
            type="email"
            required
            placeholder="you@yourcraft.com"
            aria-label="Your email address"
          />
          <button type="submit">
            <span v-if="!sent">Get the playbook</span>
            <span v-else>Welcome aboard ✨</span>
          </button>
        </form>

        <p class="rk-cta__fineprint">
          No spam. Unsubscribe in one click. By signing up you'll get monthly
          field notes from the freelance trenches.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const sent = ref(false);

const onSubmit = () => {
  if (!email.value) return;
  sent.value = true;
  setTimeout(() => {
    sent.value = false;
    email.value = '';
  }, 3000);
};
</script>

<style scoped>
.rk-cta__card {
  position: relative;
  padding: 3rem 2rem;
  text-align: center;
  overflow: hidden;
  border-radius: var(--rk-radius-xl);
}

.rk-cta__bg { position: absolute; inset: 0; z-index: 0; }

.rk-cta__orb {
  position: absolute;
  width: 30rem;
  height: 30rem;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.45;
}

.rk-cta__orb--1 {
  top: -10rem;
  left: -10rem;
  background: radial-gradient(circle, var(--rk-accent), transparent 60%);
  opacity: 0.35;
}

.rk-cta__orb--2 {
  bottom: -10rem;
  right: -10rem;
  background: radial-gradient(circle, var(--rk-fg), transparent 60%);
  opacity: 0.08;
}

.dark .rk-cta__orb--1 { opacity: 0.25; }
.dark .rk-cta__orb--2 { opacity: 0.04; }

.rk-cta__content { position: relative; z-index: 1; max-width: 640px; margin: 0 auto; }

.rk-cta__title {
  font-size: clamp(1.8rem, 3.4vw, 2.6rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin: 1rem 0 1rem;
}

.rk-cta__lede {
  color: var(--vp-c-text-2);
  font-size: 1.05rem;
  line-height: 1.6;
  margin: 0 auto 2rem;
}

.rk-cta__form {
  display: flex;
  gap: 0.5rem;
  max-width: 460px;
  margin: 0 auto 1rem;
  padding: 0.4rem;
  border: 1px solid var(--rk-border);
  border-radius: 999px;
  background: var(--rk-glass-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.rk-cta__form input {
  flex: 1;
  border: none;
  background: transparent;
  padding: 0.55rem 1rem;
  font-size: 0.95rem;
  color: var(--rk-fg);
  outline: none;
}

.rk-cta__form input::placeholder { color: var(--vp-c-text-3); }

.rk-cta__form button {
  border: none;
  cursor: pointer;
  padding: 0.6rem 1.25rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--rk-bg);
  background: var(--rk-fg);
  transition: transform 0.3s var(--rk-ease), box-shadow 0.3s var(--rk-ease), background 0.3s var(--rk-ease);
}

.rk-cta__form button:hover {
  transform: translateY(-1px);
  background: var(--rk-accent);
  box-shadow: 0 10px 24px var(--rk-accent-glow);
}

.rk-cta__fineprint {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  margin: 0 auto;
  max-width: 480px;
}

@media (max-width: 540px) {
  .rk-cta__form { flex-direction: column; border-radius: 1.25rem; }
  .rk-cta__form button { width: 100%; }
}
</style>
