/* Bascule de langue EN/FR — sans dépendance.
 * L'anglais est la langue par défaut ; le choix est mémorisé (localStorage).
 * Le CSS masque .lang-fr par défaut, donc pas de flash au chargement. */
(function () {
  var KEY = 'perennial-lang';

  function normalize(l) {
    return l === 'fr' || l === 'en' ? l : 'en';
  }

  function apply(lang) {
    document.documentElement.setAttribute('lang', lang);
    var btns = document.querySelectorAll('[data-setlang]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute(
        'aria-pressed',
        btns[i].getAttribute('data-setlang') === lang ? 'true' : 'false'
      );
    }
  }

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  apply(normalize(stored()));

  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('[data-setlang]') : null;
    if (!btn) return;
    e.preventDefault();
    var lang = normalize(btn.getAttribute('data-setlang'));
    try { localStorage.setItem(KEY, lang); } catch (err) {}
    apply(lang);
  });
})();
