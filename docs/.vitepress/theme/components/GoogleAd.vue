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
        // Load the AdSense script dynamically
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        script.async = true;
        script.crossOrigin = 'anonymous';
        
        // Ensure that ads are initialized after the script loads
        script.onload = () => {
          setTimeout(() => {
            (adsbygoogle = window.adsbygoogle || []).push({});
          }, 200); // Delay initialization to ensure container is rendered
        };
  
        // Append the script to the head of the document
        document.head.appendChild(script);
      } else {
        // Re-initialize ads if the script is already loaded
        setTimeout(() => {
          (adsbygoogle = window.adsbygoogle || []).push({});
        }, 200); // Delay initialization to ensure container is rendered
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
    min-width: 300px;  /* Ensure a minimum width */
    min-height: 250px; /* Ensure a minimum height */
  }
  </style>
  