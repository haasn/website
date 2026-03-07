// Theme switcher
function applyWeddingTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    var btn = document.getElementById('btn-theme');
    if (btn) {
        btn.textContent = theme === 'dark' ? '☀' : '☽';
        btn.setAttribute('aria-pressed', String(theme === 'dark'));
    }
}

function toggleWeddingTheme() {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    var next = isDark ? 'light' : 'dark';
    try {
        localStorage.setItem('wedding-theme', next);
        localStorage.setItem('wedding-theme-manual', 'true');
    } catch(e) {}
    applyWeddingTheme(next);
}

// Language switcher
function setLang(lang, updateUrl) {
    document.body.classList.remove('lang-en', 'lang-de');
    document.body.classList.add('lang-' + lang);
    try { localStorage.setItem('wedding-lang', lang); } catch(e) {}
    var btnEn = document.getElementById('btn-en');
    var btnDe = document.getElementById('btn-de');
    if (btnEn) {
        btnEn.classList.toggle('active', lang === 'en');
        btnEn.setAttribute('aria-pressed', String(lang === 'en'));
    }
    if (btnDe) {
        btnDe.classList.toggle('active', lang === 'de');
        btnDe.setAttribute('aria-pressed', String(lang === 'de'));
    }
    // Use query parameter — more reliable than hash on iOS Safari
    if (updateUrl) history.replaceState(null, '', '?lang=' + lang + (location.hash || ''));
}

document.addEventListener('DOMContentLoaded', function () {
    // Wire up language buttons
    var btnEn = document.getElementById('btn-en');
    var btnDe = document.getElementById('btn-de');
    var btnTheme = document.getElementById('btn-theme');
    if (btnEn) btnEn.addEventListener('click', function () { setLang('en', true); });
    if (btnDe) btnDe.addEventListener('click', function () { setLang('de', true); });
    if (btnTheme) btnTheme.addEventListener('click', toggleWeddingTheme);

    // Sync theme button icon with current theme
    var currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    applyWeddingTheme(currentTheme);

    // Listen for system preference changes — always follow, reset manual flag
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (evt) {
            var newSysPref = evt.matches ? 'dark' : 'light';
            try {
                localStorage.setItem('wedding-theme-system', newSysPref);
                localStorage.setItem('wedding-theme', newSysPref);
                localStorage.setItem('wedding-theme-manual', 'false');
            } catch(err) {}
            applyWeddingTheme(newSysPref);
        });
    }

    // Determine initial language: ?lang= query param is most reliable (especially on iOS Safari),
    // with #en/#de hash as legacy fallback, then localStorage (via body class), then default EN
    var params = new URLSearchParams(location.search);
    var langFromParam = /^(en|de)$/.test(params.get('lang')) ? params.get('lang') : null;
    var hash = location.hash;
    var langFromHash = (hash === '#en' || hash === '#de') ? hash.slice(1) : null;
    var lang = langFromParam || langFromHash || (document.body.className.match(/lang-(\w+)/) || [])[1] || 'en';
    // Canonicalise hash-based URLs to query param so links can be shared reliably
    setLang(lang, !!(langFromHash && !langFromParam));

    // Smooth scroll for anchor links
    var langBar = document.querySelector('.lang-bar');
    var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (!href || href === '#') return;
            var id = href.slice(1);
            if (!id) return;
            var target = document.getElementById(id);
            if (target) {
                e.preventDefault();
                var offset = langBar ? langBar.offsetHeight : 52;
                var top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
            }
        });
    });
});
