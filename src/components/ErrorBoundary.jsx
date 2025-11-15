import React, { Component } from 'react';

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI instead of crashing.
 * Note: Uses browser language detection since it can't access React Context
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  getTranslations() {
    // Simple language detection from localStorage or browser
    const savedLang = localStorage.getItem('language');
    const browserLang = navigator.language.startsWith('fr') ? 'fr' : 'en';
    const lang = savedLang || browserLang;

    const translations = {
      fr: {
        title: "Oups ! Une erreur est survenue",
        description: "Quelque chose s'est mal passé. Veuillez réessayer ou recharger la page.",
        reload: "Recharger la page",
        home: "Retour à l'accueil",
        details: "Détails de l'erreur (mode développement)"
      },
      en: {
        title: "Oops! An error occurred",
        description: "Something went wrong. Please try again or reload the page.",
        reload: "Reload page",
        home: "Back to home",
        details: "Error details (development mode)"
      }
    };

    return translations[lang] || translations.en;
  }

  render() {
    if (this.state.hasError) {
      const t = this.getTranslations();
      
      // Fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-6">
          <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                {t.title}
              </h1>
              
              <p className="text-slate-600 mb-6">
                {t.description}
              </p>
              
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="text-left bg-slate-50 rounded-lg p-4 mb-6">
                  <summary className="cursor-pointer font-semibold text-slate-700 mb-2">
                    {t.details}
                  </summary>
                  <pre className="text-xs text-red-600 overflow-auto">
                    {this.state.error.toString()}
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </details>
              )}
              
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => window.location.reload()}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-500 text-white font-semibold rounded-lg shadow hover:opacity-90 transition"
                >
                  {t.reload}
                </button>
                
                <button
                  onClick={() => window.location.href = '/'}
                  className="px-6 py-3 bg-white text-slate-700 font-semibold rounded-lg shadow border border-slate-200 hover:bg-slate-50 transition"
                >
                  {t.home}
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
