import { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../i18n';
import './Header.css';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      {/* Top Bar — desktop only */}
      <div className="header-top">
        <div className="container header-top-content">
          <div className="header-contact-items">
            <a href="tel:+13059828810" className="contact-item">
              <Phone size={14} />
              (305) 982-8810
            </a>
          </div>
          <div className="header-hours">
            <Clock size={14} />
            {t('header.hours')}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="navbar container">
        {/* Mobile left action */}
        <button className="lang-toggle-btn navbar-lang-mobile" onClick={toggleLang} aria-label="Switch language">
          <Globe size={16} />
          <span>{lang === 'en' ? 'ES' : 'EN'}</span>
        </button>

        <a href="#home" className="navbar-brand">
          <img
            src="/images/logos/Logo_estrella.png"
            alt="Estrella Medical Centers"
            className="logo"
          />
        </a>

        <div className="navbar-actions">
          <button className="lang-toggle-btn navbar-lang-desktop" onClick={toggleLang} aria-label="Switch language">
            <Globe size={16} />
            <span>{lang === 'en' ? 'ES' : 'EN'}</span>
          </button>
          <a href="tel:+13059828810" className="btn-primary btn-sm navbar-phone-btn">
            <Phone size={14} />
            (305) 982-8810
          </a>
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop nav */}
        <ul className="navbar-menu-desktop">
          <li><a href="#home">{t('nav.home')}</a></li>
          <li><a href="#about">{t('nav.about')}</a></li>
          <li><a href="#services">{t('nav.services')}</a></li>
          <li><a href="#insurance">{t('nav.insurance')}</a></li>
          <li><a href="#locations">{t('nav.locations')}</a></li>
        </ul>
      </nav>

      {/* Mobile full-screen menu */}
      {mobileOpen && <div className="mobile-backdrop" onClick={() => setMobileOpen(false)} />}
      <div className={`mobile-menu ${mobileOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu-header">
          <img src="/images/logos/Logo_estrella.png" alt="Estrella" className="mobile-menu-logo" />
          <button className="mobile-menu-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <ul className="mobile-menu-links">
          <li><a href="#home" onClick={() => setMobileOpen(false)}>{t('nav.home')}</a></li>
          <li><a href="#about" onClick={() => setMobileOpen(false)}>{t('nav.about')}</a></li>
          <li><a href="#services" onClick={() => setMobileOpen(false)}>{t('nav.services')}</a></li>
          <li><a href="#insurance" onClick={() => setMobileOpen(false)}>{t('nav.insurance')}</a></li>
          <li><a href="#locations" onClick={() => setMobileOpen(false)}>{t('nav.locations')}</a></li>
        </ul>
        <div className="mobile-menu-footer">
          <a href="tel:+13059828810" className="mobile-menu-call" onClick={() => setMobileOpen(false)}>
            <Phone size={18} />
            (305) 982-8810
          </a>
          <button className="mobile-menu-lang" onClick={() => { toggleLang(); }}>
            <Globe size={16} />
            {lang === 'en' ? 'Espa\u00f1ol' : 'English'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
