import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import { useLanguage } from '../contexts/LanguageContext';

const Education = () => {
  const { t } = useLanguage();
  const education = t('data.education');

  // Simple chronological ordering: keep original order; could sort by start date if needed.
  return (
    <>
      <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 text-black">
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-blue-600 via-purple-500 to-blue-600" aria-hidden></div>
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-2 text-center text-black"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            {t('education.title')}
          </motion.h1>
          <motion.p
            className="text-center text-black/70 mb-12 max-w-2xl mx-auto"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            {t('education.subtitle')}
          </motion.p>

          <div className="space-y-10">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className="relative ml-10 bg-white rounded-2xl border border-slate-100 shadow hover:shadow-lg transition p-7"
              >
                {/* Timeline node */}
                <div className="absolute -left-8 top-6 w-6 h-6 rounded-full bg-white ring-2 ring-blue-600 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                </div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-4">
                      <FaGraduationCap className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-black mb-1">{edu.title}</h2>
                        <h3 className="text-lg font-semibold text-black/80 mb-1">{edu.school}</h3>
                        <p className="text-sm text-black/70 leading-relaxed">{edu.degree}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-black md:text-right flex-shrink-0">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-700 font-medium mb-2 border border-blue-600/20">
                      {edu.date}
                    </div>
                    <div className="flex items-center gap-1 md:justify-end text-black/60">
                      <FaMapMarkerAlt className="text-blue-600" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
                {edu.highlights && edu.highlights.length > 0 && (
                  <ul className="mt-5 list-disc list-inside text-sm text-black/70 space-y-1">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
