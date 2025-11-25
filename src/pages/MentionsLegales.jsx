import React from "react";
import Seo from "../components/Seo";
import { useLanguage } from '../contexts/LanguageContext';

const MentionsLegales = () => {
  const { t } = useLanguage();
  
  return (
  <>
    <Seo title={t('seo.legal.title')} description={t('seo.legal.description')} />
    <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 text-black">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-8 text-center">{t('legal.title')}</h1>
        <div className="space-y-6 text-black bg-white rounded-2xl border border-slate-100 shadow p-6">
        <div>
            <h2 className="text-xl font-bold mb-2 text-black">{t('legal.publisher.title')}</h2>
            <p>Florian GIURGIU</p>
            <p>{t('legal.publisher.email')} : florian.giurgiu3@gmail.com</p>
        </div>
        <div>
            <h2 className="text-xl font-bold mb-2 text-black">{t('legal.hosting.title')}</h2>
            <p>GitHub Pages</p>
        </div>
        <div>
            <h2 className="text-xl font-bold mb-2 text-black">{t('legal.ip.title')}</h2>
            <p>
              {t('legal.ip.content')}
            </p>
        </div>
        <div>
            <h2 className="text-xl font-bold mb-2 text-black">{t('legal.privacy.title')}</h2>
            <p>
              {t('legal.privacy.content')}
            </p>
        </div>
        <div>
            <h2 className="text-xl font-bold mb-2 text-black">{t('legal.contact.title')}</h2>
            <p>
              {t('legal.contact.content')}
            </p>
        </div>
        </div>
      </div>
    </section>
  </>
);
};

export default MentionsLegales;
