import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations/fadeIn';
import { useLanguage } from '../contexts/LanguageContext';
import { FaCertificate, FaBookOpen, FaGlobe } from 'react-icons/fa';

const ICON_MAP = {
  default: FaCertificate,
  nvidia: FaBookOpen,
  toeic: FaGlobe,
  music: FaCertificate
};

const Badge = ({ children }) => (
  <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-black">
    {children}
  </span>
);

export default function Certifications() {
  const { t, language } = useLanguage();
  const items = t('data.certifications');

  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 text-black">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.10 } } }}
      >
        <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-extrabold mb-2 text-center text-black">
          {t('certifications.title')}
        </motion.h1>
        <motion.p variants={fadeIn} className="text-black/70 mb-12 text-center max-w-3xl mx-auto">
          {t('certifications.subtitle')}
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((c, idx) => {
            let Icon = ICON_MAP.default;
            if (/nvidia/i.test(c.title)) Icon = ICON_MAP.nvidia;
            if (/toeic/i.test(c.title)) Icon = ICON_MAP.toeic;
            if (/musical|musique|formation/i.test(c.title)) Icon = ICON_MAP.music;
            return (
              <motion.article
                key={c.title + idx}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: idx * 0.05, duration: 0.45 }}
                className="relative flex flex-col p-6 rounded-xl border border-slate-200 bg-white shadow-sm h-full"
              >
                <h2 className="text-lg md:text-xl font-bold text-black leading-snug mb-2 flex items-center gap-2">
                  <Icon className="text-blue-600" size={22} /> {c.title}
                </h2>
                <div className="text-sm text-blue-600 mb-3">{c.date}</div>
                <div className="text-xs uppercase tracking-wide text-black/60 mb-3">
                  {c.provider} {c.location ? '· ' + c.location : ''}
                </div>
                <div className="flex flex-wrap mb-4 gap-2">
                  {c.highlights.map((h, i) => <Badge key={i}>{h}</Badge>)}
                </div>
                <div className="mt-auto flex flex-wrap gap-3">
                  {c.link && c.link !== '#' && (
                    <a
                      href={c.link}
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg shadow"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {language === 'fr' ? 'Voir' : 'View'}
                    </a>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
