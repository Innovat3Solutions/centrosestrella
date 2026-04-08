import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../i18n';
import './About.css';

const About = () => {
  const { t } = useLanguage();

  const highlights = [
    t('about.highlight.1'),
    t('about.highlight.2'),
    t('about.highlight.3'),
    t('about.highlight.4'),
    t('about.highlight.5'),
    t('about.highlight.6'),
  ];

  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="about-images">
          <div className="about-img-main">
            <img
              src="/images/about/estrella-building.webp"
              alt="Estrella Medical Centers facility"
              loading="lazy"
            />
          </div>
          <div className="about-img-secondary">
            <img
              src="/images/about/candid-moment.webp"
              alt="Estrella Medical team with patient"
              loading="lazy"
            />
          </div>
        </div>

        <div className="about-content">
          <span className="section-label">{t('about.label')}</span>
          <h2 className="section-title" style={{ textAlign: 'left' }}>
            {t('about.title')}
          </h2>
          <p className="about-description">
            {t('about.description')}
          </p>
          <ul className="about-highlights">
            {highlights.map((item) => (
              <li key={item}>
                <CheckCircle size={20} className="about-check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
