import React from "react";
import Seo from "../components/Seo";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";
import { useLanguage } from '../contexts/LanguageContext';

// Données importées depuis src/data/projectsData.js

const Badge = ({ children }) => (
  <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-black mr-2 mb-2">
    {children}
  </span>
);

const Projects = () => {
  const { t } = useLanguage();
  const projects = t('data.projects');
  
  return (
    <>
      <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 text-black">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-center text-black">{t('projects.title')}</h1>
        <p className="text-center text-black/70 mb-12 max-w-2xl mx-auto">{t('projects.subtitle')}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: idx * 0.05, duration: 0.45 }}
              className="relative flex flex-col p-6 rounded-2xl bg-white border border-slate-100 shadow hover:shadow-lg hover:scale-[1.01] transition"
            >
              <div className="mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-black leading-snug mb-1">{project.title}</h2>
                <div className="text-sm text-blue-600 mb-3">{project.date}</div>
                <p className="text-sm text-black/70 leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4 gap-1">
                  {project.tech.map((tTech) => (
                    <Badge key={tTech}>{tTech}</Badge>
                  ))}
                </div>
                <div className="text-xs uppercase tracking-wide text-black/60 mb-2">
                  <strong className="text-black">{t('projects.role')}:</strong> {project.role}
                </div>
                <ul className="list-disc list-inside text-sm text-black/70 space-y-1 mb-4">
                  {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              </div>
              <div className="mt-auto flex flex-wrap gap-3">
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
                    className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-black px-3 py-2 rounded-lg border border-slate-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('projects.viewCode')}
                  </a>
                )}
              </div>
              <div className="absolute top-3 right-3 px-2 py-1 rounded bg-blue-600/10 backdrop-blur text-xs text-blue-700 border border-blue-600/20">
                {t('projects.badge')}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;