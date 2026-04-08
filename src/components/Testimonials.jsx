import { useRef, useState, useEffect } from 'react';
import { Star, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n';
import './Testimonials.css';

const testimonialKeys = [
  { key: '1', location: 'Estrella Medical - Hialeah', rating: 5 },
  { key: '2', location: 'Estrella Medical - Doral', rating: 5 },
  { key: '3', location: 'Estrella Medical - Kendall', rating: 5 },
];

const Testimonials = () => {
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
  const next = () => scrollTo(Math.min(testimonialKeys.length - 1, activeIdx + 1));

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const cardWidth = el.children[0]?.offsetWidth || 1;
      const gap = 12;
      const idx = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIdx(Math.min(idx, testimonialKeys.length - 1));
    };
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('testimonials.label')}</span>
          <h2 className="section-title">{t('testimonials.title')}</h2>
          <p className="section-subtitle">{t('testimonials.subtitle')}</p>
        </div>

        <div className="testimonials-carousel-wrap">
          <div className="testimonials-grid" ref={scrollRef}>
            {testimonialKeys.map(({ key, location, rating }) => (
              <div className="testimonial-card" key={key}>
                <div className="testimonial-stars">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} size={16} fill="var(--color-yellow)" color="var(--color-yellow)" />
                  ))}
                </div>
                <p className="testimonial-text">&ldquo;{t(`testimonial.${key}.text`)}&rdquo;</p>
                <div className="testimonial-author">
                  <span className="testimonial-name">{t(`testimonial.${key}.name`)}</span>
                  <span className="testimonial-location">
                    <MapPin size={13} />
                    {location}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials-nav">
            <button className="testimonials-nav-btn" onClick={prev} disabled={activeIdx === 0} aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <div className="testimonials-dots">
              {testimonialKeys.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials-dot ${activeIdx === i ? 'testimonials-dot--active' : ''}`}
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button className="testimonials-nav-btn" onClick={next} disabled={activeIdx === testimonialKeys.length - 1} aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
