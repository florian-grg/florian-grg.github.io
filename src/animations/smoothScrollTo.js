// Fonction utilitaire pour scroll smooth vers une ancre
// - selector: CSS selector (e.g. '#projects'). If falsy, scroll to top.
// - options: { behavior, timeout }
// Returns a Promise that resolves when the scroll was attempted.
export function smoothScrollTo(selector, options = {}) {
  // Default to instant scroll to avoid unnecessary smooth animations
  const { behavior = "auto", timeout = 1200, pollInterval = 100 } = options;

  return new Promise((resolve) => {
    if (!selector) {
      // no selector -> scroll to top
      window.scrollTo({ top: 0, left: 0, behavior });
      return resolve();
    }

    const tryScroll = () => {
      const el = document.querySelector(selector);
      if (el) {
        el.scrollIntoView({ behavior });
        return resolve();
      }
      return null;
    };

    // First attempt immediately
    if (tryScroll()) return;

    // Otherwise poll until timeout
    const start = Date.now();
    const timer = setInterval(() => {
      if (tryScroll()) {
        clearInterval(timer);
        return;
      }
      if (Date.now() - start > timeout) {
        clearInterval(timer);
        // fallback: if element never appears, resolve without scrolling
        return resolve();
      }
    }, pollInterval);
  });
}
