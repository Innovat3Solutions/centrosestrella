import { Phone, Calendar } from 'lucide-react';
import { useLanguage } from '../i18n';
import './CTA.css';

const CTA = () => {
  const { t } = useLanguage();

  return (
    <section className="cta-section">
      <div className="cta-bg">
        <img
          src="/images/about/candid-moment.webp"
          alt="Caring medical staff"
          loading="lazy"
        />
        <div className="cta-overlay" />
      </div>
      <div className="container cta-content">
        <h2 className="cta-title">{t('cta.title')}</h2>
        <p className="cta-subtitle">{t('cta.subtitle')}</p>
        <div className="cta-actions">
          <a href="tel:+13059828810" className="btn-primary">
            <Calendar size={18} />
            {t('cta.btn.book')}
          </a>
          <a href="tel:+13059828810" className="btn-outline-white">
            <Phone size={18} />
            (305) 982-8810
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
