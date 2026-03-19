import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      key: 'ux',
      icon: '🎨',
    },
    {
      key: 'dev',
      icon: '💻',
    },
    {
      key: 'strategy',
      icon: '📈',
    },
  ];

  return (
    <section className="py-24 bg-secondary text-center" id="services">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-12"
        >
          {t('services.title', 'Servicios')}
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ key, icon }, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-slate-800 hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h2 className="text-xl font-semibold text-white mb-2">
                {t(`services.${key}.name`)}
              </h2>
              <p className="text-textSecondary text-sm leading-relaxed">
                {t(`services.${key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
