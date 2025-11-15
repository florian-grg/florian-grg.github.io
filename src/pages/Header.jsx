import React from "react";
import NeuralNetworkBackground from "../components/NeuralNetworkBackground";
import Seo from "../components/Seo";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";
import { smoothScrollTo } from "../animations/smoothScrollTo";
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  const goTo = (path, hash) => {
    if (location.pathname === path) {
      smoothScrollTo(hash);
    } else {
      navigate(path);
      setTimeout(() => smoothScrollTo(hash), 250);
    }
  };

  return (
  <>
    <Seo title={t('header.seo.title')} description={t('header.seo.description')} />
    <header role="banner" id="home" className="relative overflow-hidden bg-gradient-to-br from-[#000725ff] via-[#0a0e27] to-[#0f1642] min-h-screen flex flex-col items-center justify-center">
      <NeuralNetworkBackground />
      
      {/* Overlay subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 z-0" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center px-6 py-16">
        {/* Titre principal */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <span className="text-white">
            {t('header.title')}
          </span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.h2
          className="text-lg md:text-xl font-normal mb-5 tracking-wide text-gray-300"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          {t('header.subtitle')}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          {t('header.description')}
          <br className="hidden md:block" />
          {t('header.description2')}
        </motion.p>

        {/* Boutons d'action */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <button
            className="px-8 py-3.5 bg-transparent border-2 border-blue-600 text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1642]"
            onClick={() => goTo('/portfolio', '#about')}
            aria-label={t('header.cta.profile')}
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t('header.cta.profile')}
            </span>
          </button>
          
          <button
            className="px-8 py-3.5 bg-transparent border-2 border-blue-600 text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1642]"
            onClick={() => goTo('/services', '#services')}
            aria-label={t('header.cta.services')}
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t('header.cta.services')}
            </span>
            
          </button>

          <button
            className="px-8 py-3.5 bg-transparent border-2 border-blue-600 text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1642]"
            onClick={() => goTo('/contact', '#contact')}
            aria-label={t('header.cta.quote')}
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t('header.cta.quote')}
            </span>
          </button>
        </motion.div>

        {/* Télécharger CV */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <a
            href="/CV_Florian_GIURGIU.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-gray-600 text-gray-300 rounded-full font-medium hover:border-blue-500 hover:text-blue-400 hover:bg-white/10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1642]"
            download
            aria-label={t('header.cta.downloadCv')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
            </svg>
            <span>{t('header.cta.downloadCv')}</span>
          </a>
        </motion.div>
      </div>
    </header>
  </>
  );
};

export default Header;
