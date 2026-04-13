import { useLanguage } from '../i18n';
import './Insurance.css';

const row1 = [
  { name: 'Aetna', src: '/images/insurance/aetna.png' },
  { name: 'Florida Blue', src: '/images/insurance/39.png' },
  { name: 'CarePlus', src: '/images/insurance/CarePlus-Health-Plans-Logo-1.png' },
  { name: 'Molina Healthcare', src: '/images/insurance/molina.webp' },
  { name: 'Oscar Health', src: '/images/insurance/41.png' },
];

const row2 = [
  { name: 'Simply', src: '/images/insurance/simply.png' },
  { name: 'Gold Kidney Health Plan', src: '/images/insurance/36.png' },
  { name: 'Florida Community Care', src: '/images/insurance/37.png' },
  { name: 'AmeriHealth Caritas', src: '/images/insurance/38.png' },
  { name: 'Ambetter', src: '/images/insurance/40.png' },
];

const LogoCard = ({ name, src }) => (
  <div className="marquee-logo-card">
    <img src={src} alt={name} loading="lazy" />
  </div>
);

const Insurance = () => {
  const { t } = useLanguage();

  return (
    <section className="section insurance-section" id="insurance">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('insurance.label')}</span>
          <h2 className="section-title">{t('insurance.title')}</h2>
          <p className="section-subtitle">{t('insurance.subtitle')}</p>
        </div>
      </div>

      {/* Row 1: scrolls left */}
      <div className="marquee-wrapper">
        <div className="marquee-track marquee-left">
          {[...row1, ...row1, ...row1].map((logo, i) => (
            <LogoCard key={`r1-${i}`} {...logo} />
          ))}
        </div>
      </div>

      {/* Row 2: scrolls right */}
      <div className="marquee-wrapper marquee-wrapper-2">
        <div className="marquee-track marquee-right">
          {[...row2, ...row2, ...row2].map((logo, i) => (
            <LogoCard key={`r2-${i}`} {...logo} />
          ))}
        </div>
      </div>

      <div className="container">
        <p className="insurance-note">
          {t('insurance.note')} <strong><a href="tel:+13059828810">(305) 982-8810</a></strong> {t('insurance.note.end')}
        </p>
      </div>
    </section>
  );
};

export default Insurance;
