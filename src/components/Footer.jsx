import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp, FaPhone } from "react-icons/fa";
import { smoothScrollTo } from "../animations/smoothScrollTo";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300 py-10" role="contentinfo">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                    {/* Brand */}
                    <div className="space-y-2 text-center">
                        <div className="text-white font-extrabold text-lg md:text-2xl">Florian GIURGIU</div>
                        <div className="text-sm md:text-base text-slate-400">Développement Web · IA · Applications</div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-2 text-center">
                        <a href="mailto:florian.giurgiu3@gmail.com" className="text-sm md:text-base text-slate-300 hover:text-white flex items-center gap-3 justify-center">
                            <FaEnvelope />
                            <span className="break-all">florian.giurgiu3@gmail.com</span>
                        </a>

                        <a href="tel:+33333333333" className="text-sm md:text-base text-slate-300 hover:text-white flex items-center gap-3 justify-center">
                            <FaPhone />
                            <span className="break-all">+33 (0)3 33 33 33 33</span>
                        </a>
                    </div>

                    {/* Actions */}
                    <div>
                        <div className="flex items-center gap-4 mb-3 justify-center">
                            <a href="https://www.linkedin.com/in/florian-giurgiu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-300 hover:text-white">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="https://github.com/florian-grg" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-300 hover:text-white">
                                <FaGithub size={20} />
                            </a>
                        </div>

                        <div className="flex flex-col items-center space-y-3 text-center">
                            <a href="https://github.com/florian-grg/florian-grg.github.io" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-slate-200 underline">
                                Voir le code source
                            </a>
                        </div>
                    </div>

                    {/* 4th column: back-to-top */}
                    <div className="flex flex-col items-center justify-center space-y-2 text-center">
                        <button
                            onClick={() => smoothScrollTo()}
                            className="mt-2 w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-slate-900 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition transform"
                            aria-label="Retour en haut de la page"
                            title="Haut de page"
                        >
                            <FaArrowUp />
                        </button>
                        <div className="text-xs text-slate-400">Haut de page</div>
                    </div>
                </div>

                <div className="mt-8 border-t border-slate-800 pt-6">
                    <div className="text-center text-xs text-slate-500">© {year} Florian GIURGIU. Tous droits réservés.
                        <span className="mx-1">|</span>
                        <a href="#/mentions-legales" className="hover:text-slate-200 underline">
                            Mentions légales
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
