import React from "react";
import Seo from "../components/Seo";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";
import { useNavigate } from "react-router-dom";
import { smoothScrollTo } from "../animations/smoothScrollTo";
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
	const navigate = useNavigate();
	const { t } = useLanguage();
	const servicesData = t('data.services');

	function getServiceIcon(name) {
		const common = { className: 'w-10 h-10 text-white' };
		switch (name) {
			case 'site-web':
				return (
					<svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
						<rect x="3" y="4" width="18" height="16" rx="2" />
						<path d="M3 8h18" />
					</svg>
				);
			case 'application':
				return (
					<svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
						<rect x="2" y="7" width="20" height="14" rx="2" />
						<path d="M16 3v4M8 3v4" />
					</svg>
				);
			case 'ia-optimisation':
				return (
					<svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
						<circle cx="12" cy="12" r="10" />
						<path d="M8 12h8M12 8v8" />
					</svg>
				);
			case 'conseil-accompagnement':
				return (
					<svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
						<path d="M12 20v-6M12 4v2M6 12H4M20 12h-2" />
					</svg>
				);
			default:
				return (
					<svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
						<circle cx="12" cy="12" r="10" />
					</svg>
				);
		}
	}
	return (
		<>
			<Seo
				title={t('seo.services.title')}
				description={t('seo.services.description')}
			/>

			{/* Section 1 — Aperçu des prestations (fond blanc, design landing page) */}
			<section className="w-full min-h-[600px] lg:min-h-screen py-8 sm:py-12 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 text-black flex items-center">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-6 sm:mb-10 lg:mb-14">
						<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight">{t('services.title')}</h1>
						<p className="mt-2 sm:mt-3 lg:mt-4 text-sm sm:text-base lg:text-lg text-black max-w-2xl mx-auto">
							{t('services.subtitle')}
						</p>
					</div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {servicesData.map((s, idx) => (
              <motion.div
                key={s.id}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden p-4 sm:p-5 lg:p-7 bg-white shadow-xl border border-slate-100 hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br from-blue-600 to-purple-500 flex items-center justify-center mb-3 sm:mb-4 lg:mb-5 shadow-md group-hover:scale-110 transition-transform">
                    {getServiceIcon(s.icon)}
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-1 group-hover:text-blue-700 transition-colors leading-tight">{s.title}</h3>
                  <p className="text-sm sm:text-base text-black mb-1 sm:mb-2 font-semibold">{s.subtitle}</p>
                  <p className="text-sm text-black mb-2 sm:mb-3 lg:mb-4">{s.description}</p>									<ul className="mb-2 sm:mb-3 lg:mb-4 space-y-1.5 sm:space-y-2">
										{s.benefits.map((b) => (
											<li key={b} className="text-xs sm:text-sm text-black flex items-start gap-2 sm:gap-3">
												<span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 mt-1 rounded-full bg-gradient-to-r from-emerald-400 to-green-500" aria-hidden />
												<span>{b}</span>
											</li>
										))}
									</ul>
								</div>

								<div className="mt-2 sm:mt-3 lg:mt-4">
									<button
										onClick={() => {
											navigate({ pathname: "/services", search: `?tab=${s.id}` });
											setTimeout(() => smoothScrollTo("#service"), 250);
										}}
										className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600 text-white font-semibold px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-lg shadow"
									>
										<span>{t('services.cta')}</span>
										<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
									</button>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;