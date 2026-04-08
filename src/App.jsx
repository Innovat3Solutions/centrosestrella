import { LanguageProvider, useLanguage } from './i18n';
import { Phone } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import PremiumServices from './components/PremiumServices';
import Insurance from './components/Insurance';
import Locations from './components/Locations';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

const MobileCallBar = () => {
  const { t } = useLanguage();
  return (
    <a href="tel:+13059828810" className="mobile-call-bar">
      <Phone size={18} />
      <span>{t('hero.btn.call')}</span>
    </a>
  );
};

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <PremiumServices />
          <Insurance />
          <Locations />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
        <MobileCallBar />
      </div>
    </LanguageProvider>
  );
}

export default App;
