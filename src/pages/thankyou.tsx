import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function ThankYou() {
    const { t } = useTranslation();

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col justify-center items-center px-4 py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,200,180,0.06)_0%,transparent_70%)] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="text-6xl mb-6">✦</div>
                    <h1
                        className="text-4xl md:text-5xl font-bold mb-4"
                        style={{
                            fontFamily: 'Syne, sans-serif',
                            background: 'linear-gradient(135deg, #00c8b4, #0ea5e9)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        {t('thankyou.title')}
                    </h1>
                    <p className="text-[#7fa8a0] max-w-md mx-auto mb-10 leading-relaxed">
                        {t('thankyou.description')}
                    </p>

                    <div className="flex gap-4 justify-center">
                        <Link
                            to="/"
                            className="px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 hover:opacity-90"
                            style={{
                                background: 'linear-gradient(135deg, #00c8b4, #0ea5e9)',
                                color: '#040d14',
                                fontFamily: 'Syne, sans-serif',
                            }}
                        >
                            ← Back home
                        </Link>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </>
    );
}
