import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import About from '../pages/About.jsx';
import Skills from '../pages/Skills.jsx';
import Experiences from '../pages/Experiences.jsx';
import Projects from '../pages/Projects.jsx';
import Education from '../pages/Education.jsx';
import Certifications from '../pages/Certifications.jsx';
import { useLocation, useNavigate } from 'react-router-dom';

export default function PortfolioTabs() {
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const TABS = useMemo(() => [
    { id: 'about', label: t('nav.about'), component: About },
    { id: 'skills', label: t('nav.skills'), component: Skills },
    { id: 'experiences', label: t('nav.experiences'), component: Experiences },
    { id: 'projects', label: t('nav.projects'), component: Projects },
    { id: 'education', label: t('nav.education'), component: Education },
    { id: 'certifications', label: t('nav.certifications'), component: Certifications },
  ], [t]);

  const [activeId, setActiveId] = useState(TABS[0].id);

  useEffect(() => {
    const currentHash = location.hash?.replace('#', '') || TABS[0].id;
    const exists = TABS.find(t => t.id === currentHash);
    setActiveId(exists ? exists.id : TABS[0].id);
  }, [location.hash, TABS]);

  const ActiveComponent = (TABS.find(t => t.id === activeId) || TABS[0]).component;

  return (
    <section className="w-full py-8 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 text-black">
      {/* Navbar */}
      <nav className="mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => { setActiveId(tab.id); navigate('#' + tab.id); }}
              className={
                `px-4 py-2 rounded-lg text-sm transition ` +
                (activeId === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-500 text-white shadow-lg shadow-blue-500/20'
                  : 'border border-slate-300 text-black hover:bg-slate-50')
              }
              aria-current={activeId === tab.id ? 'page' : undefined}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Panel */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
      >
        <ActiveComponent />
      </motion.div>
    </section>
  );
}
