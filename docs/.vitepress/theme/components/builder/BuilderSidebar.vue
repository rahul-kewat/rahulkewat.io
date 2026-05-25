<template>
  <aside class="bs">
    <nav class="bs__tabs" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        type="button"
        role="tab"
        class="bs__tab"
        :class="{ 'is-active': active === tab.id }"
        :aria-selected="active === tab.id"
        @click="active = tab.id"
      >
        <span v-html="tab.icon"></span>
        <span>{{ tab.label }}</span>
      </button>
    </nav>

    <div class="bs__body">
      <!-- TEMPLATE TAB -->
      <div v-show="active === 'template'" class="bs__panel">
        <h3 class="bs__h3">Pick a template</h3>
        <p class="bs__hint">Switch any time without losing your content.</p>
        <div class="bs__templates">
          <button
            v-for="t in templates"
            :key="t.id"
            type="button"
            class="bs__tpl"
            :class="{ 'is-active': config.template === t.id }"
            @click="config.template = t.id"
          >
            <div class="bs__tpl-preview" :data-tpl="t.id">
              <div class="bs__tpl-bar"></div>
              <div class="bs__tpl-bar bs__tpl-bar--sm"></div>
              <div class="bs__tpl-grid">
                <span></span><span></span><span></span>
              </div>
            </div>
            <div class="bs__tpl-meta">
              <strong>{{ t.name }}</strong>
              <span>{{ t.description }}</span>
            </div>
          </button>
        </div>
      </div>

      <!-- CONTENT TAB -->
      <div v-show="active === 'content'" class="bs__panel">
        <details class="bs__group" open>
          <summary>Hero</summary>
          <BuilderField v-model="c.hero.name" label="Your name" />
          <BuilderField v-model="c.hero.role" label="Role / title" placeholder="e.g. Freelance Designer" />
          <BuilderField v-model="c.hero.headline" label="Headline" type="textarea" :rows="2" />
          <BuilderField v-model="c.hero.tagline" label="Tagline" type="textarea" :rows="3" />
          <div class="bs__row">
            <BuilderField v-model="c.hero.ctaPrimary.text" label="Primary CTA" placeholder="Hire me" />
            <BuilderField v-model="c.hero.ctaPrimary.link" label="Primary link" placeholder="mailto:you@..." />
          </div>
          <div class="bs__row">
            <BuilderField v-model="c.hero.ctaSecondary.text" label="Secondary CTA" placeholder="View work" />
            <BuilderField v-model="c.hero.ctaSecondary.link" label="Secondary link" placeholder="#work" />
          </div>
          <div class="bs__file">
            <label class="bs__file-label">
              Avatar (optional)
              <input type="file" accept="image/*" @change="onAvatarChange" />
            </label>
            <button v-if="c.hero.avatar" type="button" class="bs__file-clear" @click="c.hero.avatar = ''">Remove</button>
          </div>
        </details>

        <details class="bs__group">
          <summary>About</summary>
          <BuilderField v-model="c.about.heading" label="Heading" />
          <BuilderField v-model="c.about.body" label="Body" type="textarea" :rows="5" />
          <div class="bs__list-head">
            <span>Highlights</span>
            <button type="button" class="bs__add" @click="c.about.highlights.push('New highlight')">+ Add</button>
          </div>
          <div v-for="(h, i) in c.about.highlights" :key="i" class="bs__list-row">
            <input type="text" v-model="c.about.highlights[i]" />
            <button type="button" class="bs__remove" @click="c.about.highlights.splice(i, 1)" aria-label="Remove">×</button>
          </div>
          <label class="bs__toggle">
            <input type="checkbox" v-model="c.about.enabled" />
            <span>Show this section</span>
          </label>
        </details>

        <details class="bs__group">
          <summary>Services</summary>
          <BuilderField v-model="c.services.heading" label="Heading" />
          <BuilderField v-model="c.services.subheading" label="Subheading" />
          <div class="bs__list-head">
            <span>Items ({{ c.services.items.length }})</span>
            <button type="button" class="bs__add" @click="c.services.items.push({ icon: '✨', title: 'New service', description: 'Describe what you offer.' })">+ Add</button>
          </div>
          <div v-for="(s, i) in c.services.items" :key="i" class="bs__sub">
            <div class="bs__sub-head">
              <span>Service {{ i + 1 }}</span>
              <button type="button" class="bs__remove" @click="c.services.items.splice(i, 1)" aria-label="Remove">×</button>
            </div>
            <div class="bs__row">
              <BuilderField v-model="s.icon" label="Icon (emoji)" />
              <BuilderField v-model="s.title" label="Title" />
            </div>
            <BuilderField v-model="s.description" label="Description" type="textarea" :rows="2" />
          </div>
          <label class="bs__toggle">
            <input type="checkbox" v-model="c.services.enabled" />
            <span>Show this section</span>
          </label>
        </details>

        <details class="bs__group">
          <summary>Projects / Work</summary>
          <BuilderField v-model="c.projects.heading" label="Heading" />
          <BuilderField v-model="c.projects.subheading" label="Subheading" />
          <div class="bs__list-head">
            <span>Projects ({{ c.projects.items.length }})</span>
            <button type="button" class="bs__add" @click="c.projects.items.push({ title: 'New project', description: 'Brief description.', tags: ['Tag'], link: '', year: String(new Date().getFullYear()) })">+ Add</button>
          </div>
          <div v-for="(p, i) in c.projects.items" :key="i" class="bs__sub">
            <div class="bs__sub-head">
              <span>Project {{ i + 1 }}</span>
              <button type="button" class="bs__remove" @click="c.projects.items.splice(i, 1)" aria-label="Remove">×</button>
            </div>
            <div class="bs__row">
              <BuilderField v-model="p.title" label="Title" />
              <BuilderField v-model="p.year" label="Year" />
            </div>
            <BuilderField v-model="p.description" label="Description" type="textarea" :rows="2" />
            <BuilderField :model-value="(p.tags || []).join(', ')" @update:model-value="(v) => p.tags = v.split(',').map(t => t.trim()).filter(Boolean)" label="Tags (comma-separated)" />
            <BuilderField v-model="p.link" label="Link (optional)" placeholder="https://" />
          </div>
          <label class="bs__toggle">
            <input type="checkbox" v-model="c.projects.enabled" />
            <span>Show this section</span>
          </label>
        </details>

        <details class="bs__group">
          <summary>Skills / Toolbox</summary>
          <BuilderField v-model="c.skills.heading" label="Heading" />
          <BuilderField :model-value="(c.skills.items || []).join(', ')" @update:model-value="(v) => c.skills.items = v.split(',').map(t => t.trim()).filter(Boolean)" label="Skills (comma-separated)" type="textarea" :rows="3" />
          <label class="bs__toggle">
            <input type="checkbox" v-model="c.skills.enabled" />
            <span>Show this section</span>
          </label>
        </details>

        <details class="bs__group">
          <summary>Testimonials</summary>
          <BuilderField v-model="c.testimonials.heading" label="Heading" />
          <div class="bs__list-head">
            <span>Items ({{ c.testimonials.items.length }})</span>
            <button type="button" class="bs__add" @click="c.testimonials.items.push({ quote: 'A glowing review goes here.', name: 'Jane Doe', role: 'CEO, ACME' })">+ Add</button>
          </div>
          <div v-for="(t, i) in c.testimonials.items" :key="i" class="bs__sub">
            <div class="bs__sub-head">
              <span>Testimonial {{ i + 1 }}</span>
              <button type="button" class="bs__remove" @click="c.testimonials.items.splice(i, 1)" aria-label="Remove">×</button>
            </div>
            <BuilderField v-model="t.quote" label="Quote" type="textarea" :rows="3" />
            <div class="bs__row">
              <BuilderField v-model="t.name" label="Name" />
              <BuilderField v-model="t.role" label="Role" />
            </div>
          </div>
          <label class="bs__toggle">
            <input type="checkbox" v-model="c.testimonials.enabled" />
            <span>Show this section</span>
          </label>
        </details>

        <details class="bs__group">
          <summary>Contact</summary>
          <BuilderField v-model="c.contact.heading" label="Heading" />
          <BuilderField v-model="c.contact.body" label="Message" type="textarea" :rows="3" />
          <BuilderField v-model="c.contact.email" label="Email" type="email" />
          <BuilderField v-model="c.contact.social.twitter" label="Twitter / X URL" type="url" placeholder="https://" />
          <BuilderField v-model="c.contact.social.linkedin" label="LinkedIn URL" type="url" placeholder="https://" />
          <BuilderField v-model="c.contact.social.github" label="GitHub URL" type="url" placeholder="https://" />
          <BuilderField v-model="c.contact.social.upwork" label="Upwork URL" type="url" placeholder="https://" />
          <BuilderField v-model="c.contact.social.dribbble" label="Dribbble URL" type="url" placeholder="https://" />
          <BuilderField v-model="c.contact.social.behance" label="Behance URL" type="url" placeholder="https://" />
          <label class="bs__toggle">
            <input type="checkbox" v-model="c.contact.enabled" />
            <span>Show this section</span>
          </label>
        </details>
      </div>

      <!-- STYLE TAB -->
      <div v-show="active === 'style'" class="bs__panel">
        <h3 class="bs__h3">Theme & typography</h3>

        <div class="bs__palettes">
          <button
            v-for="p in palettes"
            :key="p.name"
            type="button"
            class="bs__palette"
            :title="p.name"
            @click="applyPalette(p)"
          >
            <span :style="{ background: p.primary }"></span>
            <span :style="{ background: p.accent }"></span>
            <span :style="{ background: p.bg }"></span>
            <small>{{ p.name }}</small>
          </button>
        </div>

        <div class="bs__row">
          <BuilderField v-model="config.theme.primary" label="Primary" type="color" />
          <BuilderField v-model="config.theme.accent" label="Accent" type="color" />
        </div>
        <div class="bs__row">
          <BuilderField v-model="config.theme.bg" label="Background" type="color" />
          <BuilderField v-model="config.theme.surface" label="Surface" type="color" />
        </div>
        <div class="bs__row">
          <BuilderField v-model="config.theme.text" label="Text" type="color" />
          <BuilderField v-model="config.theme.muted" label="Muted text" type="color" />
        </div>

        <BuilderField
          v-model="config.theme.mode"
          label="Mode"
          type="select"
          :options="[{value:'dark',label:'Dark'},{value:'light',label:'Light'}]"
        />

        <BuilderField
          v-model="config.theme.fontHeading"
          label="Heading font"
          type="select"
          :options="fonts"
        />
        <BuilderField
          v-model="config.theme.fontBody"
          label="Body font"
          type="select"
          :options="fonts"
        />

        <BuilderField
          v-model="config.theme.radius"
          label="Corner roundness"
          :hint="config.theme.radius + 'px'"
          type="range"
          :min="0"
          :max="32"
        />
      </div>

      <!-- SEO TAB -->
      <div v-show="active === 'seo'" class="bs__panel">
        <h3 class="bs__h3">SEO & social</h3>
        <p class="bs__hint">These tags ship with the downloaded HTML. Important for ranking on Google.</p>
        <BuilderField v-model="c.seo.title" label="Title (≤60 chars)" :hint="c.seo.title.length + '/60'" />
        <BuilderField v-model="c.seo.description" label="Meta description (≤160 chars)" :hint="c.seo.description.length + '/160'" type="textarea" :rows="3" />
        <BuilderField v-model="c.seo.keywords" label="Keywords" placeholder="freelance designer, ux, mumbai" />
        <BuilderField v-model="c.seo.siteUrl" label="Canonical URL" type="url" placeholder="https://yoursite.com" />
        <BuilderField v-model="c.seo.twitter" label="Twitter handle" placeholder="@username" />

        <div class="bs__seo-checks">
          <h4>Checklist</h4>
          <div class="bs__check" :class="{ ok: seoChecks.title }">
            <span class="bs__check-dot"></span>Title between 30–60 chars
          </div>
          <div class="bs__check" :class="{ ok: seoChecks.description }">
            <span class="bs__check-dot"></span>Description between 70–160 chars
          </div>
          <div class="bs__check" :class="{ ok: seoChecks.keywords }">
            <span class="bs__check-dot"></span>Keywords filled in
          </div>
          <div class="bs__check" :class="{ ok: seoChecks.url }">
            <span class="bs__check-dot"></span>Canonical URL set
          </div>
          <div class="bs__check" :class="{ ok: seoChecks.email }">
            <span class="bs__check-dot"></span>Contact email present
          </div>
          <div class="bs__check" :class="{ ok: seoChecks.social }">
            <span class="bs__check-dot"></span>At least one social link (for sameAs schema)
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref, computed } from 'vue';
import BuilderField from './BuilderField.vue';
import { templates } from './templates/index.js';

const props = defineProps({
  config: { type: Object, required: true },
});

const active = ref('template');

const c = computed(() => props.config.content);

const tabs = [
  { id: 'template', label: 'Template', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>' },
  { id: 'content', label: 'Content', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' },
  { id: 'style', label: 'Style', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>' },
  { id: 'seo', label: 'SEO', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' },
];

const palettes = [
  { name: 'Violet sky', primary: '#8b5cf6', accent: '#06b6d4', bg: '#0b0b14', surface: '#15151f', text: '#f5f5fa', muted: '#a3a3b3' },
  { name: 'Sunset',     primary: '#f59e0b', accent: '#ec4899', bg: '#0c0a14', surface: '#181522', text: '#fdf6e3', muted: '#a89c8a' },
  { name: 'Mono ink',   primary: '#0a0a0a', accent: '#ef4444', bg: '#fafaf7', surface: '#ffffff', text: '#0a0a0a', muted: '#666666' },
  { name: 'Forest',     primary: '#22c55e', accent: '#14b8a6', bg: '#0a1410', surface: '#13201b', text: '#ecfdf5', muted: '#9ab3a8' },
  { name: 'Royal',      primary: '#6366f1', accent: '#a855f7', bg: '#0a0a18', surface: '#15152b', text: '#f5f5ff', muted: '#a0a0c0' },
  { name: 'Mocha',      primary: '#a16207', accent: '#dc2626', bg: '#1c1410', surface: '#2a1f18', text: '#fef3c7', muted: '#a89884' },
  { name: 'Snow',       primary: '#3b82f6', accent: '#8b5cf6', bg: '#ffffff', surface: '#f4f4f7', text: '#0f172a', muted: '#64748b' },
  { name: 'Cyber',      primary: '#06b6d4', accent: '#10b981', bg: '#04111a', surface: '#0a1f2c', text: '#e0fefe', muted: '#7da6b3' },
];

const fonts = [
  'Inter', 'Space Grotesk', 'Plus Jakarta Sans', 'Manrope', 'DM Sans',
  'Outfit', 'Poppins', 'Sora', 'Playfair Display', 'Lora',
  'Fraunces', 'JetBrains Mono', 'IBM Plex Mono'
].map((f) => ({ value: f, label: f }));

const applyPalette = (p) => {
  Object.assign(props.config.theme, {
    primary: p.primary,
    accent: p.accent,
    bg: p.bg,
    surface: p.surface,
    text: p.text,
    muted: p.muted,
    mode: p.bg.toLowerCase().startsWith('#f') || p.bg.toLowerCase().startsWith('#e') ? 'light' : 'dark',
  });
};

const onAvatarChange = (e) => {
  const file = e.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => { props.config.content.hero.avatar = reader.result; };
  reader.readAsDataURL(file);
};

const seoChecks = computed(() => {
  const s = c.value.seo;
  const social = c.value.contact.social;
  return {
    title: s.title.length >= 30 && s.title.length <= 60,
    description: s.description.length >= 70 && s.description.length <= 160,
    keywords: !!s.keywords,
    url: !!s.siteUrl,
    email: !!c.value.contact.email,
    social: Object.values(social).some((v) => !!v),
  };
});
</script>

<style scoped>
.bs {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-bg);
  overflow: hidden;
  height: 100%;
  min-height: 600px;
}
.bs__tabs {
  display: grid; grid-template-columns: repeat(4, 1fr);
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}
.bs__tab {
  display: flex; flex-direction: column; align-items: center; gap: 0.25rem;
  padding: 0.85rem 0.5rem; font-size: 0.78rem; font-weight: 600;
  border: none; cursor: pointer; background: transparent;
  color: var(--vp-c-text-2); font-family: inherit;
  border-bottom: 2px solid transparent; transition: all .2s ease;
}
.bs__tab:hover { color: var(--vp-c-text-1); }
.bs__tab.is-active { color: var(--vp-c-text-1); border-bottom-color: var(--rk-accent-1); }
.bs__body { padding: 1rem; overflow-y: auto; flex: 1; }

.bs__h3 { font-size: 0.95rem; font-weight: 700; margin: 0 0 0.5rem; }
.bs__hint { font-size: 0.78rem; color: var(--vp-c-text-3); margin-bottom: 1rem; }

/* Templates */
.bs__templates { display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; }
.bs__tpl {
  display: flex; flex-direction: column; gap: 0.5rem; padding: 0.5rem;
  border: 2px solid var(--vp-c-divider); border-radius: 10px;
  background: var(--vp-c-bg-soft); cursor: pointer; text-align: left;
  font-family: inherit; transition: all .25s ease;
}
.bs__tpl:hover { transform: translateY(-2px); }
.bs__tpl.is-active { border-color: var(--rk-accent-1); background: color-mix(in srgb, var(--rk-accent-1) 6%, transparent); }
.bs__tpl-preview {
  height: 70px; border-radius: 6px; padding: 0.5rem;
  display: flex; flex-direction: column; gap: 4px;
  background: linear-gradient(135deg, #8b5cf6, #06b6d4);
}
.bs__tpl-preview[data-tpl="minimal"] { background: #f5f5f0; color: #111; }
.bs__tpl-preview[data-tpl="bold"] { background: #fde047; }
.bs__tpl-preview[data-tpl="tech"] { background: #0b0b14; }
.bs__tpl-bar { height: 7px; width: 60%; background: rgba(255,255,255,0.85); border-radius: 2px; }
.bs__tpl-bar--sm { width: 35%; }
.bs__tpl-preview[data-tpl="minimal"] .bs__tpl-bar { background: #111; }
.bs__tpl-preview[data-tpl="bold"] .bs__tpl-bar { background: #111; }
.bs__tpl-preview[data-tpl="tech"] .bs__tpl-bar { background: #06b6d4; }
.bs__tpl-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 4px; margin-top: auto; }
.bs__tpl-grid span { height: 14px; border-radius: 2px; background: rgba(255,255,255,0.5); }
.bs__tpl-preview[data-tpl="minimal"] .bs__tpl-grid span { background: rgba(0,0,0,0.1); }
.bs__tpl-preview[data-tpl="bold"] .bs__tpl-grid span { background: rgba(0,0,0,0.2); }
.bs__tpl-preview[data-tpl="tech"] .bs__tpl-grid span { background: rgba(255,255,255,0.1); }
.bs__tpl-meta { display: flex; flex-direction: column; line-height: 1.3; }
.bs__tpl-meta strong { font-size: 0.85rem; }
.bs__tpl-meta span { font-size: 0.72rem; color: var(--vp-c-text-3); }

/* Groups */
.bs__group {
  border: 1px solid var(--vp-c-divider); border-radius: 10px;
  margin-bottom: 0.65rem; background: var(--vp-c-bg-soft);
}
.bs__group summary {
  cursor: pointer; padding: 0.7rem 0.85rem;
  font-weight: 600; font-size: 0.88rem; user-select: none;
  list-style: none; display: flex; align-items: center; justify-content: space-between;
}
.bs__group summary::after {
  content: "+"; font-size: 1.1rem; color: var(--vp-c-text-3); transition: transform .2s ease;
}
.bs__group[open] summary::after { transform: rotate(45deg); }
.bs__group[open] { background: var(--vp-c-bg); }
.bs__group > *:not(summary) { padding: 0 0.85rem; }
.bs__group > details:not(summary) { padding: 0; }
.bs__group > *:last-child { padding-bottom: 0.85rem; }

/* Subgroups */
.bs__sub {
  border: 1px dashed var(--vp-c-divider); border-radius: 8px;
  padding: 0.75rem; margin: 0.5rem 0; background: var(--vp-c-bg-soft);
}
.bs__sub-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; font-size: 0.78rem; font-weight: 600; color: var(--vp-c-text-2); }

.bs__row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; }

.bs__list-head { display: flex; justify-content: space-between; align-items: center; font-size: 0.78rem; font-weight: 600; color: var(--vp-c-text-2); margin: 0.5rem 0; }
.bs__list-row { display: flex; gap: 0.4rem; margin-bottom: 0.4rem; }
.bs__list-row input { flex: 1; padding: 0.5rem 0.7rem; font-size: 0.85rem; border: 1px solid var(--vp-c-divider); border-radius: 8px; background: var(--vp-c-bg); color: var(--vp-c-text-1); }

.bs__add { font-size: 0.75rem; padding: 0.3rem 0.7rem; border-radius: 999px; border: 1px dashed var(--vp-c-divider); background: transparent; color: var(--vp-c-text-2); cursor: pointer; font-family: inherit; }
.bs__add:hover { border-color: var(--rk-accent-1); color: var(--rk-accent-1); }
.bs__remove { width: 28px; height: 28px; border-radius: 6px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg); color: var(--vp-c-text-3); cursor: pointer; line-height: 1; font-size: 1rem; }
.bs__remove:hover { background: #ef4444; color: #fff; border-color: #ef4444; }

.bs__toggle { display: inline-flex; align-items: center; gap: 0.5rem; margin-top: 0.5rem; font-size: 0.85rem; color: var(--vp-c-text-2); cursor: pointer; }
.bs__toggle input { accent-color: var(--rk-accent-1); }

.bs__file { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.85rem; }
.bs__file-label { flex: 1; font-size: 0.78rem; font-weight: 600; color: var(--vp-c-text-2); display: flex; flex-direction: column; gap: 0.4rem; }
.bs__file-label input[type="file"] { font-size: 0.8rem; }
.bs__file-clear { padding: 0.4rem 0.7rem; font-size: 0.75rem; border: 1px solid var(--vp-c-divider); border-radius: 8px; background: var(--vp-c-bg); cursor: pointer; color: var(--vp-c-text-2); }

/* Palettes */
.bs__palettes { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; margin-bottom: 1rem; }
.bs__palette {
  display: flex; align-items: center; gap: 0.4rem; padding: 0.4rem 0.6rem;
  border: 1px solid var(--vp-c-divider); border-radius: 8px; background: var(--vp-c-bg-soft);
  cursor: pointer; font-family: inherit;
}
.bs__palette:hover { border-color: var(--rk-accent-1); }
.bs__palette span:not(small) { width: 14px; height: 14px; border-radius: 50%; }
.bs__palette small { font-size: 0.75rem; color: var(--vp-c-text-2); margin-left: auto; }

/* SEO checks */
.bs__seo-checks {
  margin-top: 1rem; padding: 0.85rem;
  border: 1px solid var(--vp-c-divider); border-radius: 10px;
  background: var(--vp-c-bg-soft);
}
.bs__seo-checks h4 { font-size: 0.85rem; margin-bottom: 0.65rem; }
.bs__check { display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--vp-c-text-2); padding: 0.25rem 0; }
.bs__check-dot { width: 14px; height: 14px; border-radius: 50%; border: 1.5px solid var(--vp-c-text-3); display: inline-block; flex-shrink: 0; }
.bs__check.ok { color: var(--vp-c-text-1); }
.bs__check.ok .bs__check-dot { background: #22c55e; border-color: #22c55e; box-shadow: 0 0 0 2px color-mix(in srgb, #22c55e 20%, transparent); }
</style>
