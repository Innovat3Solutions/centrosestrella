import { Phone, Stethoscope, MapPin, Clock, Heart } from 'lucide-react';
import { useLanguage } from '../i18n';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero" id="home">
      {/* Subtle background image */}
      <div className="hero-bg">
        <img
          src="/images/about/estrella-building.webp"
          alt=""
          className="hero-bg-img"
        />
        <div className="hero-bg-fade" />
      </div>

      {/* Decorative shapes */}
      <div className="hero-deco" aria-hidden="true">
        <div className="hero-deco-blob hero-deco-blob--1" />
        <div className="hero-deco-blob hero-deco-blob--2" />
      </div>

      <div className="container hero-grid">
        {/* ---- LEFT COLUMN ---- */}
        <div className="hero-left">
          <span className="hero-pill">
            <Clock size={14} />
            {t('hero.label')}
          </span>

          <h1 className="hero-title">
            <span className="hero-title-dark">{t('hero.title.line1')}</span>
            <span className="hero-title-accent">{t('hero.title.line2')}</span>
          </h1>

          <p className="hero-desc">{t('hero.description')}</p>

          {/* CTA row */}
          <div className="hero-ctas">
            <a href="tel:+13059828810" className="hero-cta hero-cta--primary">
              <Phone size={18} />
              {t('hero.btn.call')}
            </a>
            <a href="#locations" className="hero-cta hero-cta--outline">
              {t('hero.btn.book')}
            </a>
          </div>
        </div>

        {/* ---- RIGHT COLUMN ---- */}
        <div className="hero-right">
          {/* Floating cards */}
          <div className="hero-float hero-float--locations">
            <span className="hero-float-dot" />
            {t('hero.float.locations')}
          </div>

          <div className="hero-float hero-float--specialties">
            <div className="hero-float-icon hero-float-icon--blue">
              <Stethoscope size={20} />
            </div>
            <div className="hero-float-text">
              <strong>{t('hero.float.specialties')}</strong>
              <span>{t('hero.float.specialties.sub')}</span>
            </div>
          </div>

          <div className="hero-float hero-float--years">
            <div className="hero-float-icon hero-float-icon--orange">
              <Heart size={20} />
            </div>
            <div className="hero-float-text">
              <strong>{t('hero.float.years')}</strong>
              <span>{t('hero.float.years.sub')}</span>
            </div>
          </div>

          {/* Team photo */}
          <div className="hero-photo-wrap">
            <img
              src="/images/hero-team.webp"
              alt="Estrella Medical Centers team caring for a patient"
              className="hero-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
