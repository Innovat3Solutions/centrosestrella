import { useState } from 'react';
import { Stethoscope, SmilePlus, Eye, FlaskConical, HeartPulse, Pill, Activity, Check } from 'lucide-react';
import { useLanguage } from '../i18n';
import './Services.css';

const serviceKeys = [
  { key: 'primary', image: '/images/services/primary-care-medical-consultation.webp', Icon: Stethoscope },
  { key: 'dental', image: '/images/services/dental-checkup.webp', Icon: SmilePlus },
  { key: 'optometry', image: '/images/services/optometry-exam.webp', Icon: Eye },
  { key: 'diagnostics', image: '/images/services/lab-technician-drawing-blood.png', Icon: FlaskConical },
  { key: 'cardiology', image: '/images/services/cardiology-exam.webp', Icon: HeartPulse },
  { key: 'pharmacy', image: '/images/services/pharmacy-delivery.webp', Icon: Pill },
  { key: 'endocrinology', image: '/images/services/endocrinology.webp', Icon: Activity },
];

const Services = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const current = serviceKeys[active];

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('services.label')}</span>
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle">{t('services.subtitle')}</p>
        </div>

        <div className="services-layout">
          {/* Left — Service List */}
          <div className="services-list">
            {serviceKeys.map((service, i) => {
              const SvcIcon = service.Icon;
              return (
                <button
                  key={service.key}
                  className={`services-list-item ${active === i ? 'services-list-item--active' : ''} ${i === 0 ? 'services-list-item--primary' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <div className="services-list-icon">
                    <SvcIcon size={20} />
                  </div>
                  <span className="services-list-name">{t(`svc.${service.key}.name`)}</span>
                  <svg className="services-list-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              );
            })}
          </div>

          {/* Right — Detail View */}
          <div className="services-detail">
            <div className="services-detail-image" key={current.key}>
              <img
                src={current.image}
                alt={t(`svc.${current.key}.name`)}
              />
            </div>
            <div className="services-detail-body" key={`body-${current.key}`}>
              <h3 className="services-detail-title">{t(`svc.${current.key}.name`)}</h3>
              <p className="services-detail-intro">{t(`svc.${current.key}.intro`)}</p>
              <ul className="services-detail-list">
                {(t(`svc.${current.key}.bullets`) || []).map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="services-detail-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
