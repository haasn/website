// Language switcher
function setLang(lang) {
    document.body.className = 'lang-' + lang;
    localStorage.setItem('wedding-lang', lang);
    var btnEn = document.getElementById('btn-en');
    var btnDe = document.getElementById('btn-de');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');
    if (btnDe) btnDe.classList.toggle('active', lang === 'de');
}

document.addEventListener('DOMContentLoaded', function () {
    // Sync button active state with current lang
    var lang = document.body.className.replace('lang-', '') || 'en';
    var btnEn = document.getElementById('btn-en');
    var btnDe = document.getElementById('btn-de');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');
    if (btnDe) btnDe.classList.toggle('active', lang === 'de');

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                var offset = 52; // lang bar height
                var top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: top, behavior: 'smooth' });
            }
        });
    });
});
