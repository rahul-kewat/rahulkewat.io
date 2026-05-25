import { esc, socialList, socialIcon, wrapDocument } from './_helpers.js';

const css = (t) => `
:root {
  --primary: ${t.primary};
  --accent: ${t.accent};
  --bg: ${t.bg};
  --surface: ${t.surface};
  --text: ${t.text};
  --muted: ${t.muted};
  --radius: ${t.radius}px;
  --font-h: '${t.fontHeading}', system-ui, sans-serif;
  --font-b: '${t.fontBody}', system-ui, sans-serif;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font-b);
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
h1,h2,h3,h4 { font-family: var(--font-h); font-weight: 800; letter-spacing: -0.02em; line-height: 1.1; }
a { color: inherit; }
img { max-width: 100%; display: block; }

.container { max-width: 1100px; margin: 0 auto; padding: 0 1.5rem; }
.grad-text {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  -webkit-background-clip: text; background-clip: text; color: transparent;
}

/* Hero */
.hero {
  position: relative;
  padding: 8rem 0 5rem;
  overflow: hidden;
}
.hero::before, .hero::after {
  content: ""; position: absolute; border-radius: 50%; filter: blur(110px);
  pointer-events: none; opacity: 0.5;
}
.hero::before { width: 38rem; height: 38rem; top: -10rem; left: -10rem;
  background: radial-gradient(circle, var(--primary), transparent 60%); }
.hero::after { width: 32rem; height: 32rem; bottom: -8rem; right: -8rem;
  background: radial-gradient(circle, var(--accent), transparent 60%); animation: float 14s ease-in-out infinite; }
@keyframes float { 50% { transform: translate(-3%, 3%); } }

.hero-inner { position: relative; display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 3rem; align-items: center; }
@media (max-width: 800px) { .hero-inner { grid-template-columns: 1fr; text-align: center; } }
.eyebrow {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.4rem 0.9rem; font-size: 0.75rem; font-weight: 600;
  letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted);
  border: 1px solid rgba(255,255,255,0.1); border-radius: 999px;
  background: rgba(255,255,255,0.04); backdrop-filter: blur(10px);
  margin-bottom: 1.25rem;
}
.eyebrow .dot { width: 8px; height: 8px; border-radius: 50%; background: #22c55e; }
.hero h1 { font-size: clamp(2.4rem, 5vw, 4rem); margin-bottom: 1rem; }
.hero p.tagline { font-size: 1.1rem; color: var(--muted); max-width: 540px; margin-bottom: 2rem; }
@media (max-width: 800px) { .hero p.tagline { margin-left: auto; margin-right: auto; } }
.cta-row { display: flex; gap: 0.75rem; flex-wrap: wrap; }
@media (max-width: 800px) { .cta-row { justify-content: center; } }
.btn {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.85rem 1.5rem; font-size: 0.95rem; font-weight: 600;
  border-radius: 999px; text-decoration: none; transition: transform .25s ease, box-shadow .25s ease;
}
.btn-primary { color: #fff; background: linear-gradient(135deg, var(--primary), var(--accent));
  box-shadow: 0 10px 30px rgba(0,0,0,0.25); }
.btn-primary:hover { transform: translateY(-2px); }
.btn-ghost { color: var(--text); border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.04); }
.avatar-wrap { position: relative; width: clamp(220px, 30vw, 340px); aspect-ratio: 1; margin: 0 auto; }
.avatar-wrap .glow {
  position: absolute; inset: -10%;
  background: conic-gradient(from 180deg, var(--primary), var(--accent), var(--primary));
  border-radius: 50%; filter: blur(40px); opacity: 0.55; animation: spin 14s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.avatar-wrap img, .avatar-wrap .placeholder {
  position: relative; z-index: 1; width: 100%; height: 100%;
  border-radius: 50%; object-fit: cover;
  border: 4px solid rgba(255,255,255,0.06);
  box-shadow: 0 25px 60px rgba(0,0,0,0.3);
}
.avatar-wrap .placeholder {
  display: grid; place-items: center;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #fff; font-size: 4rem; font-weight: 800; font-family: var(--font-h);
}

/* Sections */
section { padding: 5rem 0; position: relative; }
.section-head { max-width: 640px; margin: 0 auto 3rem; text-align: center; }
.section-head h2 { font-size: clamp(2rem, 4vw, 2.75rem); margin-bottom: 0.75rem; }
.section-head p { color: var(--muted); }

/* About */
.about-card {
  display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 2.5rem; align-items: start;
  padding: 2.5rem; border-radius: var(--radius);
  background: var(--surface); border: 1px solid rgba(255,255,255,0.06);
}
@media (max-width: 800px) { .about-card { grid-template-columns: 1fr; } }
.about-card p { color: var(--muted); margin-bottom: 1.5rem; }
.highlights { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; }
.highlights li { display: flex; align-items: flex-start; gap: 0.6rem; color: var(--muted); }
.highlights li::before { content: "✓"; color: var(--accent); font-weight: 700; }

/* Cards grid */
.grid { display: grid; gap: 1.25rem; }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-2 { grid-template-columns: repeat(2, 1fr); }
@media (max-width: 800px) { .grid-3, .grid-2 { grid-template-columns: 1fr; } }
.card {
  padding: 1.75rem; border-radius: var(--radius);
  background: var(--surface); border: 1px solid rgba(255,255,255,0.06);
  transition: transform .35s ease, border-color .35s ease;
}
.card:hover { transform: translateY(-4px); border-color: var(--primary); }
.card .icon { font-size: 2rem; margin-bottom: 1rem; }
.card h3 { font-size: 1.2rem; margin-bottom: 0.5rem; }
.card p { color: var(--muted); font-size: 0.95rem; }

/* Projects */
.project { display: flex; flex-direction: column; }
.project .top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem; gap: 0.5rem; }
.project h3 { font-size: 1.2rem; }
.project .year { font-size: 0.78rem; color: var(--muted); }
.project p { color: var(--muted); margin-bottom: 1rem; flex: 1; }
.tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1rem; }
.tag { font-size: 0.72rem; padding: 0.25rem 0.65rem; border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.1); color: var(--muted); }
.project a.view {
  display: inline-flex; align-items: center; gap: 0.35rem;
  font-size: 0.85rem; font-weight: 600; text-decoration: none;
  color: var(--text); border-bottom: 1px solid var(--accent); width: fit-content;
}

/* Skills */
.skills { display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center; }
.skill {
  padding: 0.5rem 1rem; border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.04);
  font-size: 0.9rem; font-weight: 500;
}

/* Testimonials */
.testi {
  padding: 1.75rem; border-radius: var(--radius);
  background: var(--surface); border: 1px solid rgba(255,255,255,0.06);
  position: relative;
}
.testi::before {
  content: '"'; position: absolute; top: -10px; right: 1rem;
  font-size: 4rem; line-height: 1; color: var(--primary); opacity: 0.4;
}
.testi p { color: var(--muted); margin-bottom: 1rem; }
.testi .who { font-weight: 600; }
.testi .who span { color: var(--muted); font-weight: 400; }

/* Contact */
.contact-card {
  text-align: center; padding: 4rem 2rem; border-radius: var(--radius);
  background: linear-gradient(135deg, color-mix(in srgb, var(--primary) 30%, var(--surface)), var(--surface));
  border: 1px solid rgba(255,255,255,0.08);
}
.contact-card h2 { font-size: clamp(2rem, 4vw, 2.75rem); margin-bottom: 1rem; }
.contact-card p { color: var(--muted); max-width: 520px; margin: 0 auto 2rem; }
.contact-card .email { display: inline-block; margin-bottom: 2rem; font-size: 1.1rem; font-weight: 600; }
.socials { display: flex; gap: 0.6rem; justify-content: center; }
.socials a {
  width: 42px; height: 42px; display: grid; place-items: center;
  border-radius: 50%; border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.03); color: var(--text);
  text-decoration: none; transition: all .3s ease;
}
.socials a:hover { background: linear-gradient(135deg, var(--primary), var(--accent)); border-color: transparent; transform: translateY(-2px); }

/* Footer */
footer { padding: 2rem 0; text-align: center; color: var(--muted); font-size: 0.85rem; border-top: 1px solid rgba(255,255,255,0.06); }
footer a { color: var(--text); text-decoration: none; border-bottom: 1px dashed var(--muted); }

[data-theme="light"] {
  --bg: #fafafa; --surface: #ffffff; --text: #0b0b14; --muted: #555568;
}
[data-theme="light"] .eyebrow,
[data-theme="light"] .skill,
[data-theme="light"] .tag,
[data-theme="light"] .socials a,
[data-theme="light"] .btn-ghost { border-color: rgba(0,0,0,0.1); background: rgba(0,0,0,0.02); }
[data-theme="light"] .about-card,
[data-theme="light"] .card,
[data-theme="light"] .testi { border-color: rgba(0,0,0,0.06); box-shadow: 0 1px 2px rgba(0,0,0,0.04); }
[data-theme="light"] footer { border-color: rgba(0,0,0,0.08); }
`;

export const modern = {
  id: 'modern',
  name: 'Modern',
  description: 'Glassmorphism, gradients, animated portrait.',
  preview: 'modern',
  render(config) {
    const c = config.content;
    const initials = (c.hero.name || 'A')
      .split(' ')
      .map((s) => s[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

    const heroAvatar = c.hero.avatar
      ? `<img src="${esc(c.hero.avatar)}" alt="${esc(c.hero.name)}" />`
      : `<div class="placeholder">${esc(initials)}</div>`;

    const services = (c.services.items || [])
      .map(
        (s) => `
        <article class="card">
          <div class="icon">${esc(s.icon)}</div>
          <h3>${esc(s.title)}</h3>
          <p>${esc(s.description)}</p>
        </article>`
      )
      .join('');

    const projects = (c.projects.items || [])
      .map(
        (p) => `
        <article class="card project">
          <div class="top">
            <h3>${esc(p.title)}</h3>
            ${p.year ? `<span class="year">${esc(p.year)}</span>` : ''}
          </div>
          <div class="tags">${(p.tags || [])
            .map((t) => `<span class="tag">${esc(t)}</span>`)
            .join('')}</div>
          <p>${esc(p.description)}</p>
          ${p.link ? `<a class="view" href="${esc(p.link)}" target="_blank" rel="noopener">View case →</a>` : ''}
        </article>`
      )
      .join('');

    const testi = (c.testimonials.items || [])
      .map(
        (t) => `
        <div class="testi">
          <p>"${esc(t.quote)}"</p>
          <div class="who">${esc(t.name)} <span>· ${esc(t.role)}</span></div>
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
    <div class="container hero-inner">
      <div>
        <div class="eyebrow"><span class="dot"></span> ${esc(c.hero.role)}</div>
        <h1>${esc(c.hero.headline)}</h1>
        <p class="tagline">${esc(c.hero.tagline)}</p>
        <div class="cta-row">
          ${c.hero.ctaPrimary?.text ? `<a class="btn btn-primary" href="${esc(c.hero.ctaPrimary.link)}">${esc(c.hero.ctaPrimary.text)}</a>` : ''}
          ${c.hero.ctaSecondary?.text ? `<a class="btn btn-ghost" href="${esc(c.hero.ctaSecondary.link)}">${esc(c.hero.ctaSecondary.text)}</a>` : ''}
        </div>
      </div>
      <div class="avatar-wrap">
        <div class="glow"></div>
        ${heroAvatar}
      </div>
    </div>
  </header>

  ${
    c.about.enabled
      ? `<section id="about"><div class="container">
    <div class="about-card">
      <div>
        <h2>${esc(c.about.heading)}</h2>
        <p style="margin-top:1rem">${esc(c.about.body)}</p>
      </div>
      <ul class="highlights">
        ${(c.about.highlights || [])
          .map((h) => `<li>${esc(h)}</li>`)
          .join('')}
      </ul>
    </div>
  </div></section>`
      : ''
  }

  ${
    c.services.enabled
      ? `<section id="services"><div class="container">
    <div class="section-head">
      <h2>${esc(c.services.heading)} <span class="grad-text">→</span></h2>
      <p>${esc(c.services.subheading || '')}</p>
    </div>
    <div class="grid grid-3">${services}</div>
  </div></section>`
      : ''
  }

  ${
    c.projects.enabled
      ? `<section id="work"><div class="container">
    <div class="section-head">
      <h2>${esc(c.projects.heading)}</h2>
      <p>${esc(c.projects.subheading || '')}</p>
    </div>
    <div class="grid grid-2">${projects}</div>
  </div></section>`
      : ''
  }

  ${
    c.skills.enabled
      ? `<section id="skills"><div class="container">
    <div class="section-head"><h2>${esc(c.skills.heading)}</h2></div>
    <div class="skills">${skills}</div>
  </div></section>`
      : ''
  }

  ${
    c.testimonials.enabled
      ? `<section id="testimonials"><div class="container">
    <div class="section-head"><h2>${esc(c.testimonials.heading)}</h2></div>
    <div class="grid grid-2">${testi}</div>
  </div></section>`
      : ''
  }

  ${
    c.contact.enabled
      ? `<section id="contact"><div class="container">
    <div class="contact-card">
      <h2>${esc(c.contact.heading)}</h2>
      <p>${esc(c.contact.body)}</p>
      ${c.contact.email ? `<a class="email grad-text" href="mailto:${esc(c.contact.email)}">${esc(c.contact.email)}</a><br/>` : ''}
      <div class="socials">${socials}</div>
    </div>
  </div></section>`
      : ''
  }

  <footer>
    © ${new Date().getFullYear()} ${esc(c.hero.name)}. Built with the
    <a href="https://rahulkewat.io/free-tools/website-builder/" target="_blank" rel="noopener">free website builder</a>.
  </footer>`;

    return wrapDocument({ config, css: css(config.theme), body });
  },
};
