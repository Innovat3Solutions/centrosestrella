import { LanguageProvider } from './i18n';
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
      </div>
    </LanguageProvider>
  );
}

export default App;
