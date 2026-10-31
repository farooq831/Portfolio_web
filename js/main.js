/* ==========================================================
   Portfolio behaviour: theme, navigation, projects, video modal
   Project data comes from projects.js (global PROJECTS array).
   ========================================================== */
(function () {
  'use strict';

  const root = document.documentElement;
  root.classList.remove('no-js');

  /* ---------- Small helpers ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const esc = (str) => String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage blocked */ } }
  };

  /* ---------- Hero typewriter ---------- */
  const typewriter = $('#typewriter-text');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (typewriter) {
    const phrases = ['Muhammad Farooq', 'an IT Graduate', 'a Full-Stack Developer'];
    if (reduceMotion) {
      typewriter.textContent = phrases[0];
    } else {
      let phraseIndex = 0;
      let characterIndex = 0;
      let deleting = false;
      const type = () => {
        const phrase = phrases[phraseIndex];
        characterIndex += deleting ? -1 : 1;
        typewriter.textContent = phrase.slice(0, characterIndex);
        let delay = deleting ? 45 : 85;
        if (!deleting && characterIndex === phrase.length) {
          deleting = true;
          delay = 1800;
        } else if (deleting && characterIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          delay = 400;
        }
        window.setTimeout(type, delay);
      };
      typewriter.textContent = '';
      window.setTimeout(type, 500);
    }
  }

  /* ---------- Theme toggle ---------- */
  const themeBtn = $('#theme-toggle');
  const setTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    themeBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    $('meta[name="theme-color"]').setAttribute('content', theme === 'dark' ? '#0b0b14' : '#f7f7fb');
  };
  setTheme(root.getAttribute('data-theme') || 'dark');
  themeBtn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
    store.set('theme', next);
  });

  /* ---------- Header + mobile menu ---------- */
  const header = $('.site-header');
  const navToggle = $('.nav-toggle');
  const navMenu = $('#nav-menu');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const closeMenu = () => {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open menu');
  };
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  navMenu.addEventListener('click', (e) => { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

  // Highlight the nav link of the section in view
  const navLinks = [...navMenu.querySelectorAll('a')];
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('main section[id]').forEach((s) => sectionObserver.observe(s));

  /* ---------- Scroll reveal ---------- */
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  const observeReveal = (els) => els.forEach((el) => revealObserver.observe(el));
  observeReveal(document.querySelectorAll('.reveal'));

  /* ---------- Placeholder image (drawn as SVG when a screenshot is missing) ---------- */
  const PALETTES = [['#7c5cff', '#22d3ee'], ['#f472b6', '#7c5cff'], ['#22d3ee', '#10b981'], ['#f59e0b', '#ef4444'], ['#6366f1', '#ec4899']];
  function placeholder(project, index) {
    const [c1, c2] = PALETTES[index % PALETTES.length];
    const initials = project.title.replace(/[^A-Za-z0-9 ]/g, '').split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
    const label = esc(project.title.length > 34 ? project.title.slice(0, 32) + '…' : project.title);
    const svg =
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">` +
      `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient>` +
      `<pattern id="p" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#fff" stroke-opacity=".08"/></pattern></defs>` +
      `<rect width="800" height="500" fill="url(#g)"/><rect width="800" height="500" fill="url(#p)"/>` +
      `<circle cx="680" cy="80" r="160" fill="#fff" fill-opacity=".08"/><circle cx="90" cy="460" r="120" fill="#000" fill-opacity=".08"/>` +
      `<text x="400" y="255" text-anchor="middle" font-family="Space Grotesk, Arial, sans-serif" font-size="120" font-weight="700" fill="#fff" fill-opacity=".95">${esc(initials)}</text>` +
      `<text x="400" y="330" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="30" fill="#fff" fill-opacity=".85">${label}</text>` +
      `</svg>`;
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }

  /* ---------- Projects ---------- */
  const data = (typeof PROJECTS !== 'undefined' ? PROJECTS : [])
    .map((p, i) => ({ ...p, _index: i }))
    .sort((a, b) => (b.featured === true) - (a.featured === true) || a._index - b._index);

  const grid = $('#projects-grid');
  const filtersEl = $('#filters');
  const searchEl = $('#project-search');
  const countEl = $('#results-count');
  const emptyEl = $('#empty-state');
  const statProjects = $('#stat-projects');
  if (statProjects) statProjects.textContent = data.length;

  const ICONS = {
    code: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 6-6 6 6 6M16 6l6 6-6 6"/></svg>',
    live: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true" class="fill"><path d="M7 4v16l13-8z"/></svg>'
  };
  const TECH_ICONS = {
    'HTML': 'html5', 'CSS': 'css3', 'JavaScript': 'javascript', 'TypeScript': 'typescript',
    'React': 'react', 'Vite': 'vitejs', 'Tailwind CSS': 'tailwindcss', 'Node.js': 'nodejs',
    'Express': 'express', 'PHP': 'php', 'Python': 'python', 'C++': 'cplusplus',
    'Flask': 'flask', 'MongoDB': 'mongodb', 'PostgreSQL': 'postgresql', 'MySQL': 'mysql',
    'Prisma': 'prisma', 'scikit-learn': 'scikitlearn', 'Bootstrap': 'bootstrap'
  };
  const techIcon = (tech) => {
    const slug = TECH_ICONS[tech];
    if (!slug) return '';
    const mark = tech.replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase();
    return `<span class="tech-mark" aria-hidden="true">${mark}</span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg" alt="" loading="lazy" onload="this.previousElementSibling.hidden=true" onerror="this.hidden=true" />`;
  };

  function cardHTML(p) {
    const img = p.image || `assets/images/${p.name}.png`;
    const tags = (p.tech || []).map((t) => `<li class="tag">${techIcon(t)}<span>${esc(t)}</span></li>`).join('');
    const live = p.live
      ? `<a class="btn btn-ghost btn-sm" href="${esc(p.live)}" target="_blank" rel="noopener">${ICONS.live}${esc(p.liveLabel || 'Live Demo')}</a>`
      : '';
    return `
      <article class="card project-card reveal" data-name="${esc(p.name)}">
        <div class="project-media">
          ${p.featured ? '<span class="badge-featured">★ Featured</span>' : ''}
          <img src="${esc(img)}" alt="Screenshot of ${esc(p.title)}" loading="lazy" width="800" height="500" />
          <button class="play-overlay" type="button" hidden aria-label="Play demo video of ${esc(p.title)}"><span>${ICONS.play}</span></button>
        </div>
        <div class="project-body">
          <p class="project-category">${esc(p.category)}</p>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.description)}</p>
          <ul class="project-tags" aria-label="Tech stack">${tags}</ul>
          <div class="project-actions">
            <a class="btn btn-primary btn-sm" href="${esc(p.repo)}" target="_blank" rel="noopener">${ICONS.code}View Code</a>
            ${live}
            <button class="btn btn-ghost btn-sm btn-video" type="button" hidden>${ICONS.play}Watch Demo</button>
          </div>
        </div>
      </article>`;
  }

  const featuredGrid = $('#featured-grid');
  if (featuredGrid) {
    featuredGrid.innerHTML = data.filter((p) => p.featured).slice(0, 4).map((p, i) => `
      <article class="card featured-card">
        <div class="featured-media">
          <img src="${esc(p.image || `assets/images/${p.name}.png`)}" alt="${esc(p.title)} preview" loading="lazy" width="800" height="500" />
        </div>
        <div class="featured-number">0${i + 1}</div>
        <p class="project-category">${esc(p.category)}</p>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.description)}</p>
        ${p.impact ? `<p class="project-impact"><span>Impact</span>${esc(p.impact)}</p>` : ''}
        <a class="btn btn-ghost btn-sm" href="${esc(p.repo)}" target="_blank" rel="noopener">Explore project ${ICONS.live}</a>
      </article>
    `).join('');
    featuredGrid.querySelectorAll('img').forEach((img, i) => {
      img.addEventListener('error', () => { img.src = placeholder(data.filter((p) => p.featured)[i], i); }, { once: true });
    });
  }

  // Render all cards once; filtering only toggles visibility.
  grid.innerHTML = data.map(cardHTML).join('');
  const cards = [...grid.children];

  cards.forEach((card, i) => {
    const p = data[i];

    // Missing screenshot → placeholder
    const img = $('img', card);
    img.addEventListener('error', () => { img.src = placeholder(p, i); }, { once: true });

    // Only reveal video buttons if the video file really exists
    const videoSrc = p.video || `assets/videos/${p.name}.mp4`;
    if (p.video === false) return;
    const probe = document.createElement('video');
    probe.preload = 'metadata';
    probe.muted = true;
    probe.addEventListener('loadedmetadata', () => {
      $('.btn-video', card).hidden = false;
      $('.play-overlay', card).hidden = false;
      card.dataset.video = videoSrc;
      probe.removeAttribute('src');
      probe.load();
    }, { once: true });
    probe.src = videoSrc;
  });
  observeReveal(cards);

  /* ---------- Project card tilt ---------- */
  if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    cards.forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width;
        const y = (event.clientY - bounds.top) / bounds.height;
        card.style.setProperty('--tilt-x', `${(0.5 - y) * 7}deg`);
        card.style.setProperty('--tilt-y', `${(x - 0.5) * 7}deg`);
      });
      card.addEventListener('pointerleave', () => {
        card.style.removeProperty('--tilt-x');
        card.style.removeProperty('--tilt-y');
      });
    });
  }

  // Filters
  const categories = ['All', ...new Set(data.map((p) => p.category))];
  let activeCategory = 'All';
  filtersEl.innerHTML = categories.map((c) => {
    const n = c === 'All' ? data.length : data.filter((p) => p.category === c).length;
    return `<button class="filter-btn" type="button" data-category="${esc(c)}" aria-pressed="${c === 'All'}">${esc(c)}<span class="count">${n}</span></button>`;
  }).join('');

  filtersEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    activeCategory = btn.dataset.category;
    filtersEl.querySelectorAll('.filter-btn').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    applyFilters();
  });

  let searchTimer;
  searchEl.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(applyFilters, 120);
  });

  function applyFilters() {
    const q = searchEl.value.trim().toLowerCase();
    let shown = 0;
    cards.forEach((card, i) => {
      const p = data[i];
      const haystack = [p.title, p.name, p.description, p.category, ...(p.tech || [])].join(' ').toLowerCase();
      const visible = (activeCategory === 'All' || p.category === activeCategory) && (!q || haystack.includes(q));
      card.hidden = !visible;
      if (visible) {
        shown++;
        card.classList.add('is-visible');
      }
    });
    countEl.textContent = `Showing ${shown} of ${data.length} projects`;
    emptyEl.hidden = shown !== 0;
  }
  applyFilters();
  cards.forEach((c) => c.classList.remove('is-visible'));
  observeReveal(cards);

  /* ---------- Video modal ---------- */
  const modal = $('#video-modal');
  const player = $('#video-player');
  const modalTitle = $('#video-modal-title');
  let lastFocus = null;

  function openVideo(card) {
    const p = data[cards.indexOf(card)];
    lastFocus = document.activeElement;
    modalTitle.textContent = `${p.title}: demo`;
    player.src = card.dataset.video;
    player.poster = $('img', card).src;
    if (typeof modal.showModal === 'function') modal.showModal();
    else modal.setAttribute('open', '');
    player.play().catch(() => { /* autoplay blocked: user can press play */ });
  }
  function closeVideo() {
    player.pause();
    player.removeAttribute('src');
    player.load();
    if (modal.open) modal.close();
    if (lastFocus) lastFocus.focus();
  }

  grid.addEventListener('click', (e) => {
    const trigger = e.target.closest('.btn-video, .play-overlay');
    if (trigger) openVideo(trigger.closest('.project-card'));
  });
  $('#video-modal-close').addEventListener('click', closeVideo);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeVideo(); });
  modal.addEventListener('cancel', (e) => { e.preventDefault(); closeVideo(); });

  /* ---------- Contact form (opens WhatsApp) ---------- */
  const form = $('#contact-form');
  const note = $('#form-note');
  const whatsappNumber = '923438805832';
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;
    form.querySelectorAll('input, textarea').forEach((field) => {
      const valid = field.checkValidity() && field.value.trim() !== '';
      field.closest('.field').classList.toggle('invalid', !valid);
      if (!valid && ok) { field.focus(); ok = false; }
    });
    if (!ok) { note.textContent = 'Please fill in all fields with a valid email.'; return; }

    const name = $('#cf-name').value.trim();
    const message = encodeURIComponent(`Hello Muhammad, I am ${name}.\n\n${$('#cf-message').value.trim()}\n\nMy email: ${$('#cf-email').value.trim()}`);
    const destination = whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${message}` : `https://wa.me/?text=${message}`;
    window.open(destination, '_blank', 'noopener');
    note.textContent = whatsappNumber
      ? 'Opening WhatsApp with your message ready to send…'
      : 'Opening WhatsApp. Add your WhatsApp number in js/main.js for direct chat routing.';
  });

  /* ---------- Footer year ---------- */
  $('#year').textContent = new Date().getFullYear();
})();
