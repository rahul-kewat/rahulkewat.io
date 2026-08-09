<!-- Custom layout that injects a modern landing page on the home route
     while preserving VitePress default theme behavior on doc pages. -->
<template>
  <DefaultTheme.Layout>
    <template #home-hero-before>
      <ModernHome />
    </template>

    <template #aside-bottom>
      <div class="main-content">
        <GoogleAd />
      </div>
    </template>

    <template #layout-bottom>
      <SeoJsonLd />
      <SiteFooter />
    </template>
  </DefaultTheme.Layout>
</template>

<script setup>
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import GoogleAd from './components/GoogleAd.vue';
import ModernHome from './components/ModernHome.vue';
import SiteFooter from './components/SiteFooter.vue';
import SeoJsonLd from './components/SeoJsonLd.vue';

const route = useRoute();

const toggleHomeFlag = () => {
  if (typeof document === 'undefined') return;
  const isHome = route.path === '/' || route.path === '/index.html';
  document.documentElement.classList.toggle('rk-modern-active', isHome);
};

onMounted(() => {
  toggleHomeFlag();
});

watch(
  () => route.path,
  () => nextTick(toggleHomeFlag)
);
</script>

<style scoped>
.main-content {
  padding: 1rem;
  border: 0px solid #eee;
  border-radius: 8px;
  margin-top: 1rem;
}

.main-content p {
  margin: 0;
  font-size: 1rem;
  color: var(--rk-accent);
}
</style>
