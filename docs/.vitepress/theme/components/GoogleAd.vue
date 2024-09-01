<!-- .vitepress/theme/components/GoogleAd.vue -->
<template>
  <div class="google-ad-container">
    <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1527757373409987"
     data-ad-slot="7969276000"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
    </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue';

onMounted(() => {
    nextTick(() => {
    // Check if the AdSense script is already loaded
    if (!window.adsbygoogle) {
      // Create the script element for AdSense
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.async = true;
      script.crossOrigin = 'anonymous';

      // Ensure that ads are initialized after the script loads
      script.onload = () => {
        (adsbygoogle = window.adsbygoogle || []).push({});
      };

      // Append the script to the head of the document
      document.head.appendChild(script);
    } else {
      // Re-initialize ads if the script is already loaded
      (adsbygoogle = window.adsbygoogle || []).push({});
    }
  });
});
</script>

<style scoped>
.google-ad-container {
  margin: 20px 0;
  display: flex;
  justify-content: center;
  border: 0px;
}
</style>
