import React from "react";
import Seo from "../components/Seo";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";
import projectsFr from "../data/projects-fr.json";
import projectsEn from "../data/projects-en.json";
import { useLanguage } from '../contexts/LanguageContext';

// Données importées depuis src/data/projectsData.js

const Badge = ({ children }) => (
  <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-black mr-2 mb-2">
    {children}
  </span>
);

const Projects = () => {
  const { t, language } = useLanguage();
  const projects = language === 'fr' ? projectsFr : projectsEn;
  
  return (
  <>
    <Seo title={t('projects.seo.title')} description={t('projects.seo.description')} />
    <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 text-black">
      <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-12 text-center">{t('projects.title')}</h1>

      <div className="flex flex-col gap-8">
        {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: idx * 0.06, duration: 0.45 }}
            className={`w-full flex flex-col ${idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-stretch gap-6 p-6 md:p-8 rounded-2xl
                        bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-[1.01]`}
          >
            {/* Left content: main info */}
            <div className="flex-1 flex flex-col justify-between z-10">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-black leading-tight">{project.title}</h2>
                  <div className="text-sm text-black">{project.date}</div>
                </div>
                <p className="text-sm text-black mb-4 text-justify leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap mb-3">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <div className="text-sm text-black mb-3">
                  <strong>{t('projects.role')} :</strong> {project.role}
                  {project.location && <span className="ml-3">| {project.location}</span>}
                </div>
                <ul className="list-inside list-disc text-sm text-black mb-4 space-y-1">
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {project.availableProject === "True" && (
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg shadow"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('projects.viewProject')}
                  </a>
                )}
                {project.availableRepo === "True" && (
                  <a
                    href={project.repo}
                    className="inline-flex items-center gap-2 border border-slate-200 text-black px-3 py-2 rounded-lg hover:bg-slate-50"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('projects.viewCode')}
                  </a>
                )}
              </div>
            </div>

            {/* Right visual: decorative card / placeholder */}
            <div className="w-full md:w-56 lg:w-72 flex-shrink-0 rounded-xl overflow-hidden relative">
              <div className="w-full h-40 md:h-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-500 flex items-center justify-center">
                <svg className="w-20 h-20 text-white/90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M3 7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 12h8M8 16h5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="absolute top-3 right-3 px-2 py-1 rounded bg-white/80 text-xs text-black">{t('projects.badge')}</div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  </>
);
};

export default Projects;