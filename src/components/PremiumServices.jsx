import { useRef, useState, useEffect } from 'react';
import { Truck, Pill, Video, HeartHandshake, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n';
import './PremiumServices.css';

const premiumKeys = [
  { key: 'transport', image: '/images/premium/medical-transport-van-in-south-florida-assisting.webp', Icon: Truck },
  { key: 'pharmacy', image: '/images/premium/service-pharmacy.webp', Icon: Pill },
  { key: 'telemedicine', image: '/images/premium/telemedicine.jpg', Icon: Video },
  { key: 'social', image: '/images/premium/social-worker-sitting-beside-elder.webp', Icon: HeartHandshake },
];

const PremiumServices = () => {
  const { t } = useLanguage();
  const scrollRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const scrollTo = (idx) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[idx];
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setActiveIdx(idx);
    }
  };

  const prev = () => scrollTo(Math.max(0, activeIdx - 1));
  const next = () => scrollTo(Math.min(premiumKeys.length - 1, activeIdx + 1));

  // Track scroll position to update active dot
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const cardWidth = el.children[0]?.offsetWidth || 1;
      const gap = 12;
      const idx = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIdx(Math.min(idx, premiumKeys.length - 1));
    };
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section premium-section" id="premium">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('premium.label')}</span>
          <h2 className="section-title">{t('premium.title')}</h2>
          <p className="section-subtitle">{t('premium.subtitle')}</p>
        </div>

        <div className="premium-carousel-wrap">
          <div className="premium-grid" ref={scrollRef}>
            {premiumKeys.map(({ key, image, Icon }) => (
              <div className="premium-card" key={key}>
                <div className="premium-card-image">
                  <img src={image} alt={t(`premium.${key}.title`)} loading="lazy" />
                  <div className="premium-card-overlay" />
                </div>
                <div className="premium-card-content">
                  <div className="premium-card-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{t(`premium.${key}.title`)}</h3>
                  <p>{t(`premium.${key}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile nav controls */}
          <div className="premium-nav">
            <button className="premium-nav-btn" onClick={prev} disabled={activeIdx === 0} aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <div className="premium-dots">
              {premiumKeys.map((_, i) => (
                <button
                  key={i}
                  className={`premium-dot ${activeIdx === i ? 'premium-dot--active' : ''}`}
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button className="premium-nav-btn" onClick={next} disabled={activeIdx === premiumKeys.length - 1} aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;
