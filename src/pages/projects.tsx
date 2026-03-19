import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import chronoImg from '../assets/chrono.png';
import malamboImg from '../assets/malambo.png';
import worthmoreImg from '../assets/worthmore.png';
import flowlioImg from '../assets/flowlioImg.png';
import n8nImg from '../assets/n8nImg.png';
import exilesImg from '../assets/exilesImg.png';
import rumblaImg from '../assets/rumbaImg.png';
import vikinorImg from '../assets/vikinorImg.png';

type Project = {
    key: string;
    img: string | null;
    gradient?: string;
    emoji?: string;
    isNew?: boolean;
};

const projects: Project[] = [
    { key: 'rumbla', img: rumblaImg, gradient: 'from-[#00c8b4] to-[#0ea5e9]', emoji: '🗺️', isNew: true },
    { key: 'vikinor', img: vikinorImg, gradient: 'from-[#0ea5e9] to-[#6366f1]', emoji: '⚡', isNew: true },
    { key: 'chronocademy', img: chronoImg },
    { key: 'malambo', img: malamboImg },
    { key: 'worthmore', img: worthmoreImg },
    { key: 'flowlio', img: flowlioImg },
    { key: 'n8n', img: n8nImg },
    { key: 'exiles', img: exilesImg },
];

export default function Projects() {
    const { t } = useTranslation();

    return (
        <section id="projects" className="py-28 px-6 relative overflow-hidden">
            <div className="absolute left-0 top-1/2 w-72 h-72 bg-[rgba(0,200,180,0.04)] rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="tag mb-4 inline-block">{t('navbar.projects')}</span>
                    <h2
                        className="text-4xl md:text-5xl font-bold text-[#e8f4f2]"
                        style={{ fontFamily: 'Syne, sans-serif' }}
                    >
                        {t('projects.title')}
                    </h2>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-[#00c8b4] to-[#0ea5e9] rounded-full mt-4" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map(({ key, img, gradient, emoji, isNew }, index) => (
                        <motion.div
                            key={key}
                            className="group relative rounded-2xl overflow-hidden border border-[rgba(0,200,180,0.12)] bg-[#0a1e2e] hover:border-[rgba(0,200,180,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,200,180,0.12)]"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                        >
                            <div className="relative h-44 overflow-hidden">
                                {img ? (
                                    <img
                                        src={img}
                                        alt={t(`projects.${key}.name`)}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                                        <span className="text-5xl">{emoji}</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e2e] via-transparent to-transparent opacity-80" />
                                {isNew && (
                                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#00c8b4] text-[#040d14]">
                                        New
                                    </div>
                                )}
                            </div>

                            <div className="p-5">
                                <h3
                                    className="text-lg font-bold text-[#e8f4f2] mb-1"
                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                >
                                    {t(`projects.${key}.name`)}
                                </h3>
                                <p className="text-xs font-semibold text-[#00c8b4] mb-3 uppercase tracking-wide">
                                    {t(`projects.${key}.role`)}
                                </p>
                                <p className="text-[#7fa8a0] text-sm leading-relaxed">
                                    {t(`projects.${key}.description`)}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
