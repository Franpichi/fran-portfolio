import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Layout from '../components/layout';

export default function ThankYou() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="min-h-screen flex flex-col justify-center items-center px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">✅</h1>
        <h2 className="text-2xl font-bold mb-2">{t('thankyou.title')}</h2>
        <p className="text-gray-600 max-w-xl mb-8">{t('thankyou.description')}</p>

        <div className="flex gap-4">
          <Link
            to="/"
            className="bg-[color:var(--color-primary)] text-white px-6 py-2 rounded-md font-semibold hover:bg-[color:var(--color-primary-light)] transition"
          >
            {t('home.greeting')}
          </Link>
          <Link
            to="/#contact"
            onClick={() => {
              // Scroll manual tras navegación si querés asegurarte:
              setTimeout(() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="border border-[color:var(--color-primary)] text-[color:var(--color-primary)] px-6 py-2 rounded-md font-semibold hover:bg-[color:var(--color-primary)] hover:text-white transition"
          >
            {t('navbar.contact')}
          </Link>
        </div>
      </div>
    </Layout>
  );
}
