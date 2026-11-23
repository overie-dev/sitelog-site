// Menu mobile de l'en-tête commun (les 3 pages).
(function () {
  var header = document.querySelector('.site-header');
  var btn = header && header.querySelector('.menu-btn');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var open = header.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  header.querySelectorAll('.site-nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      header.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();
