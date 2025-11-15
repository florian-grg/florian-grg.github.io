# Portfolio Florian GIURGIU

Portfolio personnel développé avec React, présentant mes compétences, projets et services en développement web et IA.

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

- ✅ **Multi-langues** (FR/EN) avec persistance localStorage
- ✅ **Responsive Design** - Optimisé pour tous les écrans
- ✅ **Animations fluides** avec Framer Motion
- ✅ **Lazy Loading** des pages pour de meilleures performances
- ✅ **Error Boundary** pour une gestion d'erreurs robuste
- ✅ **SEO optimisé** avec React Helmet et métadonnées complètes
- ✅ **Formulaire de contact** via EmailJS
- ✅ **Background interactif** (réseau neuronal animé)

## 🔧 Technologies utilisées

- **React 19** - Framework JavaScript
- **React Router** - Navigation SPA
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations
- **EmailJS** - Service d'envoi d'emails
- **React Helmet** - Gestion des métadonnées SEO
- **React Icons** - Bibliothèque d'icônes

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

Le site est automatiquement déployé sur GitHub Pages. Pour déployer manuellement :

```bash
npm run deploy
```

## 📄 Licence

© 2025 Florian GIURGIU. Tous droits réservés.

## 🤝 Contact

- Email: florian.giurgiu3@gmail.com
- LinkedIn: [Florian GIURGIU](https://www.linkedin.com/in/florian-giurgiu/)
- GitHub: [@florian-grg](https://github.com/florian-grg)
