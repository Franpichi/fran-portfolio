import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logoFran.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            navigate('/');
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-[#040d14]/90 backdrop-blur-md border-b border-[rgba(0,200,180,0.12)] shadow-[0_4px_30px_rgba(0,200,180,0.05)]'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2 group">
                    <img src={logo} alt="Fran Logo" className="h-14 w-auto brightness-200 opacity-90 group-hover:opacity-100 transition" />
                </a>

                {/* Mobile button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-[#00c8b4] text-2xl p-1 rounded-lg border border-[rgba(0,200,180,0.2)] hover:border-[rgba(0,200,180,0.5)] transition"
                    aria-label="Toggle menu"
                >
                    {isOpen ? '✕' : '☰'}
                </button>

                {/* Nav links */}
                <nav
                    className={`${
                        isOpen
                            ? 'absolute top-full left-0 right-0 bg-[#040d14]/95 backdrop-blur-md border-b border-[rgba(0,200,180,0.12)] p-6'
                            : 'hidden'
                    } md:flex md:static md:bg-transparent md:border-none md:p-0 md:items-center gap-8`}
                >
                    <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                        {links.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => handleClick(link.id)}
                                className="text-sm font-medium tracking-wide uppercase text-[#7fa8a0] hover:text-[#00c8b4] transition-colors duration-200 relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00c8b4] group-hover:w-full transition-all duration-300" />
                            </button>
                        ))}

                        {/* Language switcher */}
                        <div className="flex gap-2 items-center border-l border-[rgba(0,200,180,0.15)] pl-6 ml-2">
                            {['en', 'es'].map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => i18n.changeLanguage(lang)}
                                    className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                                        i18n.language === lang
                                            ? 'bg-[#00c8b4] text-[#040d14]'
                                            : 'text-[#7fa8a0] hover:text-[#00c8b4] border border-transparent hover:border-[rgba(0,200,180,0.3)]'
                                    }`}
                                >
                                    {lang}
                                </button>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
