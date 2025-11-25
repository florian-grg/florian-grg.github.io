import React from "react";
import Seo from "../components/Seo";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";
import { smoothScrollTo } from "../animations/smoothScrollTo";
import { useNavigate, useLocation } from "react-router-dom";
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
  <Seo title={t('seo.services.title')} description={t('seo.services.description')} />
  <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto py-20 px-6">
          <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black text-center mb-4 font-serif">
              {t('services.headerService.title')}
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg text-black text-center max-w-3xl mx-auto mb-8">
              {t('services.headerService.subtitle')}
            </motion.p>

            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8" variants={fadeIn}>
              <motion.div whileHover={{ y: -6 }} className="p-6 bg-slate-50 rounded-2xl shadow hover:shadow-lg transition">
                <div className="text-3xl mb-3">🔎</div>
                <h3 className="font-semibold text-lg mb-2">{t('services.headerService.audit.title')}</h3>
                <p className="text-sm text-black">{t('services.headerService.audit.description')}</p>
              </motion.div>

              <motion.div whileHover={{ y: -6 }} className="p-6 bg-slate-50 rounded-2xl shadow hover:shadow-lg transition">
                <div className="text-3xl mb-3">⚙️</div>
                <h3 className="font-semibold text-lg mb-2">{t('services.headerService.projects.title')}</h3>
                <p className="text-sm text-black">{t('services.headerService.projects.description')}</p>
              </motion.div>

              <motion.div whileHover={{ y: -6 }} className="p-6 bg-slate-50 rounded-2xl shadow hover:shadow-lg transition">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="font-semibold text-lg mb-2">{t('services.headerService.ai.title')}</h3>
                <p className="text-sm text-black">{t('services.headerService.ai.description')}</p>
              </motion.div>
            </motion.div>

            <motion.div className="flex justify-center gap-4 mt-10" variants={fadeIn}>
              <button onClick={() => goTo('/service', '#site-web')} className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/20 transition">{t('services.headerService.viewServices')}</button>
              <button onClick={() => goTo('/contact', '#contact')} className="px-6 py-3 rounded-lg border border-slate-300 text-black hover:bg-slate-50 transition">{t('header.cta.quote')}</button>
            </motion.div>
          </motion.div>
        </div>
      </header>
    </>
  );
};

export default Header;
