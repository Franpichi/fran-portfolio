// import { useTranslation } from 'react-i18next';
// import fran from '../assets/foto.png';
//
// export default function Home() {
//     const { t } = useTranslation();
//
//     return (
//         <section id="home" className="text-center py-20 px-4 ">
//             <div className="mb-16">
//                 <img
//                     src={fran}
//                     alt="Logo"
//                     className="mx-auto h-96 rounded-full border-4 border-[color:var(--color-primary)] shadow-md"
//                 />
//             </div>
//
//             <h1 className="text-4xl md:text-5xl font-bold text-[color:var(--color-primary)] mb-16">
//                 {t('home.greeting')}
//             </h1>
//             <h2 className="text-xl md:text-2xl text-gray-700 font-medium mb-16">
//                 {t('home.role')}
//             </h2>
//             <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto mb-16">
//                 {t('home.description')}
//             </p>
//
//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 ">
//                 <a
//                     href="#projects"
//                     className="px-6 py-3 border border-[color:var(--color-primary)] text-[color:var(--color-primary)] rounded hover:bg-[color:var(--color-primary)] hover:text-white transition"
//                 >
//                     {t('home.projects')}
//                 </a>
//                 <a
//                     href="#contact"
//                     className="px-6 py-3 border border-[color:var(--color-accent)] text-[color:var(--color-accent)] rounded hover:bg-[color:var(--color-accent)] hover:text-white transition"
//                 >
//                     {t('home.contact')}
//                 </a>
//             </div>
//         </section>
//     );
// }


import { useTranslation } from 'react-i18next';
import fran from '../assets/foto.png';

export default function Home() {
    const { t } = useTranslation();

    return (
        <section id="home" className="text-center py-20 px-4">
            <div className="mb-16">
                <img
                    src={fran}
                    alt="Logo"
                    // className="mx-auto h-96 rounded-full border-4 border-[color:var(--color-primary)] shadow-md object-cover"
                    className="mx-auto h-96 rounded-full border-4 border-[color:var(--color-primary)] shadow-md object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[color:var(--color-primary)] mb-6">
                {t('home.greeting', '¡Hola! Soy Fran Pizzichini')}
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-700 font-medium mb-6">
                {t('home.role', 'Desarrollador Web · Diseñador UX/UI · Periodista Digital')}
            </h2>

            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                {t(
                    'home.description',
                    'Combino creatividad, estrategia y código para construir experiencias digitales que conectan. Con experiencia en startups y proyectos freelance, desarrollo productos visualmente atractivos, funcionales y centrados en el usuario.'
                )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <a
                    href="#projects"
                    className="px-6 py-3 border border-[color:var(--color-primary)] text-[color:var(--color-primary)] rounded hover:bg-[color:var(--color-primary)] hover:text-white transition"
                >
                    {t('home.projects', 'Ver proyectos')}
                </a>
                <a
                    href="#contact"
                    className="px-6 py-3 border border-[color:var(--color-accent)] text-[color:var(--color-accent)] rounded hover:bg-[color:var(--color-accent)] hover:text-white transition"
                >
                    {t('home.contact', 'Hablemos')}
                </a>
            </div>
        </section>
    );
}
