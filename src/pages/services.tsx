import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import brandingImg from '../assets/branding.png';
import marketingImg from '../assets/marketing.png';
import devWebImg from '../assets/devWeb.png';
import uxDesingImg from '../assets/uxDesing.png';

const services = [
    { key: 'web', img: devWebImg, icon: '⚙️' },
    { key: 'design', img: uxDesingImg, icon: '✦' },
    { key: 'branding', img: brandingImg, icon: '◈' },
    { key: 'marketing', img: marketingImg, icon: '◎' },
];

export default function Services() {
    const { t } = useTranslation();

    return (
        <section id="services" className="py-28 px-6 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-[rgba(14,165,233,0.04)] rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="tag mb-4 inline-block">{t('navbar.services')}</span>
                    <h2
                        className="text-4xl md:text-5xl font-bold text-[#e8f4f2]"
                        style={{ fontFamily: 'Syne, sans-serif' }}
                    >
                        {t('services.title')}
                    </h2>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-[#00c8b4] to-[#0ea5e9] rounded-full mt-4" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {services.map(({ key, img, icon }, index) => (
                        <motion.div
                            key={key}
                            className="group rounded-2xl overflow-hidden border border-[rgba(0,200,180,0.12)] bg-[#0a1e2e] hover:border-[rgba(0,200,180,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,200,180,0.1)]"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="relative h-36 overflow-hidden">
                                <img
                                    src={img}
                                    alt={t(`services.${key}.title`)}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e2e] to-transparent" />
                                <span className="absolute bottom-3 left-5 text-2xl">{icon}</span>
                            </div>

                            <div className="p-6">
                                <h3
                                    className="text-lg font-bold text-[#e8f4f2] mb-3"
                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                >
                                    {t(`services.${key}.title`)}
                                </h3>
                                <p className="text-[#7fa8a0] text-sm leading-relaxed">
                                    {t(`services.${key}.description`)}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
