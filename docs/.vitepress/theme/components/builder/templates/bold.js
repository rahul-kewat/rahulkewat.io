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
body { font-family: var(--font-b); background: var(--bg); color: var(--text); line-height: 1.6; -webkit-font-smoothing: antialiased; }
h1,h2,h3 { font-family: var(--font-h); font-weight: 900; letter-spacing: -0.04em; line-height: 0.95; text-transform: uppercase; }
a { color: inherit; }
img { max-width: 100%; display: block; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }

/* Marquee strip */
.strip {
  background: var(--primary); color: var(--bg);
  padding: 0.85rem 0; overflow: hidden; white-space: nowrap;
  border-bottom: 4px solid var(--text);
}
.strip-track { display: inline-block; animation: scroll 30s linear infinite; }
.strip span { display: inline-block; padding: 0 2rem; font-weight: 700; letter-spacing: 0.05em; }
.strip span::after { content: "★"; margin-left: 2rem; color: var(--bg); opacity: 0.7; }
@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

/* Hero */
.hero {
  padding: 6rem 0 5rem; position: relative;
  border-bottom: 4px solid var(--text);
}
.hero h1 { font-size: clamp(3.5rem, 12vw, 9rem); margin: 1rem 0 1.5rem; }
.hero h1 .accent { color: var(--accent); }
.hero p.tagline { font-size: 1.4rem; max-width: 720px; margin-bottom: 2rem; font-weight: 500; }
.role-badge {
  display: inline-flex; padding: 0.5rem 1.2rem; background: var(--text); color: var(--bg);
  font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; font-size: 0.78rem;
}
.cta-row { display: flex; gap: 1rem; flex-wrap: wrap; }
.btn {
  padding: 1.1rem 2rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;
  text-decoration: none; font-size: 1rem; border: 4px solid var(--text);
  transition: transform .2s ease, box-shadow .2s ease;
  box-shadow: 6px 6px 0 var(--text); display: inline-block;
}
.btn-primary { background: var(--accent); color: var(--text); }
.btn-secondary { background: var(--bg); color: var(--text); }
.btn:hover { transform: translate(-2px, -2px); box-shadow: 8px 8px 0 var(--text); }

/* Section */
section { padding: 5rem 0; border-bottom: 4px solid var(--text); }
section.alt { background: var(--surface); }
.section-eyebrow { font-size: 0.85rem; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted); margin-bottom: 1rem; }
.section-title { font-size: clamp(2.5rem, 6vw, 4.5rem); margin-bottom: 2.5rem; }
.section-title .accent { color: var(--primary); }

/* About */
.about { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 3rem; }
@media (max-width: 800px) { .about { grid-template-columns: 1fr; } }
.about p { font-size: 1.2rem; }
.highlights { list-style: none; }
.highlights li { font-size: 1.1rem; font-weight: 600; padding: 0.75rem 0; border-bottom: 2px dashed var(--muted); display: flex; align-items: center; gap: 0.75rem; }
.highlights li::before { content: "→"; color: var(--accent); font-weight: 900; }

/* Cards */
.grid { display: grid; gap: 1.5rem; }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-2 { grid-template-columns: repeat(2, 1fr); }
@media (max-width: 800px) { .grid-3, .grid-2 { grid-template-columns: 1fr; } }
.card {
  padding: 2rem; background: var(--bg); border: 4px solid var(--text);
  box-shadow: 8px 8px 0 var(--text); transition: transform .2s ease, box-shadow .2s ease;
}
.card:hover { transform: translate(-2px, -2px); box-shadow: 12px 12px 0 var(--accent); }
.card .icon { font-size: 2.5rem; margin-bottom: 1rem; }
.card h3 { font-size: 1.4rem; margin-bottom: 0.75rem; text-transform: none; letter-spacing: -0.02em; }
.card p { font-size: 1rem; color: var(--muted); }

/* Projects */
.proj { padding: 2rem; background: var(--bg); border: 4px solid var(--text); transition: all .2s ease; }
.proj:hover { background: var(--accent); }
.proj .top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; gap: 0.5rem; }
.proj h3 { font-size: 1.6rem; text-transform: none; letter-spacing: -0.02em; }
.proj .year { font-size: 0.85rem; font-weight: 800; padding: 0.25rem 0.75rem; background: var(--text); color: var(--bg); }
.proj p { margin-bottom: 1rem; }
.tags { display: flex; gap: 0.4rem; flex-wrap: wrap; margin-bottom: 1rem; }
.tag { padding: 0.3rem 0.8rem; background: var(--text); color: var(--bg); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; }

/* Skills */
.skills { display: flex; flex-wrap: wrap; gap: 0.6rem; }
.skill { padding: 0.6rem 1.2rem; border: 3px solid var(--text); font-weight: 700; font-size: 1rem; }
.skill:nth-child(3n) { background: var(--accent); }
.skill:nth-child(5n) { background: var(--primary); color: var(--bg); }

/* Testimonials */
.testi { padding: 2rem; background: var(--bg); border: 4px solid var(--text); }
.testi blockquote { font-size: 1.4rem; line-height: 1.4; font-weight: 600; margin-bottom: 1.5rem; }
.testi .who { font-weight: 800; }
.testi .who span { font-weight: 400; color: var(--muted); }

/* Contact */
.contact { padding: 6rem 0; background: var(--text); color: var(--bg); }
.contact h2 { color: var(--bg); }
.contact h2 .accent { color: var(--accent); }
.contact p { color: var(--muted); font-size: 1.2rem; max-width: 640px; }
.contact .email { display: inline-block; padding: 1rem 2rem; background: var(--accent); color: var(--text); font-weight: 800; text-decoration: none; margin: 2rem 0; font-size: 1.4rem; transition: transform .2s ease; }
.contact .email:hover { transform: translateY(-2px); }
.socials { display: flex; gap: 0.75rem; }
.socials a { width: 48px; height: 48px; display: grid; place-items: center; background: var(--bg); color: var(--text); text-decoration: none; transition: all .2s ease; }
.socials a:hover { background: var(--accent); }

footer { padding: 2rem 0; text-align: center; font-weight: 700; }
footer a { color: var(--primary); }

[data-theme="light"] {
  --bg: #ffffff; --surface: #f5f5dc; --text: #0b0b14; --muted: #555568;
}
[data-theme="light"] .strip { background: var(--text); color: var(--bg); }
[data-theme="light"] .strip span::after { color: var(--bg); }
`;

export const bold = {
  id: 'bold',
  name: 'Bold',
  description: 'Brutalist, oversized type, neo-brutal blocks.',
  preview: 'bold',
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
        (p) => `
        <article class="proj">
          <div class="top">
            <h3>${esc(p.title)}</h3>
            ${p.year ? `<span class="year">${esc(p.year)}</span>` : ''}
          </div>
          <div class="tags">${(p.tags || [])
            .map((t) => `<span class="tag">${esc(t)}</span>`)
            .join('')}</div>
          <p>${esc(p.description)}</p>
          ${p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener" style="font-weight:800;text-decoration:underline;">View →</a>` : ''}
        </article>`
      )
      .join('');

    const testi = (c.testimonials.items || [])
      .map(
        (t) => `
        <div class="testi">
          <blockquote>"${esc(t.quote)}"</blockquote>
          <div class="who">${esc(t.name)} <span>— ${esc(t.role)}</span></div>
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

    const stripContent =
      `<span>${esc(c.hero.role)}</span>`.repeat(8);

    const headline = esc(c.hero.headline).replace(
      /([^\s]+)$/,
      '<span class="accent">$1</span>'
    );

    const body = `
  <div class="strip"><div class="strip-track">${stripContent}${stripContent}</div></div>

  <header class="hero">
    <div class="container">
      <div class="role-badge">${esc(c.hero.role)}</div>
      <h1>${headline}</h1>
      <p class="tagline">${esc(c.hero.tagline)}</p>
      <div class="cta-row">
        ${c.hero.ctaPrimary?.text ? `<a class="btn btn-primary" href="${esc(c.hero.ctaPrimary.link)}">${esc(c.hero.ctaPrimary.text)}</a>` : ''}
        ${c.hero.ctaSecondary?.text ? `<a class="btn btn-secondary" href="${esc(c.hero.ctaSecondary.link)}">${esc(c.hero.ctaSecondary.text)}</a>` : ''}
      </div>
    </div>
  </header>

  ${
    c.about.enabled
      ? `<section id="about"><div class="container">
    <div class="section-eyebrow">${esc(c.about.heading)}</div>
    <div class="about">
      <p>${esc(c.about.body)}</p>
      <ul class="highlights">${(c.about.highlights || [])
        .map((h) => `<li>${esc(h)}</li>`)
        .join('')}</ul>
    </div>
  </div></section>`
      : ''
  }

  ${
    c.services.enabled
      ? `<section id="services" class="alt"><div class="container">
    <div class="section-eyebrow">${esc(c.services.heading)}</div>
    <h2 class="section-title">${esc(c.services.subheading || c.services.heading)}</h2>
    <div class="grid grid-3">${services}</div>
  </div></section>`
      : ''
  }

  ${
    c.projects.enabled
      ? `<section id="work"><div class="container">
    <div class="section-eyebrow">${esc(c.projects.heading)}</div>
    <h2 class="section-title">${esc(c.projects.subheading || c.projects.heading)}</h2>
    <div class="grid grid-2">${projects}</div>
  </div></section>`
      : ''
  }

  ${
    c.skills.enabled
      ? `<section id="skills" class="alt"><div class="container">
    <div class="section-eyebrow">${esc(c.skills.heading)}</div>
    <div class="skills">${skills}</div>
  </div></section>`
      : ''
  }

  ${
    c.testimonials.enabled
      ? `<section id="testimonials"><div class="container">
    <div class="section-eyebrow">${esc(c.testimonials.heading)}</div>
    <div class="grid grid-2">${testi}</div>
  </div></section>`
      : ''
  }

  ${
    c.contact.enabled
      ? `<section id="contact" class="contact"><div class="container">
    <div class="section-eyebrow" style="color:var(--accent)">Contact</div>
    <h2 class="section-title">${esc(c.contact.heading)}</h2>
    <p>${esc(c.contact.body)}</p>
    ${c.contact.email ? `<a class="email" href="mailto:${esc(c.contact.email)}">${esc(c.contact.email)}</a><br/>` : ''}
    <div class="socials">${socials}</div>
  </div></section>`
      : ''
  }

  <footer>
    © ${new Date().getFullYear()} ${esc(c.hero.name)} ·
    <a href="https://rahulkewat.io/free-tools/website-builder/" target="_blank" rel="noopener">Built free</a>
  </footer>`;

    return wrapDocument({ config, css: css(config.theme), body });
  },
};
