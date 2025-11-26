import React from "react";
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
  const about = t('data.about');

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
  <Seo title={t('seo.portfolio.title')} description={t('seo.portfolio.description')} />
  <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto py-20 px-6 text-center">
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          <motion.div variants={fadeIn} className="mb-8">
            <div className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto rounded-full overflow-hidden ring-4 ring-slate-100 shadow-lg">
              <img src="/pp.png" alt="Portrait Florian" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mt-6 mb-3">
            {about.name}
          </motion.h1>
          <motion.div variants={fadeIn} className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 mb-4" />
          <motion.p variants={fadeIn} className="text-lg text-black font-semibold mb-4">{about.portfolio.subtitle}</motion.p>

          <motion.p variants={fadeIn} className="text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed mb-6">
            {about.portfolio.description}
          </motion.p>

          <motion.div variants={fadeIn} className="mb-6">
            <div className="text-xs uppercase tracking-wide text-black mb-3">{t('about.keySkills')}</div>
            <div className="flex flex-wrap justify-center gap-3">
              {about.portfolio.keySkills.map((skill, idx) => (
                <div key={idx} className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-500" aria-hidden></span>
                  <span className="text-sm text-black">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="mt-6 flex flex-wrap justify-center gap-4">
            <button onClick={() => goTo('/portfolio', '#portfolio-tabs')} className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600 text-white shadow-lg shadow-blue-500/20 transition">
              <span>{t('about.journey')}</span>
            </button>
            <a href="/CV_Florian_GIURGIU.pdf" target="_blank" rel="noopener noreferrer" download className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 text-black hover:bg-slate-50 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"/></svg>
              <span>{t('about.downloadCv')}</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </header>
  </>
  );
};

export default Header;
