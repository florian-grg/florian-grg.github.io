import { smoothScrollTo } from "../animations/smoothScrollTo";
import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
  const darkText = scrolled || !isHome; // true => texte noir, false => texte blanc

  // When the route (pathname) changes via the navbar, ensure viewport resets to top.
  // This guarantees that clicking a navbar tab (navigate) shows the top of the new page.
  React.useEffect(() => {
    // use instant jump to top to avoid double animations; smooth option could be used instead
    window.scrollTo({ top: 0, left: 0 });
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
          {[
            { path: "/", label: "Accueil", hash: "#header" },
            { path: "/portfolio", label: "Portfolio", hash: "#about" },
            { path: "/service", label: "Services", hash: "#service" },
            { path: "/contact", label: "Contact", hash: "#contact" },
          ].map(({ path, hash, label }) => {
            const isActive = location.pathname === path;

            const activeClass = darkText
              ? "bg-blue-50 ring-2 ring-blue-200 text-blue-700"
              : "bg-blue-50 ring-2 ring-blue-200 text-blue-700";

            const inactiveClass = darkText
              ? "hover:text-blue-700 hover:bg-slate-100"
              : "text-white hover:text-blue-200 hover:bg-white/10";

            return (
              <a
                key={path}
                href={`#${path}`}
                aria-current={isActive ? "page" : undefined}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  isActive ? activeClass : inactiveClass
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  if (location.pathname === path) {
                    if (hash) smoothScrollTo(hash);
                  } else {
                    navigate(path);
                    if (hash) setTimeout(() => smoothScrollTo(hash), 250);
                  }
                }}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
