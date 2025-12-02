import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations/fadeIn';

/**
 * Composant Card réutilisable avec style unifié
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenu de la carte
 * @param {number} props.delay - Délai d'animation
 * @param {string} props.className - Classes CSS supplémentaires
 * @param {string} props.badge - Texte du badge en haut à droite
 * @param {string} props.badgeColor - Couleur du badge (défaut: blue)
 */
export const Card = ({ 
  children, 
  delay = 0, 
  className = '', 
  badge = null,
  badgeColor = 'blue'
}) => {
  return (
    <motion.article
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ delay, duration: 0.45 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`relative flex flex-col p-6 rounded-2xl bg-white border border-slate-100 shadow hover:shadow-lg transition h-full ${className}`}
    >
      {badge && (
        <div className={`absolute top-3 right-3 px-2 py-1 rounded bg-${badgeColor}-600/10 backdrop-blur text-xs text-${badgeColor}-700 border border-${badgeColor}-600/20`}>
          {badge}
        </div>
      )}
      {children}
    </motion.article>
  );
};

/**
 * Badge pour les technologies/tags
 */
export const TechBadge = ({ children }) => (
  <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-black">
    {children}
  </span>
);

export default Card;
