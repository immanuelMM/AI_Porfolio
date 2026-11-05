/* ─── cv.js ───
   Builds the downloadable CV: one clean, single-column, ATS-friendly document.
   The same model feeds both outputs:
     • PDF  – rendered into #cv-print and printed (the page itself is hidden in print,
              so Ctrl+P anywhere on the site also gives this CV)
     • Word – generated with docx.js
   Personal details kept off the CV on purpose: photo, street address, birth date, nationality.
*/
'use strict';

// ── Model ────────────────────────────────────────────────

const CV_CATEGORY_LABELS = { 'Main Skills Pool': 'Professional Skills' };

function cvVisible(data, sectionId) {
  return (data.moduleVisibility || {})[sectionId] !== false;
}

/** "https://www.github.com/me/" → "github.com/me" */
function cvShortUrl(url) {
  return String(url || '').replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '');
}

/** True when a profile URL points at an actual profile, not a bare placeholder like linkedin.com/in/ */
function cvIsProfileUrl(url) {
  try {
    const u = new URL(url);
    return u.pathname.split('/').filter(s => s && s !== 'in').length > 0;
  } catch { return false; }
}

/** "P2-B2-L35 Highview, Apalit, Philippines" → "Apalit, Philippines" (drops the street part) */
function cvCityOnly(location) {
  const parts = String(location || '').split(',').map(s => s.trim()).filter(Boolean);
  const kept = parts.filter(p => !/\d/.test(p));
  return (kept.length ? kept : parts).join(', ');
}

function cvList(arr) {
  return (arr || []).map(s => String(s).trim()).filter(Boolean);
}

function buildCvModel(data) {
  const show = id => cvVisible(data, id);
  const emails = cvList(String(data.email || '').split(/[|,;]/));

  const contact = show('section-contact') ? [
    ...emails.map(e => ({ text: e, href: `mailto:${e}` })),
    data.phone ? { text: data.phone, href: `tel:${data.phone.replace(/[^\d+]/g, '')}` } : null,
    data.location ? { text: cvCityOnly(data.location) } : null
  ].filter(Boolean) : [];

  const links = [];
  if (show('section-social')) {
    [['link-linkedin', 'LinkedIn'], ['link-github', 'GitHub'], ['link-twitter', 'X']].forEach(([key, label]) => {
      if (cvIsProfileUrl(data[key])) links.push({ label, text: cvShortUrl(data[key]), href: data[key] });
    });
  }
  if (/^https?:/.test(location.href) && !/localhost|127\.0\.0\.1/.test(location.host)) {
    const site = location.origin + location.pathname.replace(/index\.html$/, '');
    links.unshift({ label: 'Portfolio', text: cvShortUrl(site), href: site });
  }

  const skills = [];
  if (show('section-skills')) {
    (data.skillCategories || []).forEach(c => {
      const items = cvList(c.skills);
      if (items.length) skills.push({ label: CV_CATEGORY_LABELS[c.name] || c.name, items });
    });
  }
  if (show('section-sidebar-ai') && cvList(data.aiSkills).length) {
    // AI skills sit right after the technical categories, before the soft-skill pool
    const ai = { label: 'AI & Automation', items: cvList(data.aiSkills) };
    const softIdx = skills.findIndex(s => s.label === 'Professional Skills');
    softIdx >= 0 ? skills.splice(softIdx, 0, ai) : skills.push(ai);
  }

  const entry = e => ({
    title: e.role || '',
    org: e.company || '',
    period: e.period || '',
    bullets: cvList(e.bullets)
  });

  const project = p => ({
    title: p.title || '',
    desc: p.desc || '',
    bullets: cvList(p.highlights),
    tech: cvList(p.tags),
    links: [
      p.link ? { label: 'Live', text: cvShortUrl(p.link), href: p.link } : null,
      (p.github || p.git) ? { label: 'Code', text: cvShortUrl(p.github || p.git), href: p.github || p.git } : null
    ].filter(Boolean)
  });

  // Projects: AI work first, then web systems, then websites — each title listed once.
  const seen = new Set();
  const unique = items => (items || []).filter(p => {
    const key = String(p.title || '').trim().toLowerCase();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  const projectGroups = [];
  if (show('section-ai')) {
    const ai = unique(data.aiTools).map(project);
    if (ai.length) projectGroups.push({ label: 'AI & Automation', items: ai });
  }
  if (show('section-projects')) {
    const sys = unique(data.webSystems).map(project);
    const web = unique(data.staticProjects).map(project);
    if (sys.length) projectGroups.push({ label: 'Web Systems', items: sys });
    if (web.length) projectGroups.push({ label: 'Websites', items: web });
  }

  return {
    name: data['full-name'] || '',
    title: data['job-title'] || '',
    contact,
    links,
    summary: show('section-about') ? (data['about-text'] || '').trim() : '',
    skills,
    experience: show('section-experience') ? (data.experience || []).map(entry) : [],
    projectGroups,
    education: show('section-education') ? (data.education || []).map(entry) : [],
    certifications: show('section-certifications') ? (data.certifications || []).map(c => ({
      name: c.name || '',
      issuer: c.issuer || '',
      year: c.year || '',
      link: c.link && !/^https?:\/\/(www\.)?tesda\.gov\.ph\/?$/.test(c.link) ? c.link : ''
    })) : [],
    languages: show('section-languages') ? (data.languages || []).filter(l => l.name) : []
  };
}

function cvFileName(model) {
  return `${(model.name || 'CV').trim().replace(/\s+/g, '_')}_CV`;
}

// ── HTML (for print / PDF) ───────────────────────────────

function cvEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function cvLink(l) {
  return `<a href="${cvEsc(l.href)}">${cvEsc(l.text)}</a>`;
}

function cvSection(title, body) {
  return body ? `<section class="cv-section"><h2 class="cv-h2">${cvEsc(title)}</h2>${body}</section>` : '';
}

function cvBullets(items) {
  return items.length ? `<ul class="cv-ul">${items.map(b => `<li>${cvEsc(b)}</li>`).join('')}</ul>` : '';
}

function cvEntryHtml(e) {
  return `<div class="cv-entry">
    <div class="cv-row"><span class="cv-title">${cvEsc(e.title)}</span><span class="cv-date">${cvEsc(e.period)}</span></div>
    ${e.org ? `<div class="cv-org">${cvEsc(e.org)}</div>` : ''}
    ${cvBullets(e.bullets)}
  </div>`;
}

function cvProjectHtml(p) {
  return `<div class="cv-entry">
    <div class="cv-title">${cvEsc(p.title)}</div>
    ${p.desc ? `<p class="cv-p">${cvEsc(p.desc)}</p>` : ''}
    ${cvBullets(p.bullets)}
    ${p.tech.length || p.links.length ? `<div class="cv-meta">${[
      p.tech.length ? `<b>Tech:</b> ${cvEsc(p.tech.join(', '))}` : '',
      ...p.links.map(l => `<b>${cvEsc(l.label)}:</b> ${cvLink(l)}`)
    ].filter(Boolean).join('<span class="cv-sep">|</span>')}</div>` : ''}
  </div>`;
}

function renderCvHtml(m) {
  const contactLine = m.contact.map(c => c.href ? cvLink(c) : cvEsc(c.text)).join('<span class="cv-sep">|</span>');
  const linkLine = m.links.map(l => `${cvEsc(l.label)}: ${cvLink(l)}`).join('<span class="cv-sep">|</span>');

  return `<article class="cv">
    <header class="cv-head">
      <h1 class="cv-name">${cvEsc(m.name)}</h1>
      ${m.title ? `<div class="cv-role">${cvEsc(m.title)}</div>` : ''}
      ${contactLine ? `<div class="cv-contact">${contactLine}</div>` : ''}
      ${linkLine ? `<div class="cv-contact">${linkLine}</div>` : ''}
    </header>
    ${cvSection('Professional Summary', m.summary ? `<p class="cv-p">${cvEsc(m.summary)}</p>` : '')}
    ${cvSection('Skills', m.skills.length ? `<div class="cv-skills">${m.skills.map(s =>
      `<div class="cv-skill"><b>${cvEsc(s.label)}:</b> ${cvEsc(s.items.join(', '))}</div>`).join('')}</div>` : '')}
    ${cvSection('Work Experience', m.experience.map(cvEntryHtml).join(''))}
    ${cvSection('Projects', m.projectGroups.map(g =>
      `<h3 class="cv-h3">${cvEsc(g.label)}</h3>${g.items.map(cvProjectHtml).join('')}`).join(''))}
    ${cvSection('Education', m.education.map(cvEntryHtml).join(''))}
    ${cvSection('Certifications', m.certifications.map(c => `<div class="cv-entry">
      <div class="cv-row"><span class="cv-title">${cvEsc(c.name)}</span><span class="cv-date">${cvEsc(c.year)}</span></div>
      <div class="cv-org">${cvEsc(c.issuer)}</div>
      ${c.link ? `<div class="cv-meta"><b>Credential:</b> ${cvLink({ href: c.link, text: cvShortUrl(c.link) })}</div>` : ''}
    </div>`).join(''))}
    ${cvSection('Languages', m.languages.length ? `<p class="cv-p">${m.languages.map(l =>
      `${cvEsc(l.name)}${l.level ? ` (${cvEsc(l.level)})` : ''}`).join('<span class="cv-sep">|</span>')}</p>` : '')}
  </article>`;
}

/** Re-render the hidden print copy from the latest data. */
function refreshCvPrint() {
  const host = document.getElementById('cv-print');
  if (!host || typeof getData !== 'function') return null;
  const model = buildCvModel(getData());
  host.innerHTML = renderCvHtml(model);
  return model;
}

function downloadCvPdf() {
  const model = refreshCvPrint();
  if (!model) return;
  const prevTitle = document.title;
  document.title = cvFileName(model); // default file name in "Save as PDF"
  const restore = () => { document.title = prevTitle; window.removeEventListener('afterprint', restore); };
  window.addEventListener('afterprint', restore);
  setTimeout(() => window.print(), 50);
}

// ── Word (.docx) ─────────────────────────────────────────

function downloadCvWord() {
  if (typeof docx === 'undefined' || typeof saveAs === 'undefined') {
    showToast('Word export could not load. Please refresh and try again.');
    return;
  }
  const m = buildCvModel(getData());
  const {
    Document, Packer, Paragraph, TextRun, ExternalHyperlink, BorderStyle,
    TabStopType, Tab, AlignmentType, LevelFormat, convertInchesToTwip
  } = docx;

  const FONT = 'Calibri';
  const INK = '111111';
  const MUTED = '555555';
  const LINK = '1D4ED8';
  const RIGHT_TAB = convertInchesToTwip(8.27 - 0.75 * 2); // A4 width minus margins

  const run = (text, o = {}) => new TextRun({ text, font: FONT, size: 20, color: INK, ...o });
  const link = (text, href, size = 20) => new ExternalHyperlink({
    link: href,
    children: [new TextRun({ text, font: FONT, size, color: LINK, underline: {} })]
  });
  const sep = (size = 20) => run('  |  ', { color: MUTED, size });

  const children = [];
  const heading = text => children.push(new Paragraph({
    children: [run(text.toUpperCase(), { bold: true, size: 22, characterSpacing: 20 })],
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: '999999', space: 2 } },
    spacing: { before: 240, after: 100 },
    keepNext: true
  }));
  const para = (runs, o = {}) => children.push(new Paragraph({ children: runs, spacing: { after: 60 }, ...o }));
  const bullets = items => items.forEach(b => children.push(new Paragraph({
    children: [run(b)],
    numbering: { reference: 'cv-bullets', level: 0 },
    spacing: { after: 30 }
  })));
  const titleRow = (title, date) => para(
    [run(title, { bold: true, size: 21 }), ...(date ? [new TextRun({ children: [new Tab(), date], font: FONT, size: 20, color: MUTED })] : [])],
    { tabStops: [{ type: TabStopType.RIGHT, position: RIGHT_TAB }], spacing: { before: 120, after: 20 }, keepNext: true }
  );
  const entry = e => {
    titleRow(e.title, e.period);
    if (e.org) para([run(e.org, { italics: true, color: MUTED })], { spacing: { after: 40 } });
    bullets(e.bullets);
  };
  const joinRuns = (parts, size) => parts.flatMap((p, i) => (i ? [sep(size), ...p] : p));

  // Header
  para([run(m.name, { bold: true, size: 40 })], { alignment: AlignmentType.CENTER, spacing: { after: 20 } });
  if (m.title) para([run(m.title, { size: 24, color: MUTED })], { alignment: AlignmentType.CENTER, spacing: { after: 60 } });
  if (m.contact.length) para(joinRuns(m.contact.map(c => [c.href ? link(c.text, c.href, 19) : run(c.text, { size: 19 })]), 19),
    { alignment: AlignmentType.CENTER, spacing: { after: 20 } });
  if (m.links.length) para(joinRuns(m.links.map(l => [run(`${l.label}: `, { size: 19 }), link(l.text, l.href, 19)]), 19),
    { alignment: AlignmentType.CENTER, spacing: { after: 60 } });

  if (m.summary) { heading('Professional Summary'); para([run(m.summary)]); }

  if (m.skills.length) {
    heading('Skills');
    m.skills.forEach(s => para([run(`${s.label}: `, { bold: true }), run(s.items.join(', '))], { spacing: { after: 40 } }));
  }

  if (m.experience.length) { heading('Work Experience'); m.experience.forEach(entry); }

  if (m.projectGroups.length) {
    heading('Projects');
    m.projectGroups.forEach(g => {
      para([run(g.label.toUpperCase(), { bold: true, size: 18, color: MUTED })], { spacing: { before: 140, after: 0 }, keepNext: true });
      g.items.forEach(p => {
        titleRow(p.title);
        if (p.desc) para([run(p.desc)], { spacing: { after: 40 } });
        bullets(p.bullets);
        const meta = [
          ...(p.tech.length ? [[run('Tech: ', { bold: true, size: 19 }), run(p.tech.join(', '), { size: 19, color: MUTED })]] : []),
          ...p.links.map(l => [run(`${l.label}: `, { bold: true, size: 19 }), link(l.text, l.href, 19)])
        ];
        if (meta.length) para(joinRuns(meta, 19), { spacing: { after: 40 } });
      });
    });
  }

  if (m.education.length) { heading('Education'); m.education.forEach(entry); }

  if (m.certifications.length) {
    heading('Certifications');
    m.certifications.forEach(c => {
      titleRow(c.name, c.year);
      para([run(c.issuer, { italics: true, color: MUTED })], { spacing: { after: c.link ? 20 : 40 } });
      if (c.link) para([run('Credential: ', { bold: true, size: 19 }), link(cvShortUrl(c.link), c.link, 19)]);
    });
  }

  if (m.languages.length) {
    heading('Languages');
    para(joinRuns(m.languages.map(l => [run(l.name, { bold: true }), run(l.level ? ` (${l.level})` : '')])));
  }

  const doc = new Document({
    creator: m.name,
    title: `${m.name} – CV`,
    numbering: {
      config: [{
        reference: 'cv-bullets',
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 360, hanging: 240 } } }
        }]
      }]
    },
    sections: [{
      properties: {
        page: {
          size: { width: convertInchesToTwip(8.27), height: convertInchesToTwip(11.69) },
          margin: { top: convertInchesToTwip(0.7), bottom: convertInchesToTwip(0.7), left: convertInchesToTwip(0.75), right: convertInchesToTwip(0.75) }
        }
      },
      children
    }]
  });

  Packer.toBlob(doc)
    .then(blob => { saveAs(blob, `${cvFileName(m)}.docx`); showToast('Word CV downloaded'); })
    .catch(err => { console.error('Word generation error:', err); showToast('Word export failed. Please try again.'); });
}

// Ctrl+P / browser print menu: always print the up-to-date CV.
window.addEventListener('beforeprint', refreshCvPrint);
