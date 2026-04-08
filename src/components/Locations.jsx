import { useState } from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { useLanguage } from '../i18n';
import './Locations.css';

const locationData = [
  {
    id: 1,
    name: 'Estrella Medical - Flagler',
    address: '4795 W Flagler St, Miami, FL 33134',
    phone: '(305) 982-8810',
    hoursKey: 'locations.hours.ms',
    lat: 25.7656,
    lng: -80.2586,
  },
  {
    id: 2,
    name: 'Estrella Medical - Kendall',
    address: '13980 SW 47th St, Miami, FL 33175',
    phone: '(305) 982-8810',
    hoursKey: 'locations.hours.ms',
    lat: 25.7322,
    lng: -80.4065,
  },
  {
    id: 3,
    name: 'Estrella Medical - Doral',
    address: '10305 NW 41st St Suite 227, Doral, FL 33178',
    phone: '(305) 982-8810',
    hoursKey: 'locations.hours.ms',
    lat: 25.8183,
    lng: -80.3659,
  },
  {
    id: 4,
    name: 'Estrella Medical - Hialeah',
    address: '4305 E 8th Ave, Hialeah, FL 33013',
    phone: '(305) 982-8810',
    hoursKey: 'locations.hours.call',
    lat: 25.8576,
    lng: -80.2684,
  },
  {
    id: 5,
    name: 'Estrella Medical - Plantation',
    address: '1860 North Pines Island Rd, Plantation, FL 33322',
    phone: '(305) 982-8810',
    hoursKey: 'locations.hours.mf',
    lat: 26.1256,
    lng: -80.2528,
  },
  {
    id: 6,
    name: 'Estrella Medical - Pembroke Pines',
    address: '1806 N Flamingo Road Suite 280, Pembroke Pines, FL 33028',
    phone: '(305) 982-8810',
    hoursKey: 'locations.hours.mf',
    lat: 26.0154,
    lng: -80.3132,
  },
];

const Locations = () => {
  const [active, setActive] = useState(locationData[0]);
  const { t } = useLanguage();

  const mapSrc = `https://www.google.com/maps?q=${active.lat},${active.lng}&z=14&output=embed`;

  return (
    <section className="section locations-section" id="locations">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('locations.label')}</span>
          <h2 className="section-title">{t('locations.title')}</h2>
          <p className="section-subtitle">{t('locations.subtitle')}</p>
        </div>

        <div className="locations-layout">
          <div className="locations-list">
            {locationData.map((loc) => (
              <button
                key={loc.id}
                className={`location-item ${active.id === loc.id ? 'location-item--active' : ''}`}
                onClick={() => setActive(loc)}
              >
                <div className="location-item-marker">
                  <MapPin size={20} />
                </div>
                <div className="location-item-info">
                  <h4 className="location-item-name">{loc.name}</h4>
                  <p className="location-item-address">{loc.address}</p>
                  <div className="location-item-details">
                    <span><Phone size={13} /> <a href="tel:+13059828810">{loc.phone}</a></span>
                    <span><Clock size={13} /> {t(loc.hoursKey)}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="locations-map-wrapper">
            <iframe
              className="locations-map"
              src={mapSrc}
              title={`Map of ${active.name}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${active.lat},${active.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary locations-directions-btn"
            >
              <Navigation size={16} />
              {t('locations.directions')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
