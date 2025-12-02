/**
 * Fonction utilitaire pour scroll smooth vers une ancre
 * @param {string} selector - CSS selector (e.g. '#projects'). If falsy, scroll to top.
 * @param {Object} options - Configuration options
 * @param {string} options.behavior - Scroll behavior: 'auto' | 'smooth' (default: 'smooth')
 * @param {number} options.timeout - Maximum time to wait for element (ms)
 * @param {number} options.pollInterval - Interval between element checks (ms)
 * @param {number} options.offset - Offset from top in pixels (useful for fixed headers)
 * @returns {Promise} Resolves when the scroll was attempted
 */
export function smoothScrollTo(selector, options = {}) {
  const { 
    behavior = "smooth", 
    timeout = 1200, 
    pollInterval = 100,
    offset = 60
  } = options;

  return new Promise((resolve) => {
    if (!selector) {
      // no selector -> scroll to top
      window.scrollTo({ top: 0, left: 0, behavior });
      return resolve();
    }

    const tryScroll = () => {
      const el = document.querySelector(selector);
      if (el) {
        // Calculer la position avec offset
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior
        });
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

/**
 * Vérifie si un lien pointe vers un élément de la page actuelle
 * @param {string} href - L'URL du lien
 * @param {string} currentPath - Le chemin actuel (pathname)
 * @returns {boolean} True si c'est un lien interne vers la même page
 */
export function isSamePageAnchor(href, currentPath) {
  if (!href) return false;
  
  // Si le lien commence par # seulement
  if (href.startsWith('#')) return true;
  
  // Si le lien contient le même path + hash
  try {
    const url = new URL(href, window.location.origin);
    return url.pathname === currentPath && url.hash;
  } catch {
    return false;
  }
}

/**
 * Gestionnaire universel pour les liens avec smooth scroll intelligent
 * - Si lien interne (même page) -> smooth scroll
 * - Si lien externe (autre page) -> navigation normale
 * @param {Event} e - L'événement click
 * @param {string} href - L'URL cible
 * @param {string} currentPath - Le chemin actuel
 * @param {Function} navigate - Fonction de navigation (react-router)
 */
export function handleSmartNavigation(e, href, currentPath, navigate) {
  if (!href) return;
  
  // Extraire le hash si présent
  const hashMatch = href.match(/#(.+)$/);
  const hash = hashMatch ? `#${hashMatch[1]}` : null;
  
  // Extraire le path (enlever le hash)
  const path = href.replace(/#.+$/, '');
  
  // Si même page avec ancre -> smooth scroll uniquement
  if ((path === currentPath || path === '' || path === window.location.pathname) && hash) {
    e.preventDefault();
    smoothScrollTo(hash);
    return;
  }
  
  // Si autre page -> navigation puis scroll si hash
  if (path && path !== currentPath) {
    e.preventDefault();
    navigate(path);
    if (hash) {
      // Attendre que la nouvelle page soit chargée
      setTimeout(() => smoothScrollTo(hash), 100);
    }
    return;
  }
}
