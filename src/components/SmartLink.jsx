import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { smoothScrollTo } from '../animations/smoothScrollTo';

/**
 * SmartLink - Composant de lien intelligent qui :
 * - Utilise smooth scroll pour les ancres sur la même page
 * - Navigue normalement pour les changements de page
 * - Supporte les liens externes
 * 
 * @example
 * // Lien interne avec smooth scroll
 * <SmartLink to="#about">À propos</SmartLink>
 * 
 * // Lien vers autre page
 * <SmartLink to="/contact">Contact</SmartLink>
 * 
 * // Lien vers autre page avec ancre
 * <SmartLink to="/portfolio#projects">Mes projets</SmartLink>
 * 
 * // Lien externe
 * <SmartLink to="https://github.com" external>GitHub</SmartLink>
 */
export default function SmartLink({ 
  to, 
  children, 
  className = '', 
  external = false,
  onClick,
  ...props 
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    // Appeler le onClick custom si fourni
    if (onClick) onClick(e);

    // Si déjà preventDefault, on arrête
    if (e.defaultPrevented) return;

    // Si lien externe, laisser le comportement par défaut
    if (external || to.startsWith('http://') || to.startsWith('https://')) {
      return;
    }

    e.preventDefault();

    // Extraire le hash et le path
    const hashMatch = to.match(/#(.+)$/);
    const hash = hashMatch ? `#${hashMatch[1]}` : null;
    const path = to.replace(/#.+$/, '') || location.pathname;

    // Si même page avec ancre -> smooth scroll uniquement
    if (path === location.pathname && hash) {
      smoothScrollTo(hash);
      return;
    }

    // Si autre page -> navigation
    if (path !== location.pathname) {
      navigate(path);
      // Si hash présent, scroll après navigation
      if (hash) {
        setTimeout(() => smoothScrollTo(hash), 100);
      } else {
        // Scroll to top si pas de hash
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'auto' }), 0);
      }
      return;
    }

    // Si juste un hash sur la même page
    if (hash) {
      smoothScrollTo(hash);
    }
  };

  // Si lien externe, utiliser balise a normale
  if (external || to.startsWith('http://') || to.startsWith('https://')) {
    return (
      <a 
        href={to} 
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Sinon, utiliser SmartLink avec gestion intelligente
  return (
    <a
      href={to}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}
