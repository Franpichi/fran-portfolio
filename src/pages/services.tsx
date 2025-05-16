// import { useTranslation } from 'react-i18next';
// import brandingImg from '../assets/branding.png';
// import marketingImg from '../assets/marketing.png';
// import devWebImg from '../assets/devWeb.png';
// import uxDesingImg from '../assets/uxDesing.png';
//
// const services = [
//     { key: 'web', img: devWebImg },
//     { key: 'design', img: uxDesingImg },
//     { key: 'branding', img: brandingImg },
//     { key: 'marketing', img: marketingImg },
// ];
//
// export default function Services() {
//     const { t } = useTranslation();
//
//     return (
//         <section id="services" className="py-20 px-6  text-center">
//             <div className="max-w-5xl mx-auto">
//                 <h1 className="text-3xl md:text-4xl font-bold text-[color:var(--color-primary)] mb-12">
//                     {t('services.title')}
//                 </h1>
//
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//                     {services.map(({ key, img }) => (
//                         <div
//                             key={key}
//                             className="p-6 border border-gray-200 rounded-lg bg-white text-left hover:shadow transition"
//                         >
//                             <img
//                                 src={img}
//                                 alt={t(`services.${key}.title`)}
//                                 className="w-full h-40 object-cover rounded mb-4 border"
//                             />
//                             <h2 className="text-xl font-semibold text-[color:var(--color-primary)] mb-2">
//                                 {t(`services.${key}.title`)}
//                             </h2>
//                             <p className="text-gray-700 text-sm leading-relaxed">
//                                 {t(`services.${key}.description`)}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }


import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import brandingImg from '../assets/branding.png';
import marketingImg from '../assets/marketing.png';
import devWebImg from '../assets/devWeb.png';
import uxDesingImg from '../assets/uxDesing.png';

const services = [
    { key: 'web', img: devWebImg },
    { key: 'design', img: uxDesingImg },
    { key: 'branding', img: brandingImg },
    { key: 'marketing', img: marketingImg },
];

export default function Services() {
    const { t } = useTranslation();

    return (
        <section id="services" className="py-20 px-6 text-center">
            <div className="max-w-5xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-[color:var(--color-primary)] mb-12"
                >
                    {t('services.title')}
                </motion.h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {services.map(({ key, img }, index) => (
                        <motion.div
                            key={key}
                            className="p-6 border border-gray-200 rounded-xl bg-white text-left shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <img
                                src={img}
                                alt={t(`services.${key}.title`)}
                                className="w-full h-40 object-cover rounded mb-4 border"
                            />
                            <h2 className="text-xl font-semibold text-[color:var(--color-primary)] mb-2">
                                {t(`services.${key}.title`)}
                            </h2>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {t(`services.${key}.description`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
