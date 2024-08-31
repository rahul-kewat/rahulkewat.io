import { defineConfig } from 'vitepress';

// Helper function to generate sidebar items
function generateSidebarItems(base: string, items: { text: string; link: string }[]) {
  return items.map(item => ({ text: item.text, link: `${base}${item.link}` }));
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rahul Kewat",
  description: "Learn How I made $100k in just a few years",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/rahulkewat_logo.png',
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'AI Tools', link: '/ai-tools/' },
      { text: 'Freelancing', link: '/freelancing/' }
    ],
    sidebar: {
      '/freelancing/': [
        {
          // text: 'Examples',
          items: generateSidebarItems('/freelancing/', [
            { text: 'What is freelancing', link: '/markdown-examples' },
            { text: 'How to 3% are making it', link: '/api-examples' },
            { text: 'Demanding an rewarding career path', link: '/api-examples' },
          ])
        },
        {
          text: 'Introduction & Mindset',
          collapsible: true,       // Enable collapsible behavior
          collapsed: true,         // Set to true if you want it collapsed by default
          items: generateSidebarItems('/freelancing/',[
            {
              // Title for the section.
              // text: 'Section A Title',
              items: [
                { text: 'My Freelancing Journey - From $0 to $100k', link: '...' },
                { text: 'The Mindset Shift - Thinking Like an Entrepreneur', link: '...' },
                { text: 'Setting Goals - The Roadmap to Success', link: '...' },
                { text: 'Overcoming Self-Doubt - Your Biggest Barrier', link: '...' },
                { text: 'Building a Success Routine', link: '...' },
                { text: 'Embracing the Freelancing Lifestyle', link: '...' },
                { text: 'Summary of Week 1 - Laying the Foundation', link: '...' }
              ]
            }
          ]),
        },
        {
          text: 'Setting Up for Success',
          collapsible: true,       // Enable collapsible behavior
          collapsed: true,         // Set to true if you want it collapsed by default
          items: generateSidebarItems('/freelancing/',[
            {
              // Title for the section.
              // text: 'Section A Title',
              items: [
                { text: 'Finding Your Niche - Why It Matters', link: '...' },
                { text: 'Creating a Standout Profile - Your First Impression', link: '...' },
                { text: 'Crafting a Winning Portfolio', link: '...' },
                { text: 'The Art of Writing Proposals', link: '...' },
                { text: 'Pricing Your Services Right', link: '...' },
                { text: 'Building Credibility with Testimonials', link: '...' },
                { text: 'Summary of Week 2 - Establishing Your Foundation', link: '...' }
              ]
            }
          ])
        },
        {
          text: 'Getting Your First Clients',
          collapsible: true,       // Enable collapsible behavior
          collapsed: true,         // Set to true if you want it collapsed by default
          items: generateSidebarItems('/freelancing/',[
            {
              // Title for the section.
              // text: 'Section A Title',
              items: [
                { text: 'Where to Find High-Quality Clients', link: '...' },
                { text: 'Networking Online - Building Relationships That Matter', link: '...' },
                { text: 'How to Get Your First Freelancing Gig', link: '...' },
                { text: 'Leveraging Social Proof', link: '...' },
                { text: 'Overcoming the “No Experience” Objection', link: '...' },
                { text: 'Closing Deals - The Follow-Up Strategy', link: '...' },
                { text: 'Summary of Week 3 - Securing Your First Clients', link: '...' }
              ]
            }
          ])
        },
        {
          text: 'Scaling Your Freelancing Business',
          collapsible: true,       // Enable collapsible behavior
          collapsed: true,         // Set to true if you want it collapsed by default
          items: generateSidebarItems('/freelancing/',[
            {
              // Title for the section.
              // text: 'Section A Title',
              items: [
                { text: 'Scaling Your Freelancing Income', link: '...' },
                { text: 'Expanding Your Services', link: '...' },
                { text: 'Managing Multiple Clients', link: '...' },
                { text: 'Building a Personal Brand', link: '...' },
                { text: 'Automation Tools to Streamline Your Business', link: '...' },
                { text: 'The Importance of Client Retention', link: '...' },
                { text: 'Summary of Week 4 - Scaling Up', link: '...' }
              ]
            }
          ])
        },
        {
          text: 'Advanced Strategies and Long-Term Growth',
          collapsible: true,       // Enable collapsible behavior
          collapsed: true,         // Set to true if you want it collapsed by default
          items: generateSidebarItems('/freelancing/',[
            {
              // Title for the section.
              // text: 'Section A Title',
              items: [
                { text: 'Diversifying Your Income Streams', link: '...' },
                { text: 'Moving from Freelancing to Consulting', link: '...' },
                { text: 'Creating Passive Income through Freelancing', link: '...' },
                { text: 'Building a Team to Expand Your Business', link: '...' },
                { text: 'Positioning Yourself as an Expert', link: '...' },
                { text: 'Collaborating with Other Freelancers', link: '...' },
                { text: 'Summary of Week 5 - Long-Term Growth Strategies', link: '...' }
              ]
            }
          ])
        },
        {
          text: 'The Freelancing Lifestyle',
          collapsible: true,       // Enable collapsible behavior
          collapsed: true,         // Set to true if you want it collapsed by default
          items: generateSidebarItems('/freelancing/',[
            {
              // Title for the section.
              // text: 'Section A Title',
              items: [
                { text: 'Maintaining Work-Life Balance', link: '...' },
                { text: 'Avoiding Burnout', link: '...' },
                { text: 'The Freedom of Freelancing', link: '...' },
                { text: 'Traveling as a Freelancer', link: '...' },
                { text: 'Staying Motivated for the Long Haul', link: '...' },
                { text: 'Freelancing and Family Life', link: '...' },
                { text: 'Summary of Week 6 - Embracing the Lifestyle', link: '...' }
              ]
            }
          ])
        },
        {
          text: 'Challenges and How to Overcome Them',
          collapsible: true,       // Enable collapsible behavior
          collapsed: true,         // Set to true if you want it collapsed by default
          items: generateSidebarItems('/freelancing/',[
            {
              // Title for the section.
              // text: 'Section A Title',
              items: [
                { text: 'Dealing with Difficult Clients', link: '...' },
                { text: 'Managing Financial Uncertainty', link: '...' },
                { text: 'Legal Considerations for Freelancers', link: '...' },
                { text: 'Overcoming Freelancing Loneliness', link: '...' },
                { text: 'Handling Rejections and Setbacks', link: '...' },
                { text: 'The Importance of Continuous Learning', link: '...' },
                { text: 'Building Resilience in Freelancing', link: '...' },
                { text: 'Summary of Week 7 - Overcoming Challenges', link: '...' }
              ]
            }
          ])
        },
        {
          text: 'Looking Ahead - Future-Proofing Your Career',
          collapsible: true,       // Enable collapsible behavior
          collapsed: true,         // Set to true if you want it collapsed by default
          items: generateSidebarItems('/freelancing/',[
            {
              // Title for the section.
              // text: 'Section A Title',
              items: [
                { text: 'Future Trends in Freelancing', link: '...' },
                { text: 'The Importance of Networking', link: '...' },
                { text: 'Personal Growth as a Freelancer', link: '...' },
                { text: 'Giving Back - Helping Others in the Freelancing Community', link: '...' },
                { text: 'Preparing for the Next Level', link: '...' },
                { text: 'Creating a Legacy through Freelancing', link: '...' },
                { text: 'Reflection - Lessons Learned on My Journey', link: '...' },
                { text: 'Encouraging Others to Take the Leap', link: '...' },
                { text: 'The Power of Persistence', link: '...' },
                { text: 'Conclusion and Next Steps', link: '...' }
              ]
            }
          ])
        },
      ],
      // 'tools': [
      //   {
      //     text: 'AI Tools',
      //     collapsible: true,
      //     collapsed: false,
      //     items: generateSidebarItems('/tools/',[
      //       { text: 'Tool 1', link: '/ai-tools/tool1' },
      //       { text: 'Tool 2', link: '/ai-tools/tool2' }
      //     ])
      //   }
      // ],
      // '/services/': [
      //   {
      //     text: 'Services',
      //     collapsible: true,
      //     collapsed: false,
      //     items: generateSidebarItems('/services/',[
      //       { text: 'Consulting', link: '/services/consulting' },
      //       { text: 'Workshops', link: '/services/workshops' }
      //     ])
      //   }
      // ]
    },
    socialLinks: [
      // Upwork
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="Upwork"> <path fill="#42ff1b" d="M18.561,5.025c-2.539,0-4.51,1.647-5.31,4.362c-1.22-1.832-2.148-4.032-2.687-5.886H7.828v7.105c-0.002,1.404-1.141,2.543-2.547,2.545c-1.406-0.002-2.543-1.142-2.545-2.545V3.5H0v7.105c0,2.911,2.371,5.298,5.282,5.298c2.913,0,5.283-2.387,5.283-5.298V9.416c0.529,1.106,1.182,2.228,1.974,3.219L10.865,20.5h2.797l1.213-5.705c1.063,0.679,2.285,1.109,3.686,1.109c3,0,5.439-2.45,5.439-5.445C24,7.461,21.561,5.025,18.561,5.025L18.561,5.025z M18.561,13.157c-1.102,0-2.135-0.467-3.074-1.227l0.228-1.074l0.008-0.042c0.207-1.143,0.849-3.058,2.839-3.058c1.492,0,2.703,1.211,2.703,2.7C21.264,11.945,20.053,13.157,18.561,13.157L18.561,13.157z" class="color6cd441 svgShape"></path><path fill="#4fb939" d="M12,15.165L10.865,20.5H12V15.165L12,15.165z M10.564,3.5H7.828v7.105c-0.002,1.404-1.141,2.543-2.547,2.545c-1.406-0.002-2.543-1.142-2.545-2.545V3.5H0v7.105c0,2.911,2.371,5.298,5.282,5.298c2.913,0,5.283-2.387,5.283-5.298V9.416c0.404,0.845,0.88,1.699,1.436,2.497V7.194C11.386,5.943,10.9,4.655,10.564,3.5L10.564,3.5z" class="color5eb939 svgShape"></path></svg>' }, link: 'https://www.upwork.com/freelancers/~017e44b615de910457' },
      // Youtube
      { icon: 'youtube', link: 'https://www.youtube.com/@irahulkewat' },
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
