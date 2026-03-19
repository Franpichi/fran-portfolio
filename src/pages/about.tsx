import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const skills = [
    'React', 'Next.js', 'TypeScript', 'Node.js',
    'Firebase', 'PostgreSQL', 'Figma', 'Tailwind CSS',
    'Framer Motion', 'n8n', 'UX/UI', 'Branding',
];

export default function About() {
    const { t } = useTranslation();

    return (
        <section id="about" className="px-6 py-28 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgba(14,165,233,0.04)] rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="tag mb-4 inline-block">{t('navbar.about')}</span>
                    <h2
                        className="text-4xl md:text-5xl font-bold text-[#e8f4f2] mb-4"
                        style={{ fontFamily: 'Syne, sans-serif' }}
                    >
                        {t('about.title')}
                    </h2>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-[#00c8b4] to-[#0ea5e9] rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <p className="text-lg text-[#00c8b4] font-medium mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                            {t('about.intro')}
                        </p>
                        <p className="text-[#7fa8a0] leading-relaxed text-base">
                            {t('about.body')}
                        </p>
                    </motion.div>

                    {/* Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-xs uppercase tracking-widest text-[#7fa8a0]/60 mb-6 font-medium">Tech & Tools</p>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, i) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.04 }}
                                    className="px-4 py-2 rounded-lg text-sm font-medium text-[#e8f4f2] border border-[rgba(0,200,180,0.15)] bg-[rgba(0,200,180,0.05)] hover:border-[rgba(0,200,180,0.4)] hover:bg-[rgba(0,200,180,0.1)] transition-all duration-200 cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
