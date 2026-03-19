import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const [lang, setLang] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  const navItem = (to: string, label: string) => (
    <Link
      to={to}
      className={`px-3 py-2 hover:text-white ${
        location.pathname === to ? 'text-white' : 'text-textSecondary'
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-secondary/70 backdrop-blur-lg px-6 py-4 border-b border-slate-800">
      <Link to="/" className="text-2xl font-bold text-white">
        FP
      </Link>
      <div className="flex gap-6">
        {navItem('/', i18n.t('nav.home', 'Home'))}
        {navItem('/about', i18n.t('nav.about', 'About'))}
        {navItem('/projects', i18n.t('nav.projects', 'Projects'))}
        {navItem('/services', i18n.t('nav.services', 'Services'))}
        {navItem('/contact', i18n.t('nav.contact', 'Contact'))}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => changeLanguage('en')}
          className={`px-3 py-1 rounded-md text-sm ${
            lang === 'en' ? 'bg-accent text-white' : 'text-textSecondary border border-slate-700'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => changeLanguage('es')}
          className={`px-3 py-1 rounded-md text-sm ${
            lang === 'es' ? 'bg-accent text-white' : 'text-textSecondary border border-slate-700'
          }`}
        >
          ES
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
