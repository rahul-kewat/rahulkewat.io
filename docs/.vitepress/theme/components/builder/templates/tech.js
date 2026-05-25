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
  --font-h: '${t.fontHeading}', system-ui, sans-serif;
  --font-b: '${t.fontBody}', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font-b); background: var(--bg); color: var(--text);
  line-height: 1.6; -webkit-font-smoothing: antialiased;
  background-image: radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: -1px -1px;
}
h1,h2,h3 { font-family: var(--font-h); font-weight: 700; letter-spacing: -0.02em; }
a { color: inherit; }
img { max-width: 100%; display: block; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 1.5rem; }
.mono { font-family: var(--font-mono); }
.accent { color: var(--accent); }
.muted { color: var(--muted); }

/* Top bar */
.topbar {
  font-family: var(--font-mono); font-size: 0.85rem;
  padding: 0.65rem 0; color: var(--muted);
  border-bottom: 1px solid color-mix(in srgb, var(--muted) 25%, transparent);
}
.topbar .container { display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
.topbar .status { display: inline-flex; align-items: center; gap: 0.4rem; }
.topbar .status::before { content: ""; width: 8px; height: 8px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 12px #22c55e; }

/* Hero */
.hero { padding: 6rem 0 4rem; }
.hero .prompt { font-family: var(--font-mono); color: var(--muted); margin-bottom: 1rem; }
.hero .prompt::before { content: "$ "; color: var(--accent); }
.hero h1 { font-size: clamp(2.6rem, 6vw, 4.5rem); margin-bottom: 1.5rem; }
.hero h1 .name { color: var(--primary); }
.hero h1 .cursor { display: inline-block; width: 0.6em; height: 1em; background: var(--accent); animation: blink 1s step-end infinite; vertical-align: -0.1em; }
@keyframes blink { 50% { opacity: 0; } }
.hero p.tagline { color: var(--muted); font-size: 1.1rem; max-width: 560px; margin-bottom: 2rem; }
.cta-row { display: flex; gap: 0.75rem; flex-wrap: wrap; }
.btn {
  padding: 0.85rem 1.4rem; font-family: var(--font-mono); font-weight: 500; font-size: 0.9rem;
  border-radius: var(--radius); text-decoration: none; transition: all .2s ease; display: inline-flex; align-items: center; gap: 0.4rem;
}
.btn-primary { color: var(--bg); background: var(--accent); }
.btn-primary:hover { filter: brightness(1.1); transform: translateY(-1px); }
.btn-ghost { color: var(--text); border: 1px solid color-mix(in srgb, var(--muted) 35%, transparent); background: transparent; }
.btn-ghost:hover { border-color: var(--accent); color: var(--accent); }

/* Sections */
section { padding: 4rem 0; }
.section-h {
  font-family: var(--font-mono); font-size: 0.85rem; color: var(--muted);
  margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;
}
.section-h::before { content: "//"; color: var(--accent); }
.section-h .num { color: var(--accent); margin-right: 0.5rem; font-weight: 700; }
.section-title { font-size: clamp(1.8rem, 3.5vw, 2.4rem); margin-bottom: 2rem; max-width: 640px; }

/* Cards */
.grid { display: grid; gap: 1rem; }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-2 { grid-template-columns: repeat(2, 1fr); }
@media (max-width: 800px) { .grid-3, .grid-2 { grid-template-columns: 1fr; } }
.card {
  padding: 1.5rem; border-radius: var(--radius);
  border: 1px solid color-mix(in srgb, var(--muted) 25%, transparent);
  background: var(--surface);
  transition: all .25s ease;
}
.card:hover { border-color: var(--accent); transform: translateY(-2px); }
.card .icon { font-size: 1.6rem; margin-bottom: 0.75rem; }
.card h3 { font-size: 1.1rem; margin-bottom: 0.5rem; }
.card p { color: var(--muted); font-size: 0.92rem; }

/* About */
.about-card {
  border: 1px solid color-mix(in srgb, var(--muted) 25%, transparent);
  border-radius: var(--radius); padding: 1.75rem; background: var(--surface);
  font-family: var(--font-mono); font-size: 0.95rem; line-height: 1.7;
}
.about-card .key { color: var(--accent); }
.about-card p { color: var(--muted); }
.about-card p + p { margin-top: 1rem; }
.highlights { list-style: none; margin-top: 1rem; }
.highlights li { color: var(--muted); padding: 0.4rem 0; font-family: var(--font-mono); font-size: 0.92rem; }
.highlights li::before { content: "▸ "; color: var(--accent); }

/* Projects */
.proj { padding: 1.5rem; border-radius: var(--radius); border: 1px solid color-mix(in srgb, var(--muted) 25%, transparent); background: var(--surface); transition: all .25s ease; }
.proj:hover { border-color: var(--accent); }
.proj .top { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.5rem; gap: 0.5rem; }
.proj .num { font-family: var(--font-mono); color: var(--muted); font-size: 0.85rem; }
.proj h3 { font-size: 1.15rem; margin-bottom: 0.5rem; }
.proj .year { font-family: var(--font-mono); font-size: 0.78rem; color: var(--muted); }
.proj p { color: var(--muted); font-size: 0.92rem; margin-bottom: 0.85rem; }
.tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.tag { font-family: var(--font-mono); font-size: 0.72rem; padding: 0.2rem 0.55rem; border-radius: 4px; background: color-mix(in srgb, var(--accent) 15%, transparent); color: var(--accent); }

/* Skills */
.skills { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.skill { font-family: var(--font-mono); font-size: 0.85rem; padding: 0.4rem 0.85rem; border-radius: 4px; background: var(--surface); border: 1px solid color-mix(in srgb, var(--muted) 25%, transparent); }
.skill::before { content: "{ "; color: var(--accent); }
.skill::after { content: " }"; color: var(--accent); }

/* Testimonials */
.testi { padding: 1.5rem; border-radius: var(--radius); border: 1px solid color-mix(in srgb, var(--muted) 25%, transparent); background: var(--surface); }
.testi blockquote { font-size: 0.98rem; margin-bottom: 1rem; }
.testi blockquote::before { content: "// "; color: var(--accent); font-family: var(--font-mono); }
.testi .who { font-family: var(--font-mono); font-size: 0.85rem; color: var(--muted); }
.testi .who strong { color: var(--text); }

/* Contact */
.contact { padding: 5rem 0; }
.contact-card {
  padding: 2.5rem; border-radius: var(--radius);
  border: 1px solid var(--accent); background: var(--surface);
  display: flex; flex-direction: column; gap: 1rem;
}
.contact-card h2 { font-size: clamp(1.75rem, 3.5vw, 2.2rem); }
.contact-card p { color: var(--muted); max-width: 560px; }
.contact-card .email { font-family: var(--font-mono); color: var(--accent); font-size: 1.1rem; text-decoration: none; align-self: flex-start; }
.contact-card .email::before { content: "→ "; }
.socials { display: flex; gap: 0.5rem; margin-top: 0.5rem; }
.socials a { width: 40px; height: 40px; display: grid; place-items: center; border-radius: var(--radius); border: 1px solid color-mix(in srgb, var(--muted) 25%, transparent); color: var(--text); text-decoration: none; transition: all .2s ease; }
.socials a:hover { color: var(--accent); border-color: var(--accent); }

footer { padding: 2rem 0; font-family: var(--font-mono); font-size: 0.85rem; color: var(--muted); border-top: 1px solid color-mix(in srgb, var(--muted) 25%, transparent); }
footer a { color: var(--accent); }

[data-theme="light"] {
  --bg: #fafafa; --surface: #ffffff; --text: #0b0b14; --muted: #6b6b76;
}
[data-theme="light"] body { background-image: radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px); }
`;

export const tech = {
  id: 'tech',
  name: 'Tech',
  description: 'Developer aesthetic, monospace, terminal accents.',
  preview: 'tech',
  render(config) {
    const c = config.content;

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
        (p, i) => `
        <article class="proj">
          <div class="top">
            <span class="num">0${i + 1}</span>
            <h3>${esc(p.title)}</h3>
            ${p.year ? `<span class="year">${esc(p.year)}</span>` : ''}
          </div>
          <p>${esc(p.description)}</p>
          <div class="tags">${(p.tags || [])
            .map((t) => `<span class="tag">${esc(t)}</span>`)
            .join('')}</div>
          ${p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener" style="display:inline-block;margin-top:1rem;color:var(--accent);text-decoration:none;font-family:var(--font-mono);font-size:0.85rem;">→ explore</a>` : ''}
        </article>`
      )
      .join('');

    const testi = (c.testimonials.items || [])
      .map(
        (t) => `
        <div class="testi">
          <blockquote>${esc(t.quote)}</blockquote>
          <div class="who"><strong>${esc(t.name)}</strong> · ${esc(t.role)}</div>
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
  <div class="topbar"><div class="container">
    <span class="mono">~/<span class="accent">${esc(c.hero.name)}</span>.dev</span>
    <span class="status">Available for work</span>
  </div></div>

  <header class="hero">
    <div class="container">
      <div class="prompt mono">whoami</div>
      <h1><span class="name">${esc(c.hero.name)}</span> — ${esc(c.hero.role)}<span class="cursor"></span></h1>
      <p class="tagline">${esc(c.hero.tagline)}</p>
      <div class="cta-row">
        ${c.hero.ctaPrimary?.text ? `<a class="btn btn-primary" href="${esc(c.hero.ctaPrimary.link)}">→ ${esc(c.hero.ctaPrimary.text)}</a>` : ''}
        ${c.hero.ctaSecondary?.text ? `<a class="btn btn-ghost" href="${esc(c.hero.ctaSecondary.link)}">${esc(c.hero.ctaSecondary.text)}</a>` : ''}
      </div>
    </div>
  </header>

  ${
    c.about.enabled
      ? `<section id="about"><div class="container">
    <div class="section-h"><span class="num">01.</span> ${esc(c.about.heading)}</div>
    <div class="about-card">
      <p><span class="key">bio</span>: ${esc(c.about.body)}</p>
      <ul class="highlights">${(c.about.highlights || [])
        .map((h) => `<li>${esc(h)}</li>`)
        .join('')}</ul>
    </div>
  </div></section>`
      : ''
  }

  ${
    c.services.enabled
      ? `<section id="services"><div class="container">
    <div class="section-h"><span class="num">02.</span> ${esc(c.services.heading)}</div>
    <h2 class="section-title">${esc(c.services.subheading || c.services.heading)}</h2>
    <div class="grid grid-3">${services}</div>
  </div></section>`
      : ''
  }

  ${
    c.projects.enabled
      ? `<section id="work"><div class="container">
    <div class="section-h"><span class="num">03.</span> ${esc(c.projects.heading)}</div>
    <h2 class="section-title">${esc(c.projects.subheading || c.projects.heading)}</h2>
    <div class="grid grid-2">${projects}</div>
  </div></section>`
      : ''
  }

  ${
    c.skills.enabled
      ? `<section id="skills"><div class="container">
    <div class="section-h"><span class="num">04.</span> ${esc(c.skills.heading)}</div>
    <div class="skills">${skills}</div>
  </div></section>`
      : ''
  }

  ${
    c.testimonials.enabled
      ? `<section id="testimonials"><div class="container">
    <div class="section-h"><span class="num">05.</span> ${esc(c.testimonials.heading)}</div>
    <div class="grid grid-2">${testi}</div>
  </div></section>`
      : ''
  }

  ${
    c.contact.enabled
      ? `<section id="contact" class="contact"><div class="container">
    <div class="section-h"><span class="num">06.</span> Contact</div>
    <div class="contact-card">
      <h2>${esc(c.contact.heading)}</h2>
      <p>${esc(c.contact.body)}</p>
      ${c.contact.email ? `<a class="email" href="mailto:${esc(c.contact.email)}">${esc(c.contact.email)}</a>` : ''}
      <div class="socials">${socials}</div>
    </div>
  </div></section>`
      : ''
  }

  <footer><div class="container">
    [ © ${new Date().getFullYear()} ${esc(c.hero.name)} ] · built with
    <a href="https://rahulkewat.io/free-tools/website-builder/" target="_blank" rel="noopener">free website builder</a>
  </div></footer>`;

    return wrapDocument({ config, css: css(config.theme), body });
  },
};
