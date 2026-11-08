/* =========================================================
   Bekzod — Portfolio · interactions
   ========================================================= */
(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------
     0. I18N — UZ / EN / RU
  --------------------------------------------------------- */
  const I18N = {
    uz: {
      'meta.title': 'Bekzod — Frontend va Bot dasturchisi',
      'meta.desc': 'Bekzod — 17 yoshli dasturchi. Frontend, Python va JavaScript. Stadion bron qilish Telegram boti muallifi.',
      'loader.label': 'YUKLANMOQDA',
      'nav.about': 'Haqimda', 'nav.skills': 'Koʻnikmalar', 'nav.work': 'Loyihalar',
      'nav.road': 'Yoʻlim', 'nav.contact': 'Aloqa',
      'hero.tag': '17 yosh · 4 yillik tajriba · Oʻzbekiston',
      'hero.role': 'DASTURCHI',
      'hero.lead': 'Men <b>frontend</b>, <b>Python</b> va <b>JavaScript</b> bilan ishlayman. Gʻoyalarni tez, chiroyli va ishlaydigan mahsulotga aylantiraman.',
      'hero.cta1': 'Loyihalarni koʻrish',
      'hero.cta2': 'Bogʻlanish',
      'hero.status': 'Hozir: yangi loyihalar uchun ochiq',
      'about.kicker': '01 — Haqimda',
      'about.title': 'Kod — bu mening <em>super kuchim</em>',
      'about.p1': 'Men <b>Bekzod</b>, 17 yoshdaman va 4 yildan beri dasturlash bilan shugʻullanaman. Frontend, Python va JavaScript — mening asosiy qurollarim.',
      'about.p2': 'Mening eng katta loyiham — <b>stadion bron qilish Telegram boti</b>. U bir yildan ortiq vaqtdan beri toʻxtovsiz ishlab kelmoqda va real foydalanuvchilarga xizmat qilmoqda.',
      'about.p3': 'Men tez oʻrganaman, detallarga eʼtibor beraman va gʻoyani <em>ishlaydigan mahsulotga</em> aylantirishni yaxshi koʻraman.',
      'stat.age': 'Yoshim', 'stat.exp': 'Yillik tajriba', 'stat.bot': 'Yil ishlab kelgan bot', 'stat.tech': 'Texnologiya',
      'skills.kicker': '02 — Koʻnikmalar',
      'skills.title': 'Nima bilan <em>ishlayman</em>',
      'skill.frontend': 'HTML, CSS, JavaScript va zamonaviy animatsiyalar bilan interfeyslar.',
      'skill.python': 'Telegram botlar, avtomatlashtirish va backend logikasi.',
      'skill.js': 'Interaktiv logika, API integratsiya va React ekosistemasi.',
      'chip.ui': 'UI Animatsiya', 'chip.responsive': 'Responsive dizayn',
      'work.kicker': '03 — Loyihalar',
      'work.title': 'Men yaratgan <em>narsalar</em>',
      'proj.tag': 'Asosiy loyiha · Python · Telegram',
      'proj.title': 'Stadion bron qilish Telegram boti',
      'proj.desc': 'Foydalanuvchilar stadionni tanlaydi, vaqtni band qiladi va bronni bir necha tugma bilan tasdiqlaydi. Bir yildan ortiq vaqt davomida real foydalanuvchilar bilan uzluksiz ishlab kelmoqda.',
      'proj.platform': '<b>Platforma:</b> Telegram',
      'proj.lang': '<b>Til:</b> Python',
      'proj.status': '<b>Holat:</b> Faol (production)',
      'proj.live': '1+ yildan beri ishlayapti',
      'card1.title': 'Portfolio sayti',
      'card1.desc': 'Animatsiyalarga boy, custom cursor va canvas effektli shaxsiy sayt.',
      'card2.title': 'Bron tizimi logikasi',
      'card2.desc': 'Band vaqtlarni tekshirish, dublikat bronlarni oldini olish algoritmi.',
      'card3.title': 'Interaktiv UI komponentlar',
      'card3.desc': 'Mikro-animatsiyalar, scroll-reveal va 3D tilt kartalar toʻplami.',
      'road.kicker': '04 — Yoʻlim',
      'road.title': '4 yillik <em>sayohat</em>',
      'tl1.year': '13 yosh', 'tl1.title': 'Birinchi qadam',
      'tl1.desc': 'Frontend asoslari: HTML va CSS bilan tanishdim, birinchi sahifalarimni yasadim.',
      'tl2.year': '14–15 yosh', 'tl2.title': 'JavaScript va Python',
      'tl2.desc': 'Interaktivlik va backend logikasi. Birinchi avtomatlashtirish skriptlarim.',
      'tl3.year': '16 yosh', 'tl3.title': 'Telegram botlar',
      'tl3.desc': 'Python yordamida botlar yozishni boshladim. Stadium bron botining gʻoyasi paydo boʻldi.',
      'tl4.year': '17 yosh', 'tl4.title': 'Real mahsulot',
      'tl4.desc': 'Stadium bron boti 1 yildan ortiq vaqt davomida faol ishlayapti. Yangi loyihalar sari.',
      'contact.kicker': '05 — Aloqa',
      'contact.title': 'Birgalikda <em>nimadir</em><br /> yarataylikmi?',
      'contact.sub': 'Loyihangiz bormi yoki shunchaki salomlashmoqchimisiz? Yozing — javob beraman.',
      'contact.bot': 'Bron bot: @Nystadion_bot',
      'footer.mid': 'Uzbekiston · HTML CSS JS Python',
      'footer.right': 'Handcrafted with <span class="heart">♥</span>',
      'code.comment': '# 1+ yildan beri ishlayapti 🚀'
    },
    en: {
      'meta.title': 'Bekzod — Frontend & Bot Developer',
      'meta.desc': 'Bekzod — a 17-year-old developer. Frontend, Python and JavaScript. Author of a stadium booking Telegram bot.',
      'loader.label': 'LOADING',
      'nav.about': 'About', 'nav.skills': 'Skills', 'nav.work': 'Projects',
      'nav.road': 'Journey', 'nav.contact': 'Contact',
      'hero.tag': '17 years old · 4 years of experience · Uzbekistan',
      'hero.role': 'DEVELOPER',
      'hero.lead': 'I work with <b>frontend</b>, <b>Python</b> and <b>JavaScript</b>. I turn ideas into fast, beautiful and working products.',
      'hero.cta1': 'View projects',
      'hero.cta2': 'Get in touch',
      'hero.status': 'Now: open to new projects',
      'about.kicker': '01 — About',
      'about.title': 'Code is my <em>superpower</em>',
      'about.p1': 'I am <b>Bekzod</b>, 17 years old, and I have been coding for 4 years. Frontend, Python and JavaScript are my main tools.',
      'about.p2': 'My biggest project is a <b>stadium booking Telegram bot</b>. It has been running non-stop for over a year, serving real users.',
      'about.p3': 'I learn fast, care about details, and love turning an idea into a <em>working product</em>.',
      'stat.age': 'My age', 'stat.exp': 'Years of experience', 'stat.bot': 'Year the bot has run', 'stat.tech': 'Technologies',
      'skills.kicker': '02 — Skills',
      'skills.title': 'What I <em>work with</em>',
      'skill.frontend': 'Interfaces built with HTML, CSS, JavaScript and modern animations.',
      'skill.python': 'Telegram bots, automation and backend logic.',
      'skill.js': 'Interactive logic, API integration and the React ecosystem.',
      'chip.ui': 'UI Animation', 'chip.responsive': 'Responsive design',
      'work.kicker': '03 — Projects',
      'work.title': 'Things I have <em>built</em>',
      'proj.tag': 'Main project · Python · Telegram',
      'proj.title': 'Stadium booking Telegram bot',
      'proj.desc': 'Users pick a stadium, reserve a time slot and confirm the booking with a few taps. It has been running continuously with real users for over a year.',
      'proj.platform': '<b>Platform:</b> Telegram',
      'proj.lang': '<b>Language:</b> Python',
      'proj.status': '<b>Status:</b> Live (production)',
      'proj.live': 'Running for 1+ year',
      'card1.title': 'Portfolio website',
      'card1.desc': 'A personal site rich in animation, with a custom cursor and canvas effects.',
      'card2.title': 'Booking system logic',
      'card2.desc': 'An algorithm that checks busy time slots and prevents duplicate bookings.',
      'card3.title': 'Interactive UI components',
      'card3.desc': 'A set of micro-animations, scroll-reveal and 3D tilt cards.',
      'road.kicker': '04 — Journey',
      'road.title': 'A 4-year <em>journey</em>',
      'tl1.year': 'Age 13', 'tl1.title': 'The first step',
      'tl1.desc': 'Frontend basics: I got to know HTML and CSS and built my first pages.',
      'tl2.year': 'Age 14–15', 'tl2.title': 'JavaScript and Python',
      'tl2.desc': 'Interactivity and backend logic. My first automation scripts.',
      'tl3.year': 'Age 16', 'tl3.title': 'Telegram bots',
      'tl3.desc': 'I started writing bots with Python. The idea for the stadium booking bot was born.',
      'tl4.year': 'Age 17', 'tl4.title': 'A real product',
      'tl4.desc': 'The stadium booking bot has been live for over a year. On to new projects.',
      'contact.kicker': '05 — Contact',
      'contact.title': 'Shall we build <em>something</em><br /> together?',
      'contact.sub': 'Got a project or just want to say hi? Write to me — I will reply.',
      'contact.bot': 'Booking bot: @Nystadion_bot',
      'footer.mid': 'Uzbekistan · HTML CSS JS Python',
      'footer.right': 'Handcrafted with <span class="heart">♥</span>',
      'code.comment': '# running for 1+ year 🚀'
    },
    ru: {
      'meta.title': 'Bekzod — Frontend и Bot разработчик',
      'meta.desc': 'Bekzod — разработчик, 17 лет. Frontend, Python и JavaScript. Автор Telegram-бота для бронирования стадионов.',
      'loader.label': 'ЗАГРУЗКА',
      'nav.about': 'Обо мне', 'nav.skills': 'Навыки', 'nav.work': 'Проекты',
      'nav.road': 'Путь', 'nav.contact': 'Контакты',
      'hero.tag': '17 лет · опыт 4 года · Узбекистан',
      'hero.role': 'РАЗРАБОТЧИК',
      'hero.lead': 'Я работаю с <b>frontend</b>, <b>Python</b> и <b>JavaScript</b>. Превращаю идеи в быстрые, красивые и работающие продукты.',
      'hero.cta1': 'Смотреть проекты',
      'hero.cta2': 'Связаться',
      'hero.status': 'Сейчас: открыт для новых проектов',
      'about.kicker': '01 — Обо мне',
      'about.title': 'Код — моя <em>суперсила</em>',
      'about.p1': 'Я <b>Bekzod</b>, мне 17 лет, и я программирую уже 4 года. Frontend, Python и JavaScript — мои главные инструменты.',
      'about.p2': 'Мой самый большой проект — <b>Telegram-бот для бронирования стадионов</b>. Он непрерывно работает больше года и обслуживает реальных пользователей.',
      'about.p3': 'Я быстро учусь, внимателен к деталям и люблю превращать идею в <em>работающий продукт</em>.',
      'stat.age': 'Возраст', 'stat.exp': 'Лет опыта', 'stat.bot': 'Год работы бота', 'stat.tech': 'Технологии',
      'skills.kicker': '02 — Навыки',
      'skills.title': 'С чем я <em>работаю</em>',
      'skill.frontend': 'Интерфейсы на HTML, CSS, JavaScript и современных анимациях.',
      'skill.python': 'Telegram-боты, автоматизация и backend-логика.',
      'skill.js': 'Интерактивная логика, интеграция API и экосистема React.',
      'chip.ui': 'UI-анимация', 'chip.responsive': 'Адаптивный дизайн',
      'work.kicker': '03 — Проекты',
      'work.title': 'То, что я <em>создал</em>',
      'proj.tag': 'Главный проект · Python · Telegram',
      'proj.title': 'Telegram-бот для бронирования стадионов',
      'proj.desc': 'Пользователи выбирают стадион, бронируют время и подтверждают бронь в пару нажатий. Больше года работает непрерывно с реальными пользователями.',
      'proj.platform': '<b>Платформа:</b> Telegram',
      'proj.lang': '<b>Язык:</b> Python',
      'proj.status': '<b>Статус:</b> Активен (production)',
      'proj.live': 'Работает более 1 года',
      'card1.title': 'Сайт-портфолио',
      'card1.desc': 'Личный сайт с богатой анимацией, кастомным курсором и canvas-эффектами.',
      'card2.title': 'Логика системы брони',
      'card2.desc': 'Алгоритм проверки занятых слотов и защиты от дублирующихся броней.',
      'card3.title': 'Интерактивные UI-компоненты',
      'card3.desc': 'Набор микроанимаций, scroll-reveal и 3D-карточек с наклоном.',
      'road.kicker': '04 — Путь',
      'road.title': 'Путь длиной <em>4 года</em>',
      'tl1.year': '13 лет', 'tl1.title': 'Первый шаг',
      'tl1.desc': 'Основы frontend: познакомился с HTML и CSS, сделал первые страницы.',
      'tl2.year': '14–15 лет', 'tl2.title': 'JavaScript и Python',
      'tl2.desc': 'Интерактивность и backend-логика. Мои первые скрипты автоматизации.',
      'tl3.year': '16 лет', 'tl3.title': 'Telegram-боты',
      'tl3.desc': 'Начал писать ботов на Python. Появилась идея бота для бронирования стадионов.',
      'tl4.year': '17 лет', 'tl4.title': 'Реальный продукт',
      'tl4.desc': 'Бот бронирования работает больше года. Впереди новые проекты.',
      'contact.kicker': '05 — Контакты',
      'contact.title': 'Давай создадим <em>что-то</em><br /> вместе?',
      'contact.sub': 'Есть проект или просто хочешь поздороваться? Напиши — отвечу.',
      'contact.bot': 'Бот брони: @Nystadion_bot',
      'footer.mid': 'Узбекистан · HTML CSS JS Python',
      'footer.right': 'Сделано с <span class="heart">♥</span>',
      'code.comment': '# работает более 1 года 🚀'
    }
  };

  const LOCALES = { uz: 'uz-UZ', en: 'en-GB', ru: 'ru-RU' };
  const SUPPORTED = ['uz', 'en', 'ru'];
  const state = { lang: 'uz' };

  function detectLang () {
    const saved = localStorage.getItem('portfolio-lang');
    if (saved && SUPPORTED.includes(saved)) return saved;
    const nav = (navigator.language || 'uz').slice(0, 2).toLowerCase();
    return SUPPORTED.includes(nav) ? nav : 'uz';
  }

  function t (key) {
    return (I18N[state.lang] && I18N[state.lang][key]) || I18N.uz[key] || '';
  }

  function applyLang (lang) {
    if (!SUPPORTED.includes(lang)) lang = 'uz';
    state.lang = lang;
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;

    document.title = t('meta.title');
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t('meta.desc'));

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const val = t(el.dataset.i18n);
      if (val) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-label]').forEach(el => {
      const val = t(el.dataset.i18nLabel);
      if (val) el.setAttribute('data-label', val);
    });

    document.querySelectorAll('#lang button').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.lang === lang);
    });

    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  (function langUI () {
    const box = document.getElementById('lang');
    if (box) {
      box.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-lang]');
        if (btn) applyLang(btn.dataset.lang);
      });
    }
    applyLang(detectLang());
  })();

  /* ---------------------------------------------------------
     1. PRELOADER
  --------------------------------------------------------- */
  (function preloader () {
    const loader = document.getElementById('loader');
    const num    = document.getElementById('loaderNum');
    const bar    = document.getElementById('loaderBar');
    let value = 0;

    const tick = () => {
      value += Math.random() * 12 + 4;
      if (value >= 100) value = 100;
      num.textContent = String(Math.floor(value)).padStart(2, '0');
      bar.style.width = value + '%';
      if (value < 100) {
        setTimeout(tick, reduceMotion ? 0 : 90);
      } else {
        setTimeout(() => {
          loader.classList.add('is-done');
          document.body.classList.add('loaded');
        }, 280);
      }
    };
    tick();
  })();

  /* ---------------------------------------------------------
     2. CUSTOM CURSOR
  --------------------------------------------------------- */
  (function cursor () {
    const dot  = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (!dot || !ring || window.matchMedia('(hover: none)').matches) return;

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;

    window.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    });

    (function follow () {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(follow);
    })();

    const hoverables = 'a, button, [data-magnet], [data-tilt], .chips span';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(hoverables)) ring.classList.add('is-hover');
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(hoverables)) ring.classList.remove('is-hover');
    });
    document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
    document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });
  })();

  /* ---------------------------------------------------------
     3. CANVAS PARTICLE FIELD
  --------------------------------------------------------- */
  (function particles () {
    const canvas = document.getElementById('fx');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, dots = [];
    const mouse = { x: -9999, y: -9999 };

    const COUNT = () => (window.innerWidth < 760 ? 34 : 78);

    function resize () {
      w = canvas.width  = window.innerWidth  * devicePixelRatio;
      h = canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width  = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      build();
    }

    function build () {
      const n = COUNT();
      dots = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.28 * devicePixelRatio,
        r: (Math.random() * 1.6 + 0.7) * devicePixelRatio
      }));
    }

    const LINK = 130 * devicePixelRatio;

    function frame () {
      ctx.clearRect(0, 0, w, h);
      const mx = mouse.x * devicePixelRatio;
      const my = mouse.y * devicePixelRatio;

      for (const d of dots) {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;

        // mouse repulsion
        const dx = d.x - mx, dy = d.y - my;
        const dist = Math.hypot(dx, dy);
        if (dist < 120 * devicePixelRatio) {
          const force = (120 * devicePixelRatio - dist) / (120 * devicePixelRatio);
          d.x += (dx / dist) * force * 2.2;
          d.y += (dy / dist) * force * 2.2;
        }

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(140,180,255,.55)';
        ctx.fill();
      }

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i], b = dots[j];
          const dd = Math.hypot(a.x - b.x, a.y - b.y);
          if (dd < LINK) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(79,125,255,${(1 - dd / LINK) * 0.22})`;
            ctx.lineWidth = devicePixelRatio * 0.6;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(frame);
    }

    window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
    window.addEventListener('resize', resize);
    resize();
    if (!reduceMotion) frame();
  })();

  /* ---------------------------------------------------------
     4. SCROLL REVEAL
  --------------------------------------------------------- */
  (function reveal () {
    const items = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = Math.min(el.dataset.delay ? +el.dataset.delay : i * 70, 420);
          setTimeout(() => el.classList.add('in'), delay);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });

    items.forEach(el => io.observe(el));
  })();

  /* ---------------------------------------------------------
     5. COUNT-UP STATS
  --------------------------------------------------------- */
  (function counters () {
    const nums = document.querySelectorAll('[data-count]');
    if (!nums.length) return;

    const run = (el) => {
      const target = +el.dataset.count;
      const suffix = el.dataset.suffix || '';
      const dur = 1500;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + (p === 1 ? suffix : '');
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { run(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    nums.forEach(n => io.observe(n));
  })();

  /* ---------------------------------------------------------
     6. SKILL METERS
  --------------------------------------------------------- */
  (function meters () {
    const bars = document.querySelectorAll('.meter span[data-fill]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.width = e.target.dataset.fill + '%';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    bars.forEach(b => io.observe(b));
  })();

  /* ---------------------------------------------------------
     7. TEXT SCRAMBLE
  --------------------------------------------------------- */
  (function scramble () {
    const el = document.querySelector('[data-scramble]');
    if (!el) return;
    const final = el.textContent;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#@$%&*<>/';
    let frame = 0;

    const play = () => {
      frame++;
      const revealed = frame / 2.6;
      el.textContent = final.split('').map((c, i) =>
        i < revealed ? c : chars[Math.floor(Math.random() * chars.length)]
      ).join('');
      if (revealed < final.length) {
        requestAnimationFrame(play);
      } else {
        el.textContent = final;
      }
    };
    setTimeout(play, reduceMotion ? 0 : 1400);
  })();

  /* ---------------------------------------------------------
     8. TERMINAL TYPING
  --------------------------------------------------------- */
  (function typing () {
    const target = document.getElementById('typeCode');
    if (!target) return;

    const buildCode = () => [
      '# stadium_booking_bot.py',
      'from telegram import Update',
      '',
      '@bot.message_handler(commands=["start"])',
      'def start(update, ctx):',
      '    show_stadiums(update)',
      '',
      'def book_slot(user, stadium, time):',
      '    if is_free(stadium, time):',
      '        save_booking(user, stadium, time)',
      '        return "✅ 200 OK"',
      '    return "❌ 409 Conflict"',
      '',
      t('code.comment')
    ].join('\n');

    let code = buildCode();
    let i = 0, timer = null, started = false;

    function type () {
      if (i <= code.length) {
        target.textContent = code.slice(0, i);
        i++;
        timer = setTimeout(type, code[i - 1] === '\n' ? 90 : 18);
      } else {
        timer = setTimeout(() => { i = 0; target.textContent = ''; type(); }, 3200);
      }
    }

    // til oʻzgarganda animatsiyani qayta boshlash
    window.addEventListener('langchange', () => {
      if (!started) return;
      clearTimeout(timer);
      code = buildCode();
      i = 0;
      target.textContent = '';
      type();
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { started = true; type(); io.disconnect(); }
      });
    }, { threshold: 0.3 });
    io.observe(target);
  })();

  /* ---------------------------------------------------------
     9. 3D TILT CARDS
  --------------------------------------------------------- */
  (function tilt () {
    if (reduceMotion) return;
    const cards = document.querySelectorAll('[data-tilt]');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        card.style.transform =
          `perspective(900px) rotateY(${(px - .5) * 11}deg) rotateX(${(.5 - py) * 11}deg) translateY(-6px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  })();

  /* ---------------------------------------------------------
     10. MAGNETIC BUTTONS
  --------------------------------------------------------- */
  (function magnets () {
    if (reduceMotion) return;
    document.querySelectorAll('[data-magnet]').forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * .22}px, ${y * .3}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  })();

  /* ---------------------------------------------------------
     11. HERO PARALLAX (mouse)
  --------------------------------------------------------- */
  (function parallax () {
    if (reduceMotion) return;
    const layers = [
      { el: document.querySelector('.blob--1'), f: 26 },
      { el: document.querySelector('.blob--2'), f: -34 },
      { el: document.querySelector('.blob--3'), f: 20 }
    ].filter(l => l.el);

    window.addEventListener('mousemove', (e) => {
      const cx = (e.clientX / window.innerWidth - .5);
      const cy = (e.clientY / window.innerHeight - .5);
      layers.forEach(({ el, f }) => {
        el.style.marginLeft = (cx * f) + 'px';
        el.style.marginTop  = (cy * f) + 'px';
      });
    });
  })();

  /* ---------------------------------------------------------
     12. LIVE CLOCK
  --------------------------------------------------------- */
  (function clock () {
    const el = document.getElementById('clock');
    if (!el) return;
    let timer = null;
    const tick = () => {
      el.textContent = new Date().toLocaleTimeString(LOCALES[state.lang] || 'uz-UZ', { hour12: false });
    };
    const restart = () => { clearInterval(timer); tick(); timer = setInterval(tick, 1000); };
    restart();
    window.addEventListener('langchange', restart);
  })();

  /* ---------------------------------------------------------
     13. YEAR
  --------------------------------------------------------- */
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ---------------------------------------------------------
     14. SMOOTH ANCHOR OFFSET (mobile bottom rail)
  --------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    });
  });

})();
