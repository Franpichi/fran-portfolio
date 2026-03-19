import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Contact() {
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-28 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(0,200,180,0.06)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="tag mb-4 inline-block">{t('navbar.contact')}</span>
                    <h2
                        className="text-4xl md:text-5xl font-bold text-[#e8f4f2] mb-4"
                        style={{ fontFamily: 'Syne, sans-serif' }}
                    >
                        {t('contact.title')}
                    </h2>
                    <p className="text-[#00c8b4] font-medium mb-2">{t('contact.subtitle')}</p>
                    <p className="text-[#7fa8a0] text-sm leading-relaxed">{t('contact.description')}</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="rounded-2xl border border-[rgba(0,200,180,0.15)] bg-[#0a1e2e] p-8"
                >
                    <form
                        action="https://formsubmit.co/franpizzichini@gmail.com"
                        method="POST"
                        className="space-y-5"
                    >
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://fran-portfolio-kappa.vercel.app/thank-you" />

                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder={t('Name')}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(0,200,180,0.15)] text-[#e8f4f2] placeholder-[#3a5a54] text-sm focus:outline-none focus:border-[#00c8b4] focus:bg-[rgba(0,200,180,0.04)] transition-all duration-200"
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder={t('Email')}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(0,200,180,0.15)] text-[#e8f4f2] placeholder-[#3a5a54] text-sm focus:outline-none focus:border-[#00c8b4] focus:bg-[rgba(0,200,180,0.04)] transition-all duration-200"
                            />
                        </div>

                        <div>
                            <textarea
                                name="message"
                                placeholder={t('Message')}
                                rows={5}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(0,200,180,0.15)] text-[#e8f4f2] placeholder-[#3a5a54] text-sm focus:outline-none focus:border-[#00c8b4] focus:bg-[rgba(0,200,180,0.04)] transition-all duration-200 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
                            style={{
                                background: 'linear-gradient(135deg, #00c8b4, #0ea5e9)',
                                color: '#040d14',
                                fontFamily: 'Syne, sans-serif',
                            }}
                        >
                            {t('contact.button')} →
                        </button>
                    </form>
                </motion.div>

                {/* Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center gap-8 mt-10"
                >
                    {[
                        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/franco-pizzichini/' },
                        { label: 'GitHub', url: 'https://github.com/Franpichi' },
                    ].map(({ label, url }) => (
                        <a
                            key={label}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-[#7fa8a0] hover:text-[#00c8b4] transition-colors duration-200 flex items-center gap-1"
                        >
                            {label} ↗
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
