import { Helmet } from 'react-helmet';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Services from './pages/services';
import Contact from './pages/contact';
import ThankYou from './pages/thankyou';
import Footer from './components/footer';

import { Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <Helmet>
                            <title>Fran Pizzichini – Portfolio Web</title>
                            <meta
                                name="description"
                                content="Portfolio de Fran Pizzichini. Desarrollo web, diseño visual y comunicación estratégica para proyectos digitales únicos."
                            />
                            <meta property="og:title" content="Fran Pizzichini – Portfolio Web" />
                            <meta
                                property="og:description"
                                content="Desarrollador Full Stack, diseñador UI/UX y comunicador digital. Un perfil creativo y técnico para llevar tu idea al siguiente nivel."
                            />
                            <meta property="og:image" content="/logoFran.png" />
                            <meta property="og:url" content="https://fran-portfolio.vercel.app" />
                            <meta name="twitter:card" content="summary_large_image" />
                        </Helmet>


                        <Navbar />
                        <Home />
                        <About />
                        <Projects />
                        <Services />
                        <Contact />
                        <Footer />
                    </>
                }
            />
            <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
    );
}
