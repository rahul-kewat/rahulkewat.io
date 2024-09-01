<!-- .vitepress/theme/Layout.vue -->
<template>
  <div>
    <DefaultTheme.Layout>
      <!-- Custom sidebar content inserted in the aside-outline-after slot -->
      <template #aside-bottom>
        <div class="main-content">
          <!-- Google Ad Component -->
          <GoogleAd />
        </div>
      </template>
    </DefaultTheme.Layout>
  </div>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'; // Correctly import the default theme
import GoogleAd from './components/GoogleAd.vue'; // Import the GoogleAd component
</script>

<style scoped>
.main-content {
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
  margin-top: 1rem;
}

.main-content p {
  margin: 0;
  font-size: 1rem;
  color: #3eaf7c;
}
</style>
