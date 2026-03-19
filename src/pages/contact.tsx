import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-4"
        >
          {t('contact.title', 'Contacto')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-textSecondary max-w-xl mx-auto mb-8"
        >
          {t(
            'contact.description',
            '¿Tienes una idea o un proyecto en mente? Estoy abierto a colaborar en proyectos interesantes.'
          )}
        </motion.p>
        <form
          action="https://formspree.io/f/mayourform" // coloca tu endpoint real
          method="POST"
          className="grid gap-6 max-w-lg mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder={t('contact.name', 'Nombre')}
            className="w-full rounded-md bg-card border border-slate-700 p-3 text-sm text-white focus:border-accent focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t('contact.email', 'Correo electrónico')}
            className="w-full rounded-md bg-card border border-slate-700 p-3 text-sm text-white focus:border-accent focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder={t('contact.message', 'Mensaje')}
            className="w-full h-32 rounded-md bg-card border border-slate-700 p-3 text-sm text-white focus:border-accent focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="mt-4 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500"
          >
            {t('contact.send', 'Enviar mensaje')}
          </button>
        </form>
      </div>
    </section>
  );
}
