// themeScript.js
export const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      if (!theme) {
        var mql = window.matchMedia('(prefers-color-scheme: dark)');
        theme = mql.matches ? 'dark' : 'light';
      }
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      // fail silently
    }
  })();
`;
