import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './pages/Header';
import HeaderPortfolio from './pages/HeaderPortfolio';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Experiences from './pages/Experiences';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';
import HeaderServices from './pages/HeaderServices';
import Services from './pages/Services';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { pageTransition } from './animations/pageTransition';
import { LanguageProvider } from './contexts/LanguageContext';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        
        {/* Main landing: header + services (one-page) */}
        <Route path="/" element={
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
        <Route path="/portfolio" element={
          <motion.div
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
          >
            <section id="portfolio">
              <HeaderPortfolio />
            </section>
            <section id="education">
              <Education />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="experiences">
              <Experiences />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="certifications">
              <Certifications />
            </section>
            <Footer />
          </motion.div>
        } />

        {/* Service page */}
        <Route path="/services" element={
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
        <Route path="/contact" element={
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
        <Route path="/mentions-legales" element={
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

      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <LanguageProvider>
        <Helmet>
          <title>Portfolio Florian GIURGIU</title>
          <meta name="description" content="Développeur web, IA, optimisation, portfolio moderne et performant." />
          <meta name="keywords" content="Florian GIURGIU, développeur, web, IA, optimisation, portfolio, freelance" />
          <meta name="author" content="Florian GIURGIU" />
        </Helmet>
        <Navbar />
        <AnimatedRoutes />
      </LanguageProvider>
    </Router>
  );
}
