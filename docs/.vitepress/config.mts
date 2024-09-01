import { defineConfig } from 'vitepress';

// Helper function to generate sidebar items
// Enhanced helper function to generate sidebar items
function generateSidebarItems(base: string, items: Array<any>): Array<any> {
  return items.map(item => {
    // If the item has nested items, process them recursively
    if (item.items) {
      return {
        ...item, // Copy existing properties like text, collapsible, etc.
        items: generateSidebarItems(base, item.items) // Recursive call for nested items
      };
    }
    // For leaf items, ensure the correct path construction
    return {
      ...item,
      link: item.link ? `${base}${item.link}`.replace(/\/{2,}/g, '/') : undefined // Fix link paths, ensure no double slashes
    };
  });
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
      { text: 'Best Tools', link: '/best-tools/' },
      { text: 'Freelancing', link: '/freelancing/' }
    ],
    sidebar: {
      '/freelancing/': [
        {
          // text: 'Examples',
          items: generateSidebarItems('/freelancing/', [
            { text: 'What is freelancing', link: '/what-is-freelancing' },
            { text: 'How top 3% are making it', link: '/how-top-3-percent-making-it' },
            { text: 'Rewarding career path', link: '/rewarding-career-path' },
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
                { text: 'My Freelancing Journey - From $0 to $100k', link: 'my-freelancing-journey' },
                { text: 'The Mindset Shift - Thinking Like an Entrepreneur', link: 'the-mindset-shift' },
                { text: 'Setting Goals - The Roadmap to Success', link: 'setting-goals' },
                { text: 'Overcoming Self-Doubt - Your Biggest Barrier', link: 'overcoming-self-doubt' },
                { text: 'Building a Success Routine', link: 'building-a-success-routine' },
                { text: 'Embracing the Freelancing Lifestyle', link: 'embracing-the-freelancing-lifestyle' },
                { text: 'Summary of Week 1 - Laying the Foundation', link: 'laying-the-foundation' }
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
                { text: 'Finding Your Niche - Why It Matters', link: 'finding-your-niche' },
                { text: 'Creating a Standout Profile - Your First Impression', link: 'creating-a-standout-profile' },
                { text: 'Crafting a Winning Portfolio', link: 'creating-a-winning-portfolio' },
                { text: 'The Art of Writing Proposals', link: 'art-of-writing-proposals' },
                { text: 'Pricing Your Services Right', link: 'pricing-your-services-right' },
                { text: 'Building Credibility with Testimonials', link: 'building-credibility-with-testimonials' },
                { text: 'Summary of Week 2 - Establishing Your Foundation', link: 'establishing-your-foundation' }
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
                { text: 'Where to Find High-Quality Clients', link: 'where-to-find-high-quality-clients' },
                { text: 'Networking Online - Building Relationships That Matter', link: 'building-relationship-that-matter' },
                { text: 'How to Get Your First Freelancing Gig', link: 'get-your-first-freelancing-gig' },
                { text: 'Leveraging Social Proof', link: 'leveraging-social-proof' },
                { text: 'Overcoming the “No Experience” Objection', link: 'overcoming-no-experience-objection' },
                { text: 'Closing Deals - The Follow-Up Strategy', link: 'closing-deals-the-followup-strategy' },
                { text: 'Summary of Week 3 - Securing Your First Clients', link: 'securing-your-first-clients' }
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
                { text: 'Scaling Your Freelancing Income', link: 'scailing-your-freelancing-income' },
                { text: 'Expanding Your Services', link: 'expanding-your-services' },
                { text: 'Managing Multiple Clients', link: 'managing-multiple-clients' },
                { text: 'Building a Personal Brand', link: 'building-a-personal-brand' },
                { text: 'Automation Tools to Streamline Your Business', link: 'automatin-tools-to-streamline-your-business' },
                { text: 'The Importance of Client Retention', link: 'the-importance-of-client-retention' },
                { text: 'Summary of Week 4 - Scaling Up', link: 'scaling-up' }
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
                { text: 'Diversifying Your Income Streams', link: 'diversifying-your-income-streams' },
                { text: 'Moving from Freelancing to Consulting', link: 'moving-from-freelancing-consulting' },
                { text: 'Creating Passive Income through Freelancing', link: 'creating-passive-income-through-freelancing' },
                { text: 'Building a Team to Expand Your Business', link: 'building-a-team-to-expand-your-business' },
                { text: 'Positioning Yourself as an Expert', link: 'positioning-yourself-as-an-expert' },
                { text: 'Collaborating with Other Freelancers', link: 'collaborating-with-other-freelancers' },
                { text: 'Summary of Week 5 - Long-Term Growth Strategies', link: 'long-term-growth-startegies' }
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
                { text: 'Maintaining Work-Life Balance', link: 'maintaining-work-life-balance' },
                { text: 'Avoiding Burnout', link: 'avoiding-burnout' },
                { text: 'The Freedom of Freelancing', link: 'the-freedom-of-freelancing' },
                { text: 'Traveling as a Freelancer', link: 'travelling-as-a-freelancer' },
                { text: 'Staying Motivated for the Long Haul', link: 'statying-motivated-for-the-long-haul' },
                { text: 'Freelancing and Family Life', link: 'freelancing-and-family-life' },
                { text: 'Summary of Week 6 - Embracing the Lifestyle', link: 'embracing-the-lifestyle' }
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
                { text: 'Dealing with Difficult Clients', link: 'dealing-with-difficult-clients' },
                { text: 'Managing Financial Uncertainty', link: 'managing-financial-uncertainty' },
                { text: 'Legal Considerations for Freelancers', link: 'legal-consideration-for-freelancers' },
                { text: 'Overcoming Freelancing Loneliness', link: 'overcoming-freelancing-loneliness' },
                { text: 'Handling Rejections and Setbacks', link: 'handling-rejections-and-setbacks' },
                { text: 'The Importance of Continuous Learning', link: 'the-importance-of-continuous-learning' },
                { text: 'Building Resilience in Freelancing', link: 'building-resilience-in-freelancing' },
                { text: 'Summary of Week 7 - Overcoming Challenges', link: 'overcoming-challenges' }
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
                { text: 'Future Trends in Freelancing', link: 'future-trends-in-freelancing' },
                { text: 'The Importance of Networking', link: 'importance-of-networking' },
                { text: 'Personal Growth as a Freelancer', link: 'personal-growth-as-a-freelancer' },
                { text: 'Giving Back - Helping Others in the Freelancing Community', link: 'giving-back-helping-others' },
                { text: 'Preparing for the Next Level', link: 'preparing-for-the-next-level' },
                { text: 'Creating a Legacy through Freelancing', link: 'creating-a-legacy-through-freelancing' },
                { text: 'Reflection - Lessons Learned on My Journey', link: 'reflection-lessons-learned' },
                { text: 'Encouraging Others to Take the Leap', link: 'encourgaing-others-to-take-the-leap' },
                { text: 'The Power of Persistence', link: 'the-power-of-persistence' },
                { text: 'Conclusion and Next Steps', link: 'conclustion-and-the-next-step' }
              ]
            }
          ])
        },
      ],
      '/best-tools/': [
        {
          // text: 'Best Tools',
          items: generateSidebarItems('/best-tools/', [
            { text: 'Project Management', link: 'project-management' },
            { text: 'Time Tracking', link: 'time-tracking' },
            { text: 'Invoicing & Payments', link: 'invoicing-payments' },
            { text: 'Design Tools', link: 'design-tools' },
            { text: 'Communication & Collaboration', link: 'communication-collaboration' },
            { text: 'File Sharing & Storage', link: 'file-sharing-storage' },
            { text: 'Content Creation & Writing', link: 'content-creation-writing' },
            { text: 'Coding & Development', link: 'coding-development' },
            { text: 'Marketing & SEO', link: 'marketing-seo' },
            { text: 'Social Media Management', link: 'social-media-management' },
            { text: 'Customer Relationship Management (CRM)', link: 'crm-tools' },
            { text: 'Freelance Platforms', link: 'freelance-platforms' },
            { text: 'File Compression & Conversion', link: 'file-compression-conversion' },
            { text: 'Prototyping & Wireframing', link: 'prototyping-wireframing' },
            { text: 'Virtual Private Network (VPN)', link: 'vpns-tools' },
            { text: 'Graphic Design Marketplaces', link: 'graphic-design-marketplaces' },
            { text: 'Learning & Skill Development', link: 'learning-skill-development' },
            { text: 'Email Marketing', link: 'email-marketing' },
            { text: 'Website Building', link: 'website-building' },
            { text: 'Legal & Contracts', link: 'legal-contracts' }
          ])
        }
      ],
      '/services/': [
        {
          text: 'Services',
          collapsible: true,
          collapsed: false,
          items: generateSidebarItems('/services/',[
            { text: 'Consulting', link: '/services/consulting' },
            { text: 'Workshops', link: '/services/workshops' }
          ])
        }
      ]
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
    ],
    search: {
      provider: 'local'
    }
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
