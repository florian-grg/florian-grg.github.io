// Application routes
export const ROUTES = {
  HOME: '/',
  PORTFOLIO: '/portfolio',
  SERVICES: '/services',
  CONTACT: '/contact',
  LEGAL: '/mentions-legales'
};

// Route configuration with hash anchors
export const ROUTE_CONFIG = [
  { path: ROUTES.HOME, label: 'nav.home', hash: '#header' },
  { path: ROUTES.PORTFOLIO, label: 'nav.portfolio', hash: '#about' },
  { path: ROUTES.SERVICES, label: 'nav.services', hash: '#services' },
  { path: ROUTES.CONTACT, label: 'nav.contact', hash: '#contact' }
];
