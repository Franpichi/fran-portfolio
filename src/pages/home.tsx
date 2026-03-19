import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import fran from '../assets/foto.png';

export default function Home() {
    const { t } = useTranslation();

    return (
        <section
            id="home"
            className="relative overflow-hidden bg-slate-950 px-6 py-24 md:px-10 lg:px-16"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.14),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(15,23,42,0.9),_transparent_40%)]" />

            <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-left"
                >
                    <span className="mb-5 inline-flex rounded-full border border-slate-800 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-300">
                        Copenhagen · Design · Product · Development
                    </span>

                    <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
                        {t('home.greeting', 'Hola, soy Fran Pizzichini')}
                    </h1>

                    <h2 className="mt-5 max-w-3xl text-lg font-medium text-blue-400 md:text-2xl">
                        {t(
                            'home.role',
                            'Desarrollador Full Stack, Diseñador UI/UX y Comunicador Digital'
                        )}
                    </h2>

                    <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                        {t(
                            'home.description',
                            'Combino tecnología, diseño y comunicación para crear experiencias digitales que destacan. Mi enfoque va más allá del código: pienso en el impacto, en el mensaje y en cómo hacer que una marca o producto se sienta único. He trabajado con startups, agencias y clientes que buscaban resultados reales y una identidad fuerte.'
                        )}
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                        >
                            {t('home.projects', 'Ver proyectos')}
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900 px-7 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-blue-500 hover:text-white"
                        >
                            {t('home.contact', 'Contáctame')}
                        </a>
                    </div>

                    <div className="mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                            <p className="text-2xl font-bold text-white">8+</p>
                            <p className="mt-1 text-sm text-slate-400">Projects built</p>
                        </div>
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                            <p className="text-2xl font-bold text-white">3</p>
                            <p className="mt-1 text-sm text-slate-400">Core areas</p>
                        </div>
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                            <p className="text-2xl font-bold text-white">EU</p>
                            <p className="mt-1 text-sm text-slate-400">Based in Copenhagen</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <div className="absolute -right-6 top-8 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
                    <div className="absolute -left-6 bottom-8 h-40 w-40 rounded-full bg-slate-700/30 blur-3xl" />

                    <div className="relative w-full max-w-[430px] overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900 p-3 shadow-2xl">
                        <div className="overflow-hidden rounded-[22px]">
                            <img
                                src={fran}
                                alt="Fran Pizzichini"
                                className="h-[560px] w-full object-cover object-center transition duration-500 hover:scale-[1.02]"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
