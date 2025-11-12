import React from "react";
import NeuralNetworkBackground from "../components/NeuralNetworkBackground";
import Seo from "../components/Seo";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";
import { smoothScrollTo } from "../animations/smoothScrollTo";
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
    <Seo title="Accueil | Florian GIURGIU" description="Accueil du portfolio de Florian GIURGIU, développeur web et auto-entrepreneur." />
    <header className="relative overflow-hidden bg-gradient-to-br from-[#000725ff] via-[#0a0e27] to-[#0f1642] min-h-screen flex flex-col items-center justify-center">
      <NeuralNetworkBackground />
      
      {/* Overlay subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-0" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center px-6 py-16">
        {/* Titre principal */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-medium mb-6 tracking-wider"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Florian GIURGIU
          </span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.h2
          className="text-xl md:text-2xl font-light mb-8 tracking-wide"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <span className="text-white">Développeur Web</span> <span className="text-gray-400">&</span> <span className="text-blue-400">Auto-Entrepreneur</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          Je conçois des sites et applications modernes, performants et sur-mesure.
          <br />
          Passionné par les nouvelles technologies et à l'écoute de vos besoins pour donner vie à vos projets digitaux.
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
            className="group relative px-8 py-3.5 bg-blue-600 text-white rounded-lg font-semibold shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:bg-blue-700 transition-all duration-300 hover:scale-105"
            onClick={() => goTo('/contact', '#contact')}
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Me contacter
            </span>
          </button>
          
          <button
            className="px-8 py-3.5 bg-transparent border-2 border-blue-600 text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105"
            onClick={() => goTo('/portfolio', '#about')}
          >
            À propos de moi
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
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-gray-600 text-gray-300 rounded-full font-medium hover:border-blue-500 hover:text-blue-400 hover:bg-white/10 transition-all duration-300"
            download
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
            </svg>
            <span>Télécharger mon CV</span>
          </a>
        </motion.div>

        {/* Indicateur de scroll */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.7 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-gray-500 hover:text-gray-400 transition-colors cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </header>
  </>
  );
};

export default Header;
