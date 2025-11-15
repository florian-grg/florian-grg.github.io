import { smoothScrollTo } from "../animations/smoothScrollTo";
import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../logo.png';
import { useLanguage } from '../contexts/LanguageContext';
import { ROUTE_CONFIG } from '../constants/routes';

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  React.useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", handleScroll);
    window.addEventListener("pushstate", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handleScroll);
      window.removeEventListener("pushstate", handleScroll);
    };
  }, [location]);

  const isHome = location.pathname === "/";
  const darkText = scrolled || !isHome;

  // Helper function to get link classes
  const getLinkClasses = (isActive) => {
    const activeClass = "bg-blue-50 ring-2 ring-blue-200 text-blue-700";
    const inactiveClass = darkText
      ? "hover:text-blue-700 hover:bg-slate-100"
      : "text-white hover:text-blue-200 hover:bg-white/10";
    
    return `px-3 py-1.5 rounded-lg font-medium transition-colors ${
      isActive ? activeClass : inactiveClass
    }`;
  };

  // When the route (pathname) changes via the navbar, ensure viewport resets to top.
  // This guarantees that clicking a navbar tab (navigate) shows the top of the new page.
  React.useEffect(() => {
    // use smooth scroll to top for a gentler transition
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <nav
      className={`fixed w-full z-20 transition-colors duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur border-b border-slate-200" : isHome ? "bg-transparent" : "bg-white/80 backdrop-blur border-b border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* hidden on small screens, visible from sm and up */}
        <img src={logo} alt="Logo" className="hidden sm:block h-8 w-8 rounded" />
        <div className="w-full flex flex-wrap gap-x-2 justify-end items-center">
          {ROUTE_CONFIG.map(({ path, hash, label }) => {
            const isActive = location.pathname === path;

            return (
              <a
                key={path}
                href={`#${path}`}
                aria-current={isActive ? "page" : undefined}
                className={getLinkClasses(isActive)}
                onClick={(e) => {
                  e.preventDefault();
                  if (location.pathname === path) {
                    if (hash) smoothScrollTo(hash);
                  } else {
                    navigate(path);
                    if (hash) smoothScrollTo(hash);
                  }
                }}
              >
                {t(label)}
              </a>
            );
          })}
          
          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className={`ml-2 px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
              darkText
                ? "text-gray-700 hover:text-blue-700 hover:bg-slate-100"
                : "text-white hover:text-blue-200 hover:bg-white/10"
            }`}
            aria-label={language === 'fr' ? 'Switch to English' : 'Passer en français'}
            title={language === 'fr' ? 'Switch to English' : 'Passer en français'}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <span className="font-semibold text-sm">{language.toUpperCase()}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
