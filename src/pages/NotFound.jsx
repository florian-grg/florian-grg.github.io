import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ROUTES } from '../constants/routes';

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
        <div className="text-center">
          {/* 404 Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-100 mb-6">
            <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          {/* Error Code */}
          <div className="mb-4">
            <span className="text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
              404
            </span>
          </div>
          
          {/* Title */}
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            {t('notFound.title')}
          </h1>
          
          {/* Description */}
          <p className="text-slate-600 mb-8 text-lg">
            {t('notFound.description')}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate(ROUTES.HOME)}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-500 text-white font-semibold rounded-lg shadow hover:opacity-90 transition-all duration-200 hover:scale-105"
            >
              {t('notFound.home')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
