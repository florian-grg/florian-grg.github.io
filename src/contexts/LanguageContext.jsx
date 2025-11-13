import React, { createContext, useContext, useState, useEffect } from 'react';
import translationsFr from '../locales/fr.json';
import translationsEn from '../locales/en.json';

const LanguageContext = createContext();

const translations = {
  fr: translationsFr,
  en: translationsEn
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // Récupérer la langue depuis localStorage ou par défaut 'fr'
    return localStorage.getItem('language') || 'fr';
  });

  useEffect(() => {
    // Sauvegarder la langue dans localStorage à chaque changement
    localStorage.setItem('language', language);
    // Mettre à jour l'attribut lang du document HTML
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        console.warn(`Translation missing for key: ${key} in language: ${language}`);
        return key;
      }
    }
    
    return value;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
