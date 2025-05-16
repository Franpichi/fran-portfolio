import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
      <section id="contact" className="py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          {/* Encabezados */}
          <h1 className="text-3xl md:text-4xl font-bold text-[color:var(--color-primary)] mb-4">
            {t('contact.title')}
          </h1>
          <h2 className="text-lg md:text-xl text-gray-700 mb-6">
            {t('contact.subtitle')}
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {t('contact.description')}
          </p>

          {/* Formulario */}
          <form
              action="https://formsubmit.co/franpizzichini@gmail.com"
              method="POST"
              className="space-y-4 text-left"
          >
            <input type="hidden" name="_captcha" value="false" />

            <div>
              <input
                  type="text"
                  name="name"
                  placeholder={t('Name')}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] transition"
              />
            </div>

            <div>
              <input
                  type="email"
                  name="email"
                  placeholder={t('Email')}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] transition"
              />
            </div>

            <div>
            <textarea
                name="message"
                placeholder={t('Message')}
                rows={5}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] transition"
            />
            </div>

            <button
                type="submit"
                className="w-full py-3 rounded-md bg-[color:var(--color-primary)] text-white font-semibold hover:bg-[color:var(--color-primary-light)] transition"
            >
              {t('contact.button')}
            </button>

            <input
                type="hidden"
                name="_next"
                value="http://localhost:5173/thank-you"
            />
          </form>
        </div>
      </section>
  );
}
