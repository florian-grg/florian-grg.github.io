import Seo from "../components/Seo";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const about = t('data.about');
  
  return (
  <>
  <section id="about" className="w-full py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 text-black">
      {/* Titre */}
      <motion.div
        className="p-4 flex items-center justify-center mb-8"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
  <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-12 text-center">{t('about.title')}</h1>
      </motion.div>

      {/* Contenu: texte plus large (3/4) et photo plus petite (1/4) sur md+ */}
      <motion.div
        className="w-full flex flex-col-reverse justify-center md:flex-row items-start gap-8 md:gap-12 max-w-7xl mx-auto"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        {/* Texte (occuppe 3/4 sur md+) */}
        <div className="flex-1 md:w-3/4">
          {about.paragraphs.map((paragraph, idx) => (
            <p key={idx} className={`font-serif text-black leading-relaxed text-justify text-base sm:text-lg ${idx > 0 ? 'mt-4' : ''}`}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Photo (1/4 sur md+), centrée verticalement et alignée à droite */}
        <div className="w-full md:w-1/4 flex items-center justify-center">
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-blue-700 shadow-lg">
            <img
              src="/pp.png"
              alt="Portrait de Florian Giurgiu"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
    </motion.div>
  </section>
  </>
  );
};

export default About;