import React, { useState, useEffect } from "react";
import Seo from "../components/Seo";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";
import skillsFr from "../data/skills-fr.json";
import skillsEn from "../data/skills-en.json";
import { useLanguage } from '../contexts/LanguageContext';

// Données importées depuis src/data/skillsData.js

const getUniqueCategories = (list, allLabel) => [allLabel, ...Array.from(new Set(list.map((s) => s.category)))];

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
  const { t, language } = useLanguage();
  const SKILLS = language === 'fr' ? skillsFr : skillsEn;
  const allLabel = t('skills.filter.all');
  const [category, setCategory] = useState(allLabel);
  const categories = getUniqueCategories(SKILLS, allLabel);
  const filtered = category === allLabel ? SKILLS : SKILLS.filter((s) => s.category === category);

  // Réinitialise le filtre quand la langue change
  useEffect(() => {
    setCategory(allLabel);
  }, [language, allLabel]);

  return (
    <>
      <Seo
        title={t('skills.seo.title')}
        description={t('skills.seo.description')}
      />
      <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 text-black">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-3 text-center">{t('skills.title')}</h1>
        <p className="text-center text-black/70 mb-12 max-w-2xl mx-auto">{t('skills.subtitle')}</p>
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl shadow p-8 md:p-10 overflow-hidden bg-white border border-slate-100">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
                      category === cat
                        ? "bg-blue-600 text-white ring-2 ring-blue-600/30 shadow"
                        : "bg-slate-100 text-black hover:bg-slate-200"
                    }`}
                    aria-pressed={category === cat}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((s, idx) => (
                <motion.article
                  key={s.name}
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: idx * 0.04, duration: 0.3 }}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.985 }}
                  className="flex flex-col gap-4 p-5 rounded-xl bg-white border border-slate-100 hover:shadow-lg transition h-full"
                >
                  <Logo name={s.name} />

                  <div className="flex-1 min-w-0 flex flex-col">
                      <div className="flex items-start gap-4">
                        <div>
                          <h3 className="text-lg font-semibold text-black leading-tight">{s.name}</h3>
                          <div className="text-xs text-black">{t('skills.category')} • {s.category} • {s.years} {t('skills.years')}</div>
                          {/* Decorative horizontal bar under title */}
                          <div className="mt-3">
                            <div aria-hidden className="h-0.5 w-24 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-transparent" />
                          </div>
                        </div>
                      </div>

                    <div className="mt-1 flex-1 flex flex-col">
                      <div className="mt-2 flex flex-wrap gap-2">
                        {s.tech.map((t) => (
                          <span key={t} className="text-xs bg-slate-100 text-black px-2 py-1 rounded-md">
                            {t}
                          </span>
                        ))}
                      </div>
                      {/* Examples */}
                      {s.examples && s.examples.length > 0 && (
                        <motion.div className="mt-3" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: idx * 0.03 }}>
                          <div className="text-xs font-medium text-blue-600">{t('skills.examples')}</div>
                          <ul className="mt-1 text-xs text-black/70 list-disc list-inside space-y-1">
                            {s.examples.map((ex) => (
                              <li key={ex}>{ex}</li>
                            ))}
                          </ul>
                        </motion.div>
                      )}

                      {/* Certifications */}
                      {s.certs && s.certs.length > 0 && (
                        <motion.div className="mt-3" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: idx * 0.04 }}>
                          <div className="text-xs font-medium text-blue-600">{t('skills.certifications')}</div>
                          <ul className="mt-1 text-xs text-black/70 space-y-1">
                            {s.certs.map((c, i) => (
                              <li key={i}>
                                <span className="font-medium">{c.title}</span>
                                <span className="ml-2 text-slate-500">{c.org}{c.year ? ` — ${c.year}` : ""}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

// Note: qualitative labels removed by user request; small hover/tap micro-interactions added on cards.

export default Skills;