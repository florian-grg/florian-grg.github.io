import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";
import { useLanguage } from '../contexts/LanguageContext';
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

// Données importées depuis src/data/experiencesData.js

const Badge = ({ children }) => (
  <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-black">
    {children}
  </span>
);

const Experiences = () => {
  const { t } = useLanguage();
  const experiences = t('data.experiences');
  
  return (
    <>
      <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 text-black">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-blue-600 via-purple-500 to-blue-600" aria-hidden></div>
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-2 text-center text-black"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            {t('experiences.title')}
          </motion.h1>
          <motion.p
            className="text-center text-black/70 mb-12 max-w-2xl mx-auto"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            {t('experiences.subtitle')}
          </motion.p>

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.article
                key={exp.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className="relative ml-10 bg-white rounded-xl border border-slate-200 shadow-sm p-7"
              >
                <div className="absolute -left-8 top-6 w-6 h-6 rounded-full bg-white ring-2 ring-blue-600 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                </div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-4">
                      <FaBriefcase className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-black mb-1">{exp.title}</h2>
                        <p className="text-sm text-black/70 leading-relaxed mb-2">{exp.description}</p>
                        {exp.tech && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {exp.tech.map((tTech) => (
                              <Badge key={tTech}>{tTech}</Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-black md:text-right flex-shrink-0">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-700 font-medium mb-2 border border-blue-600/20">
                      {exp.date}
                    </div>
                    <div className="flex items-center gap-1 md:justify-end text-black/60">
                      <FaMapMarkerAlt className="text-blue-600" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="mt-5 list-disc list-inside text-sm text-black/70 space-y-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                )}
                {exp.more === "True" && (
                  <div className="mt-5">
                    <a
                      href={exp.link}
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg shadow"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('experiences.learnMore')}
                    </a>
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experiences;