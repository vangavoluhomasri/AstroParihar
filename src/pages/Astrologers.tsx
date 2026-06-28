import { Link } from 'react-router-dom';
import { Users, Star } from 'lucide-react';
import '../styles/page.css';

const astrologers = [
  {
    name: 'Acharya Vimal Shastri',
    specialty: 'Vedic Astrology & Marriage',
    experience: '18 yrs',
  },
  {
    name: 'Pandit Rohan Tiwari',
    specialty: 'Numerology & Career',
    experience: '12 yrs',
  },
  {
    name: 'Guru Meera Devi',
    specialty: 'Tarot & Love',
    experience: '9 yrs',
  },
];

export const Astrologers: React.FC = () => {
  return (
    <div className="page-shell">
      <div className="page-hero astrologers-hero">
        <div className="page-copy">
          <span className="page-label">Verified Experts</span>
          <h1>Meet Our Trusted Astrologers</h1>
          <p>Each guide is verified for deep insight and spiritual authenticity. Connect with astrologers who bring wisdom, clarity, and confidence.</p>
          <Link to="/services" className="btn-primary">
            Explore Astrologers
          </Link>
        </div>
        <div className="page-hero-card">
          <Users size={36} />
          <h2>Expert Network</h2>
          <p>Verified professionals in Vedic astrology, numerology, tarot, and vastu ready to guide your journey.</p>
        </div>
      </div>

      <div className="card-grid">
        {astrologers.map((astrologer) => (
          <div key={astrologer.name} className="profile-card">
            <div className="profile-icon">
              <Star size={24} />
            </div>
            <h3>{astrologer.name}</h3>
            <p>{astrologer.specialty}</p>
            <span>{astrologer.experience} experience</span>
          </div>
        ))}
      </div>
    </div>
  );
};
