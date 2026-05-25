import { esc, socialList, socialIcon, wrapDocument } from './_helpers.js';

const css = (t) => `
:root {
  --primary: ${t.primary};
  --accent: ${t.accent};
  --bg: ${t.bg};
  --surface: ${t.surface};
  --text: ${t.text};
  --muted: ${t.muted};
  --radius: ${Math.max(4, t.radius / 2)}px;
  --font-h: '${t.fontHeading}', Georgia, serif;
  --font-b: '${t.fontBody}', system-ui, sans-serif;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { font-family: var(--font-b); background: var(--bg); color: var(--text); line-height: 1.7; -webkit-font-smoothing: antialiased; }
h1,h2,h3,h4 { font-family: var(--font-h); font-weight: 600; letter-spacing: -0.02em; line-height: 1.15; }
a { color: inherit; }
img { max-width: 100%; display: block; }
.container { max-width: 720px; margin: 0 auto; padding: 0 1.5rem; }

.dot-accent { color: var(--accent); }

/* Hero */
.hero { padding: 7rem 0 3rem; }
.hero .role { font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.18em; color: var(--muted); margin-bottom: 1.5rem; }
.hero h1 { font-size: clamp(2.4rem, 5vw, 3.6rem); margin-bottom: 1.5rem; }
.hero p.tagline { font-size: 1.15rem; color: var(--muted); margin-bottom: 2rem; max-width: 560px; }
.cta-row { display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; }
.btn { padding: 0.75rem 1.4rem; border-radius: var(--radius); font-weight: 600; text-decoration: none; font-size: 0.95rem; transition: opacity .2s ease; }
.btn-primary { color: var(--bg); background: var(--text); }
.btn-primary:hover { opacity: 0.85; }
.btn-link { color: var(--text); text-decoration: underline; text-underline-offset: 5px; text-decoration-thickness: 1px; padding: 0.75rem 0; }

/* Sections */
section { padding: 3.5rem 0; border-top: 1px solid color-mix(in srgb, var(--muted) 25%, transparent); }
.section-h { font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.18em; color: var(--muted); margin-bottom: 2rem; }
.section h2.section-title { font-size: clamp(1.6rem, 3vw, 2.2rem); margin-bottom: 1.25rem; }
.section p.section-lead { color: var(--muted); margin-bottom: 2rem; max-width: 560px; }

/* About */
.about-body { font-size: 1.05rem; color: var(--muted); }
.about-body p + p { margin-top: 1rem; }
.highlights { margin-top: 1.5rem; padding-left: 1.2rem; }
.highlights li { color: var(--muted); margin-bottom: 0.4rem; }

/* Services */
.svc { padding: 1.5rem 0; border-bottom: 1px solid color-mix(in srgb, var(--muted) 18%, transparent); display: grid; grid-template-columns: 60px 1fr; gap: 1rem; align-items: start; }
.svc:last-child { border-bottom: none; }
.svc .icon { font-size: 1.6rem; }
.svc h3 { font-size: 1.15rem; margin-bottom: 0.4rem; }
.svc p { color: var(--muted); }

/* Projects */
.proj { display: block; padding: 1.5rem 0; border-bottom: 1px solid color-mix(in srgb, var(--muted) 18%, transparent); text-decoration: none; color: inherit; transition: padding .2s ease; }
.proj:hover { padding-left: 0.5rem; }
.proj:last-child { border-bottom: none; }
.proj .top { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.5rem; gap: 1rem; }
.proj h3 { font-size: 1.2rem; }
.proj .year { font-size: 0.85rem; color: var(--muted); white-space: nowrap; }
.proj p { color: var(--muted); margin-bottom: 0.5rem; }
.tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.tag { font-size: 0.75rem; color: var(--muted); }
.tag::before { content: "#"; }

/* Skills */
.skills { display: flex; flex-wrap: wrap; gap: 0.5rem 1.5rem; color: var(--muted); }
.skill { display: inline-flex; align-items: center; gap: 0.5rem; }
.skill::before { content: "→"; color: var(--accent); }

/* Testimonials */
.testi { padding: 1.5rem 0; border-bottom: 1px solid color-mix(in srgb, var(--muted) 18%, transparent); }
.testi:last-child { border-bottom: none; }
.testi blockquote { font-size: 1.1rem; color: var(--text); margin-bottom: 0.5rem; }
.testi blockquote::before { content: "\\201C"; color: var(--accent); margin-right: 0.25rem; }
.testi .who { color: var(--muted); font-size: 0.9rem; }

/* Contact */
.contact h2 { font-size: clamp(2rem, 4vw, 2.8rem); margin-bottom: 1rem; }
.contact .email { font-size: 1.4rem; font-weight: 600; text-decoration: underline; text-underline-offset: 5px; display: inline-block; margin: 1rem 0 2rem; }
.socials { display: flex; gap: 0.6rem; flex-wrap: wrap; }
.socials a { width: 40px; height: 40px; display: grid; place-items: center; border-radius: 50%; border: 1px solid color-mix(in srgb, var(--muted) 30%, transparent); color: var(--text); text-decoration: none; transition: all .2s ease; }
.socials a:hover { background: var(--text); color: var(--bg); border-color: var(--text); }

/* Footer */
footer { padding: 2rem 0 3rem; color: var(--muted); font-size: 0.85rem; border-top: 1px solid color-mix(in srgb, var(--muted) 25%, transparent); }
footer a { color: inherit; }

[data-theme="light"] {
  --bg: #ffffff; --surface: #fafafa; --text: #111111; --muted: #6b6b76;
}
`;

export const minimal = {
  id: 'minimal',
  name: 'Minimal',
  description: 'Editorial typography, monochrome, generous whitespace.',
  preview: 'minimal',
  render(config) {
    const c = config.content;

    const services = (c.services.items || [])
      .map(
        (s) => `
        <article class="svc">
          <div class="icon">${esc(s.icon)}</div>
          <div>
            <h3>${esc(s.title)}</h3>
            <p>${esc(s.description)}</p>
          </div>
        </article>`
      )
      .join('');

    const projects = (c.projects.items || [])
      .map(
        (p) => `
        <a class="proj" href="${esc(p.link || '#')}" ${p.link ? 'target="_blank" rel="noopener"' : ''}>
          <div class="top">
            <h3>${esc(p.title)}</h3>
            ${p.year ? `<span class="year">${esc(p.year)}</span>` : ''}
          </div>
          <p>${esc(p.description)}</p>
          <div class="tags">${(p.tags || [])
            .map((t) => `<span class="tag">${esc(t)}</span>`)
            .join(' ')}</div>
        </a>`
      )
      .join('');

    const testi = (c.testimonials.items || [])
      .map(
        (t) => `
        <div class="testi">
          <blockquote>${esc(t.quote)}</blockquote>
          <div class="who">— ${esc(t.name)}, ${esc(t.role)}</div>
        </div>`
      )
      .join('');

    const skills = (c.skills.items || [])
      .map((s) => `<span class="skill">${esc(s)}</span>`)
      .join('');

    const socials = socialList(c.contact.social)
      .map(
        (s) =>
          `<a href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.label)}">${socialIcon(s.key)}</a>`
      )
      .join('');

    const body = `
  <header class="hero">
    <div class="container">
      <div class="role">${esc(c.hero.role)}<span class="dot-accent"> .</span></div>
      <h1>${esc(c.hero.headline)}</h1>
      <p class="tagline">${esc(c.hero.tagline)}</p>
      <div class="cta-row">
        ${c.hero.ctaPrimary?.text ? `<a class="btn btn-primary" href="${esc(c.hero.ctaPrimary.link)}">${esc(c.hero.ctaPrimary.text)}</a>` : ''}
        ${c.hero.ctaSecondary?.text ? `<a class="btn btn-link" href="${esc(c.hero.ctaSecondary.link)}">${esc(c.hero.ctaSecondary.text)} →</a>` : ''}
      </div>
    </div>
  </header>

  ${
    c.about.enabled
      ? `<section id="about" class="section"><div class="container">
    <div class="section-h">${esc(c.about.heading)}</div>
    <div class="about-body">
      <p>${esc(c.about.body)}</p>
      ${c.about.highlights?.length ? `<ul class="highlights">${c.about.highlights.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>` : ''}
    </div>
  </div></section>`
      : ''
  }

  ${
    c.services.enabled
      ? `<section id="services" class="section"><div class="container">
    <div class="section-h">${esc(c.services.heading)}</div>
    ${c.services.subheading ? `<h2 class="section-title">${esc(c.services.subheading)}</h2>` : ''}
    ${services}
  </div></section>`
      : ''
  }

  ${
    c.projects.enabled
      ? `<section id="work" class="section"><div class="container">
    <div class="section-h">${esc(c.projects.heading)}</div>
    ${c.projects.subheading ? `<h2 class="section-title">${esc(c.projects.subheading)}</h2>` : ''}
    ${projects}
  </div></section>`
      : ''
  }

  ${
    c.skills.enabled
      ? `<section id="skills" class="section"><div class="container">
    <div class="section-h">${esc(c.skills.heading)}</div>
    <div class="skills">${skills}</div>
  </div></section>`
      : ''
  }

  ${
    c.testimonials.enabled
      ? `<section id="testimonials" class="section"><div class="container">
    <div class="section-h">${esc(c.testimonials.heading)}</div>
    ${testi}
  </div></section>`
      : ''
  }

  ${
    c.contact.enabled
      ? `<section id="contact" class="section contact"><div class="container">
    <div class="section-h">Contact</div>
    <h2>${esc(c.contact.heading)}</h2>
    <p style="color:var(--muted);max-width:560px">${esc(c.contact.body)}</p>
    ${c.contact.email ? `<a class="email" href="mailto:${esc(c.contact.email)}">${esc(c.contact.email)}</a>` : ''}
    <div class="socials">${socials}</div>
  </div></section>`
      : ''
  }

  <footer><div class="container">
    © ${new Date().getFullYear()} ${esc(c.hero.name)} ·
    <a href="https://rahulkewat.io/free-tools/website-builder/" target="_blank" rel="noopener">Built free</a>
  </div></footer>`;

    return wrapDocument({ config, css: css(config.theme), body });
  },
};
