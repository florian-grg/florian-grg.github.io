import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";
import { useLanguage } from '../contexts/LanguageContext';

// Données importées depuis src/data/skillsData.js

const groupByCategory = (skills) => {
  const grouped = {};
  skills.forEach((skill) => {
    if (!grouped[skill.category]) {
      grouped[skill.category] = [];
    }
    grouped[skill.category].push(skill);
  });
  return grouped;
};

const Logo = ({ name }) => {
  switch (name) {
    case "Python":
      return (
        <div aria-hidden className="w-12 h-12 flex items-center justify-center rounded-md bg-gradient-to-br from-yellow-300 to-blue-500">
          <span className="text-white font-bold">Py</span>
        </div>
      );
    case "JavaScript":
      return (
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-yellow-400">
          <span className="text-black font-bold">JS</span>
        </div>
      );
    case "Java":
      return (
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-red-500">
          <span className="text-white font-bold">Jv</span>
        </div>
      );
    case "C/C++":
      return (
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-sky-600">
          <span className="text-white font-bold">C++</span>
        </div>
      );
    case "SQL":
      return (
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-emerald-600">
          <span className="text-white font-bold">DB</span>
        </div>
      );
    case "PyTorch (Deep Learning)":
      return (
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-indigo-600">
          <span className="text-white font-bold">PT</span>
        </div>
      );
    case "HTML":
      return (
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-orange-500">
          <span className="text-white font-bold">HT</span>
        </div>
      );
    case "CSS":
      return (
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-600">
          <span className="text-white font-bold">CSS</span>
        </div>
      );
    case "Qt (GUI)":
      return (
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-violet-600">
          <span className="text-white font-bold">Qt</span>
        </div>
      );
    case "LaTeX":
      return (
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-gray-700">
          <span className="text-white font-bold">TeX</span>
        </div>
      );
    case "MATLAB":
      return (
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-slate-600">
          <span className="text-white font-bold">ML</span>
        </div>
      );
    case "Git":
      return (
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-red-600">
          <span className="text-white font-bold">Git</span>
        </div>
      );
    default:
      return (
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-white/10">
          <span className="text-white font-medium">•</span>
        </div>
      );
  }
};

const Skills = () => {
  const { t } = useLanguage();
  const SKILLS = t('data.skills');
  const groupedSkills = groupByCategory(SKILLS);
  const categories = Object.keys(groupedSkills);

  return (
    <>
      <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 text-black">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-2 text-center">{t('skills.title')}</h1>
        <p className="text-center text-black/70 mb-10 max-w-2xl mx-auto">{t('skills.subtitle')}</p>
        
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 lg:columns-2 gap-6">
            {categories.map((category, catIdx) => (
              <motion.div
                key={category}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: catIdx * 0.1, duration: 0.4 }}
                className="rounded-xl shadow p-6 bg-white border border-slate-100 break-inside-avoid mb-6"
              >
                <h2 className="text-xl font-bold text-black mb-4 pb-2 border-b-2 border-blue-600">
                  {category}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {groupedSkills[category].map((s, idx) => (
                    <motion.article
                      key={s.name}
                      variants={fadeIn}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: catIdx * 0.1 + idx * 0.05, duration: 0.3 }}
                      className="relative flex flex-col gap-2 p-3 rounded-lg border border-slate-200 bg-gradient-to-br from-white to-slate-50 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-2">
                        <Logo name={s.name} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="text-sm font-semibold text-black leading-tight truncate">{s.name}</h3>
                            <div className="text-xs text-slate-500 whitespace-nowrap">{s.years} {t('skills.years')}</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {s.tech.map((tech) => (
                          <span key={tech} className="inline-flex items-center text-xs px-2 py-0.5 rounded-full bg-slate-100 text-black">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Examples - condensed */}
                      {s.examples && s.examples.length > 0 && (
                        <div className="text-xs text-black/60">
                          <span className="font-medium text-blue-600">{t('skills.examples')}:</span> {s.examples.join(', ')}
                        </div>
                      )}

                      {/* Certifications - condensed */}
                      {s.certs && s.certs.length > 0 && (
                        <div className="text-xs text-black/60">
                          <span className="font-medium text-blue-600">{t('skills.certifications')}:</span> {s.certs.map(c => c.title).join(', ')}
                        </div>
                      )}
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;