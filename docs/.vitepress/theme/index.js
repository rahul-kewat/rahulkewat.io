// .vitepress/theme/index.js or .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme';
import '../custom.css'; // Import the custom CSS here

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // You can add additional app enhancements here if needed
  }
};