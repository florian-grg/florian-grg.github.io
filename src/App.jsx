import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { pageTransition } from './animations/pageTransition';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { ROUTES } from './constants/routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import PortfolioTabs from './components/PortfolioTabs';

// Lazy load pages for better performance
const Header = lazy(() => import('./pages/Header'));
const HeaderPortfolio = lazy(() => import('./pages/HeaderPortfolio'));
const HeaderServices = lazy(() => import('./pages/HeaderServices'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading component with i18n support
const PageLoader = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        <p className="mt-4 text-slate-600 font-medium">{t('common.loading')}</p>
      </div>
    </div>
  );
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" onExitComplete={() => {
      // Set scrollbar to y=0 between exit fade and enter fade
      try {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      } catch {
        window.scrollTo(0, 0);
      }
    }}>
      <Routes location={location} key={location.pathname}>
        
        {/* Main landing: header + services (one-page) */}
        <Route path={ROUTES.HOME} element={
          <motion.div
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
          >
            <section id="accueil">
              <Header />
            </section>
          </motion.div>
        } />

        {/* Portfolio page: neural network + about + projects + skills + experiences */}
        <Route path={ROUTES.PORTFOLIO} element={
          <motion.div
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
          >
            <section id="portfolio">
              <HeaderPortfolio />
            </section>
            {/* Anchor to allow header button to scroll here; scroll margin keeps it visible below sticky navbar */}
            <div id="portfolio-tabs" className="scroll-mt-16"></div>
            {/* Tabbed navigation below header, unchanged page components rendered inside */}
            <PortfolioTabs />
            <Footer />
          </motion.div>
        } />

        {/* Service page */}
        <Route path={ROUTES.SERVICES} element={
          <motion.div
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
          >
            <section id="services">
              <HeaderServices />
            </section>
            <section id="service">
              <Services />
            </section>
            <Footer />
          </motion.div>
        } />

        {/* Contact-only page */}
        <Route path={ROUTES.CONTACT} element={
          <motion.div
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
          >
            <section id="contact">
              <Contact />
            </section>
            <Footer />
          </motion.div>
        } />

        {/* Mentions légales page */}
        <Route path={ROUTES.LEGAL} element={
          <motion.div
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
          >
            <MentionsLegales />
            <Footer />
          </motion.div>
        } />

        {/* 404 - Catch all unknown routes */}
        <Route path="*" element={
          <motion.div
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
          >
            <NotFound />
          </motion.div>
        } />

      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <LanguageProvider>
          <Helmet>
            <title>Portfolio Florian GIURGIU</title>
            <meta name="description" content="Développeur web, IA, optimisation, portfolio moderne et performant." />
            <meta name="keywords" content="Florian GIURGIU, développeur, web, IA, optimisation, portfolio, freelance" />
            <meta name="author" content="Florian GIURGIU" />
          </Helmet>
          <Navbar />
          <Suspense fallback={<PageLoader />}>
            <AnimatedRoutes />
          </Suspense>
        </LanguageProvider>
      </Router>
    </ErrorBoundary>
  );
}
