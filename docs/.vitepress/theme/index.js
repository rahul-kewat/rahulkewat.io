// .vitepress/theme/index.js or .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme';
import '../custom.css'; // Import the custom CSS here
import ClickableBox from './components/ClickableBox.vue';
import Layout from './Layout.vue'; // Import your custom layout

export default {
  ...DefaultTheme,
  Layout, // Set your custom layout here
  enhanceApp({ app, router, siteData }) {
    // Register additional components if needed
    app.component('ClickableBox', ClickableBox);

    // Add AdSense verification code to the head
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1527757373409987';
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }
  },
};
