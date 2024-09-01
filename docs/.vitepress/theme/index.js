// .vitepress/theme/index.js or .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme';
import '../custom.css'; // Import the custom CSS here
import ClickableBox from './components/ClickableBox.vue'
import RazorpayButton from './components/RazorpayButton.vue'; // Import your Razorpay button component


export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // You can add additional app enhancements here if needed
    app.component('ClickableBox', ClickableBox)

    // Dynamically load the Razorpay script
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.head.appendChild(script);
    }
    // Register the Razorpay button component globally
    app.component('RazorpayButton', RazorpayButton);
  }
};