import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';

export default function ThankYou() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="min-h-screen flex flex-col justify-center items-center px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">✅</h1>
        <h2 className="text-2xl font-bold mb-2">{t('thankyou.title')}</h2>
        <p className="text-gray-600 max-w-xl">{t('thankyou.description')}</p>
      </div>
    </Layout>
  );
}
