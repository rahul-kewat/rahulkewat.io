import DefaultTheme from 'vitepress/theme';
import '../custom.css';
import './style.css';
import ClickableBox from './components/ClickableBox.vue';
import ModernHome from './components/ModernHome.vue';
import SiteFooter from './components/SiteFooter.vue';
import WebsiteBuilder from './components/builder/WebsiteBuilder.vue';
import Layout from './Layout.vue';

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('ClickableBox', ClickableBox);
    app.component('ModernHome', ModernHome);
    app.component('SiteFooter', SiteFooter);
    app.component('WebsiteBuilder', WebsiteBuilder);
  },
};
