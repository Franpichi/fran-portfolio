// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import logo from '../assets/logoFran.png';
//
// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);
//     const { i18n } = useTranslation();
//
//     const links = [
//         { href: '#home', label: 'Home' },
//         { href: '#about', label: 'About' },
//         { href: '#projects', label: 'Projects' },
//         { href: '#services', label: 'Services' },
//         { href: '#contact', label: 'Contact' },
//     ];
//
//     return (
//         <header className="sticky top-0 z-50 bg-white">
//             <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-base uppercase tracking-wide text-gray-700 font-medium">
//                 {/* Logo + texto */}
//                 <a href="#home" className="flex items-center gap-2">
//                     <img src={logo} alt="Fran Logo" className="h-20 w-auto" />
//                     <span className="text-[color:var(--color-primary)] font-bold tracking-tight text-base">
//           </span>
//                 </a>
//
//                 <button
//                     onClick={() => setIsOpen(!isOpen)}
//                     className="md:hidden text-gray-600 text-xl"
//                     aria-label="Toggle menu"
//                 >
//                     ☰
//                 </button>
//
//                 <nav className={`md:flex md:items-center gap-6 ${isOpen ? 'block mt-4' : 'hidden'} md:mt-0 md:gap-8`}>
//                     {links.map((link) => (
//                         <a
//                             key={link.href}
//                             href={link.href}
//                             onClick={() => setIsOpen(false)}
//                             className="hover:text-[color:var(--color-primary)] transition"
//                         >
//                             {link.label}
//                         </a>
//                     ))}
//                     <div className="flex gap-2 ml-4">
//                         <button
//                             className="hover:text-[color:var(--color-accent)] transition"
//                             onClick={() => i18n.changeLanguage('en')}
//                         >
//                             EN
//                         </button>
//                         <button
//                             className="hover:text-[color:var(--color-accent)] transition"
//                             onClick={() => i18n.changeLanguage('es')}
//                         >
//                             ES
//                         </button>
//                     </div>
//                 </nav>
//             </div>
//         </header>
//     );
// }

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logoFran.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const links = [
        { href: '#home', label: t('navbar.home') },
        { href: '#about', label: t('navbar.about') },
        { href: '#projects', label: t('navbar.projects') },
        { href: '#services', label: t('navbar.services') },
        { href: '#contact', label: t('navbar.contact') },
    ];

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-base uppercase tracking-wide text-gray-700 font-medium">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-2">
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
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="hover:text-[color:var(--color-primary)] transition"
                            >
                                {link.label}
                            </a>
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
