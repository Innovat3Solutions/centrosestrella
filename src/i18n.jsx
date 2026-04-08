import { createContext, useContext, useState, useCallback } from 'react';

const translations = {
  en: {
    // Header
    'header.phone': '(305) 982-8810',
    'header.location': 'Miami-Dade & Broward',
    'header.hours': 'Mon - Fri: 8:00 AM - 5:00 PM',
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.insurance': 'Insurances',
    'nav.locations': 'Locations',
    'nav.contact': 'Contact Us',
    'nav.schedule': 'Schedule Appointment',

    // Hero
    'hero.label': 'Serving South Florida Since 1994',
    'hero.title.line1': 'Where Your Health',
    'hero.title.line2': 'Shines Brightest',
    'hero.description': 'Comprehensive primary care with over 15 specialties, all under one roof, serving the communities of Miami-Dade and Broward counties.',
    'hero.btn.call': 'Call  (305) 982-8810',
    'hero.btn.book': 'Book Online',
    'hero.badge.appt': 'Appointment in 24 Hours Guaranteed',
    'hero.badge.home': 'Healthcare at Your Home',
    'hero.float.locations': '6 Locations Open',
    'hero.float.specialties': '15+ Specialties',
    'hero.float.specialties.sub': 'One Location',
    'hero.float.years': '30+ Years',
    'hero.float.years.sub': 'Trusted Care',

    // About
    'about.label': 'About Us',
    'about.title': 'Dedicated to Your Health & Well-Being',
    'about.description': 'Estrella Medical Centers has been serving the South Florida community for over 30 years. Our mission is to provide accessible, high-quality healthcare that puts patients first. With multiple locations across Miami-Dade and Broward counties, we make it easy for families to get the care they need close to home.',
    'about.highlight.1': 'Board-certified physicians and specialists',
    'about.highlight.2': 'Multiple convenient locations across South Florida',
    'about.highlight.3': 'Bilingual staff (English & Spanish)',
    'about.highlight.4': 'Comprehensive in-house diagnostics & pharmacy',
    'about.highlight.5': 'Same-day and walk-in appointments available',
    'about.highlight.6': 'Accepting most major insurance plans',
    'about.btn': 'Explore Our Services',
    'about.badge.number': '30+',
    'about.badge.text': 'Years of\nExcellence',

    // Services
    'services.label': 'What We Offer',
    'services.title': 'Our Medical Services',
    'services.subtitle': 'From primary care to specialized treatments, we provide a full spectrum of healthcare services under one roof.',
    'services.learnMore': 'Learn more',
    'svc.primary.name': 'Primary Care',
    'svc.primary.intro': 'Our board-certified physicians provide personalized, ongoing care to keep you and your family healthy.',
    'svc.primary.bullets': [
      'Annual physicals and wellness exams',
      'Chronic disease management (diabetes, hypertension, etc.)',
      'Preventive screenings and immunizations',
      'Same-day and walk-in appointments available',
    ],
    'svc.dental.name': 'Dental Care',
    'svc.dental.intro': 'Complete dental services in-house so you can take care of your smile without leaving our facility.',
    'svc.dental.bullets': [
      'Routine checkups and professional cleanings',
      'Fillings, crowns, and restorations',
      'Cosmetic dentistry and whitening',
      'Dental X-rays and oral health evaluations',
    ],
    'svc.optometry.name': 'Optometry',
    'svc.optometry.intro': 'Protect your vision with comprehensive eye care and access to prescription eyewear, all on-site.',
    'svc.optometry.bullets': [
      'Complete eye exams and vision testing',
      'Glaucoma and diabetic eye screenings',
      'Prescription glasses and contact lens fittings',
    ],
    'svc.diagnostics.name': 'Diagnostics',
    'svc.diagnostics.intro': 'Get accurate results fast with our in-house diagnostic laboratory and imaging center.',
    'svc.diagnostics.bullets': [
      'Blood work and laboratory testing',
      'X-rays and electrocardiograms (EKGs)',
      'Ultrasound and diagnostic imaging',
      'Quick turnaround for timely treatment decisions',
    ],
    'svc.cardiology.name': 'Cardiology',
    'svc.cardiology.intro': 'Expert cardiovascular care to monitor, manage, and improve your heart health.',
    'svc.cardiology.bullets': [
      'Heart health screenings and risk assessments',
      'EKGs and cardiac monitoring',
      'Blood pressure and cholesterol management',
      'Personalized heart-healthy treatment plans',
    ],
    'svc.pharmacy.name': 'Pharmacy',
    'svc.pharmacy.intro': 'Convenient access to your medications with our on-site pharmacy and home delivery services.',
    'svc.pharmacy.bullets': [
      'On-site pharmacy at our locations',
      'Same-day home delivery for Medicare patients',
      'Prescription management and refill coordination',
      'Medication counseling and drug interaction reviews',
    ],
    'svc.endocrinology.name': 'Endocrinology',
    'svc.endocrinology.intro': 'Specialized care for hormonal and metabolic conditions with personalized treatment plans.',
    'svc.endocrinology.bullets': [
      'Diabetes management and insulin therapy',
      'Thyroid disorder diagnosis and treatment',
      'Hormonal imbalance evaluations',
      'Ongoing monitoring and lab coordination',
    ],

    // Premium Services
    'premium.label': 'Added Benefits',
    'premium.title': 'Premium Patient Services',
    'premium.subtitle': "Beyond medical care, we provide complimentary services to ensure our patients' comfort and well-being.",
    'premium.transport.title': 'Medical Transportation',
    'premium.transport.desc': 'Transportation to and from your medical appointments across South Florida.',
    'premium.pharmacy.title': 'Pharmacy Delivery',
    'premium.pharmacy.desc': 'Convenient prescription delivery right to your doorstep.',
    'premium.telemedicine.title': 'Telemedicine',
    'premium.telemedicine.desc': 'Virtual medical consultations from the comfort of your home, available for follow-ups and routine visits.',
    'premium.social.title': 'Social Work Services',
    'premium.social.desc': 'Dedicated social workers to help navigate benefits, resources, and community support.',

    // Insurance
    'insurance.label': 'Insurance',
    'insurance.title': 'Accepted Insurance Plans',
    'insurance.subtitle': 'We accept most major Medicare Advantage and managed care plans. Contact us to verify your coverage.',
    'insurance.note': "Don't see your plan? Call us at",
    'insurance.note.end': 'to check if we accept your insurance.',

    // Locations
    'locations.label': 'Find Us',
    'locations.title': 'Our Locations',
    'locations.subtitle': 'Conveniently located across Miami-Dade and Broward counties to serve you and your family.',
    'locations.directions': 'Get Directions',
    'locations.hours.mf': 'Mon-Fri: 8am - 5pm',
    'locations.hours.ms': 'Mon-Sat: 8am - 3pm',
    'locations.hours.call': 'Call to confirm',

    // Testimonials
    'testimonials.label': 'Testimonials',
    'testimonials.title': 'What Our Patients Say',
    'testimonials.subtitle': 'Real stories from real patients who trust Estrella Medical Centers with their healthcare needs.',
    'testimonial.1.name': 'Maria G.',
    'testimonial.1.text': 'The doctors and staff at Estrella are incredibly caring. They take the time to listen and explain everything thoroughly. Best medical experience I have had in South Florida.',
    'testimonial.2.name': 'Carlos R.',
    'testimonial.2.text': 'I love the convenience of having primary care, dental, and pharmacy all in one location. The transportation service has been a lifesaver for my parents.',
    'testimonial.3.name': 'Ana P.',
    'testimonial.3.text': 'The staff genuinely cares about patients and always follows up. The bilingual staff makes communication so easy for my family.',

    // CTA
    'cta.title': 'Ready to Take the Next Step?',
    'cta.subtitle': 'Schedule your appointment today and experience the Estrella difference. Our friendly staff is ready to help you.',
    'cta.btn.book': 'Book Appointment',

    // Footer
    'footer.description': 'Providing exceptional medical care and comprehensive wellness services to the communities of Miami-Dade and Broward counties.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contactUs': 'Contact Us',
    'footer.locations.text': 'Multiple locations across Miami-Dade & Broward',
    'footer.email': 'info@estrellamedicalcenters.com',
    'footer.copyright': 'Estrella Medical Centers. All Rights Reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.hipaa': 'HIPAA Notice',
  },
  es: {
    // Header
    'header.phone': '(305) 982-8810',
    'header.location': 'Miami-Dade & Broward',
    'header.hours': 'Lun - Vie: 8:00 AM - 5:00 PM',
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Nosotros',
    'nav.services': 'Servicios',
    'nav.insurance': 'Seguros',
    'nav.locations': 'Ubicaciones',
    'nav.contact': 'Cont\u00e1ctenos',
    'nav.schedule': 'Agendar Cita',

    // Hero
    'hero.label': 'Sirviendo al Sur de Florida Desde 1994',
    'hero.title.line1': 'Donde su Salud',
    'hero.title.line2': 'Brilla M\u00e1s',
    'hero.description': 'Atenci\u00f3n primaria integral con m\u00e1s de 15 especialidades, todo bajo un mismo techo, sirviendo a las comunidades de Miami-Dade y Broward.',
    'hero.btn.call': 'Llamar  (305) 982-8810',
    'hero.btn.book': 'Reservar en L\u00ednea',
    'hero.badge.appt': 'Cita en 24 Horas Garantizada',
    'hero.badge.home': 'La Salud en su Hogar',
    'hero.float.locations': '6 Ubicaciones Abiertas',
    'hero.float.specialties': '15+ Especialidades',
    'hero.float.specialties.sub': 'Una Ubicaci\u00f3n',
    'hero.float.years': '30+ A\u00f1os',
    'hero.float.years.sub': 'Atenci\u00f3n Confiable',

    // About
    'about.label': 'Sobre Nosotros',
    'about.title': 'Dedicados a su Salud y Bienestar',
    'about.description': 'Estrella Medical Centers ha servido a la comunidad del Sur de Florida por m\u00e1s de 30 a\u00f1os. Nuestra misi\u00f3n es brindar atenci\u00f3n m\u00e9dica accesible y de alta calidad que pone al paciente primero. Con m\u00faltiples ubicaciones en los condados de Miami-Dade y Broward, facilitamos que las familias reciban la atenci\u00f3n que necesitan cerca de su hogar.',
    'about.highlight.1': 'M\u00e9dicos y especialistas certificados',
    'about.highlight.2': 'M\u00faltiples ubicaciones convenientes en el Sur de Florida',
    'about.highlight.3': 'Personal biling\u00fce (Ingl\u00e9s y Espa\u00f1ol)',
    'about.highlight.4': 'Diagn\u00f3sticos y farmacia en el mismo lugar',
    'about.highlight.5': 'Citas el mismo d\u00eda y sin cita previa disponibles',
    'about.highlight.6': 'Aceptamos la mayor\u00eda de los seguros principales',
    'about.btn': 'Explorar Nuestros Servicios',
    'about.badge.number': '30+',
    'about.badge.text': 'A\u00f1os de\nExcelencia',

    // Services
    'services.label': 'Lo Que Ofrecemos',
    'services.title': 'Nuestros Servicios M\u00e9dicos',
    'services.subtitle': 'Desde atenci\u00f3n primaria hasta tratamientos especializados, ofrecemos un espectro completo de servicios de salud bajo un mismo techo.',
    'services.learnMore': 'M\u00e1s informaci\u00f3n',
    'svc.primary.name': 'Atenci\u00f3n Primaria',
    'svc.primary.intro': 'Nuestros m\u00e9dicos certificados brindan atenci\u00f3n personalizada y continua para mantenerlo a usted y su familia saludables.',
    'svc.primary.bullets': [
      'Ex\u00e1menes f\u00edsicos anuales y chequeos de bienestar',
      'Manejo de enfermedades cr\u00f3nicas (diabetes, hipertensi\u00f3n, etc.)',
      'Pruebas preventivas e inmunizaciones',
      'Citas el mismo d\u00eda y sin cita previa disponibles',
    ],
    'svc.dental.name': 'Servicios Dentales',
    'svc.dental.intro': 'Servicios dentales completos en nuestras instalaciones para que cuide su sonrisa sin salir de nuestro centro.',
    'svc.dental.bullets': [
      'Chequeos de rutina y limpiezas profesionales',
      'Empastes, coronas y restauraciones',
      'Odontolog\u00eda cosm\u00e9tica y blanqueamiento',
      'Radiograf\u00edas dentales y evaluaciones de salud oral',
    ],
    'svc.optometry.name': '\u00d3ptica',
    'svc.optometry.intro': 'Proteja su visi\u00f3n con atenci\u00f3n ocular integral y acceso a lentes recetados, todo en el mismo lugar.',
    'svc.optometry.bullets': [
      'Ex\u00e1menes oculares completos y pruebas de visi\u00f3n',
      'Pruebas de glaucoma y evaluaci\u00f3n ocular diab\u00e9tica',
      'Lentes recetados y adaptaci\u00f3n de lentes de contacto',
    ],
    'svc.diagnostics.name': 'Diagn\u00f3sticos',
    'svc.diagnostics.intro': 'Obtenga resultados precisos r\u00e1pidamente con nuestro laboratorio y centro de im\u00e1genes en las instalaciones.',
    'svc.diagnostics.bullets': [
      'An\u00e1lisis de sangre y pruebas de laboratorio',
      'Rayos X y electrocardiogramas (EKGs)',
      'Ultrasonido e im\u00e1genes diagn\u00f3sticas',
      'Resultados r\u00e1pidos para decisiones de tratamiento oportunas',
    ],
    'svc.cardiology.name': 'Cardiolog\u00eda',
    'svc.cardiology.intro': 'Atenci\u00f3n cardiovascular experta para monitorear, manejar y mejorar su salud card\u00edaca.',
    'svc.cardiology.bullets': [
      'Evaluaciones de salud card\u00edaca y riesgo',
      'EKGs y monitoreo card\u00edaco',
      'Manejo de presi\u00f3n arterial y colesterol',
      'Planes de tratamiento personalizados para el coraz\u00f3n',
    ],
    'svc.pharmacy.name': 'Farmacia',
    'svc.pharmacy.intro': 'Acceso conveniente a sus medicamentos con nuestra farmacia en el lugar y servicios de entrega a domicilio.',
    'svc.pharmacy.bullets': [
      'Farmacia en nuestras ubicaciones',
      'Entrega el mismo d\u00eda a domicilio para pacientes de Medicare',
      'Gesti\u00f3n de recetas y coordinaci\u00f3n de recargas',
      'Asesor\u00eda sobre medicamentos y revisi\u00f3n de interacciones',
    ],
    'svc.endocrinology.name': 'Endocrinolog\u00eda',
    'svc.endocrinology.intro': 'Atenci\u00f3n especializada para condiciones hormonales y metab\u00f3licas con planes de tratamiento personalizados.',
    'svc.endocrinology.bullets': [
      'Manejo de diabetes y terapia de insulina',
      'Diagn\u00f3stico y tratamiento de trastornos de tiroides',
      'Evaluaciones de desequilibrio hormonal',
      'Monitoreo continuo y coordinaci\u00f3n de laboratorio',
    ],

    // Premium Services
    'premium.label': 'Beneficios Adicionales',
    'premium.title': 'Servicios Premium para Pacientes',
    'premium.subtitle': 'M\u00e1s all\u00e1 de la atenci\u00f3n m\u00e9dica, brindamos servicios complementarios para asegurar la comodidad y bienestar de nuestros pacientes.',
    'premium.transport.title': 'Transporte M\u00e9dico',
    'premium.transport.desc': 'Transporte hacia y desde sus citas m\u00e9dicas en todo el Sur de Florida.',
    'premium.pharmacy.title': 'Entrega de Farmacia',
    'premium.pharmacy.desc': 'Entrega conveniente de recetas directamente a su puerta.',
    'premium.telemedicine.title': 'Telemedicina',
    'premium.telemedicine.desc': 'Consultas m\u00e9dicas virtuales desde la comodidad de su hogar, disponibles para seguimientos y visitas de rutina.',
    'premium.social.title': 'Servicios de Trabajo Social',
    'premium.social.desc': 'Trabajadores sociales dedicados para ayudar a navegar beneficios, recursos y apoyo comunitario.',

    // Insurance
    'insurance.label': 'Seguros',
    'insurance.title': 'Planes de Seguro Aceptados',
    'insurance.subtitle': 'Aceptamos la mayor\u00eda de los planes Medicare Advantage y de atenci\u00f3n administrada. Cont\u00e1ctenos para verificar su cobertura.',
    'insurance.note': '\u00bfNo ve su plan? Ll\u00e1menos al',
    'insurance.note.end': 'para verificar si aceptamos su seguro.',

    // Locations
    'locations.label': 'Enc\u00faentrenos',
    'locations.title': 'Nuestras Ubicaciones',
    'locations.subtitle': 'Convenientemente ubicados en los condados de Miami-Dade y Broward para servirle a usted y su familia.',
    'locations.directions': 'C\u00f3mo Llegar',
    'locations.hours.mf': 'Lun-Vie: 8am - 5pm',
    'locations.hours.ms': 'Lun-S\u00e1b: 8am - 3pm',
    'locations.hours.call': 'Llame para confirmar',

    // Testimonials
    'testimonials.label': 'Testimonios',
    'testimonials.title': 'Lo Que Dicen Nuestros Pacientes',
    'testimonials.subtitle': 'Historias reales de pacientes reales que conf\u00edan en Estrella Medical Centers para sus necesidades de salud.',
    'testimonial.1.name': 'Mar\u00eda G.',
    'testimonial.1.text': 'Los doctores y el personal de Estrella son incre\u00edblemente atentos. Se toman el tiempo para escuchar y explicar todo a fondo. La mejor experiencia m\u00e9dica que he tenido en el Sur de Florida.',
    'testimonial.2.name': 'Carlos R.',
    'testimonial.2.text': 'Me encanta la conveniencia de tener atenci\u00f3n primaria, dental y farmacia todo en un solo lugar. El servicio de transporte ha sido una bendici\u00f3n para mis padres.',
    'testimonial.3.name': 'Ana P.',
    'testimonial.3.text': 'El personal realmente se preocupa por los pacientes y siempre hace seguimiento. El personal biling\u00fce facilita mucho la comunicaci\u00f3n para mi familia.',

    // CTA
    'cta.title': '\u00bfListo para Dar el Siguiente Paso?',
    'cta.subtitle': 'Agende su cita hoy y experimente la diferencia Estrella. Nuestro amable personal est\u00e1 listo para ayudarle.',
    'cta.btn.book': 'Agendar Cita',

    // Footer
    'footer.description': 'Brindando atenci\u00f3n m\u00e9dica excepcional y servicios integrales de bienestar a las comunidades de Miami-Dade y Broward.',
    'footer.quickLinks': 'Enlaces R\u00e1pidos',
    'footer.services': 'Servicios',
    'footer.contactUs': 'Cont\u00e1ctenos',
    'footer.locations.text': 'M\u00faltiples ubicaciones en Miami-Dade y Broward',
    'footer.email': 'info@estrellamedicalcenters.com',
    'footer.copyright': 'Estrella Medical Centers. Todos los Derechos Reservados.',
    'footer.privacy': 'Pol\u00edtica de Privacidad',
    'footer.terms': 'T\u00e9rminos de Servicio',
    'footer.hipaa': 'Aviso HIPAA',
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('estrella-lang') || 'en';
    } catch {
      return 'en';
    }
  });

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'en' ? 'es' : 'en';
      try { localStorage.setItem('estrella-lang', next); } catch {}
      return next;
    });
  }, []);

  const t = useCallback(
    (key) => translations[lang]?.[key] ?? translations.en[key] ?? key,
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
