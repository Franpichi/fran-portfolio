import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function About() {
    const { t } = useTranslation();

    return (
        <section id="about" className="px-6 py-20 text-center ">
            <motion.div
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-3xl md:text-4xl font-bold text-[color:var(--color-primary)] mb-4">
                    {t('about.title')}
                </h1>
                <div className="w-24 h-1 mx-auto bg-[color:var(--color-accent)] mb-6 rounded-full"></div>
                <h2 className="text-lg md:text-xl text-gray-600 font-medium mb-6">
                    {t('about.intro')}
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {t('about.body')}
                </p>
            </motion.div>
        </section>
    );
}
