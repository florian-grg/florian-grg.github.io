import React, { useEffect, useState } from 'react';
import Seo from '../components/Seo';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../animations/fadeIn';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Services() {
    const location = useLocation();
    const { t, language } = useLanguage();
    const servicesData = t('data.services');
    // L'onglet actif, par défaut le premier service
    const [activeId, setActiveId] = useState(servicesData[0].id);

    // Sélecteur de contenu d'exemples basé sur JSON externalisés
    const examplesData = t('data.serviceExamples');
    const examples = examplesData[activeId] || {
        intro: t('services.details.examplesDescription'),
        projectExamples: [],
        deliverables: []
    };

    // Fait défiler jusqu'à l'ancre si elle est dans l'URL
    useEffect(() => {
        // 1) Support query param ?tab=<id>
        const params = new URLSearchParams(location.search);
        const tab = params.get('tab');
        if (tab && servicesData.some(s => s.id === tab)) {
            setActiveId(tab);
        }

        // 2) Support hash formats (works even with HashRouter '#/services#site-web')
        if (location.hash) {
            const raw = location.hash;
            const id = raw.substring(raw.lastIndexOf('#') + 1);
            if (servicesData.some(s => s.id === id)) {
                setActiveId(id);
            }
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 80);
        }
    }, [location, servicesData]); // Se redéclenche si l'URL ou les données changent

    // Trouve le service actif à afficher
    const activeService = servicesData.find(s => s.id === activeId) || servicesData[0];

    return (
        <>
            <Seo title={t('seo.services.title')} description={t('seo.services.description')} />
            {/* Fond clair cohérent */}
            <main id="services" className="bg-gradient-to-br from-white via-blue-50 to-purple-50 text-black py-20 md:py-28">
                
                {/* Conteneur principal centré */}
                <div className="max-w-7xl mx-auto px-4 md:px-8">

                    {/* Points d'ancrage pour chaque service afin de permettre le scroll direct */}
                    <div className="sr-only">
                        {servicesData.map(s => (
                            <div id={s.id} key={s.id} />
                        ))}
                    </div>

                    {/* NOUVELLE ARCHITECTURE : Navigation par Onglets */}
                    <nav id="services-nav" className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
                        {servicesData.map((s) => (
                            <motion.button
                                key={s.id}
                                onClick={() => setActiveId(s.id)}
                                variants={fadeIn}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: s.id === 'site-web' ? 0.1 : s.id === 'application' ? 0.2 : s.id === 'ia-optimisation' ? 0.3 : 0.4, duration: 0.5 }}
                                className={`block px-5 py-3 rounded-lg transition-all duration-300 backdrop-blur-md border text-left
                                ${activeId === s.id
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-500 text-white shadow-lg shadow-blue-500/20 border-transparent'
                                    : 'bg-slate-50 border-slate-100 text-black hover:bg-slate-100 hover:border-slate-200'
                                }`}
                            >
                                <span className="font-semibold block">{s.title}</span>
                                <small className={`text-sm ${activeId === s.id ? 'opacity-90' : 'opacity-70'}`}>{s.subtitle}</small>
                            </motion.button>
                        ))}
                    </nav>

                    {/* Contenu de l'onglet actif (animé) */}
                    <div className="mt-12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                // La clé est essentielle pour qu'AnimatePresence détecte le changement
                                key={activeId}
                                variants={fadeIn}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                transition={{ duration: 0.4 }}
                            >
                                {/* Grille réutilisée de la v1, mais pour le service actif */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                    {/* Carte de service principale "Glassmorphism" */}
                    <div className="rounded-3xl p-10 md:p-12 bg-white shadow-sm border border-slate-100 h-full flex flex-col">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-black">{activeService.title}</h2>
                        <p className="text-black mt-2">{activeService.subtitle}</p>
                        <p className="mt-6 text-black leading-relaxed">{activeService.description}</p>
                                        
                                        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {activeService.benefits.map((b) => (
                                                <li key={b} className="flex items-start gap-3">
                                                    <span className="mt-1 inline-block w-3 h-3 rounded-full bg-emerald-400" aria-hidden />
                                                    <span className="text-black">{b}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex-grow" /> {/* Pousse les boutons en bas */}
                                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-md font-semibold transition-colors duration-200 shadow-lg shadow-blue-500/20">
                                                {t('services.details.contact')}
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Carte "Exemples" avec style "incrusté" */}
                                    <div className="rounded-3xl p-8 bg-white/50 shadow-inner shadow-black/10 h-full flex flex-col justify-center">
                                        <h3 className="text-2xl font-bold mb-4 text-black">{t('services.details.examples')}</h3>
                                        <p className="text-black">{examples.intro}</p>

                                        <div className="mt-6 grid grid-cols-1 gap-4">
                                            <div className="p-4 bg-white rounded-lg border border-slate-100">
                                                <strong className="block text-black">{t('services.details.projectType')}</strong>
                                                <ul className="mt-2 list-disc pl-5 text-sm text-black space-y-1">
                                                    {examples.projectExamples.map((line, idx) => (
                                                        <li key={idx}>{line}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="p-4 bg-white rounded-lg border border-slate-100">
                                                <strong className="block text-black">{t('services.details.deliverables')}</strong>
                                                <ul className="mt-2 list-disc pl-5 text-sm text-black space-y-1">
                                                    {examples.deliverables.map((line, idx) => (
                                                        <li key={idx}>{line}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </main>
        </>
    );
}

