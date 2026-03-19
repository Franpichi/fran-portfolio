import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-6"
        >
          {t('about.title', 'Sobre mí')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-textSecondary leading-relaxed"
        >
          {t(
            'about.description',
            'Soy un híbrido entre desarrollo web, diseño y contenido estratégico. Me apasiona construir productos digitales que tengan sentido y que comuniquen bien. He trabajado para startups, agencias y clientes que buscan resultados reales y una identidad clara.'
          )}
        </motion.p>
      </div>
    </section>
  );
}
