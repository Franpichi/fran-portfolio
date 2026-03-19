import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import rumblaImg from '../assets/rumbla.png';
import vikinorImg from '../assets/vikinor.png';
import chronoImg from '../assets/chrono.png';
import malamboImg from '../assets/malambo.png';
import worthmoreImg from '../assets/worthmore.png';
import flowlioImg from '../assets/flowlioImg.png';
import n8nImg from '../assets/n8nImg.png';
import exilesImg from '../assets/exilesImg.png';

const projects = [
    {
        key: 'rumbla',
        img: rumblaImg,
    },
    {
        key: 'vikinor',
        img: vikinorImg,
    },
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
    {
        key: 'flowlio',
        img: flowlioImg,
    },
    {
        key: 'n8n',
        img: n8nImg,
    },
    {
        key: 'exiles',
        img: exilesImg,
    },
];

export default function Projects() {
    const { t } = useTranslation();

    return (
        <section id="projects" className="py-24 px-6 text-center bg-slate-950">
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold text-white mb-4"
                >
                    {t('projects.title')}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="max-w-2xl mx-auto text-slate-400 mb-14 text-base md:text-lg"
                >
                    {t('projects.subtitle')}
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map(({ key, img }, index) => (
                        <motion.article
                            key={key}
                            className="text-left group bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={img}
                                    alt={t(`projects.${key}.name`)}
                                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-white mb-2">
                                    {t(`projects.${key}.name`)}
                                </h2>

                                <p className="text-blue-400 font-medium mb-3">
                                    {t(`projects.${key}.role`)}
                                </p>

                                <p className="text-slate-300 text-sm leading-relaxed">
                                    {t(`projects.${key}.description`)}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
