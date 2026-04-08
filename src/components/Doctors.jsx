import React from 'react';
import './Doctors.css';

const doctors = [
  {
    name: 'Dr. Aurelia Martinez',
    specialty: 'Primary Care',
    image: '/images/doctors/Aurelia_doctor.webp',
  },
  {
    name: 'Dr. Carmen Reyes',
    specialty: 'Internal Medicine',
    image: '/images/doctors/Carmen_doctor.webp',
  },
  {
    name: 'Dr. Ciro Hernandez',
    specialty: 'Cardiology',
    image: '/images/doctors/Ciro_doctor.webp',
  },
  {
    name: 'Dr. Hugo Delgado',
    specialty: 'Family Medicine',
    image: '/images/doctors/Hugo_doctor.webp',
  },
  {
    name: 'Dr. Yamaris Lopez',
    specialty: 'Endocrinology',
    image: '/images/doctors/Yamaris_doctor.webp',
  },
  {
    name: 'Dr. Yanelis Ruiz',
    specialty: 'Dental Care',
    image: '/images/doctors/Yanelis_doctor.webp',
  },
];

const Doctors = () => {
  return (
    <section className="section doctors-section" id="doctors">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Team</span>
          <h2 className="section-title">Meet Our Doctors</h2>
          <p className="section-subtitle">
            Our team of experienced, board-certified physicians is committed to
            delivering personalized care for every patient.
          </p>
        </div>

        <div className="doctors-grid">
          {doctors.map((doctor) => (
            <div className="doctor-card" key={doctor.name}>
              <div className="doctor-card-image">
                <img src={doctor.image} alt={doctor.name} loading="lazy" />
              </div>
              <div className="doctor-card-info">
                <h3 className="doctor-card-name">{doctor.name}</h3>
                <span className="doctor-card-specialty">{doctor.specialty}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
