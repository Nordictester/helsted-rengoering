(function () {
  var STORAGE_KEY = 'helsted-theme';
  var root = document.documentElement;

  function getTheme() {
    return localStorage.getItem(STORAGE_KEY) || 'light';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.textContent = theme === 'dark' ? '☀️' : '🌙';
      btn.setAttribute('aria-label', theme === 'dark' ? 'Skift til lyst tema' : 'Skift til mørkt tema');
    }
  }

  function injectToggle() {
    var header = document.getElementById('header');
    if (!header || document.getElementById('theme-toggle')) return;
    var inner = header.querySelector('.inner');
    if (!inner) return;

    var btn = document.createElement('button');
    btn.id = 'theme-toggle';
    btn.className = 'theme-toggle';
    var current = getTheme();
    btn.textContent = current === 'dark' ? '☀️' : '🌙';
    btn.setAttribute('aria-label', current === 'dark' ? 'Skift til lyst tema' : 'Skift til mørkt tema');

    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });

    inner.appendChild(btn);
  }

  document.addEventListener('DOMContentLoaded', injectToggle);
})();
