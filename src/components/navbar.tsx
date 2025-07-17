import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logoFran.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    const links = [
        { href: '#home', id: 'home', label: t('navbar.home') },
        { href: '#about', id: 'about', label: t('navbar.about') },
        { href: '#projects', id: 'projects', label: t('navbar.projects') },
        { href: '#services', id: 'services', label: t('navbar.services') },
        { href: '#contact', id: 'contact', label: t('navbar.contact') },
    ];

    const handleClick = (id: string) => {
        setIsOpen(false);

        if (location.pathname !== '/') {
            // Si estás en /thank-you o cualquier otra ruta, primero redirigimos
            navigate('/');
            setTimeout(() => {
                const section = document.getElementById(id);
                section?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            // Si ya estás en home, solo hace scroll
            const section = document.getElementById(id);
            section?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-base uppercase tracking-wide text-gray-700 font-medium">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2">
                    <img src={logo} alt="Fran Logo" className="h-20 w-auto" />
                </a>

                {/* Botón mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-600 text-2xl"
                    aria-label="Toggle menu"
                >
                    ☰
                </button>

                {/* Navegación */}
                <nav className={`w-full md:w-auto md:flex md:items-center gap-6 ${isOpen ? 'block mt-4' : 'hidden'} md:mt-0 md:gap-8`}>
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                        {links.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => handleClick(link.id)}
                                className="hover:text-[color:var(--color-primary)] transition"
                            >
                                {link.label}
                            </button>
                        ))}

                        {/* Idioma */}
                        <div className="flex gap-2 mt-2 md:mt-0">
                            <button
                                onClick={() => i18n.changeLanguage('en')}
                                className={`px-2 py-1 rounded text-sm border hover:text-[color:var(--color-accent)] transition ${
                                    i18n.language === 'en' ? 'border-[color:var(--color-accent)] font-bold' : 'border-transparent'
                                }`}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => i18n.changeLanguage('es')}
                                className={`px-2 py-1 rounded text-sm border hover:text-[color:var(--color-accent)] transition ${
                                    i18n.language === 'es' ? 'border-[color:var(--color-accent)] font-bold' : 'border-transparent'
                                }`}
                            >
                                ES
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
