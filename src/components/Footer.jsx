import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../i18n';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <img
            src="/images/logos/Logo_estrella.png"
            alt="Estrella Medical Centers"
            className="footer-logo"
          />
          <p className="footer-description">{t('footer.description')}</p>
          <div className="social-links">
            <a href="https://www.facebook.com/search/top?q=estrella%20medical%20centers" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/estrellamedicalcenters/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.youtube.com/@EstrellaMedicalCenters" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>{t('footer.quickLinks')}</h3>
          <ul>
            <li><a href="#about">{t('nav.about')}</a></li>
            <li><a href="#services">{t('nav.services')}</a></li>
            <li><a href="#insurance">{t('nav.insurance')}</a></li>
            <li><a href="#locations">{t('nav.locations')}</a></li>
          </ul>
        </div>

        <div className="footer-services">
          <h3>{t('footer.services')}</h3>
          <ul>
            <li><a href="#services">{t('svc.primary.name')}</a></li>
            <li><a href="#services">{t('svc.dental.name')}</a></li>
            <li><a href="#services">{t('svc.optometry.name')}</a></li>
            <li><a href="#services">{t('svc.diagnostics.name')}</a></li>
            <li><a href="#services">{t('svc.cardiology.name')}</a></li>
            <li><a href="#services">{t('svc.pharmacy.name')}</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>{t('footer.contactUs')}</h3>
          <ul>
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>{t('footer.locations.text')}</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <a href="tel:+13059828810">(305) 982-8810</a>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <a href="mailto:info@estrellamedicalcenters.com">{t('footer.email')}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
          <div className="footer-bottom-links">
            <a href="#">{t('footer.privacy')}</a>
            <a href="#">{t('footer.terms')}</a>
            <a href="#">{t('footer.hipaa')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
