// import { useTranslation } from 'react-i18next';
//
// import chronoImg from '../assets/chrono.png';
// import malamboImg from '../assets/malambo.png';
// import worthmoreImg from '../assets/worthmore.png';
//
// const projects = [
//     {
//         key: 'chronocademy',
//         img: chronoImg,
//     },
//     {
//         key: 'malambo',
//         img: malamboImg,
//     },
//     {
//         key: 'worthmore',
//         img: worthmoreImg,
//     },
// ];
//
// export default function Projects() {
//     const { t } = useTranslation();
//
//     return (
//         <section id="projects" className="py-20  px-6 text-center">
//             <div className="max-w-6xl mx-auto">
//                 <h1 className="text-3xl md:text-4xl font-bold text-[color:var(--color-primary)] mb-12">
//                     {t('projects.title')}
//                 </h1>
//
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//                     {projects.map(({ key, img }) => (
//                         <div
//                             key={key}
//                             className="text-left group transition duration-300"
//                         >
//                             <img
//                                 src={img}
//                                 alt={t(`projects.${key}.name`)}
//                                 className="rounded mb-4 w-full h-48 object-cover border border-gray-200 group-hover:shadow-md transition border-4 border-[color:var(--color-primary)] rounded-lg shadow-md"
//                             />
//                             <h2 className="text-xl font-semibold text-[color:var(--color-primary)] mb-1">
//                                 {t(`projects.${key}.name`)}
//                             </h2>
//                             <p className="text-[color:var(--color-accent)] font-medium mb-2">
//                                 {t(`projects.${key}.role`)}
//                             </p>
//                             <p className="text-gray-700 text-sm leading-relaxed">
//                                 {t(`projects.${key}.description`)}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }


import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import chronoImg from '../assets/chrono.png';
import malamboImg from '../assets/malambo.png';
import worthmoreImg from '../assets/worthmore.png';

const projects = [
    {
        key: 'chronocademy',
        img: chronoImg,
    },
    {
        key: 'malambo',
        img: malamboImg,
    },
    {
        key: 'worthmore',
        img: worthmoreImg,
    },
];

export default function Projects() {
    const { t } = useTranslation();

    return (
        <section id="projects" className="py-20 px-6 text-center">
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-[color:var(--color-primary)] mb-12"
                >
                    {t('projects.title')}
                </motion.h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map(({ key, img }, index) => (
                        <motion.div
                            key={key}
                            className="text-left group bg-white rounded-xl border border-slate-200 p-4 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <img
                                src={img}
                                alt={t(`projects.${key}.name`)}
                                className="rounded mb-4 w-full h-48 object-cover border-4 border-[color:var(--color-primary)]"
                            />
                            <h2 className="text-xl font-semibold text-[color:var(--color-primary)] mb-1">
                                {t(`projects.${key}.name`)}
                            </h2>
                            <p className="text-[color:var(--color-accent)] font-medium mb-2">
                                {t(`projects.${key}.role`)}
                            </p>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {t(`projects.${key}.description`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
