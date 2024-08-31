import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rahul Kewat",
  description: "Learn How I made $100k in just a few years",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/rahulkewat_logo.png',
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Tools', link: '/markdown-examples' },
      { text: 'Freelancing', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      // Upwork
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="Upwork"> <path fill="#42ff1b" d="M18.561,5.025c-2.539,0-4.51,1.647-5.31,4.362c-1.22-1.832-2.148-4.032-2.687-5.886H7.828v7.105c-0.002,1.404-1.141,2.543-2.547,2.545c-1.406-0.002-2.543-1.142-2.545-2.545V3.5H0v7.105c0,2.911,2.371,5.298,5.282,5.298c2.913,0,5.283-2.387,5.283-5.298V9.416c0.529,1.106,1.182,2.228,1.974,3.219L10.865,20.5h2.797l1.213-5.705c1.063,0.679,2.285,1.109,3.686,1.109c3,0,5.439-2.45,5.439-5.445C24,7.461,21.561,5.025,18.561,5.025L18.561,5.025z M18.561,13.157c-1.102,0-2.135-0.467-3.074-1.227l0.228-1.074l0.008-0.042c0.207-1.143,0.849-3.058,2.839-3.058c1.492,0,2.703,1.211,2.703,2.7C21.264,11.945,20.053,13.157,18.561,13.157L18.561,13.157z" class="color6cd441 svgShape"></path><path fill="#4fb939" d="M12,15.165L10.865,20.5H12V15.165L12,15.165z M10.564,3.5H7.828v7.105c-0.002,1.404-1.141,2.543-2.547,2.545c-1.406-0.002-2.543-1.142-2.545-2.545V3.5H0v7.105c0,2.911,2.371,5.298,5.282,5.298c2.913,0,5.283-2.387,5.283-5.298V9.416c0.404,0.845,0.88,1.699,1.436,2.497V7.194C11.386,5.943,10.9,4.655,10.564,3.5L10.564,3.5z" class="color5eb939 svgShape"></path></svg>' }, link: 'https://www.upwork.com/freelancers/~017e44b615de910457' },
      // LinkedIn
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/rahulkewat/' },
      // Github
      { icon: 'github', link: 'https://github.com/rahul-kewat' }
    ]
  },
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          additionalData: '@import "./custom.css";'
        }
      }
    }
  }
});
