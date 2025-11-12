import React from "react";
import Seo from "../components/Seo";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";
import experiences from "../data/experiences.json";

// Données importées depuis src/data/experiencesData.js

const Badge = ({ children }) => (
  <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-black mr-2 mb-2">
    {children}
  </span>
);

const Experiences = () => (
  <>
    <Seo title="Florian GIURGIU — Expériences" description="Expériences professionnelles et associatives de Florian GIURGIU." />
    <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 text-black">
      <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-12 text-center">Expériences</h1>
      <div className="flex flex-col gap-8">
        {experiences.map((exp, idx) => (
          <motion.article
            key={exp.title}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: idx * 0.06, duration: 0.45 }}
            className={`w-full flex flex-col ${idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-stretch gap-6 p-6 md:p-8 rounded-2xl
                        bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-[1.01]`}
          >
            {/* Main content */}
            <div className="flex-1 flex flex-col justify-between z-10">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-black leading-tight">{exp.title}</h2>
                  <div className="text-sm text-black">{exp.date}</div>
                </div>
                <p className="text-sm text-black mb-4 text-justify leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap mb-3">
                  {exp.tech && exp.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>

                <div className="text-sm text-black mb-3">
                  <strong>Lieu :</strong> {exp.location}
                </div>

                <ul className="list-inside list-disc text-sm text-black mb-4 space-y-1">
                  {exp.highlights && exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {exp.more === "True" && (
                  <a
                    href={exp.link}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg shadow"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    En savoir plus
                  </a>
                )}
              </div>
            </div>

            {/* Visual / badge */}
            <div className="w-full md:w-56 lg:w-72 flex-shrink-0 rounded-xl overflow-hidden relative">
              <div className="w-full h-40 md:h-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-500 flex items-center justify-center">
                <svg className="w-20 h-20 text-white/90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 2l3 7h7l-5.5 4 2 7L12 17l-6.5 3 2-7L2 9h7l3-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="absolute top-3 right-3 px-2 py-1 rounded bg-white/80 text-xs text-black">Expérience</div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  </>
);

export default Experiences;