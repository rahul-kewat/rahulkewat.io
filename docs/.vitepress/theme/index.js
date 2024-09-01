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
  },
};
