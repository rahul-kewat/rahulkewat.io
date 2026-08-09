<script setup>
/**
 * Keeps JSON-LD in sync on client-side route changes.
 * Static HTML also gets JSON-LD via transformHead in config.mts.
 */
import { watch, onBeforeUnmount } from 'vue';
import { useData } from 'vitepress';
import { buildPageJsonLd } from '../../seo';

const SCRIPT_ID = 'rk-seo-jsonld';
const { page, frontmatter, title, description } = useData();

function syncJsonLd() {
  if (typeof document === 'undefined') return;

  const json = buildPageJsonLd({
    relativePath: page.value?.relativePath || '',
    title: frontmatter.value?.title || title.value,
    description: description.value,
    frontmatter: frontmatter.value || {},
  });

  let el = document.getElementById(SCRIPT_ID);
  if (!el) {
    // Prefer updating the build-time script if present; else create one
    el = document.querySelector('script[type="application/ld+json"]');
    if (el && !el.id) el.id = SCRIPT_ID;
  }
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = SCRIPT_ID;
    document.head.appendChild(el);
  }
  el.textContent = json;
}

watch(
  () => [page.value?.relativePath, title.value, description.value],
  () => syncJsonLd(),
  { immediate: true }
);

onBeforeUnmount(() => {
  // Keep the tag for crawlers / next page; syncJsonLd will replace contents
});
</script>

<template>
  <span class="rk-seo-jsonld" hidden aria-hidden="true"></span>
</template>
