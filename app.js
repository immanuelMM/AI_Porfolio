/* ─── app.js ─── */

'use strict';

// ══════════════════════════════════════
//  AUTH CONFIG  (change these!)
// ══════════════════════════════════════
const AUTH = { username: 'immanuel', password: 'Mahusay1991!' };

// ══════════════════════════════════════
//  DEFAULT DATA  (your real info)
// ══════════════════════════════════════
const DEFAULT_DATA = {
  // Config
  'use-profile-pic': true,
  moduleVisibility: {}, // Map of element ID to boolean (true defaults to visible)
  // Sidebar fields
  'full-name':    'Immanuel Mahusay',
  'job-title':    'Software Engineer',
  'availability': 'Open to opportunities',
  'email':        'immanuel@qstrike.com | immanuelmahusay@mcgi.org',
  'phone':        '+63 976 036 0023',
  'location':     'P2-B2-L35 Highview, Apalit, Philippines',
  'website':      'Filipino  •  Dec 24, 1991',

  // Social
  'link-github':   'https://github.com/immanuelmm',
  'link-linkedin': 'https://linkedin.com/in/',
  'link-twitter':  'https://twitter.com/',

  // About
  'about-text': 'Experienced in developing seamless user interfaces using HTML, CSS, and JavaScript. Utilizes modern frameworks and libraries to enhance functionality and improve the user experience. Solid grasp of responsive design principles and excels in effective collaboration within a team environment.',

  // Skill Categories
  skillCategories: [
    {
      id: 'cat-frontend',
      name: 'Frontend',
      skills: ['Vue.js', 'TypeScript', 'Angular', 'Pixi.js', 'HTML', 'CSS']
    },
    {
      id: 'cat-backend',
      name: 'Backend & DB',
      skills: ['Node.js', 'Ruby on Rails', '.NET', 'PHP', 'MySQL']
    },
    {
      id: 'cat-tools',
      name: 'Tools & Others',
      skills: ['Git', 'GitLab', 'Heroku', 'Agile', 'OOP']
    },
    {
      id: 'cat-main',
      name: 'Main Skills Pool',
      skills: ['Problem-Solving', 'Teamwork', 'Adaptability', 'Time Management', 'Design Patterns', 'Testing', 'Debugging', 'Algorithms', 'Leadership', 'Interpersonal Skills', 'Work Ethic', 'Creativity']
    }
  ],

  // Languages
  languages: [
    { name: 'Filipino', level: 'Native' },
    { name: 'English',  level: 'Proficient' }
  ],

  // Work Experience
  experience: [
    {
      id: 'exp1',
      role: 'Software Engineer Lead',
      company: 'QuickStrike Innovation Phil. · Telebastagan',
      period: 'March 2021 – Present',
      bullets: [
        'Solution Analysis',
        'Developed and maintained interactive web applications using Vue.js and JavaScript.',
        'Implemented responsive UI/UX designs to enhance user experience and accessibility.',
        'Collaborated with designers and backend developers to deliver scalable, maintainable solutions.',
        'Managed state handling using Vuex/Pinia for efficient data flow.',
        'Conducted code reviews and implemented best practices to improve application stability.'
      ]
    },
    {
      id: 'exp2',
      role: 'Front-End Developer',
      company: 'MCGI IT · Apalit, Pampanga',
      period: 'September 2024 – Present',
      bullets: [
        'Built dynamic, reusable components for a modular and maintainable codebase (MCGI Hub).',
        'Worked on improving performance and security.',
        'Integrated third-party libraries and tools to enhance project functionality.',
        'Debugged and resolved front-end issues, improving system reliability.'
      ]
    },
    {
      id: 'exp3',
      role: 'Volunteer Web Designer',
      company: 'Laverdad Christian College · Pampanga, Philippines',
      period: 'November 2014 – December 2015',
      bullets: [
        'Redesigned Laverdad\'s information system using Bootstrap.',
        'Fetched data from an API middleware through AJAX for frontend consumption.',
        'Validated all forms using jQuery.'
      ]
    },
    {
      id: 'exp4',
      role: 'Data Encoder',
      company: 'Fashion Rack Designer Inc. · Mandaluyong City, Philippines',
      period: 'April 2013 – August 2014',
      bullets: [
        'Forecasted monthly sales data per branch using Excel to generate reports for the CEO.',
        'Encoded newly arrived products into the internal system and generated management data records.'
      ]
    }
  ],

  // Education
  education: [
    {
      id: 'edu1',
      role: 'Vocational – Full Stack Web Development',
      company: 'Avion School',
      period: 'February 2020',
      bullets: []
    },
    {
      id: 'edu2',
      role: 'Bachelor of Science in Information Systems',
      company: 'Laverdad Christian College',
      period: 'January 2018',
      bullets: []
    },
    {
      id: 'edu3',
      role: 'TESDA – Computer Programming Course',
      company: 'Laverdad Christian College',
      period: 'January 2013',
      bullets: []
    }
  ],

  // Projects
  projects: [
    {
      id: 'proj1',
      title: 'LoanPro – Loan Management System',
      desc: 'A full-featured loan management web app with borrower tracking, loan lifecycle management, amortization schedules, payment recording, PDF receipts, and a KPI dashboard. Built with vanilla JS and a Node.js backend.',
      tags: ['JavaScript','Node.js','MySQL','HTML','CSS','PDF'],
      link: 'https://loanpro-ui.onrender.com/#dashboard'
    },
    {
      id: 'proj2',
      title: 'MCGI Hub',
      desc: 'Contributed to the MCGI Hub platform – a large-scale internal web application for the Members Church of God International. Built dynamic, reusable Vue.js components with a focus on performance, security, and scalability.',
      tags: ['Vue.js','TypeScript','JavaScript','CSS'],
      link: 'https://hub.mcgi.org/calendar'
    },
    {
      id: 'proj3',
      title: 'Axe Uniforms – E-Commerce Website',
      desc: 'Professional uniform and apparel e-commerce website. Implemented responsive product listings, shopping cart, and checkout flow for a Philippine-based uniform supplier.',
      tags: ['HTML','CSS','JavaScript','E-Commerce'],
      link: 'https://axeuniforms.com/'
    },
    {
      id: 'proj4',
      title: 'PG Uniforms – Corporate Website',
      desc: 'Corporate website for PG Uniforms, a Philippine uniform manufacturer. Delivered a clean, responsive design showcasing product catalog and company information.',
      tags: ['HTML','CSS','JavaScript','Responsive'],
      link: 'https://www.pguniforms.com/'
    },
    {
      id: 'proj5',
      title: 'OneKnowledge CLLC – Company Profile',
      desc: 'Company profile website for OneKnowledge CLLC. Designed and developed a clean, professional multi-page website with smooth navigation and responsive layout.',
      tags: ['HTML','CSS','JavaScript','Bootstrap'],
      link: 'https://immanuelmm.github.io/OneKnowledgeCLLC/'
    },
    {
      id: 'proj6',
      title: 'KR – Landing Page',
      desc: 'A sleek landing page project featuring modern UI design, smooth scroll effects, and a fully responsive layout optimized for all screen sizes.',
      tags: ['HTML','CSS','JavaScript','Responsive'],
      link: 'https://immanuelmm.github.io/KR/'
    },
    {
      id: 'proj7',
      title: 'Survivor Game – Interactive Web App',
      desc: 'An interactive browser-based Survivor-themed game application. Features dynamic game logic, player management, and engaging UI built entirely with vanilla JavaScript.',
      tags: ['JavaScript','HTML','CSS','Game'],
      link: 'https://immanuelmm.github.io/Survivor_2/'
    },
    {
      id: 'proj8',
      title: 'Kirstin Regalado – Artist Portfolio',
      desc: 'A personal portfolio / fan site for artist Kirstin Regalado. Beautifully designed with a music-themed aesthetic, gallery, and smooth animations.',
      tags: ['HTML','CSS','JavaScript','Bootstrap'],
      link: 'https://immanuelmm.github.io/kirstin-regalado/'
    },
    {
      id: 'proj9',
      title: 'Personal Portfolio v1 (Student)',
      desc: 'My original portfolio website built as a student. A milestone project showcasing my early web development skills with HTML, CSS, and JavaScript.',
      tags: ['HTML','CSS','JavaScript','Bootstrap'],
      link: 'https://immanuelmm.github.io/My-portfolio/'
    }
  ],

  // Web System Projects
  webSystems: [
    {
      id: 'ws1',
      title: 'LoanPro – Loan Management System',
      desc: 'A full-featured loan management web app with borrower tracking, loan lifecycle management, amortization schedules, payment recording, PDF receipts, and a KPI dashboard.',
      tags: ['JavaScript','Node.js','MySQL','HTML','CSS','PDF'],
      link: 'https://loanpro-ui.onrender.com/#dashboard'
    },
    {
      id: 'ws2',
      title: 'MCGI Hub',
      desc: 'Contributed to the MCGI Hub – a large-scale internal web application for MCGI. Built dynamic, reusable Vue.js components with a focus on performance, security, and scalability.',
      tags: ['Vue.js','TypeScript','JavaScript','CSS'],
      link: 'https://hub.mcgi.org/calendar'
    },
    {
      id: 'ws3',
      title: 'Axe Uniforms – E-Commerce System',
      desc: 'Professional uniform and apparel e-commerce system with responsive product listings, shopping cart, and checkout flow for a Philippine-based uniform supplier.',
      tags: ['HTML','CSS','JavaScript','E-Commerce'],
      link: 'https://axeuniforms.com/'
    },
    {
      id: 'ws4',
      title: 'PG Uniforms – Corporate System',
      desc: 'Corporate web system for PG Uniforms, a Philippine uniform manufacturer. Clean, responsive design showcasing product catalog and company information.',
      tags: ['HTML','CSS','JavaScript','Responsive'],
      link: 'https://www.pguniforms.com/'
    }
  ],

  // Static Website Projects
  staticProjects: [
    {
      id: 'sp1',
      title: 'Survivor Game – Interactive Web App',
      desc: 'An interactive browser-based Survivor-themed game with dynamic game logic, player management, voting mechanics, and engaging UI built entirely with vanilla JavaScript.',
      tags: ['JavaScript','HTML','CSS','Game Logic'],
      link: 'https://immanuelmm.github.io/Survivor_2/'
    },
    {
      id: 'sp2',
      title: 'OneKnowledge CLLC – Company Profile',
      desc: 'Company profile website for OneKnowledge CLLC with smooth navigation, responsive layout, and professional multi-page design.',
      tags: ['HTML','CSS','JavaScript','Bootstrap'],
      link: 'https://immanuelmm.github.io/OneKnowledgeCLLC/'
    },
    {
      id: 'sp3',
      title: 'KR – Landing Page',
      desc: 'A sleek landing page with modern UI design, smooth scroll effects, and a fully responsive layout optimized for all screen sizes.',
      tags: ['HTML','CSS','JavaScript','Responsive'],
      link: 'https://immanuelmm.github.io/KR/'
    },
    {
      id: 'sp4',
      title: 'Kirstin Regalado – Artist Portfolio',
      desc: 'A personal portfolio fan site for artist Kirstin Regalado with a music-themed aesthetic, photo gallery, and smooth animations.',
      tags: ['HTML','CSS','JavaScript','Bootstrap'],
      link: 'https://immanuelmm.github.io/kirstin-regalado/'
    },
    {
      id: 'sp5',
      title: 'Personal Portfolio v1 (Student)',
      desc: 'My original portfolio website built as a student – a milestone project showcasing early web dev skills with HTML, CSS, and JavaScript.',
      tags: ['HTML','CSS','JavaScript','Bootstrap'],
      link: 'https://immanuelmm.github.io/My-portfolio/'
    }
  ],

  // AI Skills (shown separately in sidebar)
  aiSkills: [
    'n8n Automation', 'AI Workflow Design', 'Antigravity AI',
    'Prompt Engineering', 'AI Integration', 'LLM Orchestration',
    'Agentic Coding', 'REST AI APIs'
  ],

  // AI Tools / Highlight Cards
  aiTools: [
    {
      id: 'ai1',
      icon: '⚡',
      title: 'n8n Workflow Automation',
      badge: 'Live',
      desc: 'Built automated workflows using n8n to orchestrate multi-step processes, API integrations, and data pipelines — reducing manual effort and enabling AI-driven task automation.',
      tags: ['n8n', 'Workflow Automation', 'REST API', 'JSON', 'Webhooks'],
      link: 'https://n8n-immanuel.onrender.com/workflow/KQtNoYGqnGs19BWA/executions/2'
    },
    {
      id: 'ai2',
      icon: '🤖',
      title: 'Antigravity AI – Agentic Coding',
      badge: 'Active',
      desc: 'Leverages Google DeepMind\'s Antigravity AI assistant for agentic pair programming — using AI to plan, scaffold, debug, and ship full-stack features with intelligent code generation.',
      tags: ['Antigravity AI', 'Google DeepMind', 'Agentic Coding', 'AI Pair Programming'],
      link: ''
    },
    {
      id: 'ai3',
      icon: '🧠',
      title: 'Prompt Engineering & LLM Integration',
      badge: 'Skill',
      desc: 'Designs structured prompts for LLMs (Large Language Models), integrates AI APIs into web applications, and builds intelligent automation pipelines using modern AI tools.',
      tags: ['Prompt Engineering', 'LLM', 'AI APIs', 'OpenAI', 'Automation'],
      link: ''
    }
  ],

  // Certifications
  certifications: [
    { id: 'cert1', name: 'Full Stack Web Development', issuer: 'Avion School', year: '2020', icon: '🎓' },
    { id: 'cert2', name: 'TESDA NC II – Computer Programming', issuer: 'TESDA / Laverdad Christian College', year: '2013', icon: '📜' }
  ]
};

// ══════════════════════════════════════
//  STATE
// ══════════════════════════════════════
let isEditMode = false;
let editingItem = null; // { type, id }

// ══════════════════════════════════════
//  STORAGE HELPERS
// ══════════════════════════════════════
const DATA_VERSION = 'v10'; // bump this when defaults change significantly

function loadData() {
  try {
    const savedVersion = localStorage.getItem('portfolio_version');
    const saved = localStorage.getItem('portfolio_data');
    // If version mismatch or no save, use defaults (preserves user edits only on same version)
    if (savedVersion !== DATA_VERSION || !saved) {
      return { ...DEFAULT_DATA };
    }
    const parsed = JSON.parse(saved);

    // Migration from old skills array to skillCategories
    let finalCategories = parsed.skillCategories || DEFAULT_DATA.skillCategories;
    if (!parsed.skillCategories && parsed.skills && parsed.skills.length > 0) {
      finalCategories = [
        ...DEFAULT_DATA.skillCategories.filter(c => c.id !== 'cat-main'),
        { id: 'cat-main', name: 'Main Skills Pool', skills: parsed.skills }
      ];
    }

    // Merge: use saved scalar fields but keep default arrays if saved arrays are empty/missing
    return {
      ...DEFAULT_DATA,
      ...parsed,
      projects: (parsed.projects && parsed.projects.length > 0) ? parsed.projects : DEFAULT_DATA.projects,
      webSystems: (parsed.webSystems && parsed.webSystems.length > 0) ? parsed.webSystems : DEFAULT_DATA.webSystems,
      staticProjects: (parsed.staticProjects && parsed.staticProjects.length > 0) ? parsed.staticProjects : DEFAULT_DATA.staticProjects,
      experience: (parsed.experience && parsed.experience.length > 0) ? parsed.experience : DEFAULT_DATA.experience,
      education: (parsed.education && parsed.education.length > 0) ? parsed.education : DEFAULT_DATA.education,
      certifications: (parsed.certifications && parsed.certifications.length > 0) ? parsed.certifications : DEFAULT_DATA.certifications,
      skillCategories: finalCategories,
      languages: (parsed.languages && parsed.languages.length > 0) ? parsed.languages : DEFAULT_DATA.languages,
      moduleVisibility: parsed.moduleVisibility || {},
      // Always use defaults for AI (managed by code)
      aiSkills: DEFAULT_DATA.aiSkills,
      aiTools: DEFAULT_DATA.aiTools,
    };
  } catch { return { ...DEFAULT_DATA }; }
}

function saveData(data) {
  localStorage.setItem('portfolio_data', JSON.stringify(data));
  localStorage.setItem('portfolio_version', DATA_VERSION);
}

function getData() {
  return loadData();
}

// ══════════════════════════════════════
//  VISIBILITY HELPERS
// ══════════════════════════════════════
function applyVisibility() {
  const data = getData();
  const vis = data.moduleVisibility || {};
  
  // Taggable sections (main sections & sidebar sections)
  document.querySelectorAll('.content-section, .sidebar-section').forEach(sec => {
    if (!sec.id) return;
    const isVisible = vis[sec.id] !== false;
    
    if (isVisible) {
      sec.classList.remove('module-hidden');
    } else {
      sec.classList.add('module-hidden');
    }

    // Optional: Sync the button if it exists
    const btn = sec.querySelector('.pdf-toggle-btn');
    if (btn) {
      // Setup edit mode button visuals
      if (isVisible) {
        btn.classList.remove('off');
        btn.innerHTML = '👁️ PDF: Show';
        btn.title = 'Click to hide this section from PDF and web.';
      } else {
        btn.classList.add('off');
        btn.innerHTML = '🙈 PDF: Hide';
        btn.title = 'Click to show this section in PDF and web.';
      }
    }
  });
}

function initVisibilityToggles() {
  document.querySelectorAll('.content-section, .sidebar-section').forEach(sec => {
    if (!sec.id) return;

    // Determine where to inject the toggle button
    let header = sec.querySelector('.section-header, .sidebar-heading-wrap');
    if (!header) return; // Ignore sections without headers that match our struct
    
    // Create toggle if it doesn't exist
    if (!header.querySelector('.pdf-toggle-btn')) {
      const btn = document.createElement('button');
      btn.className = 'pdf-toggle-btn edit-only hidden';
      header.appendChild(btn);

      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const data = getData();
        const v = data.moduleVisibility || {};
        
        // Toggle the boolean (default is true if undefined)
        const currentState = v[sec.id] !== false;
        v[sec.id] = !currentState;
        
        data.moduleVisibility = v;
        saveData(data);
        applyVisibility();
        
        const noun = sec.classList.contains('sidebar-section') ? 'Sidebar section' : 'Section';
        if (v[sec.id]) {
          showToast(`👁️ ${noun} will be included everywhere.`);
        } else {
          showToast(`🙈 ${noun} is hidden from web and PDF.`);
        }
      });
    }
  });
}

// ══════════════════════════════════════
//  RENDER HELPERS
// ══════════════════════════════════════

let draggedSkill = null; // { catId, skillName }

function dragSkill(ev, catId, skillName) {
  draggedSkill = { catId, skillName };
  ev.dataTransfer.effectAllowed = 'move';
  ev.dataTransfer.setData('text/plain', skillName); // required for Firefox
}

function allowDropSkill(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = 'move';
}

function dragEnterSkill(ev) {
  ev.preventDefault();
  const c = ev.currentTarget;
  if (c.classList.contains('skill-category')) c.classList.add('drag-over');
}

function dragLeaveSkill(ev) {
  const c = ev.currentTarget;
  if (c.classList.contains('skill-category')) c.classList.remove('drag-over');
}

function dropSkill(ev, targetCatId) {
  ev.preventDefault();
  const c = ev.currentTarget;
  if (c.classList.contains('skill-category')) c.classList.remove('drag-over');

  if (!draggedSkill || draggedSkill.catId === targetCatId) return;

  const data = getData();
  const cats = data.skillCategories || [];
  
  const sourceCat = cats.find(cat => cat.id === draggedSkill.catId);
  if (sourceCat) {
    sourceCat.skills = sourceCat.skills.filter(s => s !== draggedSkill.skillName);
  }
  
  const destCat = cats.find(cat => cat.id === targetCatId);
  if (destCat && !destCat.skills.includes(draggedSkill.skillName)) {
    destCat.skills.push(draggedSkill.skillName);
  }

  saveData(data);
  renderSkills(data.skillCategories);
  applyEditMode(); 
  draggedSkill = null;
}

function addSkillCategory() {
  const data = getData();
  const cats = data.skillCategories || [];
  cats.push({ id: 'cat-' + Date.now(), name: 'New Category', skills: [] });
  data.skillCategories = cats;
  saveData(data);
  renderSkills(cats);
  applyEditMode();
}

function deleteSkillCategory(catId) {
  if (!confirm('Delete this category and all its skills?')) return;
  const data = getData();
  data.skillCategories = (data.skillCategories || []).filter(c => c.id !== catId);
  saveData(data);
  renderSkills(data.skillCategories);
  applyEditMode();
}

function addSkill(catId, skillName) {
  skillName = skillName.trim();
  if (!skillName) return;
  const data = getData();
  const cat = (data.skillCategories || []).find(c => c.id === catId);
  if (cat && !cat.skills.includes(skillName)) {
    cat.skills.push(skillName);
    saveData(data);
    renderSkills(data.skillCategories);
    applyEditMode();
  }
}

function deleteSkill(catId, skillName) {
  const data = getData();
  const cat = (data.skillCategories || []).find(c => c.id === catId);
  if (cat) {
    cat.skills = cat.skills.filter(s => s !== skillName);
    saveData(data);
    renderSkills(data.skillCategories);
    applyEditMode();
  }
}

function updateCatName(el) {
  const catId = el.getAttribute('data-cat-id');
  const newName = el.textContent.trim();
  if (!newName) return;
  const data = getData();
  const cat = (data.skillCategories || []).find(c => c.id === catId);
  if (cat && cat.name !== newName) {
    cat.name = newName;
    saveData(data);
  }
}

function editSkillName(catId, oldName) {
  const newName = prompt('Edit skill name:', oldName);
  if (newName !== null && newName.trim() !== '' && newName.trim() !== oldName) {
    const data = getData();
    const cat = (data.skillCategories || []).find(c => c.id === catId);
    if (cat) {
      const idx = cat.skills.indexOf(oldName);
      if (idx >= 0) {
        cat.skills[idx] = newName.trim();
        saveData(data);
        renderSkills(data.skillCategories);
        applyEditMode();
      }
    }
  }
}

function renderSkills(categories) {
  const container = document.getElementById('skills-container');
  if (!container) return;
  
  if (!categories || categories.length === 0) {
    categories = [{ id: 'cat-main', name: 'Main Skills Pool', skills: [] }];
  }

  container.innerHTML = categories.map(c => `
    <div class="skill-category" data-cat-id="${c.id}" 
         ondrop="dropSkill(event, '${c.id}')" 
         ondragover="allowDropSkill(event)"
         ondragenter="dragEnterSkill(event)"
         ondragleave="dragLeaveSkill(event)">
      <div class="skill-cat-header">
        <span class="skill-cat-title" data-cat-id="${c.id}" ${isEditMode ? 'contenteditable="true" onblur="updateCatName(this)"' : ''}>${escHtml(c.name)}</span>
        ${isEditMode ? `<button class="del-cat-btn" onclick="deleteSkillCategory('${c.id}')" title="Delete Category">✕</button>` : ''}
      </div>
      <div class="skills-wrap">
        ${c.skills.map(s => `
          <span class="skill-tag" ${isEditMode ? 'draggable="true"' : ''} 
                ondragstart="dragSkill(event, '${c.id}', '${escHtml(s)}')"
                ${isEditMode ? `title="Drag to move. Dbl-click to edit." ondblclick="editSkillName('${c.id}', '${escHtml(s)}', this)"` : ''}>
            <span class="skill-text">${escHtml(s)}</span>
            ${isEditMode ? `<span class="del-skill-btn" onclick="deleteSkill('${c.id}', '${escHtml(s)}')">×</span>` : ''}
          </span>
        `).join('')}
      </div>
      ${isEditMode ? `<div class="add-skill-wrap"><input type="text" class="add-skill-input" placeholder="+ Add skill (Enter)" onkeydown="if(event.key==='Enter') { addSkill('${c.id}', this.value); this.value=''; }" /></div>` : ''}
    </div>
  `).join('');
  
  if (isEditMode) {
    container.innerHTML += `<div class="add-cat-wrap"><button class="add-cat-btn" onclick="addSkillCategory()">+ Add Category</button></div>`;
  }
}

function renderLanguages(langs) {
  const container = document.getElementById('lang-container');
  container.innerHTML = langs.map(l =>
    `<div class="lang-item">
      <span class="lang-name">${escHtml(l.name)}</span>
      <span class="lang-level">${escHtml(l.level)}</span>
    </div>`
  ).join('');
  const input = document.getElementById('lang-input');
  if (input) input.value = langs.map(l => `${l.name} – ${l.level}`).join('\n');
}

function renderAISkillsSidebar(skills) {
  const container = document.getElementById('ai-skills-container');
  if (!container) return;
  container.innerHTML = (skills || []).map(s =>
    `<span class="ai-skill-tag">${escHtml(s)}</span>`
  ).join('');
}

function renderAISection(tools) {
  const grid = document.getElementById('ai-highlight-grid');
  if (!grid) return;
  if (!tools || tools.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;">No AI tools added yet.</p>';
    return;
  }
  grid.innerHTML = tools.map(item => `
    <div class="ai-card">
      <span class="ai-badge">${escHtml(item.badge || 'AI')}</span>
      <span class="ai-card-icon">${item.icon || '🤖'}</span>
      <div class="ai-card-title">${escHtml(item.title)}</div>
      <div class="ai-card-desc">${escHtml(item.desc)}</div>
      <div class="ai-card-tags">${(item.tags || []).map(t => `<span class="ai-card-tag">${escHtml(t)}</span>`).join('')}</div>
      ${item.link ? `<a class="ai-card-link" href="${escHtml(item.link)}" target="_blank" rel="noopener">🔗 View Workflow ↗</a>` : ''}
    </div>
  `).join('');
}

function renderExperience(items) {
  const list = document.getElementById('experience-list');
  if (!items || items.length === 0) {
    list.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;">No experience added yet.</p>';
    return;
  }
  list.innerHTML = items.map(item => `
    <div class="timeline-item" data-id="${item.id}" data-type="experience">
      <button class="card-edit-btn edit-only" onclick="openEditModal('experience','${item.id}')">✏︎ Edit</button>
      <div class="timeline-header">
        <span class="timeline-role">${escHtml(item.role)}</span>
        <span class="timeline-period">${escHtml(item.period)}</span>
      </div>
      <div class="timeline-company">${escHtml(item.company)}</div>
      ${item.bullets && item.bullets.length > 0
        ? `<ul class="timeline-bullets">${item.bullets.map(b => `<li>${escHtml(b)}</li>`).join('')}</ul>`
        : ''}
    </div>
  `).join('');
  // Show/hide edit buttons based on current mode
  applyEditMode();
}

function renderEducation(items) {
  const list = document.getElementById('education-list');
  if (!items || items.length === 0) {
    list.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;">No education added yet.</p>';
    return;
  }
  list.innerHTML = items.map(item => `
    <div class="timeline-item" data-id="${item.id}" data-type="education">
      <button class="card-edit-btn edit-only" onclick="openEditModal('education','${item.id}')">✏︎ Edit</button>
      <div class="timeline-header">
        <span class="timeline-role">${escHtml(item.role)}</span>
        <span class="timeline-period">${escHtml(item.period)}</span>
      </div>
      <div class="timeline-company">${escHtml(item.company)}</div>
      ${item.bullets && item.bullets.length > 0
        ? `<ul class="timeline-bullets">${item.bullets.map(b => `<li>${escHtml(b)}</li>`).join('')}</ul>`
        : ''}
    </div>
  `).join('');
  applyEditMode();
}

function renderProjects(items) {
  // Legacy: if old single projects-grid still exists, use it
  const grid = document.getElementById('projects-grid');
  if (grid && items && items.length > 0) {
    grid.innerHTML = items.map(item => `
      <div class="project-card" data-id="${item.id}">
        <button class="card-edit-btn edit-only" onclick="openEditModal('projects','${item.id}')">✏︎ Edit</button>
        <div class="project-title">${escHtml(item.title)}</div>
        <div class="project-desc">${escHtml(item.desc)}</div>
        <div class="project-tags">${(item.tags || []).map(t => `<span class="project-tag">${escHtml(t)}</span>`).join('')}</div>
        ${item.link ? `<a class="project-link" href="${escHtml(item.link)}" target="_blank">🔗 View Project ↗</a>` : ''}
      </div>
    `).join('');
  }
  applyEditMode();
}

function renderProjectCards(items, gridId, type) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  if (!items || items.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;padding:8px 0;">No items added yet.</p>';
    updateSubsectionCount(gridId, 0);
    return;
  }
  grid.innerHTML = items.map(item => `
    <div class="project-card" data-id="${item.id}">
      <button class="card-edit-btn edit-only" onclick="openEditModal('${type}','${item.id}')">✏︎ Edit</button>
      <div class="project-title">${escHtml(item.title)}</div>
      <div class="project-desc">${escHtml(item.desc)}</div>
      <div class="project-tags">${(item.tags || []).map(t => `<span class="project-tag">${escHtml(t)}</span>`).join('')}</div>
      ${item.link ? `<a class="project-link" href="${escHtml(item.link)}" target="_blank" rel="noopener">🔗 View Project ↗</a>` : ''}
    </div>
  `).join('');
  updateSubsectionCount(gridId, items.length);
  applyEditMode();
}

function updateSubsectionCount(gridId, count) {
  const countMap = {
    'websystems-grid': 'websystem-count',
    'staticweb-grid': 'staticweb-count'
  };
  const countEl = document.getElementById(countMap[gridId]);
  if (countEl) countEl.textContent = count;
}

function renderWebSystems(items) {
  renderProjectCards(items, 'websystems-grid', 'webSystems');
}

function renderStaticProjects(items) {
  renderProjectCards(items, 'staticweb-grid', 'staticProjects');
}

function renderCertifications(items) {
  const grid = document.getElementById('cert-list');
  if (!items || items.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;">No certifications added yet.</p>';
    return;
  }
  grid.innerHTML = items.map(item => `
    <div class="cert-card" data-id="${item.id}">
      <button class="card-edit-btn edit-only" onclick="openEditModal('certifications','${item.id}')">✏︎ Edit</button>
      <div class="cert-icon">${item.icon || '🏆'}</div>
      <div class="cert-info">
        <div class="cert-name">${escHtml(item.name)}</div>
        <div class="cert-issuer">${escHtml(item.issuer)}</div>
        <div class="cert-year">${escHtml(item.year)}</div>
      </div>
    </div>
  `).join('');
  applyEditMode();
}

// Populate plain contenteditable fields
function renderTextFields(data) {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    if (data[key] !== undefined && !el.tagName.match(/^A$/i)) {
      el.textContent = data[key];
    }
  });
  // Social links href
  ['link-github','link-linkedin','link-twitter'].forEach(k => {
    const el = document.getElementById(k);
    if (el && data[k]) el.href = data[k];
    const inp = document.getElementById('input-' + k);
    if (inp && data[k]) inp.value = data[k];
  });
  // Footer
  document.getElementById('footer-name').textContent = data['full-name'] || 'Immanuel Mahusay';
  document.getElementById('footer-year').textContent = new Date().getFullYear();
  document.getElementById('page-title').textContent = `Portfolio – ${data['full-name'] || 'Immanuel Mahusay'}`;
}

// ══════════════════════════════════════
//  INITIAL RENDER
// ══════════════════════════════════════
function renderAll() {
  const data = getData();
  renderTextFields(data);
  renderSkills(data.skillCategories || []);
  renderLanguages(data.languages || []);
  renderExperience(data.experience || []);
  renderEducation(data.education || []);
  renderWebSystems(data.webSystems || []);
  renderStaticProjects(data.staticProjects || []);
  renderCertifications(data.certifications || []);
  renderAISkillsSidebar(data.aiSkills || []);
  renderAISection(data.aiTools || []);

  // Avatar
  const savedAvatar = localStorage.getItem('portfolio_avatar');
  const imgEL = document.getElementById('avatar-img');
  
  if (data['use-profile-pic'] !== false) {
    imgEL.src = savedAvatar || 'profile.JPG';
  } else {
    imgEL.src = 'avatar.png'; // default generic avatar
  }

  // Set up visibility
  initVisibilityToggles();
  applyVisibility();
}

// ══════════════════════════════════════
//  EDIT MODE
// ══════════════════════════════════════
function applyEditMode() {
  if (isEditMode) {
    document.querySelectorAll('[contenteditable]').forEach(el => el.setAttribute('contenteditable', 'true'));
    document.querySelectorAll('.edit-only').forEach(el => el.classList.remove('hidden'));
    document.getElementById('avatar-label').classList.add('clickable');
  } else {
    document.querySelectorAll('[contenteditable]').forEach(el => el.setAttribute('contenteditable', 'false'));
    document.querySelectorAll('.edit-only').forEach(el => el.classList.add('hidden'));
    document.getElementById('avatar-label').classList.remove('clickable');
  }
}

function enterEditMode() {
  isEditMode = true;
  document.body.classList.add('edit-active');
  document.getElementById('edit-toolbar').classList.remove('hidden');
  document.getElementById('edit-trigger').style.display = 'none';
  applyEditMode();
  renderSkills(getData().skillCategories || []);
  showToast('✏️ Edit mode enabled – click any field to edit');
}

function exitEditMode() {
  isEditMode = false;
  document.body.classList.remove('edit-active');
  document.getElementById('edit-toolbar').classList.add('hidden');
  document.getElementById('edit-trigger').style.display = '';
  applyEditMode();
  renderSkills(getData().skillCategories || []);
  applyVisibility();
}

// ══════════════════════════════════════
//  SAVE
// ══════════════════════════════════════
function collectAndSave() {
  const data = getData();

  // Collect contenteditable fields
  document.querySelectorAll('[data-key][contenteditable]').forEach(el => {
    data[el.dataset.key] = el.textContent.trim();
  });

  // Collect social URLs from inputs
  ['link-github','link-linkedin','link-twitter'].forEach(k => {
    const inp = document.getElementById('input-' + k);
    if (inp) data[k] = inp.value.trim();
    const anchor = document.getElementById(k);
    if (anchor && inp) anchor.href = inp.value.trim();
  });

  // (Skill collection happens iteratively now via live editing)

  // Collect languages
  const langInput = document.getElementById('lang-input');
  if (langInput) {
    data.languages = langInput.value.split('\n').map(l => {
      const parts = l.split('–').map(p => p.trim());
      return { name: parts[0] || l.trim(), level: parts[1] || '' };
    }).filter(l => l.name);
    renderLanguages(data.languages);
  }

  // Update footer & page title
  document.getElementById('footer-name').textContent = data['full-name'] || '';
  document.getElementById('page-title').textContent = `Portfolio – ${data['full-name'] || ''}`;

  saveData(data);
  showToast('✅ Changes saved successfully!');
}

// ══════════════════════════════════════
//  ITEM MODAL – ADD / EDIT
// ══════════════════════════════════════

const MODAL_SCHEMAS = {
  experience: [
    { key: 'role',    label: 'Job Title / Role',  type: 'text' },
    { key: 'company', label: 'Company & Location', type: 'text' },
    { key: 'period',  label: 'Period',             type: 'text', placeholder: 'e.g. Jan 2020 – Present' },
    { key: 'bullets', label: 'Bullet Points (one per line)', type: 'textarea' }
  ],
  education: [
    { key: 'role',    label: 'Degree / Course',  type: 'text' },
    { key: 'company', label: 'School / Institution', type: 'text' },
    { key: 'period',  label: 'Year / Period',    type: 'text' },
    { key: 'bullets', label: 'Additional Notes (one per line)', type: 'textarea' }
  ],
  projects: [
    { key: 'title', label: 'Project Title', type: 'text' },
    { key: 'desc',  label: 'Description',   type: 'textarea' },
    { key: 'tags',  label: 'Tags (comma-separated)', type: 'text', placeholder: 'Vue.js, Node.js' },
    { key: 'link',  label: 'Project URL (optional)', type: 'text', placeholder: 'https://' }
  ],
  webSystems: [
    { key: 'title', label: 'Project Title', type: 'text' },
    { key: 'desc',  label: 'Description',   type: 'textarea' },
    { key: 'tags',  label: 'Tags (comma-separated)', type: 'text', placeholder: 'Vue.js, Node.js' },
    { key: 'link',  label: 'Live URL (optional)', type: 'text', placeholder: 'https://' }
  ],
  staticProjects: [
    { key: 'title', label: 'Website Title', type: 'text' },
    { key: 'desc',  label: 'Description',   type: 'textarea' },
    { key: 'tags',  label: 'Tags (comma-separated)', type: 'text', placeholder: 'HTML, CSS, Bootstrap' },
    { key: 'link',  label: 'Live URL (optional)', type: 'text', placeholder: 'https://' }
  ],
  certifications: [
    { key: 'icon',   label: 'Icon (emoji)', type: 'text', placeholder: '🏆' },
    { key: 'name',   label: 'Certification Name', type: 'text' },
    { key: 'issuer', label: 'Issuing Organization', type: 'text' },
    { key: 'year',   label: 'Year', type: 'text', placeholder: '2024' }
  ]
};

function openAddModal(type) {
  editingItem = { type, id: null };
  const schema = MODAL_SCHEMAS[type];
  document.getElementById('item-modal-title').textContent = `Add ${capitalize(type === 'certifications' ? 'Certification' : type.replace(/s$/, ''))}`;
  buildModalForm(schema, {});
  document.getElementById('item-modal-delete').classList.add('hidden');
  document.getElementById('item-modal-overlay').classList.remove('hidden');
}

function openEditModal(type, id) {
  const data = getData();
  const items = data[type] || [];
  const item = items.find(i => i.id === id);
  if (!item) return;
  editingItem = { type, id };
  const schema = MODAL_SCHEMAS[type];
  document.getElementById('item-modal-title').textContent = `Edit ${capitalize(type === 'certifications' ? 'Certification' : type.replace(/s$/, ''))}`;
  buildModalForm(schema, item);
  document.getElementById('item-modal-delete').classList.remove('hidden');
  document.getElementById('item-modal-overlay').classList.remove('hidden');
}

function buildModalForm(schema, values) {
  const body = document.getElementById('item-modal-body');
  body.innerHTML = schema.map(field => {
    let val = values[field.key] || '';
    if (Array.isArray(val)) val = val.join('\n');
    const tag = field.type === 'textarea' ? 'textarea' : 'input';
    const attrs = field.type !== 'textarea' ? `type="text"` : '';
    const phAttr = field.placeholder ? `placeholder="${escHtml(field.placeholder)}"` : '';
    return `<div class="modal-field">
      <label>${escHtml(field.label)}</label>
      <${tag} id="mf-${field.key}" ${attrs} ${phAttr}>${field.type === 'textarea' ? escHtml(val) : ''}</${tag}>
      ${field.type !== 'textarea' ? `` : ''}
    </div>`;
  }).join('');
  // Set values for inputs separately
  schema.forEach(field => {
    const el = document.getElementById('mf-' + field.key);
    if (el && field.type !== 'textarea') {
      let val = values[field.key] || '';
      if (Array.isArray(val)) val = val.join(', ');
      el.value = val;
    }
  });
}

function saveModalItem() {
  if (!editingItem) return;
  const { type, id } = editingItem;
  const schema = MODAL_SCHEMAS[type];
  const data = getData();
  const items = data[type] || [];

  // Build new object
  const newObj = { id: id || `${type.slice(0,3)}_${Date.now()}` };
  schema.forEach(field => {
    const el = document.getElementById('mf-' + field.key);
    if (!el) return;
    if (field.key === 'bullets') {
      newObj[field.key] = el.value.split('\n').map(s => s.trim()).filter(Boolean);
    } else if (field.key === 'tags') {
      newObj[field.key] = el.value.split(',').map(s => s.trim()).filter(Boolean);
    } else {
      newObj[field.key] = el.value.trim();
    }
  });

  if (id) {
    const idx = items.findIndex(i => i.id === id);
    if (idx >= 0) items[idx] = newObj;
  } else {
    items.push(newObj);
  }
  data[type] = items;
  saveData(data);

  // Re-render the right section
  const re = { experience: renderExperience, education: renderEducation, projects: renderProjects, webSystems: renderWebSystems, staticProjects: renderStaticProjects, certifications: renderCertifications };
  re[type](items);

  closeItemModal();
  showToast('✅ Item saved!');
}

function deleteModalItem() {
  if (!editingItem || !editingItem.id) return;
  const { type, id } = editingItem;
  const data = getData();
  data[type] = (data[type] || []).filter(i => i.id !== id);
  saveData(data);

  const re = { experience: renderExperience, education: renderEducation, projects: renderProjects, webSystems: renderWebSystems, staticProjects: renderStaticProjects, certifications: renderCertifications };
  re[type](data[type]);

  closeItemModal();
  showToast('🗑 Item deleted');
}

function closeItemModal() {
  document.getElementById('item-modal-overlay').classList.add('hidden');
  editingItem = null;
}

// ══════════════════════════════════════
//  LOGIN
// ══════════════════════════════════════
function openLoginModal() {
  document.getElementById('login-overlay').classList.remove('hidden');
  document.getElementById('login-username').focus();
}

function closeLoginModal() {
  document.getElementById('login-overlay').classList.add('hidden');
  document.getElementById('login-error').classList.add('hidden');
  document.getElementById('login-username').value = '';
  document.getElementById('login-password').value = '';
}

// ══════════════════════════════════════
//  TOAST
// ══════════════════════════════════════
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.remove('hidden');
  requestAnimationFrame(() => { requestAnimationFrame(() => toast.classList.add('show')); });
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.classList.add('hidden'), 400);
  }, 3000);
}

// ══════════════════════════════════════
//  UTILITIES
// ══════════════════════════════════════
function escHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function genId() {
  return Math.random().toString(36).slice(2, 9);
}

// ══════════════════════════════════════
//  INIT
// ══════════════════════════════════════
// ══════════════════════════════════════
//  PDF / PRINT
// ══════════════════════════════════════
function triggerPrint() {
  showToast('🖨️ Opening print dialog for PDF…');
  setTimeout(() => window.print(), 400);
}

document.addEventListener('DOMContentLoaded', () => {
  renderAll();

  // ── Mobile sidebar toggle ──
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const hamburger = document.getElementById('hamburger-btn');

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });
  overlay.addEventListener('click', closeSidebar);

  // Close sidebar on link clicks within it (mobile UX)
  sidebar.querySelectorAll('a').forEach(a => a.addEventListener('click', closeSidebar));

  // ── Update mobile name display ──
  function updateMobileName() {
    const n = document.getElementById('full-name');
    const mob = document.getElementById('mobile-name');
    if (n && mob) mob.textContent = n.textContent;
  }
  updateMobileName();
  const nameObs = new MutationObserver(updateMobileName);
  const nameEl = document.getElementById('full-name');
  if (nameEl) nameObs.observe(nameEl, { characterData: true, childList: true, subtree: true });

  // ── PDF Buttons ──
  document.getElementById('pdf-fab').addEventListener('click', triggerPrint);
  document.getElementById('sidebar-pdf-btn').addEventListener('click', triggerPrint);
  document.getElementById('mobile-pdf-btn').addEventListener('click', triggerPrint);

  // ── Edit trigger ──
  document.getElementById('edit-trigger').addEventListener('click', openLoginModal);

  // ── Login form ──
  document.getElementById('login-form').addEventListener('submit', e => {
    e.preventDefault();
    const user = document.getElementById('login-username').value.trim();
    const pass = document.getElementById('login-password').value;
    if (user === AUTH.username && pass === AUTH.password) {
      closeLoginModal();
      enterEditMode();
    } else {
      document.getElementById('login-error').classList.remove('hidden');
      document.getElementById('login-password').value = '';
      document.getElementById('login-password').focus();
    }
  });

  // ── Close login modal ──
  document.getElementById('close-login').addEventListener('click', closeLoginModal);
  document.getElementById('login-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('login-overlay')) closeLoginModal();
  });

  // ── Save / Logout ──
  document.getElementById('save-btn').addEventListener('click', collectAndSave);
  document.getElementById('logout-btn').addEventListener('click', () => {
    collectAndSave();
    exitEditMode();
    showToast('🔒 Logged out. Changes saved.');
  });

  // ── Add buttons ──
  document.getElementById('add-experience-btn').addEventListener('click', () => openAddModal('experience'));
  document.getElementById('add-education-btn').addEventListener('click', () => openAddModal('education'));
  document.getElementById('add-websystem-btn').addEventListener('click', () => openAddModal('webSystems'));
  document.getElementById('add-staticweb-btn').addEventListener('click', () => openAddModal('staticProjects'));
  document.getElementById('add-cert-btn').addEventListener('click', () => openAddModal('certifications'));

  // ── Item modal ──
  document.getElementById('item-modal-save').addEventListener('click', saveModalItem);
  document.getElementById('item-modal-delete').addEventListener('click', deleteModalItem);
  document.getElementById('close-item-modal').addEventListener('click', closeItemModal);
  document.getElementById('item-modal-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('item-modal-overlay')) closeItemModal();
  });

  // ── Avatar upload ──
  document.getElementById('avatar-input').addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      const src = ev.target.result;
      document.getElementById('avatar-img').src = src;
      localStorage.setItem('portfolio_avatar', src);
      showToast('📷 Photo updated!');
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  });

  // ── Avatar toggle visibility ──
  document.getElementById('toggle-avatar-btn').addEventListener('click', () => {
    const data = getData();
    data['use-profile-pic'] = !(data['use-profile-pic'] !== false);
    saveData(data);
    
    // update instantly
    const savedAvatar = localStorage.getItem('portfolio_avatar');
    const imgEL = document.getElementById('avatar-img');
    if (data['use-profile-pic']) {
      imgEL.src = savedAvatar || 'profile.JPG';
      showToast('👁️ Real photo is visible.');
    } else {
      imgEL.src = 'avatar.png';
      showToast('🙈 Generic avatar is visible.');
    }
  });

  // ── Keyboard shortcuts ──
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 's' && isEditMode) {
      e.preventDefault();
      collectAndSave();
    }
    if (e.key === 'Escape') {
      closeLoginModal();
      closeItemModal();
    }
  });

  // ══════════════════════════════════════
  //  CHATGPT WIDGET LOGIC
  // ══════════════════════════════════════
  const chatFab = document.getElementById('chat-fab');
  const chatWindow = document.getElementById('chat-window');
  const closeChatBtn = document.getElementById('close-chat');
  const chatInput = document.getElementById('chat-input');
  const sendChatBtn = document.getElementById('send-chat');
  const chatMessages = document.getElementById('chat-messages');

  function toggleChat() {
    chatWindow.classList.toggle('hidden');
    if (!chatWindow.classList.contains('hidden')) {
      chatInput.focus();
    }
  }

  chatFab.addEventListener('click', toggleChat);
  closeChatBtn.addEventListener('click', () => chatWindow.classList.add('hidden'));

  function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender === 'user' ? 'user-message' : 'ai-message');
    msgDiv.textContent = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function showTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.classList.add('typing-indicator');
    indicator.id = 'typing-indicator';
    indicator.innerHTML = '<span></span><span></span><span></span>';
    chatMessages.appendChild(indicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function removeTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) indicator.remove();
  }

  async function handleSendChat() {
    const text = chatInput.value.trim();
    if (!text) return;
    
    addMessage(text, 'user');
    chatInput.value = '';
    
    showTypingIndicator();

    // ── NOTE: To use the real OpenAI API, replace the mock logic below with a fetch request ──
    /*
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_OPENAI_API_KEY' // IMPORTANT: Keep this secure!
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are Immanuel Mahusay\\'s AI assistant. Answer questions about his portfolio.' },
            { role: 'user', content: text }
          ]
        })
      });
      const data = await response.json();
      removeTypingIndicator();
      addMessage(data.choices[0].message.content, 'ai');
    } catch (err) {
      removeTypingIndicator();
      addMessage("Sorry, I'm having trouble connecting to my brain right now.", 'ai');
    }
    */

    // MOCK RESPONSE LOGIC (Fallback)
    setTimeout(() => {
      removeTypingIndicator();
      let response = "I'm a demo AI assistant! Immanuel is a Software Engineer experienced in Vue.js, PIXI.js, and AI automation. Would you like to know about his projects or work experience?";
      
      const lower = text.toLowerCase();
      if (lower.includes('project')) {
        response = "Immanuel has worked on several amazing projects like the LoanPro Management System, MCGI Hub, and various E-Commerce sites. You can find them in the Projects section!";
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('hire')) {
        response = "You can contact Immanuel at immanuel@qstrike.com or immanuelmahusay@mcgi.org. His phone number is +63 976 036 0023.";
      } else if (lower.includes('experience') || lower.includes('work')) {
        response = "He is currently a Software Engineer Lead at QuickStrike Innovation Phil., and a Front-End Developer at MCGI IT. He has over 10 years of overall experience.";
      } else if (lower.includes('skill') || lower.includes('tech')) {
        response = "His main skills include Vue.js, TypeScript, Node.js, PHP, MySQL, and AI automation tools like n8n and LLM integrations.";
      } else if (lower.includes('hi') || lower.includes('hello')) {
        response = "Hello there! How can I help you learn more about Immanuel's background and skills?";
      }

      addMessage(response, 'ai');
    }, 1000);
  }

  sendChatBtn.addEventListener('click', handleSendChat);
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSendChat();
  });

});
