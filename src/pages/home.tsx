import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import fran from '../assets/foto.png';

export default function Home() {
    const { t } = useTranslation();

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-20 overflow-hidden"
        >
            {/* Background orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[rgba(0,200,180,0.05)] blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[rgba(14,165,233,0.05)] blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
                {/* Text side */}
                <div className="text-left order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="tag mb-6 inline-block">Available for work</span>

                        <h1
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05]"
                            style={{ fontFamily: 'Syne, sans-serif' }}
                        >
                            <span className="text-[#e8f4f2]">{t('home.greeting', 'Hi, I\'m')}</span>
                            <br />
                            <span
                                style={{
                                    background: 'linear-gradient(135deg, #00c8b4 0%, #0ea5e9 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                Fran Pizzichini
                            </span>
                        </h1>

                        <p className="text-base md:text-lg text-[#7fa8a0] leading-relaxed mb-4 font-medium">
                            {t('home.role')}
                        </p>

                        <p className="text-sm md:text-base text-[#7fa8a0]/80 leading-relaxed max-w-lg mb-10">
                            {t('home.description')}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#projects"
                                className="px-7 py-3 rounded-lg font-semibold text-sm tracking-wide transition-all duration-300"
                                style={{
                                    background: 'linear-gradient(135deg, #00c8b4, #0ea5e9)',
                                    color: '#040d14',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                            >
                                {t('home.projects')}
                            </a>
                            <a
                                href="#contact"
                                className="px-7 py-3 rounded-lg font-semibold text-sm tracking-wide border border-[rgba(0,200,180,0.3)] text-[#00c8b4] hover:border-[#00c8b4] hover:bg-[rgba(0,200,180,0.08)] transition-all duration-300"
                            >
                                {t('home.contact')}
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Photo side */}
                <motion.div
                    className="order-1 md:order-2 flex justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <div className="relative">
                        {/* Glow ring */}
                        <div
                            className="absolute inset-0 rounded-full blur-2xl opacity-40"
                            style={{ background: 'radial-gradient(circle, #00c8b4 0%, transparent 70%)' }}
                        />
                        {/* Border ring */}
                        <div
                            className="relative rounded-full p-1"
                            style={{
                                background: 'linear-gradient(135deg, #00c8b4, #0ea5e9, #040d14)',
                            }}
                        >
                            <img
                                src={fran}
                                alt="Fran Pizzichini"
                                className="h-72 w-72 md:h-80 md:w-80 rounded-full object-cover"
                                style={{ background: '#0a1e2e' }}
                            />
                        </div>
                        {/* Floating badge */}
                        <motion.div
                            animate={{ y: [-4, 4, -4] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -bottom-4 -right-4 bg-[#0a1e2e] border border-[rgba(0,200,180,0.25)] rounded-xl px-4 py-2 shadow-xl"
                        >
                            <p className="text-xs text-[#7fa8a0]">Based in</p>
                            <p className="text-sm font-bold text-[#e8f4f2]" style={{ fontFamily: 'Syne, sans-serif' }}>Copenhagen 🇩🇰</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span className="text-xs text-[#7fa8a0]/50 tracking-widest uppercase">scroll</span>
                <div className="w-px h-8 bg-gradient-to-b from-[#00c8b4]/40 to-transparent" />
            </motion.div>
        </section>
    );
}
