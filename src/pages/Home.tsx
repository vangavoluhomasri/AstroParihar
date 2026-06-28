import { Link, useNavigate } from 'react-router-dom';
import {
  ChevronRight,
  Sparkles,
  Heart,
  Book,
  Calendar,
  Home as HomeIcon,
  Gift,
  Zap,
  Star,
  Moon,
  Globe2,
  Users,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import '../styles/home.css';

export const Home: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const services = [
    {
      id: 'mantra',
      title: 'AI Mantra Recommendation',
      description: 'Get personalized mantras based on your birth chart and astrological profile.',
      icon: Sparkles,
      color: 'gradient-1',
    },
    {
      id: 'yantra',
      title: 'AI Yantra Recommendation',
      description: 'Discover powerful yantras tailored to your spiritual journey.',
      icon: Book,
      color: 'gradient-2',
    },
    {
      id: 'homa',
      title: 'AI Homa Recommendation',
      description: 'Explore auspicious fire rituals and homas for your well-being.',
      icon: Heart,
      color: 'gradient-3',
    },
    {
      id: 'ishta-devata',
      title: 'Ishta Devata Recommendation',
      description: 'Connect with your celestial deity through personalized guidance.',
      icon: Zap,
      color: 'gradient-4',
    },
    {
      id: 'charity-planner',
      title: 'Charity Planner',
      description: 'Plan meaningful donations aligned with your astrological insights.',
      icon: Gift,
      color: 'gradient-5',
    },
    {
      id: 'fasting-planner',
      title: 'Fasting Planner',
      description: 'Optimize your spiritual practice with recommended fasting days.',
      icon: Calendar,
      color: 'gradient-6',
    },
    {
      id: 'vastu',
      title: 'Interactive Vastu',
      description: 'Transform your space with scientifically-backed vastu principles.',
      icon: HomeIcon,
      color: 'gradient-7',
    },
    {
      id: 'muhurtham',
      title: 'Muhurtham Generator',
      description: 'Find the perfect auspicious time for your important decisions.',
      icon: Calendar,
      color: 'gradient-8',
    },
  ];

  const featuredAstrologers = [
    {
      name: 'Acharya Vimal Shastri',
      specialties: 'Vedic, Marriage',
      languages: 'Hindi · English',
      rate: '₹32 / min',
      years: '18 yrs',
      rating: '4.9',
      reviews: '12,480',
      icon: Moon,
    },
    {
      name: 'Pandit Rohan Tiwari',
      specialties: 'Numerology, Career',
      languages: 'Hindi · Marathi',
      rate: '₹24 / min',
      years: '12 yrs',
      rating: '4.8',
      reviews: '8,721',
      icon: Globe2,
    },
    {
      name: 'Guru Meera Devi',
      specialties: 'Tarot, Love',
      languages: 'English · Hindi',
      rate: '₹22 / min',
      years: '9 yrs',
      rating: '4.7',
      reviews: '5,612',
      icon: Star,
    },
  ];

  const handleServiceClick = (id: string) => {
    if (isAuthenticated) {
      navigate(`/service/${id}`);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="home">
      <section className="hero golden-bg">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="label-pill">Divine Guidance · Celestial Wisdom</span>
            <h1 className="hero-title">AstroParihar</h1>
            <p className="hero-description">
              Unlock the mysteries of your destiny with India's most distinguished Vedic scholars and celestial guides.
            </p>
            <div className="hero-actions">
              <Link to="/services" className="btn-primary">
                Consult Now <ChevronRight size={20} />
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-card">
              <div className="panel-icon">
                <Users size={24} />
              </div>
              <h3>Trusted by seekers across India</h3>
              <p>Personalized recommendations, astrology consultations, and spiritual support wherever you are.</p>
            </div>
            <div className="hero-glow" />
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat-item">
            <p className="stat-value">10M+</p>
            <p className="stat-label">Seekers Guided</p>
          </div>
          <div className="stat-item">
            <p className="stat-value">500+</p>
            <p className="stat-label">Verified Sages</p>
          </div>
          <div className="stat-item">
            <p className="stat-value">4.9★</p>
            <p className="stat-label">Average Rating</p>
          </div>
        </div>
      </section>

      <section className="masters-section">
        <div className="container masters-grid">
          <div>
            <p className="section-overline">The Collective</p>
            <h2>Masters of the Craft</h2>
            <p className="masters-description">
              Curated scholars specialized in Vedic, numerology, and tarot. Every guide is verified for deep insight and authentic spiritual care.
            </p>
          </div>
          <Link to="/services" className="view-collective">
            View the Collective <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      <section className="experts-section">
        <div className="container experts-grid">
          {featuredAstrologers.map((expert) => {
            const IconComponent = expert.icon;
            return (
              <div key={expert.name} className="expert-card">
                <div className="expert-avatar">
                  <IconComponent size={28} />
                </div>
                <h3>{expert.name}</h3>
                <p className="expert-subtitle">{expert.specialties}</p>
                <p className="expert-lang">{expert.languages}</p>
                <div className="expert-meta">
                  <span>{expert.rate}</span>
                  <span>{expert.years} · ★ {expert.rating} ({expert.reviews})</span>
                </div>
                <button className="btn-secondary btn-small">Connect</button>
              </div>
            );
          })}
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Premium Services</h2>
            <p>Explore our comprehensive range of astrological services</p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className={`service-card ${service.color}`}
                  onClick={() => handleServiceClick(service.id)}
                >
                  <div className="service-icon">
                    <IconComponent size={28} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-action">
                    <span>Explore</span>
                    <ChevronRight size={18} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
