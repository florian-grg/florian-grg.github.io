# Portfolio Florian GIURGIU

> Portfolio personnel professionnel développé avec React 19, présentant mes compétences en ingénierie IA, vision par ordinateur, développement web moderne et services freelance.

[![React](https://img.shields.io/badge/React-19.1.1-61dafb?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red)](./LICENSE)
[![Live Demo](https://img.shields.io/badge/Demo-Live-success?logo=github)](https://florian-grg.github.io/)

## 🚀 Démarrage rapide

### Prérequis

- Node.js (version 14+)
- npm ou yarn

### Installation

1. Cloner le repository :
```bash
git clone https://github.com/florian-grg/florian-grg.github.io.git
cd florian-grg.github.io
```

2. Installer les dépendances :
```bash
npm install
```

3. Configurer les variables d'environnement :
```bash
cp .env.example .env
# Puis éditer .env avec vos clés EmailJS
```

4. Lancer le serveur de développement :
```bash
npm start
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📦 Scripts disponibles

- `npm start` - Lance l'application en mode développement
- `npm test` - Lance les tests
- `npm run build` - Crée une version de production dans le dossier `build/`
- `npm run deploy` - Déploie l'application sur GitHub Pages

## 🏗️ Architecture du projet

```
src/
├── animations/      # Animations et transitions
├── components/      # Composants réutilisables
│   ├── ErrorBoundary.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   └── ...
├── constants/       # Constantes et configuration
│   ├── config.js
│   └── routes.js
├── contexts/        # Contextes React (i18n, etc.)
├── data/           # Données JSON (projets, compétences, etc.)
├── locales/        # Fichiers de traduction (fr, en)
├── pages/          # Pages de l'application
├── utils/          # Fonctions utilitaires
└── App.jsx         # Composant principal
```

## 🌐 Fonctionnalités

### Interface & UX
- ✅ **Multi-langues** (FR/EN) avec persistance localStorage et contexte React
- ✅ **Responsive Design** - Optimisé mobile-first pour tous les écrans
- ✅ **Animations fluides** avec Framer Motion et transitions de page
- ✅ **Background interactif** - Réseau neuronal animé en Canvas
- ✅ **Dark mode ready** - Palette de couleurs adaptable

### Performance & Qualité
- ✅ **Lazy Loading** des pages pour de meilleures performances
- ✅ **Code Splitting** automatique par route
- ✅ **Error Boundary** pour une gestion d'erreurs robuste
- ✅ **Tests unitaires** avec Jest et React Testing Library
- ✅ **Optimisation images** et assets

### SEO & Accessibilité
- ✅ **SEO optimisé** - React Helmet, métadonnées complètes, Open Graph
- ✅ **Structured Data** - JSON-LD pour Google Knowledge Graph
- ✅ **Sitemap.xml** et robots.txt configurés
- ✅ **humans.txt** détaillé
- ✅ **Balises sémantiques** HTML5

### Fonctionnalités métier
- ✅ **Formulaire de contact** via EmailJS avec validation
- ✅ **Portfolio dynamique** - Projets, expériences, compétences, certifications
- ✅ **Services freelance** - Présentation détaillée des prestations
- ✅ **Navigation fluide** - HashRouter pour GitHub Pages

## 🔧 Technologies utilisées

### Frontend
- **React 19.1.1** - Framework JavaScript moderne avec hooks
- **React Router DOM 7.9.1** - Navigation SPA avec HashRouter
- **Tailwind CSS** - Framework CSS utilitaire avec PostCSS
- **Framer Motion 11** - Animations et transitions fluides

### Outils & Services
- **EmailJS 3.12** - Service d'envoi d'emails sans backend
- **React Helmet 6.1** - Gestion dynamique des métadonnées SEO
- **React Icons 5.5** - Bibliothèque d'icônes (FontAwesome, etc.)

### Qualité & Tests
- **Jest** - Framework de tests unitaires
- **React Testing Library** - Tests de composants React
- **ESLint** - Linter JavaScript avec config React

### Build & Déploiement
- **React Scripts 5** - Configuration webpack/babel optimisée
- **GitHub Pages** - Hébergement statique gratuit
- **gh-pages** - CLI de déploiement automatisé
- **Autoprefixer** - Compatibilité CSS multi-navigateurs

## 📝 Configuration EmailJS

Pour utiliser le formulaire de contact, vous devez configurer EmailJS :

1. Créer un compte sur [EmailJS](https://www.emailjs.com/)
2. Créer un service email
3. Créer un template d'email
4. Copier vos clés dans le fichier `.env` :

```env
REACT_APP_EMAILJS_SERVICE_ID=votre_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=votre_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=votre_public_key
```

## 🎨 Personnalisation

### Modifier les couleurs

Les couleurs principales sont définies dans `tailwind.config.js` et peuvent être personnalisées selon vos préférences.

### Modifier le contenu

- **Données** : Fichiers JSON dans `src/data/`
- **Traductions** : `src/locales/fr.json` et `src/locales/en.json`
- **Constantes** : `src/constants/config.js` et `src/constants/routes.js`

## 📱 UI/UX Notes

Le site force un scrollbar vertical permanent via `body { overflow-y: scroll; }` (voir `src/index.css`). Cela prévient les décalages de layout et les problèmes d'alignement du pointeur dans l'animation du fond neural lors du chargement initial.

## 🚀 Déploiement

Le site est hébergé sur **GitHub Pages** avec déploiement automatisé.

### Déploiement manuel

```bash
# Build + déploiement en une commande
npm run deploy
```

### Process de déploiement

1. `npm run predeploy` - Build de production dans `/build`
2. `gh-pages -d build` - Push vers la branche `gh-pages`
3. GitHub Pages sert automatiquement le contenu

### Vérification post-déploiement

- ✅ Site accessible sur https://florian-grg.github.io/
- ✅ Vérifier la console pour erreurs
- ✅ Tester le responsive sur différents devices
- ✅ Valider le SEO avec Google Search Console
- ✅ Tester le formulaire de contact

## 📊 Performance & SEO

- ✅ **Lighthouse Score** - Objectif 90+ sur toutes les métriques
- ✅ **Google Search Console** - Vérification et monitoring
- ✅ **Structured Data** - Validation schema.org
- ✅ **Mobile-Friendly** - Test Google Mobile-Friendly
- ✅ **Core Web Vitals** - LCP, FID, CLS optimisés

## 📄 Licence

© 2025 Florian GIURGIU. Tous droits réservés.

Ce portfolio est un projet personnel. Le code est visible publiquement à des fins éducatives, mais toute utilisation, modification ou redistribution nécessite une autorisation écrite préalable.

## 🤝 Contact

**Florian GIURGIU** - Développeur Web Freelance & Ingénieur IA

- 📧 Email: [florian.giurgiu3@gmail.com](mailto:florian.giurgiu3@gmail.com)
- 💼 LinkedIn: [florian-giurgiu](https://www.linkedin.com/in/florian-giurgiu/)
- 🐙 GitHub: [florian-grg](https://github.com/florian-grg)
- 🌐 Portfolio: [florian-grg.github.io](https://florian-grg.github.io/)
- 📱 Téléphone: +33 (0)6 29 15 80 54

---

<div align="center">
  <p><strong>Développé avec ❤️ et ☕ par Florian GIURGIU</strong></p>
  <p><em>Étudiant Ingénieur • Auto-entrepreneur • Passionné d'IA & Vision par Ordinateur</em></p>
</div>
